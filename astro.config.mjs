import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://min-hieu.github.io',
  base: '/',
})

export default {
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }), 
    react(),
    mdx(),
  ],
}
