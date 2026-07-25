import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://keonil.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
