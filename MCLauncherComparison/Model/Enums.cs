namespace MCLauncherCompare;

public enum OperatingSystem {
    Windows,
    Linux,
    MacOS,
    Android,
    iOS,
    Web,
    Other,
}

public enum Architecture {
    x86,
    x86_64,
    arm64
}

public struct OsArch {
    public OperatingSystem OS;
    public Architecture Arch;
}

public enum FeatureStatus {
    NotSupported,
    Supported,
    Partial,
    WIP
}

public enum ProviderPlatform {
    CurseForge,
    Modrinth,
    Technic,
    FTB,
    LegacyFTB,
}

public enum PackageRepo {
    AUR,
    Arch,
    Debian,
    Fedora,
    Gentoo,
    Homebrew,
    MacPorts,
    OpenSUSE,
    PPA,
    Portage,
    MPR,
    Winget,
    Scoop,
    Nixpkgs,
    Custom,
}

public enum Modloader {
    Forge,
    NeoForge,
    Fabric,
    Liteloader,
    Quilt,
    Rift,
    Risugami,
    LegacyFabric,
}

public enum InstancerFormat {
    OneSix, // MultiMC, PolyMC, Prism Launcher
    Modrinth,
    Curseforge,
    Text,
    Markdown,
    Json,
    Html,
    Technic,
    FtbApp,
}