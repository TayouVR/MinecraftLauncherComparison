import json5 from 'json5';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

const DATA_DIR = './src/launcher-definitions';

/**
 * Read all launcher definitions from `src/launcher-definitions/*.json5`, sorted
 * by name with piracy-facilitating launchers pushed to the back.
 * Shared by index.astro, Header.astro and launcher/[id].astro.
 */
export function getLaunchers(): LauncherDetails[] {
    const launchers: LauncherDetails[] = [];
    readdirSync(DATA_DIR).forEach((file) => {
        if (file.endsWith('.json5')) {
            launchers.push(json5.parse(readFileSync(path.join(DATA_DIR, file), 'utf-8')));
        }
    });
    return launchers.sort((a, b) => {
        const aPiracy = a.features.offlinePlayWithoutLicense === true ? 1 : 0;
        const bPiracy = b.features.offlinePlayWithoutLicense === true ? 1 : 0;
        return aPiracy - bPiracy || a.name.localeCompare(b.name);
    });
}

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

/**
 * Class list for a launcher's comparison-table cell/column. Always includes the
 * identifier; adds `piracy` (brown tint) for launchers that enable full-game
 * play without a license.
 *
 * Visibility (hidden-by-default) is intentionally NOT handled here: it is a
 * presentational concern driven by the "Filter Launchers" checkboxes (see the
 * `.drawer:has(...)` rule in global.css), not something the data encodes into
 * the column classes.
 */
export function columnClass(launcher: LauncherDetails, ...extra: (string | false | null | undefined)[]) {
    return [
        launcher.identifier,
        launcher.features.offlinePlayWithoutLicense ? "piracy" : null,
        ...extra,
    ];
}
