import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ai-blog-repo.vercel.app',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
