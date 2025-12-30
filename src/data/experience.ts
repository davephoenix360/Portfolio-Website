export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: 'University of Alberta',
    role: 'Software Engineering Co-op (Student)',
    period: '2024 — Present',
    location: 'Edmonton, AB',
    summary: 'Focused on AI-backed features, backend services, and developer productivity.',
    highlights: [
      'Prototyped RAG-style workflows to surface course resources with traceable citations.',
      'Built CI/CD pipelines with automated testing, linting, and preview deployments.',
      'Partnered with peers to document patterns for observability, migrations, and local DX.',
    ],
  },
  {
    company: 'Personal Projects',
    role: 'Full-Stack / DevOps Builder',
    period: '2022 — Present',
    location: 'Remote',
    summary: 'Shipped end-to-end projects spanning AI, backend services, and platform tooling.',
    highlights: [
      'Designed modular APIs with authentication, background jobs, and caching strategies.',
      'Applied testing habits (unit, integration, contract) to keep changes shippable.',
      'Set up infrastructure-as-code templates and release automation for small teams.',
    ],
  },
  {
    company: 'Community + Mentorship',
    role: 'Peer Mentor & Builder',
    period: 'Ongoing',
    location: 'Hybrid',
    summary: 'Support classmates and collaborators through code reviews and office hours.',
    highlights: [
      'Led walkthroughs on debugging, git hygiene, and observability-first development.',
      'Documented onboarding guides to help new contributors ship confidently.',
      'Ran small clinics on “designing for change” and writing maintainable tests.',
    ],
  },
];
