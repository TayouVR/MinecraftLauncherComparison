interface LicenseInfo {
    name: string;
    url: string;
    foss: boolean;
    extraInfo: string;
}

interface LauncherConfiguration {
    license: LicenseInfo;
    serverInstances: boolean;
    lookAndFeel: string;
}

interface FeatureModpack {
    name: string;
    method: string;
    updating: boolean;
}

interface MinecraftResource {
    downloading: boolean;
    updating?: boolean;
    providers: string[];
}

interface MinecraftResources {
    mods: MinecraftResource;
    resourcepacks: MinecraftResource;
    shaderpacks: MinecraftResource;
    worlds: MinecraftResource;
    datapacks: MinecraftResource;
    plugins: MinecraftResource;
}

interface JavaFeature {
    download: boolean;
    versionManagement: boolean;
    usingSystemInstall: boolean;
}

interface Sandboxing {
    status: string;
}

interface Overlay {
    status: string;
}

interface Advertisement {
    status: string;
    note: string;
}

interface Features {
    modpacks: FeatureModpack[];
    modloaders: string[];
    minecraftResources: MinecraftResources;
    import: string[];
    export: string[];
    java: JavaFeature;
    sandboxing: Sandboxing;
    overlay: Overlay;
    advertisements: Advertisement;
}

enum OS {
    Linux = "linux",
    MacOS = "macos",
    Windows = "windows",
    Android = "android",
    iOS = "ios"
}

enum Architecture {
    ARM64 = "arm64",
    X86_64 = "x86_64",
    X64 = "x64",
}

type SupportedPlatform = Record<OS, Architecture[]>

interface Technology {
    languages: string[];
    frameworks: string[];
}

interface Properties {
    platforms: SupportedPlatform[];
    packages: string; // repology link
    technology: Technology;
}

interface SpecialFeature {
    supported: boolean;
    method: string;
}

interface SpecialFeatures {
    CurseForgeBlockedDownloads: SpecialFeature;
}

interface Screenshot {
    name: string;
    url: string;
}

interface LauncherDetails {
    identifier: string;
    name: string;
    icon: string;
    downloadLink: string;
    sourceRepo?: string;
    homepage: string;
    screenshots: Screenshot[];
    configuration: LauncherConfiguration;
    features: Features;
    properties: Properties;
    specialFeatures: SpecialFeatures;
}