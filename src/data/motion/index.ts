export * from './types';
import type { MotionProject } from './types';

const projectFiles = import.meta.glob<{ project: MotionProject }>('./*.ts', { eager: true });

export const motionProjects: MotionProject[] = Object.entries(projectFiles)
  .filter(([filePath]) => !filePath.endsWith('index.ts') && !filePath.endsWith('types.ts'))
  .map(([, file]) => file.project);
