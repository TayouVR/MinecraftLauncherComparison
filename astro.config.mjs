// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://mc-launcher.tayou.org/",
    output: "static",
    vite: {
        plugins: [tailwindcss()],
    },
});