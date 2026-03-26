import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    sitemap(),
    starlight({
      title: 'Billy',
      description: 'Local AI coding assistant powered by Ollama — no subscription required.',
      logo: {
        src: './src/assets/icon.svg',
        alt: 'Billy goat logo',
      },
      favicon: '/favicon.svg',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jd4rider/billy-app' }],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Installation', slug: 'installation' },
            { label: 'Quick Start', slug: 'quick-start' },
            { label: 'Updating', slug: 'updating' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Commands', slug: 'commands' },
            { label: 'Configuration', slug: 'configuration' },
            { label: 'Memory System', slug: 'memory' },
          ],
        },
        {
          label: 'More',
          items: [
            { label: 'FAQ', slug: 'faq' },
            { label: 'Roadmap', slug: 'roadmap' },
            { label: 'Devlog', slug: 'devlog' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        // Search Console verification — replace content value once you create the property
        { tag: 'meta', attrs: { name: 'google-site-verification', content: 'KwTFLDsjKtARSz9OGv4cJjnPjDU20Z_02vCWbWvlCV0' } },
        // Google Analytics
        { tag: 'script', attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-S4J9M0HDWG' } },
        { tag: 'script', content: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-S4J9M0HDWG');" },
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
  site: 'https://docs.billysh.online',
});
