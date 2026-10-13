import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://flamingotissue.com',
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
