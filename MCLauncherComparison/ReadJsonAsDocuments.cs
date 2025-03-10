using Statiq.Common;
using Statiq.Core;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;
using MCLauncherCompare;

public class ReadJsonAsDocuments : Module
{
    private readonly string _inputPattern;

    public ReadJsonAsDocuments(string inputPattern)
    {
        _inputPattern = inputPattern;
    }

    protected override async Task<IEnumerable<IDocument>> ExecuteInputAsync(IDocument input, IExecutionContext context)
    {
        var files = context.FileSystem.GetInputFiles(_inputPattern);
        var documents = new List<IDocument>();

        foreach (var file in files)
        {
            var json = await file.GetContentStringAsync();
            var dataModels = JsonConvert.DeserializeObject<List<DataModel>>(json); // Changed to accommodate a list

            foreach (var dataModel in dataModels)
            {
                var metadata = new Dictionary<string, object>
                {
                    { nameof(dataModel.Identifier), dataModel.Identifier },
                    { nameof(dataModel.Name), dataModel.Name },
                    { nameof(dataModel.Icon), dataModel.Icon },
                    { nameof(dataModel.Properties), dataModel.Properties }
                };

                var document = context.CreateDocument(file.Path, metadata);
                documents.Add(document);
            }
        }

        return documents;
    }
}