using Statiq.App;
using Statiq.Common;
using Statiq.Razor;
using Statiq.Web;

namespace MCLauncherCompare;

public class Program {
    public static KeyValuePair<string, object>[] Settings = {
        new("Host", "mc-launcher.tayou.org"),
        new("Copyright", "Copyright © 2024 Tayou<contact-web@tayou.org> - CC0 Public Domain"),

        new("GenerateSearchIndex", false),
        new("DeployGitHubPages", true),
        new("LinksUseHttps", true),
        new("Image", "./images/site-image.avif"),
        //new("GitHubToken", Environment.GetEnvironmentVariable("GITHUB_TOKEN")!),
    };

    public static async Task<int> Main(string[] args) {
        return await Bootstrapper
            .Factory
            .CreateWeb(args)
            .AddPipeline("MyPipeline", pipeline => pipeline
                .InputModules(
                    new ReadFiles("*.json"),
                    new ReadJsonAsDocuments("*.json")
                )
                .ProcessModules(
                    new SetDestination(".html"),
                    new RenderRazor().WithModel(new { }),
                    new WriteFiles()
                )
            )
            .BuildPipeline("ProcessLauncherDefinitions", builder => {
                builder.WithInputReadFiles([
                    "launcher-definitions/*.json",
                    "launcher-definitions/*.json5",
                ]);
                // builder.WithProcessModules(new ModuleList{
                //     new JsonLoaderModule()
                // });
                builder.WithProcessModules(new ParseJson());
                builder.WithOutputWriteFiles(".json");
            })
            .AddSettings(Settings)
            .RunAsync();
    }
}