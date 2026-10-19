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
    role: 'VP Academics',
    period: '2024 — Present',
    location: 'Edmonton, AB',
    summary:
      'Executive member of UAlberta\'s BESA chapter. Lead academic programming and student support for Black engineering students.',
    highlights: [
      'Run academic support programming — study groups, exam prep sessions, course-matching for first- and second-year students.',
      'Pair with industry and faculty contacts to surface research, TA, and co-op opportunities for the membership.',
      'Co-organize technical workshops and speaker events with the rest of the executive team.',
    ],
  },

  // ===============================
  // Professional Experience
  // ===============================
  {
    company: 'Dayforce',
    role: 'DevOps / Software Engineering Intern',
    period: 'May 2026 — Dec 2026',
    location: 'Remote · Toronto, ON (base office)',
    summary:
      'Backend and DevOps work on Dayforce\'s internal tools — provider-neutral data migrations, restore-workflow reliability, and team-facing developer tooling.',
    highlights: [
      'Refactored the internal DB-backfill client UI to support a provider-neutral architecture, raising code coverage from 23% to 46% in a single PR.',
      'Migrated legacy backfill flows to the new provider-neutral contract across client and API, including endpoint wiring, UI updates, dashboard cleanup, and rollout coordination.',
      'Built an internal TypeScript tool (React + ASP.NET Core) for managing DB restore and test instances across engineering teams.',
      'Hardened restore workflows with SQL Server data-drive-only rules, source-version validation, and cache-backed server-disk checks to prevent unsafe restores.',
      'Audited the client and API codebases, filed bug and architecture cleanup items, and fixed workflow issues by tracing failures through the full request path.',
    ],
  },

  {
    company: 'Goodmorning.com',
    role: 'DevOps / Software Engineering Intern',
    period: 'Jan 2025 — Aug 2025',
    location: 'Edmonton, AB',
    summary:
      'Backend and DevOps work on a high-traffic multi-brand e-commerce platform — REST APIs, query performance, and cloud-integrated data pipelines.',
    highlights: [
      'Designed a REST discounts API end-to-end against production PostgreSQL, including payload schema, optimized SQL extraction, and a caching strategy.',
      'Built a schema-difference checker CLI (Python, Bash, PostgreSQL) that diffs DB functions/procedures against SQL definitions and posts read-only scan results to Slack.',
      'Designed an attribute-tagging + filtering architecture for a product browse experience, cutting worst-case query runtime from 1010ms to 400ms (~60%) through query plan and index review.',
      'Built a scheduled Google Ratings ingestion system (DB schema + AWS schedule + Google Cloud APIs), establishing a baseline pattern for external data integrations.',
    ],
  },

  {
    company: 'Headstarter AI',
    role: 'Software Engineering Fellow',
    period: 'Jul 2024 — Aug 2024',
    location: 'Hybrid',
    summary:
      'Selected fellow in a competitive AI engineering program focused on building and shipping LLM-powered applications under tight weekly deadlines.',
    highlights: [
      'Shipped 5+ AI applications and APIs using Next.js, OpenAI/Groq, LangChain, Pinecone, and Stripe.',
      'Applied LLM application best practices — prompt/interface iteration, reliability-focused integration, and deployment-ready API design.',
      'Worked in Agile sprints with iterative builds, peer reviews, and engineering feedback; tightened delivery through disciplined Git workflows and PR-based review habits.',
    ],
  },

  {
    company: 'University of Alberta',
    role: 'Software Developer Intern',
    period: 'May 2024 — Aug 2024',
    location: 'Edmonton, AB',
    summary:
      'Built engineering tools and algorithms for construction planning and visualization in a small research team.',
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
      'First internship — responsive web development and modern frontend workflows at a Port Harcourt web agency.',
    highlights: [
      'Built and deployed multiple responsive websites using HTML, CSS, JavaScript, and Bootstrap.',
      'Used Git/GitHub for version control and Netlify for hosting and deployment.',
      'Worked closely with senior developers to learn production frontend practices.',
    ],
  },
];
