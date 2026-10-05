import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Portfolio',
      links: [
        { text: 'Cinematography', href: getPermalink('/cinematography') },
        { text: 'Motion Design', href: getPermalink('/motion') },
        { text: '3D Art & CGI', href: getPermalink('/3d') },
        { text: 'Graphic & Brand', href: getPermalink('/graphic-design') },
        { text: 'UI / UX Design', href: getPermalink('/ui-ux') },
      ],
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Process',
      href: getPermalink('/process'),
    },
    {
      text: 'About',
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
      title: 'Portfolio',
      links: [
        { text: 'Cinematography', href: getPermalink('/cinematography') },
        { text: 'Motion Design', href: getPermalink('/motion') },
        { text: '3D Art & CGI', href: getPermalink('/3d') },
        { text: 'Graphic Design', href: getPermalink('/graphic-design') },
        { text: 'UI / UX', href: getPermalink('/ui-ux') },
      ],
    },
    {
      title: 'Navigation',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Process', href: getPermalink('/process') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
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
