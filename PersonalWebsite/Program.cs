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
            .AddPipeline("CombineDocs", new Pipeline {
                InputModules = {
                    new ReadFiles("../../readme.md"),
                    new ReadFiles("index.md")
                },
                ProcessModules = {
                    new ConcatDocuments(),
                    new SetDestination("index.md")
                },
                OutputModules = { new WriteFiles() }
            })
            .AddSettings(Settings)
            .RunAsync();
    }
}