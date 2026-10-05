const fs = require('fs');
const path = require('path');

// 1. إنشاء المجلدات وحذف الملف القديم إن وجد
const dir = path.join(process.cwd(), 'src/data/cinematography');
fs.mkdirSync(dir, { recursive: true });

const oldFile = path.join(process.cwd(), 'src/data/cinematography.ts');
if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);

// 2. types.ts
fs.writeFileSync(path.join(dir, 'types.ts'), `export interface MediaItem {
  type: 'youtube' | 'video' | 'image';
  src: string;
  caption?: string;
}

export interface CinemaProject {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  specs: string;
  description: string;
  thumbnail: string;
  media: MediaItem[];
}
`);

// 3. saad.ts (مشروع سعد المستقل)
fs.writeFileSync(path.join(dir, 'saad.ts'), `import type { CinemaProject } from './types';

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
`);

// 4. index.ts (المجمع التلقائي للمشاريع)
fs.writeFileSync(path.join(dir, 'index.ts'), `export * from './types';
import type { CinemaProject } from './types';

const projectFiles = import.meta.glob<{ project: CinemaProject }>(
  './*.ts',
  { eager: true }
);

export const cinemaProjects: CinemaProject[] = Object.entries(projectFiles)
  .filter(([filePath]) => !filePath.endsWith('index.ts') && !filePath.endsWith('types.ts'))
  .map(([, file]) => file.project);
`);

// 5. [slug].astro (صفحة العرض الموحدة النظيفة)
const pagePath = path.join(process.cwd(), 'src/pages/cinematography/[slug].astro');
fs.writeFileSync(pagePath, `---
export const prerender = true;

import Layout from '~/layouts/PageLayout.astro';
import { cinemaProjects, type CinemaProject } from '~/data/cinematography';

export function getStaticPaths() {
  return cinemaProjects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

interface Props {
  project: CinemaProject;
}

const { project } = Astro.props;

const metadata = {
  title: \`\${project.title} — Mouad Rouini\`,
};
---

<Layout metadata={metadata}>
  <article class="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-28">
    <div class="mb-10">
      <a href="/cinematography" class="text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors">
        ← Back to Cinematography
      </a>
    </div>

    <header class="mb-14 border-b border-neutral-800 pb-10">
      <span class="text-xs font-mono uppercase tracking-widest text-accent">{project.category}</span>
      <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight mt-2 mb-6">
        {project.title}
      </h1>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-900 text-xs font-mono">
        <div>
          <span class="text-neutral-500 block uppercase">Role</span>
          <span class="text-neutral-200 mt-1 block">{project.role}</span>
        </div>
        <div>
          <span class="text-neutral-500 block uppercase">Year</span>
          <span class="text-neutral-200 mt-1 block">{project.year}</span>
        </div>
        <div class="col-span-2">
          <span class="text-neutral-500 block uppercase">Technical Specs</span>
          <span class="text-neutral-200 mt-1 block">{project.specs}</span>
        </div>
      </div>
    </header>

    <section class="max-w-3xl mb-16 text-neutral-300 text-lg leading-relaxed">
      <p>{project.description}</p>
    </section>

    <section class="space-y-12">
      {project.media.map((item) => (
        <div class="w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
          {item.type === 'youtube' && (
            <div class="relative w-full aspect-video bg-black">
              <iframe
                class="w-full h-full"
                src={item.src}
                title={project.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          )}

          {item.type === 'video' && (
            <div class="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                src={item.src}
                autoplay
                loop
                muted
                playsinline
                preload="auto"
                class="smart-video w-full h-full object-contain pointer-events-none"
              ></video>
            </div>
          )}

          {item.type === 'image' && (
            <img
              src={item.src}
              alt={project.title}
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          )}
        </div>
      ))}
    </section>
  </article>
</Layout>

<script>
  function initSmartVideos() {
    const videos = document.querySelectorAll<HTMLVideoElement>('video.smart-video');
    if (!videos.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });

    videos.forEach((video) => {
      video.muted = true;
      video.defaultMuted = true;
      observer.observe(video);
    });
  }

  initSmartVideos();
  document.addEventListener('astro:page-load', initSmartVideos);
</script>
`);

console.log('✅ Configuration completed successfully!');
