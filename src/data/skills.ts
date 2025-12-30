export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Core',
    items: ['TypeScript', 'Python', 'Go', 'Java', 'C#', 'SQL', 'Kotlin'],
  },
  {
    title: 'Backend & Cloud',
    items: ['Node.js', 'FastAPI', 'Prisma/ORMs', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
  },
  {
    title: 'AI & Data',
    items: ['LangChain', 'Vector Stores', 'OpenAI API', 'Data Pipelines', 'Feature Flags'],
  },
  {
    title: 'Frontend & Mobile',
    items: ['React', 'Next.js (static export)', 'Tailwind CSS', 'React Query', 'Android', 'Unity'],
  },
  {
    title: 'DevOps & Quality',
    items: ['CI/CD', 'Testing (unit/integration/contract)', 'Observability', 'IaC templates', 'GitHub Actions'],
  },
];
