import image from '@astrojs/image';
import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default {
  site: 'https://min-hieu.github.io',
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    react(),
    mdx({
      remarkPlugins: [
        remarkMath,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
    prefetch({
      throttle: 3
    }),
    sitemap(),
  ],
}
