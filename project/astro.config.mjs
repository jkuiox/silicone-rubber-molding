import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://tayang-industry.com',
  server: {
    port: 4321,
    host: true
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          cn: 'zh-CN',
          jp: 'ja-JP',
          de: 'de-DE',
          fr: 'fr-FR',
          es: 'es-ES',
          ar: 'ar-SA'
        }
      },
      filter: (page) => !page.includes('404'),
      customPages: [
        'https://tayang-industry.com/en/products/medical-grade-silicone',
        'https://tayang-industry.com/en/products/consumer-electronics',
        'https://tayang-industry.com/en/products/automotive'
      ],
      changefreq: 'weekly',
      priority: 0.7
    }),
    mdx()
  ]
});