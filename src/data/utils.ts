
const niceNames = {
    "CurseForge":       { displayName: "CurseForge",            iconUrl: "/assets/modplatforms/curseforge.svg"},
    "Modrinth":         { displayName: "Modrinth",              iconUrl: "/assets/modplatforms/modrinth.svg"},
    "ftb":              { displayName: "FTB",                   iconUrl: "/assets/launchers/ftb.svg"},
    "atlauncher":       { displayName: "AT Launcher",           iconUrl: "/assets/launchers/at-launcher.svg"},
    "technic":          { displayName: "Technic Launcher",      iconUrl: "/assets/launchers/technic-launcher.svg"},
    "legacy-ftb":       { displayName: "Legacy FTB",            iconUrl: "/assets/launchers/ftb.svg"},
    "forge":            { displayName: "Forge",                 iconUrl: "/assets/modloaders/forge.svg" },
    "fabric":           { displayName: "FabricMC",              iconUrl: "/assets/modloaders/fabric.png" },
    "quilt":            { displayName: "QuiltMC",               iconUrl: "/assets/modloaders/quilt.svg" },
    "neoforge":         { displayName: "Neoforge",              iconUrl: "/assets/modloaders/neoforged.png" },
    "legacy-fabric":    { displayName: "Legacy Fabric",         iconUrl: "/assets/modloaders/legacy-fabric.png" },
    "liteloader":       { displayName: "Lite Loader",           iconUrl: "" },
    "rift":             { displayName: "Rift Loader",           iconUrl: "" },
    "risugami":         { displayName: "Risugamis Modloader",   iconUrl: "" },
    "windows":          { displayName: "Windows",               iconUrl: "/assets/operating_systems/windows.svg" },
    "macos":            { displayName: "MacOS",                 iconUrl: "/assets/operating_systems/macos.svg" },
    "linux":            { displayName: "Linux",                 iconUrl: "/assets/operating_systems/tux.svg" },
    "android":          { displayName: "Android",               iconUrl: "/assets/operating_systems/android.svg" },
    "ios":              { displayName: "iOS",                   iconUrl: "/assets/operating_systems/apple_logo_rainbow.svg" },
}

export function getIcon(thing: string) {
    const loaderData = niceNames[thing as keyof typeof niceNames];
    return loaderData?.iconUrl ?? "";
}

export function getName(thing: string) {
    const loaderData = niceNames[thing as keyof typeof niceNames];
    return loaderData?.displayName ?? thing;
}
