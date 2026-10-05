export * from './types';
import type { ProjectItem } from './types';

const projectFiles = import.meta.glob<{ project: ProjectItem }>('./*.ts', { eager: true });

export const projects: ProjectItem[] = Object.entries(projectFiles)
  .filter(([filePath]) => !filePath.endsWith('index.ts') && !filePath.endsWith('types.ts'))
  .map(([, file]) => file.project);
