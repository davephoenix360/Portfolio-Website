export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL', 'C', 'Bash', 'Java'],
  },

  {
    title: 'Backend & Systems',
    items: [
      'ASP.NET Core',
      'Node.js',
      'REST API design',
      'PostgreSQL',
      'Microsoft SQL Server',
      'MySQL',
      'SQLite',
      'Linux',
      'Concurrency & synchronization',
    ],
  },

  {
    title: 'AI / ML',
    items: [
      'OpenAI / Groq APIs',
      'LangChain',
      'Retrieval-Augmented Generation (RAG)',
      'Hugging Face Transformers',
      'PyTorch',
      'scikit-learn',
      'Pandas / NumPy',
    ],
  },

  {
    title: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'Android (Java)', 'Unity'],
  },

  {
    title: 'Cloud, DevOps & Tooling',
    items: [
      'AWS',
      'Google Cloud',
      'Firebase (Firestore, Storage)',
      'Docker',
      'Git & GitHub',
      'GitHub Actions',
      'CI/CD pipelines',
      'Vercel',
    ],
  },

  {
    title: 'Testing & Quality',
    items: [
      'Unit testing',
      'Integration testing',
      'Espresso',
      'JUnit',
      'Test automation',
    ],
  },
];

/* ============================================================
   Flat list of languages — used by the stats marquee.
   Order is roughly "most-used → least-used". Duplicate-friendly.
   ============================================================ */
export const languages: string[] = [
  'TypeScript',
  'JavaScript',
  'Python',
  'C#',
  'SQL',
  'C',
  'C++',
  'Java',
  'Bash',
  'HTML / CSS',
  'MaxScript',
];
