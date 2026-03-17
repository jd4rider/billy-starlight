import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Billy.sh',
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
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
  site: 'https://jd4rider.github.io',
  base: '/billy-starlight',
});
