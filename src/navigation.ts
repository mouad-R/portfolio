import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
 
      export const headerData = {
  links: [
    {
      text: 'Portfolio',
      links: [
        { text: 'Motion Graphics', href: '/#motion' },
        { text: '3D & CGI', href: '/#3d' },
        { text: 'Cinematography & Edit', href: '/#editing' },
        { text: 'AI Production', href: '/#ai' },
        { text: 'Spatial & Branding', href: '/#spatial' },
      ],
    },
    {
      text: 'Featured',
      href: '/#featured',
    },
    {
      text: 'How I Help',
      href: '/services',
    },
    {
      text: 'العربية',
      href: '/ar',
    },
  ],
  actions: [
    { text: "Let's Talk", href: '/contact', variant: 'primary' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Demos',
      links: [
        { text: 'SaaS', href: getPermalink('/homes/saas') },
        { text: 'Startup', href: getPermalink('/homes/startup') },
        { text: 'Mobile App', href: getPermalink('/homes/mobile-app') },
        { text: 'Personal', href: getPermalink('/homes/personal') },
        { text: 'Landing pages', href: getPermalink('/landing/lead-generation') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: 'https://github.com/arthelokyo/astrowind#readme' },
        { text: 'Skills for AI agents', href: 'https://github.com/arthelokyo/astrowind/tree/main/.agents/skills' },
        { text: 'Releases', href: 'https://github.com/arthelokyo/astrowind/releases' },
        { text: 'Discussions', href: 'https://github.com/arthelokyo/astrowind/discussions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Report an issue', href: 'https://github.com/arthelokyo/astrowind/issues' },
        { text: 'License', href: 'https://github.com/arthelokyo/astrowind/blob/main/LICENSE.md' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://arthelokyo.com"> Arthelokyo</a> · All rights reserved.
  `,
};
