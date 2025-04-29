// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://enginkarakurt.github.io",
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Inter",
        cssVariable: "--font-inter",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Inter-Regular.woff2"],
          },
        ],
      },
    ],
  },
});
