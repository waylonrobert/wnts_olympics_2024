// import { defineConfig } from 'astro/config';
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config

export default defineConfig({
    experimental: {
      env: {
        schema: {
        AIRTABLE_API_URL: envField.string({ context: "server", access: "secret" }),
        AIRTABLE_API_KEY: envField.string({ context: "server", access: "secret" }),
        }
      }
    }
  })