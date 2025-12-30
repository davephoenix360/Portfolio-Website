export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  // ===============================
  // Leadership & Organizations
  // ===============================
  {
    company: 'Black Engineering Students’ Association (BESA) UofA',
    role: 'VP Communications',
    period: '2024 — Present',
    location: 'Edmonton, AB',
    summary: 'Led communications and digital presence for an engineering student organization.',
    highlights: [
      'Designed and maintained branding, newsletters, and social media content to support mentorship programs and events.',
      'Collaborated with executive members to communicate initiatives, timelines, and opportunities to a broad student audience.',
      'Introduced shared templates and lightweight documentation to improve internal workflows.',
    ],
  },

  // ===============================
  // Professional Experience
  // ===============================
  {
    company: 'Goodmorning.com',
    role: 'DevOps / Software Engineering Intern',
    period: 'Jan 2025 — Aug 2025',
    location: 'Edmonton, AB',
    summary:
      'Worked on large-scale, multi-brand e-commerce systems spanning backend services, automation, and cloud integrations.',
    highlights: [
      'Engineered backend features and automation for a high-traffic WordPress/PHP platform backed by PostgreSQL/MySQL, improving content management workflows across multiple brands.',
      'Optimized complex SQL queries and API payloads, reducing latency by 20–30% across core endpoints.',
      'Built cloud-integrated data ingestion pipelines using AWS Lambda and Google APIs, establishing patterns for scalable background processing.',
      'Developed internal tooling (Python/Bash CLI) to detect schema drift between environments, improving deployment reliability and observability.',
    ],
  },

  {
    company: 'Headstarter AI',
    role: 'Software Engineering Fellow',
    period: 'Jul 2024 — Aug 2024',
    location: 'Hybrid',
    summary:
      'Selected fellow in a competitive AI engineering program focused on building and shipping LLM-powered applications.',
    highlights: [
      'Built and shipped multiple AI-backed applications and APIs using Next.js, OpenAI/Groq, LangChain, and vector databases.',
      'Applied LLMOps and CI/CD best practices while collaborating in fast-paced, Agile team environments.',
      'Improved code quality and maintainability through structured Git workflows, peer reviews, and iterative refactoring.',
    ],
  },

  {
    company: 'University of Alberta',
    role: 'Software Developer Intern',
    period: 'May 2024 — Aug 2024',
    location: 'Edmonton, AB',
    summary:
      'Developed engineering tools and algorithms for construction planning and visualization.',
    highlights: [
      'Built a 3D construction planning application using C#, 3ds Max, and MaxScript to improve project visualization.',
      'Designed and implemented a crane path-planning algorithm, reducing planning time by approximately 15%.',
      'Delivered features on schedule while collaborating in a small engineering team.',
    ],
  },

  // ===============================
  // Early Technical Experience
  // ===============================
  {
    company: 'Harveyteck Web Resources',
    role: 'Front-End Developer Intern',
    period: 'Aug 2022 — Dec 2022',
    location: 'Port Harcourt, Nigeria',
    summary:
      'Early internship focused on responsive web development and modern frontend workflows.',
    highlights: [
      'Built and deployed multiple responsive websites using HTML, CSS, JavaScript, and Bootstrap.',
      'Used Git/GitHub for version control and Netlify for hosting and deployment.',
      'Worked closely with senior developers to learn production frontend practices.',
    ],
  },
];
