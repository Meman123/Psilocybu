import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://psilocybu.com',
  integrations: [icon(), sitemap()],
});