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
  featured?: boolean;
  impact?: string[];
  whatIDid?: string[];
  tradeoffs?: string;
};

export const projects: Project[] = [
  // ===============================
  // Flagship
  // ===============================
  {
    id: 'nexstepper',
    title: 'Nexstepper',
    summary: 'Production AI resume builder with one-click JD-tailored variants.',
    description:
      'Solo-built and deployed production AI resume builder. Users parse a JD, get a tailored resume variant, run an ATS score, and ship — with real-time collaboration, Stripe-secured payments, and a chat co-pilot that runs the same LLM workflows I designed.',
    tags: ['Full-Stack', 'AI', 'Production', 'Solo'],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Vercel', 'Liveblocks', 'LangChain'],
    links: [
      { label: 'Live', href: 'https://nexstepper.com' },
      { label: 'GitHub', href: 'https://github.com/davephoenix360' },
    ],
    image: '/projects/nexstepper.png',
    status: 'Live',
    featured: true,
    impact: [
      'Designed and shipped the full product surface end-to-end (DB schema, API, UI, payments, deployment).',
      'AI co-pilot uses the same schema-validation pattern in production that the LLM SDKs accept natively.',
      'Real-time collaboration layer via Liveblocks; payments and GDPR data controls live in prod.',
    ],
    whatIDid: [
      'Designed the structured resume data model and the JD-parser + AI-tailoring pipeline.',
      'Built the AI chat co-pilot using OpenAI + LangChain with zod-validated structured outputs.',
      'Wired Stripe payments, Vercel + AWS deployment, and the Liveblocks real-time layer.',
    ],
    tradeoffs:
      'Optimized for fast iteration over feature breadth — most "advanced" features ship behind a small paid gate to keep the surface auditable.',
  },

  {
    id: 'streamer-university',
    title: 'Streamer University',
    summary: 'Unity 2D visual-novel-style stats game — gold release with a team.',
    description:
      'Built a 2D visual-novel-style stats management game in Unity. Designed the event-card system (branching outcomes, flags, fame/stress deltas), integrated minigames into the progression loop, and coordinated asset integration and bug triage as part of a multi-developer team. Shipped a polished gold release.',
    tags: ['Game Dev', 'Team', 'Shipped'],
    tech: ['Unity', 'C#', 'JSON / CSV', 'Git'],
    links: [
      { label: 'Play', href: 'https://diepreyecdd.itch.io/streamer-university' },
      { label: 'Trailer', href: 'https://youtu.be/DNCXtjDrRYQ' },
      { label: 'GitHub', href: 'https://github.com/DIEPREYECD/CMPUT-250-Project' },
    ],
    image: '/projects/streamer-university.png',
    status: 'Shipped',
    featured: true,
    impact: [
      'Shipped a polished gold release with a multi-developer team.',
      'Built the branching narrative system with tunable stat outcomes.',
      'Integrated minigames into the progression loop.',
    ],
    whatIDid: [
      'Implemented the event-card system and stat deltas.',
      'Built minigame hooks and progression balancing.',
      'Coordinated asset integration and bug triage.',
    ],
    tradeoffs:
      'Stuck to a 2D pipeline for reliable performance and fast iteration.',
  },

  {
    id: 'fairdraw',
    title: 'FairDraw',
    summary: 'Multi-role Android app for event lotteries — Firestore + QR flows.',
    description:
      'Built a multi-role Android application (Entrant / Organizer / Admin) supporting event creation, waitlists, and lottery-based selection. Integrated Firebase Firestore and Storage, implemented QR-based check-in and selection flows, and validated core user journeys with Espresso and JUnit tests.',
    tags: ['Mobile', 'Backend', 'Shipped', 'Team'],
    tech: ['Android (Java)', 'Firebase Firestore', 'Firebase Storage', 'Espresso', 'JUnit'],
    links: [{ label: 'GitHub', href: 'https://github.com/CMPUT301f25Orchid/Project' }],
    image: '/projects/fairdraw.png',
    status: 'Shipped',
    featured: true,
    impact: [
      'Streamlined event lotteries with multi-role flows.',
      'Enabled QR-based check-in and selection workflows.',
      'Validated core journeys with automated tests.',
    ],
    whatIDid: [
      'Designed the Firestore schema for organizers, entrants, and admins.',
      'Built QR flows plus Firebase Storage integration.',
      'Wrote Espresso and JUnit tests for key paths.',
    ],
    tradeoffs:
      'Core workflows first; push notifications and analytics were deferred.',
  },

  // ===============================
  // Systems / AI
  // ===============================
  {
    id: 'os-labs',
    title: 'Operating Systems Labs (CMPUT 379)',
    summary: 'OS primitives in C under Linux — concurrency, synchronization, virtual memory.',
    description:
      'Implemented core operating system concepts in C under Linux: process and thread abstractions, synchronization primitives, and virtual memory simulations. Analyzed correctness and performance trade-offs through systematic testing.',
    tags: ['Systems', 'C', 'School'],
    tech: ['C', 'Linux', 'Semaphores', 'Mutexes', 'CAS', 'Virtual Memory'],
    links: [{ label: 'GitHub', href: 'https://github.com/DIEPREYECD/CMPUT-379' }],
    image: '/projects/placeholder.svg',
    status: 'Completed',
    impact: [
      'Implemented OS primitives under concurrency and memory constraints.',
      'Measured correctness and performance tradeoffs through repeatable tests.',
    ],
    whatIDid: [
      'Built process/thread abstractions and synchronization primitives.',
      'Implemented virtual memory simulations and benchmarks.',
    ],
    tradeoffs: 'Prioritized correctness and clarity over micro-optimizations.',
  },

  {
    id: 'bullying-classifier',
    title: 'Bullying Classifier (BERT)',
    summary: 'BERT-based NLP classifier for detecting harmful language in social text.',
    description:
      'Fine-tuned a BERT-based NLP classifier to detect bullying in social media text. Built evaluation pipelines with precision, recall, and F1-score, and shaped the architecture for real-time and multi-modal extensions.',
    tags: ['AI', 'NLP', 'Team'],
    tech: ['PyTorch', 'Hugging Face Transformers', 'scikit-learn', 'Pandas', 'NumPy'],
    links: [{ label: 'Model', href: 'https://huggingface.co/Davephoenix/bert-bullying-detector' }],
    image: '/projects/placeholder.svg',
    status: 'Completed',
    impact: [
      'Improved detection precision with BERT fine-tuning.',
      'Created evaluation pipelines for precision, recall, and F1.',
    ],
    whatIDid: [
      'Prepared the dataset and tokenization pipeline.',
      'Fine-tuned the model and reported metrics.',
      'Explored deployment paths for real-time inference.',
    ],
    tradeoffs: 'Text-only signals; multi-modal inputs were deferred.',
  },
];

export const projectTags = Array.from(new Set(projects.flatMap((project) => project.tags)));
