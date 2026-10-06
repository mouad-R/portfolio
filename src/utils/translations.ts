export type Lang = 'en' | 'ar';

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    'nav.work': 'Work',
    'nav.about': 'About & Services',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Available for Direction & Commercial Commissions',
    'hero.headline': 'Senior Motion Designer & Visual Director.',
    'hero.watchShowreel': 'Watch 2026 Showreel',
    'hero.statement':
      'Operating at the intersection of kinetic rhythm, spatial lighting, and technical precision to elevate visual storytelling.',
    'hero.exploreWorks': 'Explore Works ↓',
    'hero.initiateCollab': 'Initiate Collaboration →',
    'marquee.text':
      'MOTION DESIGN · 3D CGI LOOKDEV · CINEMATOGRAPHY · BRAND IDENTITIES · BROADCAST SYSTEMS · DIRECTION ·',

    // Selected Works
    'selected.badge': 'Curated Selection',
    'selected.title': 'Selected Works',
    'selected.subtitle': 'Recent commercial and self-initiated productions.',
    'selected.viewAll': 'View All Projects →',

    // Services
    'services.badge': 'Capabilities',
    'services.title': 'Directing motion, light & design.',
    'services.subtitle': 'Comprehensive creative and technical execution from concept to final delivery.',
    'services.viewAbout': '[ View Capabilities in About → ]',
    'services.01.title': 'Motion Design & Kinetic Branding',
    'services.01.desc':
      'Bespoke broadcast packages, commercial title sequences, kinetic typography systems, and high-energy promotional films crafted with rhythm and dynamic pacing.',
    'services.02.title': 'Film Direction & Color Grading',
    'services.02.desc':
      'High-end visual storytelling, lighting architecture, camera direction, and technical ACES / DaVinci Resolve color pipelines for commercial and narrative productions.',
    'services.03.title': '3D CGI & Look Development',
    'services.03.desc':
      'Photorealistic product simulations, complex procedural shading, hard-surface modeling, and lookdev lighting built for luxury commercials and brand visuals.',

    // CTA
    'cta.badge': 'Available for Q2/Q3 Projects',
    'cta.title': "Have a project in mind? Let's craft something unforgettable.",
    'cta.subtitle': 'Open for select commercial projects, broadcast identities, and creative collaborations.',
    'cta.button': 'Start a Project Brief →',

    // Work Page
    'work.archiveBadge': 'Selected Archive // 2024–2026',
    'work.archiveTitle': 'Crafted with rhythm, light & precision.',
    'work.archiveSubtitle':
      'A curated showcase of commercial title sequences, 3D lookdev simulations, kinetic brand systems, and cinematic color grading passes.',
    'work.filterAll': 'All Works',
    'work.filterMotion': 'Motion Design',
    'work.filter3d': '3D & Lookdev',
    'work.filterCinema': 'Cinematography',
    'work.filterBrand': 'Brand & UI',
    'work.viewCaseStudy': 'View Case Study →',
    'work.backToAll': 'Back to All Works',
    'work.role': 'Role',
    'work.year': 'Year',
    'work.specs': 'Technical Specs',
    'work.prevProject': '← Previous Project',
    'work.nextProject': 'Next Project →',

    // Contact
    'contact.badge': 'Commission Inquiries // 2026',
    'contact.title': "Let's build something extraordinary.",
    'contact.subtitle':
      'Open for commercial commissions, broadcast titles, 3D product lookdev, and visual direction worldwide.',
    'contact.serviceLabel': '01 // What service do you need?',
    'contact.budgetLabel': '02 // Estimated Budget (USD)',
    'contact.timelineLabel': '03 // Expected Timeline',
    'contact.nameLabel': 'Your Name / Brand *',
    'contact.emailLabel': 'Email Address *',
    'contact.detailsLabel': 'Project Vision & Details *',
    'contact.submit': 'Submit Project Brief →',
    'contact.directEmail': 'Direct Email',
    'contact.responseTime': 'Typical response time: < 24h',
    'contact.location': 'Studio Location',
    'contact.locationVal': 'Algiers, Algeria (UTC+1)',
    'contact.remoteVal': 'Remote availability worldwide',
    'contact.networks': 'Follow & Networks',
    'contact.namePlaceholder': 'e.g. John Doe / Studio Acme',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.detailsPlaceholder': 'Tell me about the campaign narrative, deliverables, reference links...',

    // About Page
    'about.badge': 'Senior Motion Designer & Visual Director',
    'about.title': 'Creative problem‑solver with a passion for motion & light.',
    'about.bio1':
      "I'm Mouad Rouini — based in Algiers, Algeria. I specialize in crafting rhythm‑driven motion graphics, commercial identities, and high‑fidelity CGI visuals that bridge dynamic 2D/3D animation with cinematic post‑production.",
    'about.bio2':
      'My work spans commercial title sequences, kinetic typography systems, photorealistic product renders, and full‑pipeline color grading — always with an obsessive focus on pacing, musical rhythm, and visual storytelling.',
    'about.bio3':
      'I believe great motion design is more than movement — it is intention, emotion, and technical rigor working together to make brands unforgettable.',
    'about.workWithMe': 'Work With Me →',
    'about.exploreProjects': 'Explore Projects ↓',
    'about.profileFocus': 'Primary Focus',
    'about.profileFocusVal': 'Motion & Visual Direction',
    'about.profileExp': 'Experience',
    'about.profileExpVal': '6+ Years',
    'about.profileAvail': 'Availability',
    'about.profileAvailVal': 'Open for Commissions',
    'about.disciplines': 'Disciplines',
    'about.capabilitiesTitle': 'Core Capabilities & Deliverables',
    'about.methodology': 'Methodology',
    'about.pipelineTitle': 'Production Pipeline: Concept to Master',
    'about.standards': 'Standards',
    'about.principlesTitle': 'Core Production Principles',
    'about.stack': 'Stack',
    'about.stackTitle': 'Software & Hardware Toolkit',
    'about.timelineBadge': 'Timeline',
    'about.timelineTitle': 'Experience & Milestones',

    // Dock & Footer
    'dock.reel': 'Reel',
    'dock.copyEmail': 'Copy Email',
    'dock.copied': 'Copied! ✓',
    'dock.available': 'Available',
    'footer.featured': 'Featured Works',
    'footer.nav': 'Navigation',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Nav
    'nav.work': 'الأعمال',
    'nav.about': 'نبذة والخدمات',
    'nav.contact': 'تواصل معي',

    // Hero
    'hero.badge': 'متاح للتعاقد والمشاريع الإبداعية // 2026',
    'hero.headline': 'تصميم موشن جرافيك وإخراج بصري.',
    'hero.watchShowreel': 'مشاهدة الشوريل 2026 ▶',
    'hero.statement':
      'أجمع بين التناغم الحركي، هندسة الإضاءة، والإتقان التقني لتقديم سرد بصري سينمائي يرتقي بقيمة العمل.',
    'hero.exploreWorks': 'استعراض المشاريع ↓',
    'hero.initiateCollab': 'طلب مشروع جديد ←',
    'marquee.text': 'تصميم موشن · رسوم ثلاثية الأبعاد CGI · تصوير سينمائي · هويات بصرية · برودكاست · إخراج إبداعي ·',

    // Selected Works
    'selected.badge': 'أعمال مختارة',
    'selected.title': 'أبرز المشاريع',
    'selected.subtitle': 'مجموعة مختارة من الإنتاجات التجارية والمشاريع الإبداعية المتميزة.',
    'selected.viewAll': 'جميع المشاريع ←',

    // Services
    'services.badge': 'مجالات الخبرة',
    'services.title': 'رؤية متكاملة تجمع الحركة، الضوء، والتصميم.',
    'services.subtitle': 'تنفيذ إبداعي وتقني شامل من الفكرة والستوريبورد حتى النسخة النهائية.',
    'services.viewAbout': '[ استكشف تفاصيل مسار الإنتاج ← ]',
    'services.01.title': 'تصميم الموشن والهويات الحركية',
    'services.01.desc':
      'حزم برودكاست تلفزيونية، شارات سينمائية، تايبوغرافي حركي متناسق، وإعلانات تجارية مصممة بإيقاع ديناميكي متقن.',
    'services.02.title': 'تصوير سينمائي وتلوين احترافي',
    'services.02.desc':
      'سرد بصري راقٍ، هندسة إضاءة، حركة كاميرا مدروسة، وتدرج ألوان سينمائي بمعايير ACES و DaVinci Resolve للإنتاجات الإعلانية والروائية.',
    'services.03.title': 'رسوم ثلاثية الأبعاد CGI وتجسيد المنتجات',
    'services.03.desc':
      'محاكاة منتجات بواقعية سينمائية، خامات وإكساء إجرائي متقدم، نمذجة ثلاثية الأبعاد، وإضاءة استوديو للعلامات التجارية الفاخرة.',

    // CTA
    'cta.badge': 'فرص التعاون الإبداعي',
    'cta.title': 'هل تخطط لمشروع أو حملة بصرية جديدة؟ لنصنع عملاً استثنائياً معاً.',
    'cta.subtitle': 'متاح للإنتاجات التجارية، شارات القنوات، والشراكات الإبداعية حول العالم.',
    'cta.button': 'ابدأ تفاصيل مشروعك ←',

    // Work Page
    'work.archiveBadge': 'أرشيف الأعمال // 2024–2026',
    'work.archiveTitle': 'أعمال صُممت بالإيقاع، الضوء، والإتقان.',
    'work.archiveSubtitle':
      'معرض شامل يضم شارات سينمائية، تجسيد ثلاثي الأبعاد، هويات حركية ديناميكية، وجلسات تلوين سينمائية.',
    'work.filterAll': 'جميع الأعمال',
    'work.filterMotion': 'تصميم موشن',
    'work.filter3d': 'ثلاثي الأبعاد 3D',
    'work.filterCinema': 'سينماتوغرافيا',
    'work.filterBrand': 'الهويات والواجهات',
    'work.viewCaseStudy': 'عرض تفاصيل العمل ←',
    'work.backToAll': 'العودة للأعمال',
    'work.role': 'الدور الإبداعي',
    'work.year': 'سنة الإنتاج',
    'work.specs': 'المواصفات والبرامج',
    'work.prevProject': '→ المشروع السابق',
    'work.nextProject': 'المشروع التالي ←',

    // Contact
    'contact.badge': 'طلب مشروع واستفسارات // 2026',
    'contact.title': 'دعنا نبتكر عملاً بصرياً لا يُنسى.',
    'contact.subtitle':
      'مستعد للتعاون في المشاريع التجارية، شارات البرودكاست، إخراج الرسوم ثلاثية الأبعاد، والاستشارات البصرية عالمياً.',
    'contact.serviceLabel': '01 // ما هي الخدمة التي تحتاجها؟',
    'contact.budgetLabel': '02 // الميزانية التقديرية (USD)',
    'contact.timelineLabel': '03 // الجدول الزمني المتوقع',
    'contact.nameLabel': 'الاسم الكريم / اسم الشركة *',
    'contact.emailLabel': 'البريد الإلكتروني *',
    'contact.detailsLabel': 'رؤية وتفاصيل المشروع *',
    'contact.submit': 'إرسال تفاصيل المشروع ←',
    'contact.directEmail': 'البريد المباشر',
    'contact.responseTime': 'متوسط الرد: أقل من 24 ساعة',
    'contact.location': 'مقر الاستوديو',
    'contact.locationVal': 'الجزائر العاصمة (UTC+1)',
    'contact.remoteVal': 'متاح للعمل عن بُعد مع مختلف دول العالم',
    'contact.networks': 'الشبكات والمنصات',
    'contact.namePlaceholder': 'مثال: أحمد / استوديو إبداعي',
    'contact.emailPlaceholder': 'ahmed@example.com',
    'contact.detailsPlaceholder': 'أخبرني عن فكرة الحملة، المخرجات المطلوبة، الروابط المرجعية...',

    // About Page
    'about.badge': 'مصمم موشن أول ومخرج بصري',
    'about.title': 'شغف دائم بالحركة، الضوء، وابتكار الحلول البصرية.',
    'about.bio1':
      'أنا معاد رويني — مقيم في الجزائر العاصمة. متخصص في تصميم الموشن جرافيكس المدفوع بالإيقاع، الهويات التجارية، ورسوم الـ CGI ثلاثية الأبعاد التي تجمع بين الأنيميشن الحي والبوست برودكشن السينمائي.',
    'about.bio2':
      'يشمل عملي شارات الأفلام والإعلانات، أنظمة التايبوغرافي الحركية، تجسيد المنتجات الواقعي، وتدرج الألوان المتكامل — مع تركيز دقيق ومستمر على التوقيت، التناغم الموسيقي، وقوة السرد البصري.',
    'about.bio3':
      'أؤمن أن التصميم الحركي الحقيقي يتجاوز مجرد تحريك العناصر — بل هو تجسيد للمشاعر، الرؤية الواضحة، والدقة التقنية التي تجعل العلامات التجارية استثنائية وعالقة في الأذهان.',
    'about.workWithMe': 'ابدأ مشروعك معي ←',
    'about.exploreProjects': 'تصفح المشاريع ↓',
    'about.profileFocus': 'التخصص الرئيسي',
    'about.profileFocusVal': 'تصميم موشن وإخراج بصري',
    'about.profileExp': 'سنوات الخبرة',
    'about.profileExpVal': '+6 سنوات',
    'about.profileAvail': 'حالة العمل',
    'about.profileAvailVal': 'متاح لاستقبال مشاريع',
    'about.disciplines': 'التخصصات',
    'about.capabilitiesTitle': 'مجالات الخبرة والمخرجات الأساسية',
    'about.methodology': 'منهجية العمل',
    'about.pipelineTitle': 'مراحل الإنتاج: من الفكرة إلى النسخة الماستر',
    'about.standards': 'معايير الجودة',
    'about.principlesTitle': 'مبادئنا الإنتاجية',
    'about.stack': 'التقنيات',
    'about.stackTitle': 'حزمة البرامج والعتاد الاحترافي',
    'about.timelineBadge': 'المسار المهني',
    'about.timelineTitle': 'محطات وخبرات سابقة',

    // Dock & Footer
    'dock.reel': 'الشوريل',
    'dock.copyEmail': 'نسخ الإيميل',
    'dock.copied': 'تم النسخ بنجاح! ✓',
    'dock.available': 'متاح للعمل',
    'footer.featured': 'أعمال مختارة',
    'footer.nav': 'روابط سريعة',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};
