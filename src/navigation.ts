import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Work',
      href: getPermalink('/work'),
    },
    {
      text: 'About & Services',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
      hasBorder: true,
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Featured Works',
      links: [
        { text: 'Saad (Cinematography)', href: getPermalink('/work/saad') },
        { text: 'Brand Identity (Motion)', href: getPermalink('/work/brand-ident') },
        { text: 'Cyber Capsule (3D Lookdev)', href: getPermalink('/work/cyber-capsule') },
        { text: 'View All Works →', href: getPermalink('/work') },
      ],
    },
    {
      title: 'Navigation',
      links: [
        { text: 'All Works', href: getPermalink('/work') },
        { text: 'About & Services', href: getPermalink('/about') },
        { text: 'Production Pipeline', href: getPermalink('/about#pipeline') },
        { text: 'Contact & Inquiries', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/mouadrouini' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/mouadrouini' },
    { ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: 'https://behance.net/mouadrouini' },
    { ariaLabel: 'Vimeo', icon: 'tabler:brand-vimeo', href: 'https://vimeo.com/mouadrouini' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@mouadrouini.space' },
  ],
  footNote: `© ${new Date().getFullYear()} Mouad Rouini · All rights reserved.`,
};
