// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://mc-launcher.tayou.org/",
    output: "static",
    integrations: [icon({
        include: {
            "fa7-solid": ["*"],
            "material-symbols": ["*"]
        },
    })],
    vite: {
        plugins: [tailwindcss()],
    },
});