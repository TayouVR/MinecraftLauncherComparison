# Minecraft Launcher Comparison

This is here to structure a proper comparison table between the various launchers for Minecraft (Java Edition).

<table>
    <tr>
        <th>Feature</th>
        <th>Vanilla</th>
        <th>Prism Launcher</th>
        <th>MultiMC</th>
        <th>ATLauncher</th>
        <th>GDLauncher</th>
        <th>CurseForge</th>
        <th>FTB App</th>
        <th>Technic</th>
        <th>Old Vanilla</th>
        <th>PojavLauncher</th>
        <th>Modrinth App</th>
    </tr>
    <tr>
        <td>Download Link</td>
        <td><a href="https://www.minecraft.net/en-us/download">minecraft.net</a></td>
        <td><a href="https://prismlauncher.org/download/">prismlauncher.org</a></td>
        <td><a href="https://multimc.org/#Download">multimc.org</a></td>
        <td><a href="https://atlauncher.com/downloads">atlauncher.com</a></td>
        <td><a href="https://gdlauncher.com/en/download/">gdlauncher.com</a></td>
        <td><a href="https://download.curseforge.com/">curseforge.com</a></td>
        <td><a href="https://www.feed-the-beast.com/app">feed-the-beast.com</a></td>
        <td><a href="https://www.technicpack.net/download">technicpack.net</a></td>
        <td><a href="https://launcher.mojang.com/download/">mojang.com</a></td>
        <td><a href="https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch">Play Store</a></td>
        <td><a href="https://modrinth.com/app">modrinth.com</a></td>
    </tr>
    <tr>
        <td>Source Code</td>
        <td>---</td>
        <td><a href="https://github.com/PrismLauncher/PrismLauncher">github.com</a></td>
        <td><a href="https://github.com/MultiMC/Launcher/">github.com</a></td>
        <td><a href="https://github.com/ATLauncher/ATLauncher">github.com</a></td>
        <td><a href="https://github.com/gorilla-devs/GDLauncher">github.com</a></td>
        <td>---</td>
        <td><a href="https://github.com/FTBTeam/FTB-App">github.com</a></td>
        <td><a href="https://github.com/TechnicPack/TechnicLauncher">github.com</a> (not up to date)</td>
        <td>---</td>
        <td><a href="https://github.com/PojavLauncherTeam/PojavLauncher">github.com</a></td>
        <td><a href="https://github.com/modrinth/theseus">github.com</a></td>
    </tr>
    <tr>
        <td>Operating Systems</td>
        <td>Windows, Linux, macOS</td>  <!--Official-->
        <td>Windows, Linux, macOS</td>  <!--Prism Launcher-->
        <td>Windows, Linux, macOS</td>  <!--MultiMC-->
        <td>Windows, Linux, macOS</td>  <!--ATLauncher-->
        <td>Windows, Linux, macOS</td>  <!--GDLauncher-->
        <td>Windows, macOS</td>         <!--CurseForge-->
        <td>Windows, Linux, macOS</td>  <!--FTB App-->
        <td>Windows, Linux, macOS</td>  <!--Technic Launcher-->
        <td>Windows, Linux, macOS</td>  <!--Old Official-->
        <td>Android, iOS</td>           <!--PojavLauncher-->
        <td>Windows, Linux, macOS</td>  <!-- Modrinth App (ferium) -->
    </tr>
    <tr>
        <td>Open Source?</td>   
        <td>❌No</td>                                        <!--Official-->
        <td>✅Yes, GPL3</td>                                 <!--Prism Launcher-->
        <td>🟠Partially<a href="#1-multimc-is-proprietary-but-a-debranded-ms-pl-licensed-version-which-lacks-many-keys-multimc-uses-is-available-on-github" >[1]</a></td>                                <!--MultiMC-->
        <td>✅Yes, GPL3</td>                                 <!--ATLauncher-->
        <td>✅Yes, GPL3<a href="#2-gdlauncher-has-a-cla" >[2]</a></td>                             <!--GDLauncher-->
        <td>❌No</td>                                        <!--CurseForge-->
        <td>✅Yes, LGPL-2.1</td>     <!--FTB App-->
        <td>❔Unsure<a href="#4-technic-launcher-is-gpl3-however-the-source-repo-has-not-been-updated-since-2014-meaning-the-current-build-is-either-completely-seperate-or-a-continuation-of-the-public-repo-which-violates-the-gpl" >[4]</a></td> <!--Technic Launcher-->
        <td>❌No</td>                                        <!--Old Official-->
        <td>✅Yes, GPL3</td>                                 <!--PojavLauncher-->
        <td>✅Yes, GPL3</td>                                 <!-- Modrinth App (ferium) -->
    </tr>
    <tr>
        <td>Programming Language / Frameworks</td>
        <td>C++ (CEF)</td>
        <td>C++ (Qt)</td>
        <td>C++ (Qt)</td>
        <td>Java</td>
        <td>Electron (HTML, JS, CSS), Rust</td>
        <td>Overwolf</td>
        <td>Java, Vue.js (Overwolf)</td>
        <td>Java</td>
        <td>Java (AWT, Swing)</td>
        <td>Java, C</td>
        <td>Rust, Tauri, Vue.js</td>
    </tr>
    <tr>
        <td>Modpack Support</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>Modpack Updating</td>
        <td>❌No</td>
        <td>✅Yes (CF, MR)</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>Custom Instance Support</td>
        <td>🟠No data is managed, only version switches</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>🚧WIP</td>
        <td>❌No</td>
        <td>🟠No data is managed, only version switches</td>
        <td>✅Yes (?)</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <th colspan=12>Installing Modpacks through Launcher</th>
    </tr>
    <tr>
        <td>CurseForge Modpacks</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔Probably not</td>
    </tr>
    <tr>
        <td>Modrinth Modpacks</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>ATLauncher Modpacks</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔Probably not</td>
    </tr>
    <tr>
        <td>FTB Modpacks</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔Probably not</td>
    </tr>
    <tr>
        <td>Legacy FTB Modpacks</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔Probably not</td>
    </tr>
    <tr>
        <td>Technic Modpacks</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔Probably not</td>
    </tr>
    <tr>
        <th colspan=12>Installing Mod Loaders through Launcher</th>
    </tr>
    <tr>
        <td>Fabric Loader Support</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>NeoForge Loader Support</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❔TODO</td>
        <td>❔TODO</td>
        <td>❔TODO</td>
        <td>❔TODO</td>
        <td>❔TODO</td>
        <td>❔TODO</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>Forge Loader Support</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>Quilt Loader Support</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>LiteLoader Support</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <th colspan=12>Installing Mods through Launcher</th>
    </tr>
    <tr>
        <td>CurseForge Mod Download</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>🚧Yes, but not functional</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
    </tr>
    <tr>
        <td>Modrinth Mod Download</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>🚧WIP</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <td>CurseForge Blocked Mod Download</td>
        <td>❌No</td>
        <td>✅Yes (via web browser, automatically moves mod)</td>
        <td>❌No</td>
        <td>✅Yes (via web browser, automatically moves mod)</td>
        <td>✅Yes (by using standard browser user agent)</td>
        <td>✅Yes</td>
        <td>❔Unknown (as mod search is not functional)</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
    </tr>
    <tr>
        <td>Mod Updating</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
    </tr>
    <tr>
        <th colspan=12>Misc</th>
    </tr>
    <tr>
        <td>Resourcepack download [modrinth|CurseForge]</td>
        <td>❌No</td>
        <td>✅Yes (MR, CF)</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>Shaderpack download [modrinth|CurseForge]</td>
        <td>❌No</td>
        <td>✅Yes (MR)</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>Plugins Download [modrinth|CurseForge]</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>Server Instances</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>Automatic Java Setup</td>
        <td>✅Yes</td>
        <td>🚧WIP</td>
        <td>❌No</td>
        <td>✅Optional</td>
        <td>✅Optional</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>Full Launcher Sandboxing</td>
        <td>❌No</td>
        <td>🚧WIP</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❔</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>Instance Export</td>
        <td>❌No</td>
        <td>MultiMC, Modrinth</td>
        <td>MultiMC, Modrinth</td>
        <td>CurseForge, Modrinth, MultiMC</td>
        <td>CurseForge</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>Instance Import</td>
        <td>❌No</td>
        <td>CurseForge, Modrinth, MultiMC, Technic</td>
        <td>CurseForge, MultiMC, Technic, FTB App</td>
        <td>CurseForge, Modrinth, MultiMC</td>
        <td>CurseForge</td>
        <td>❔</td>
        <td>❔</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>CurseForge, MultiMC, GDLauncher, ATLauncher</td>
    </tr>
    <tr>
        <td>Look and Feel</td>
        <td>Minecraft Official</td>
        <td>System (configurable)</td>
        <td>System (configurable)</td>
        <td>Custom (configurable)</td>
        <td>Custom</td>
        <td>Custom</td>
        <td>Custom</td>
        <td>Custom</td>
        <td>System (mostly)</td>
        <td>Minecraft Knockoff</td>
        <td>Custom</td>
    </tr>
    <tr>
        <th colspan=12>Other Bloat</th>
    </tr>
    <tr>
        <td>Advertisements</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❔</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❔TODO</td>
    </tr>
    <tr>
        <td>In Game Overlay</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes</td>
        <td>✅Yes</td>
        <td>❌No</td>
        <td>❌No</td>
        <td>✅Yes, for controls -> touch screen</td>
        <td>❌No</td>
    </tr>
</table>

~~⚠️⚠️⚠️ Technic Launcher seems to specifically require oracle JDK / JRE 1.8.0. Other Java installs like Adoptium Temurin don't seem to work. (tested on Windows 10 with adoptium temurin 8.0.332-9, installed through scoop) ⚠️⚠️⚠️~~ The linux download is just the jar, which works just fine.

## Footnotes
### Source code and licenses
#### 1. MultiMC is proprietary but a debranded MS-PL licensed version which lacks many keys MultiMC uses is available on GitHub
#### 2. GDLauncher has a <a href="https://cla-assistant.io/gorilla-devs/GDLauncher">CLA</a>
#### 3. The FTB App seems to be LGPL-2.1, although the readme makes it seem like there is another part to it. Probably just outdated readme. The Legacy FTB Launcher seems to have been taken down from the FTB github, so no idea how that was...
#### 4. Technic Launcher is GPL3, however the source repo has not been updated since 2014, meaning the current build is either completely seperate or a continuation of the public repo; which violates the GPL
