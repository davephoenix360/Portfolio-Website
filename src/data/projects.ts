export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  tech: string[];
  links: ProjectLink[];
  image?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    id: 'nextep',
    title: 'Nextep',
    summary: 'Resume builder + Chrome extension ecosystem for rapid job-ready profiles.',
    description:
      'Built an extensible resume builder with content blocks, autosave, and a companion Chrome extension for capturing achievements on the fly. Added PDF export, accessible templates, and analytics to learn what resonates.',
    tags: ['AI', 'Backend', 'Frontend'],
    tech: ['TypeScript', 'React', 'Node.js', 'Prisma', 'PostgreSQL', 'Chrome APIs'],
    links: [
      { label: 'GitHub', href: 'https://github.com/davephoenix360' },
      { label: 'Demo', href: 'https://diepreyecd.dev' }, // TODO: swap demo link
    ],
    image: '/assets/project-1.png',
    status: 'Iterating',
  },
  {
    id: 'ace-budget-ai',
    title: 'Ace Budget AI',
    summary: 'AI-powered budgeting coach that personalizes spending nudges.',
    description:
      'Prototyped an AI spending assistant that connects to banking exports, classifies expenses, and runs goal-aware recommendations. Delivered a conversational UI with guardrails, transparency, and exportable reports.',
    tags: ['AI', 'Backend'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'LangChain', 'TypeScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/davephoenix360' }],
    image: '/assets/project-2.png',
    status: 'Prototype',
  },
  {
    id: 'streamer-university',
    title: 'Streamer University',
    summary: 'Unity-built narrative sim exploring growth, community, and creative hustle.',
    description:
      'Developed game loops, dialogue trees, and modular systems to experiment with pacing and player agency. Focused on polish, save-state reliability, and performant animation triggers.',
    tags: ['Game Dev', 'Frontend'],
    tech: ['Unity', 'C#', 'Cinemachine'],
    links: [{ label: 'Demo', href: 'https://diepreyecd.dev' }], // TODO: update demo link
    image: '/assets/project-3.png',
    status: 'Beta',
  },
  {
    id: 'fairdraw',
    title: 'FairDraw',
    summary: 'Android app with Firebase, QR, and geolocation to run equitable raffles.',
    description:
      'Built a mobile raffle experience with secure QR codes, geofencing, and auditable draws. Added Firebase sync, offline persistence, and admin dashboards for transparency.',
    tags: ['Mobile', 'Backend'],
    tech: ['Kotlin', 'Firebase', 'Cloud Functions', 'Maps SDK'],
    links: [{ label: 'GitHub', href: 'https://github.com/davephoenix360' }],
    image: '/assets/web-calc-proj-pic.jpg',
    status: 'Shipped',
  },
];

export const projectTags = Array.from(new Set(projects.flatMap((project) => project.tags)));
