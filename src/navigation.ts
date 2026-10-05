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
      text: 'Selected',
      href: getPermalink('/#selected'),
    },
    {
      text: 'How I Can Help',
      href: getPermalink('/#services'),
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
        { text: 'Selected Works', href: getPermalink('/#selected') },
        { text: 'How I Can Help', href: getPermalink('/#services') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Mouad Rouini · All rights reserved.`,
};
