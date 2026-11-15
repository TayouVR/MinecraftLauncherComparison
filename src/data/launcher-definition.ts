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

interface BundledMod {
    /** One-line explanation of the bundled client mod (shown in the table). */
    short: string;
    /** Longer description shown on the launcher's detail page. */
    long?: string;
}

interface Advertisement {
    status: string;
    note: string;
}

interface Telemetry {
    /** e.g. "No", "Yes", "Opt-out", "Opt-in" */
    status: string;
    /** Optional detail shown as a tooltip. */
    note?: string;
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
    /** Usage/analytics telemetry collected by the launcher (distinct from ads). */
    telemetry?: Telemetry;
    /** cracked, no Microsoft account required */
    offlinePlayWithoutLicense?: boolean;
    /** A client mod bundled into the launcher (e.g. an in-game "client"). */
    bundledMod?: BundledMod;
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
    ARM32 = "arm32",
    X86_64 = "x86_64",
    X86 = "x86",
    RISCV64 = "riscv64",
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
    /** Short description shown as the badge; a longer note can go in `note`. */
    method: string;
    /** Optional caveat shown as a tooltip. */
    note?: string;
    /**
     * Marks the method as legally/ToS questionable. The badge is rendered in a
     * warning (orange) tone instead of the positive (green) one.
     */
    legallyGray?: boolean;
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
    /**
     * Whether the launcher's column is visible by default. Launchers without
     * this (or set to false) start hidden and can be enabled via the
     * "Filter Launchers" dropdown. Piracy-facilitating launchers
     * (`features.offlinePlayWithoutLicense`) are always hidden by default
     * regardless of this value.
     */
    shownByDefault?: boolean;
}