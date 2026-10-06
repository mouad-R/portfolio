export type MediaItemType = 'youtube' | 'video' | 'image' | 'spacer';

export interface MediaItem {
  type: MediaItemType;
  src?: string;
  caption?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export type ProjectCategory = 'motion' | '3d' | 'cinematography' | 'brand' | 'ui-ux';

export interface Project {
  slug: string;
  title: string;
  category: string;
  categoryKey: ProjectCategory;
  year: string;
  role: string;
  specs: string;
  description: string;
  thumbnail: string;
  videoPreview?: string;
  featured?: boolean;
  mediaGap?: 'none' | 'sm' | 'md' | 'lg';
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    "slug": "smart-land",
    "title": "الل",
    "category": "UI / UX Product Design",
    "categoryKey": "ui-ux",
    "year": "2026",
    "role": "Senior Motion Designer",
    "specs": "After Effects · Cinema 4D · 60fps",
    "description": "",
    "thumbnail": "/projects/smart-land/s9 copy.webp",
    "videoPreview": "/projects/smart-land/2_3.webm",
    "mediaGap": "none",
    "media": [
      {
        "type": "video",
        "src": "/projects/new-project/2_1.webm"
      },
      {
        "type": "spacer",
        "size": "md"
      },
      {
        "type": "video",
        "src": "/projects/new-project/2 (1).webm"
      },
      {
        "type": "video",
        "src": "/projects/new-project/2_2.webm"
      },
      {
        "type": "video",
        "src": "/projects/new-project/2_3.webm"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s2 copy.webp"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s3 copy.webp"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s4 copy.webp"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s5 copy.webp"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s6 copy.webp"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s7 copy.webp"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s8 copy.webp"
      },
      {
        "type": "image",
        "src": "/projects/smart-land/s9 copy.webp"
      }
    ]
  },
  {
    "slug": "saad",
    "title": "Saad Project",
    "category": "Cinematography & Color Grade",
    "categoryKey": "cinematography",
    "year": "2026",
    "role": "Director of Photography & Colorist",
    "specs": "DaVinci Resolve · ACES Color · 4K Master",
    "description": "A cinematic showcase featuring camera choreography, dramatic lighting setups, and advanced DaVinci Resolve color grading passes.",
    "thumbnail": "https://img.youtube.com/vi/5uODxM_u52I/maxresdefault.jpg",
    "videoPreview": "/projects/saad/1.webm",
    "featured": true,
    "media": [
      {
        "type": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/5uODxM_u52I?si=YtSmZtyQ1AxYkOuJ&rel=0&modestbranding=1"
      },
      {
        "type": "video",
        "src": "/projects/saad/1.webm"
      },
      {
        "type": "video",
        "src": "/projects/saad/2.webm"
      },
      {
        "type": "video",
        "src": "/projects/saad/3.webm"
      },
      {
        "type": "video",
        "src": "/projects/saad/4.webm"
      }
    ]
  },
  {
    "slug": "brand-ident",
    "title": "Brand Identity Animation",
    "category": "Motion Design & Kinetic",
    "categoryKey": "motion",
    "year": "2026",
    "role": "Motion Designer & 2D/3D Animator",
    "specs": "After Effects · Cinema 4D · 60 FPS",
    "description": "Dynamic typography systems, kinetic branding, and identity motion breakdown crafted with precision easing and rhythmic audio pacing.",
    "thumbnail": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "featured": true,
    "media": [
      {
        "type": "image",
        "src": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=85",
        "caption": "Kinetic Typography & Identity Design System"
      }
    ]
  },
  {
    "slug": "cyber-capsule",
    "title": "Futuristic Architectural Concept",
    "category": "3D Concept & Lookdev",
    "categoryKey": "3d",
    "year": "2026",
    "role": "3D Artist & Lookdev Lead",
    "specs": "Cinema 4D · Octane · Fusion 360",
    "description": "High-poly 3D modeling, studio lighting simulation, and procedural shading breakdown for futuristic spatial architecture.",
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "featured": true,
    "media": [
      {
        "type": "image",
        "src": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85",
        "caption": "Octane Lookdev Shading Pass & Volumetric Lighting"
      }
    ]
  },
  {
    "slug": "lux-packaging",
    "title": "Artisanal Luxury Packaging",
    "category": "Brand Identity & Packaging",
    "categoryKey": "brand",
    "year": "2026",
    "role": "Lead Visual Designer",
    "specs": "Illustrator · Photoshop · Foil Print Specs",
    "description": "Comprehensive brand system, artisanal label dies, and photorealistic 3D mockup visualizations built for premium luxury retail.",
    "thumbnail": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    "featured": false,
    "media": [
      {
        "type": "image",
        "src": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1920&q=85",
        "caption": "Foil Stamping & Die Cut Print Packaging Architecture"
      }
    ]
  },
  {
    "slug": "travel-app",
    "title": "Spatial Travel Booking Platform",
    "category": "Product Design & Mobile UI",
    "categoryKey": "ui-ux",
    "year": "2026",
    "role": "Product Designer & Art Director",
    "specs": "Figma · Design System · Micro-interactions",
    "description": "End-to-end user research, interactive wireframing, and production-ready component library with bespoke micro-interactions.",
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "featured": false,
    "media": [
      {
        "type": "image",
        "src": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1920&q=85",
        "caption": "Interactive Design System & Mobile App Interface"
      }
    ]
  }
];
