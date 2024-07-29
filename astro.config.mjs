// import { defineConfig } from 'astro/config';
import { defineConfig, envField } from 'astro/config';
import netlify from "@astrojs/netlify";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    experimental: {
    env: {
      schema: {
        AIRTABLE_API_URL: envField.string({
          context: "server",
          access: "secret"
        }),
        AIRTABLE_API_KEY: envField.string({
          context: "server",
          access: "secret"
        })
      }
    }
  },
  output: "server",
  adapter: netlify()
});