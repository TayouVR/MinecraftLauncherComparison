using Newtonsoft.Json;
using Statiq.Common;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using MCLauncherCompare;

public class JsonLoaderModule : Module
{
    protected override async Task<IEnumerable<IDocument>> ExecuteContextAsync(IExecutionContext context)
    {
        var documents = new List<IDocument>();
        foreach (var inputFile in context.Inputs)
        {
            string json = await context.FileSystem.ReadAllTextAsync(inputFile);
            var data = JsonConvert.DeserializeObject<Dictionary<string, object>>(json);
            var metadata = new MetadataItems();
            foreach (var item in data)
            {
                metadata.Add(item.Key, item.Value);
            }
            documents.Add(context.CreateDocument(metadata));
        }
        return documents;
    }
}