type LauncherConfiguration = {
    license: string;
    serverInstances: boolean;
    lookAndFeel: string;
};

type FeatureModpack = {
    name: string;
    method: string;
    updating: boolean;
};

type MinecraftResource = {
    downloading: boolean;
    updating?: boolean;
    providers: string[];
};

type MinecraftResources = {
    mods: MinecraftResource;
    resourcepacks: MinecraftResource;
    shaderpacks: MinecraftResource;
    worlds: MinecraftResource;
    datapacks: MinecraftResource;
    plugins: MinecraftResource;
};

type JavaFeature = {
    download: boolean;
    versionManagement: boolean;
    usingSystemInstall: boolean;
};

type Sandboxing = {
    status: string;
};

type Overlay = {
    status: string;
}

type Advertisement = {
    status: string;
    note: string;
}

type Features = {
    modpacks: FeatureModpack[];
    modloaders: string[];
    minecraftResources: MinecraftResources;
    import: string[];
    export: string[];
    java: JavaFeature;
    sandboxing: Sandboxing;
    overlay: Overlay;
    advertisements: Advertisement;
};

type Artifact = {
    arch: string[];
    os: string;
    link: string;
};

type Package = {
    name: string;
    official: boolean;
};

type Technology = {
    languages: string[];
    frameworks: string[];
};

type Properties = {
    artifacts: Artifact[];
    packages: Package[];
    technology: Technology;
};

type SpecialFeature = {
    supported: boolean;
    method: string;
};

type SpecialFeatures = {
    CurseForgeBlockedDownloads: SpecialFeature;
};

type Screenshot = {
    name: string;
    url: string;
}

type LauncherDetails = {
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
};