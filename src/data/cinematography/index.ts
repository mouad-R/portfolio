export * from './types';
import type { CinemaProject } from './types';

const projectFiles = import.meta.glob<{ project: CinemaProject }>(['./*.ts', '!./index.ts', '!./types.ts'], {
  eager: true,
});

export const cinemaProjects: CinemaProject[] = Object.values(projectFiles).map((file) => file.project);
