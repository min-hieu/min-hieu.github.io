import image from '@astrojs/image';
import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';

export default {
  site: 'https://min-hieu.github.io',
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
    remarkPlugins: [
      'remark-math',
    ],
    rehypePlugins: [
      ['rehype-katex', {
        macros: {
          '\\E': '\\mathbb{E}',
          '\\C': '\\mathbb{C}',
          '\\R': '\\mathbb{R}',
          '\\N': '\\mathbb{N}',
          '\\Q': '\\mathbb{Q}',
          '\\bigO': '\\mathcal{O}',
          '\\abs': '|#1|',
          '\\set': '\\{ #1 \\}',
          '\\indep': "{\\perp\\mkern-9.5mu\\perp}",
          '\\nindep': "{\\not\\!\\perp\\!\\!\\!\\perp}",
          "\\latex": "\\LaTeX",
          "\\katex": "\\KaTeX",
        }
      }]
    ],
    extendDefaultPlugins: true,
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
        rehypeCitation,
      ],
    }),
    prefetch({
      throttle: 3
    }),
    sitemap(),
  ],
}
