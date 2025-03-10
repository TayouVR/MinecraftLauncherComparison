namespace MCLauncherCompare;

public class ModpackSupport {
    public bool Supported { get; set; }
    public string Note { get; set; }
}

public class ModLoaderSupport {
    public bool Supported { get; set; }
}

public class ResourceDownloadingModel {
    public List<string> Mods { get; set; }
    public List<string> Resourcepacks { get; set; }
    public List<string> Shaderpacks { get; set; }
    public List<string> Worlds { get; set; }
    public List<string> Datapack { get; set; }
    public List<string> Plugins { get; set; }
}

public class SandboxingModel {
    public bool Wip { get; set; }
    public bool Supported { get; set; }
}

public class CurseForgeBlockedDownloadsModel {
    public bool Supported { get; set; }
    public string Method { get; set; }
}

public class DataModel {
    public required string Identifier { get; set; }
    public string Name { get; set; }
    public string Icon { get; set; }
    public List<FeatureDetail> Properties { get; set; }
    public string DownloadLink { get; set; }
    public string SourceCode { get; set; }
    public List<OperatingSystem> SupportedOS { get; set; }
    public List<Architecture> SupportedArch { get; set; }
    public List<string> OfficialPackages { get; set; }
    public List<string> UnofficialPackages { get; set; }
    public string ProgrammingLanguage { get; set; }
    public string UIToolkit { get; set; }
    public Dictionary<string, ModpackSupport> ModpackSupport { get; set; }
    public Dictionary<string, ModLoaderSupport> ModLoader { get; set; }
    public ResourceDownloadingModel ResourceDownloding { get; set; }
    public CurseForgeBlockedDownloadsModel CurseforgeBlockedDownloads { get; set; }
    public bool ModUpdating { get; set; }
    public bool ServerInstances { get; set; }
    public string AutomaticJavaSetup { get; set; }
    public SandboxingModel Sandboxing { get; set; }
    public List<string> InstanceExport { get; set; }
    public List<string> InstanceImport { get; set; }
    public string LookAndFeel { get; set; }
    public FeatureDetail Advertisements { get; set; }
    public FeatureDetail InGameOverlay { get; set; }
}