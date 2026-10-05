import type { CinemaProject } from './types';

export const project: CinemaProject = {
  slug: 'saad',
  title: 'Saad Project',
  category: 'Cinematography & Color Grade',
  year: '2026',
  role: 'Director of Photography & Colorist',
  specs: 'DaVinci Resolve · 4K Master',
  description: 'A visual showcase featuring the final cut followed by production breakdowns and grading passes.',
  thumbnail: 'https://img.youtube.com/vi/5uODxM_u52I/maxresdefault.jpg',
  media: [
    {
      type: 'youtube',
      src: 'https://www.youtube-nocookie.com/embed/5uODxM_u52I?si=YtSmZtyQ1AxYkOuJ&rel=0&modestbranding=1',
    },
    { type: 'video', src: '/projects/saad/1.webm' },
    { type: 'video', src: '/projects/saad/2.webm' },
    { type: 'video', src: '/projects/saad/3.webm' },
    { type: 'video', src: '/projects/saad/4.webm' },
  ],
};
