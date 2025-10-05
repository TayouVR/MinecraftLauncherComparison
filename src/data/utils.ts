
const niceNames = {
    "CurseForge":       { displayName: "CurseForge",            iconUrl: "/src/assets/curseforge.svg"},
    "Modrinth":         { displayName: "Modrinth",              iconUrl: "/src/assets/modrinth.svg"},
    "ftb":              { displayName: "FTB",                   iconUrl: "/src/assets/ftb.svg"},
    "atlauncher":       { displayName: "AT Launcher",           iconUrl: "/src/assets/at-launcher.png"},
    "technic":          { displayName: "Technic Launcher",      iconUrl: "/src/assets/technic-launcher.svg"},
    "legacy-ftb":       { displayName: "Legacy FTB",            iconUrl: "/src/assets/ftb.svg"},
    "forge":            { displayName: "Forge",                 iconUrl: "/src/assets/forge.svg" },
    "fabric":           { displayName: "FabricMC",              iconUrl: "/src/assets/fabric.png" },
    "quilt":            { displayName: "QuiltMC",               iconUrl: "/src/assets/quilt.svg" },
    "neoforge":         { displayName: "Neoforge",              iconUrl: "/src/assets/neoforged.png" },
    "legacy-fabric":    { displayName: "Legacy Fabric",         iconUrl: "/src/assets/legacy-fabric.png" },
    "liteloader":       { displayName: "Lite Loader",           iconUrl: "" },
    "rift":             { displayName: "Rift Loader",           iconUrl: "" },
    "risugami":         { displayName: "Risugamis Modloader",   iconUrl: "" },
    "windows":          { displayName: "Windows",               iconUrl: "/src/assets/windows.svg" },
    "macos":            { displayName: "MacOS",                 iconUrl: "/src/assets/macos.svg" },
    "linux":            { displayName: "Linux",                 iconUrl: "/src/assets/tux.svg" },
    "android":          { displayName: "Android",               iconUrl: "/src/assets/android.svg" },
    "ios":              { displayName: "iOS",                   iconUrl: "/src/assets/apple_logo_rainbow.svg" },
}

export function getIcon(thing: string) {
    const loaderData = niceNames[thing as keyof typeof niceNames];
    return loaderData?.iconUrl ?? "";
}

export function getName(thing: string) {
    const loaderData = niceNames[thing as keyof typeof niceNames];
    return loaderData?.displayName ?? thing;
}
