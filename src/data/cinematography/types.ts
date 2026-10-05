export interface MediaItem {
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
