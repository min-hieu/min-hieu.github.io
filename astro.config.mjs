import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default {
  site: 'https://min-hieu.github.io',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }), 
    react(),
    mdx(),
  ],
}
