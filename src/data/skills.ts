export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'C#', 'SQL', 'Bash'],
  },

  {
    title: 'Backend & Systems',
    items: [
      'Node.js',
      'FastAPI',
      'REST API Design',
      'Authentication & Authorization',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Linux',
      'Concurrency & Synchronization',
      'Virtual Memory Concepts',
    ],
  },

  {
    title: 'AI / ML & Data',
    items: [
      'Large Language Models (LLMs)',
      'LangChain',
      'Retrieval-Augmented Generation (RAG)',
      'Hugging Face Transformers',
      'PyTorch',
      'scikit-learn',
      'NLP Pipelines',
      'Model Evaluation (Precision / Recall / F1)',
      'Data Processing (Pandas, NumPy)',
    ],
  },

  {
    title: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Android (Java)', 'Unity'],
  },

  {
    title: 'Cloud, DevOps & Tooling',
    items: [
      'AWS Lambda',
      'Google Cloud APIs',
      'Firebase (Firestore, Storage)',
      'Docker',
      'Git & GitHub',
      'GitHub Actions',
      'CI/CD Pipelines',
      'Linux-based Development',
    ],
  },

  {
    title: 'Testing & Quality',
    items: [
      'Unit Testing',
      'Integration Testing',
      'UI Testing',
      'JUnit',
      'Espresso',
      'Test Automation',
      'Debugging & Instrumentation',
    ],
  },

  {
    title: 'Developer Tools & Platforms',
    items: [
      'Chrome Extensions (Manifest V3)',
      'WordPress / PHP',
      'Google Apps Script',
      'Android Studio',
      'Firebase Console',
      'Vercel',
      'Netlify',
    ],
  },
];
