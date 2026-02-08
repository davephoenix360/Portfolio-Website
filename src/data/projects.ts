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
  // Flagship Projects
  // ===============================
  {
    id: 'nextep',
    title: 'Nextep',
    summary: 'Resume builder + job-application tooling to streamline job-ready profiles.',
    description:
      'Building a resume builder with reusable content blocks and clean templates, plus a companion Chrome extension to capture job postings and application details. Designed for fast iteration, structured data, and future AI-assisted scoring and tailoring.',
    tags: ['Full-Stack', 'Frontend', 'Backend', 'Tooling'],
    tech: ['TypeScript', 'React', 'Next.js', 'Chrome Extension (MV3)'],
    links: [
      { label: 'GitHub', href: 'https://github.com/davephoenix360/nextep' },
      { label: 'GitHub', href: 'https://github.com/davephoenix360/nextep-extension' },
    ],
    image: '/projects/nextep.png',
    status: 'Iterating',
    featured: true,
    impact: [
      'Accelerated resume iteration with modular content blocks and templates.',
      'Captured job postings quickly with an extension-driven intake flow.',
      'Laid the groundwork for AI-assisted scoring and tailoring.',
    ],
    whatIDid: [
      'Designed the structured resume data model and template system.',
      'Built the Chrome extension for job capture and metadata sync.',
      'Outlined evaluation criteria for future AI scoring workflows.',
    ],
    tradeoffs: 'Optimized for rapid iteration and extensibility; full automation waits for stable schemas.',
  },

  {
    id: 'ace-budget-ai',
    title: 'Ace Budget AI',
    summary: 'AI-powered budgeting assistant for expense tracking and personalized insights.',
    description:
      'Prototyped an AI budgeting workflow that ingests transaction exports, categorizes spending, and generates goal-aware summaries and recommendations. Designed with transparency, extensibility, and future forecasting features in mind.',
    tags: ['AI', 'Backend', 'Full-Stack', 'Team Project', 'Hackathon'],
    tech: ['Python', 'TypeScript', 'React', 'NLP / LLM APIs'],
    links: [{ label: 'GitHub', href: 'https://github.com/davephoenix360/ace_budget_ai' }],
    image: '/projects/ace-budget-ai.png',
    status: 'Prototype',
    impact: [
      'Automated categorization of transaction exports for fast budget insights.',
      'Generated goal-aware summaries to highlight spending patterns.',
      'Delivered a prototype workflow ready for forecasting extensions.',
    ],
    whatIDid: [
      'Built the ingestion pipeline for CSV exports and normalization.',
      'Implemented LLM-assisted categorization with readable explanations.',
      'Shaped the UI for budget snapshots and alerts.',
    ],
    tradeoffs: 'Prioritized explainability and auditability over aggressive automation.',
  },

  {
    id: 'streamer-university',
    title: 'Streamer University',
    summary: 'Unity narrative + stats game with modular event-card and minigame systems.',
    description:
      'Built a 2D visual-novel-style stats management game in Unity with an event-card system supporting branching outcomes, flags, and fame/stress deltas. Integrated multiple minigames into the progression loop and shipped a polished gold release with a multi-developer team.',
    tags: ['Game Dev', 'Systems', 'Team Project', 'School Project'],
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
      'Delivered a branching narrative system with tunable outcomes.',
      'Integrated minigames into the progression loop.',
    ],
    whatIDid: [
      'Implemented the event-card system and stat deltas.',
      'Built minigame hooks and progression balancing.',
      'Coordinated asset integration and bug triage.',
    ],
    tradeoffs: 'Focused on a 2D pipeline for reliable performance and fast iteration.',
  },

  {
    id: 'fairdraw',
    title: 'FairDraw',
    summary: 'Multi-role Android app for event lotteries with QR flows and Firebase.',
    description:
      'Built a multi-role Android application (Entrant / Organizer / Admin) supporting event creation, waitlists, and lottery-based selection workflows. Integrated Firebase Firestore and Storage, implemented QR-based flows, and validated core user journeys with Espresso and JUnit tests.',
    tags: ['Mobile', 'Backend', 'Testing', 'Team Project', 'School Project'],
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
    tradeoffs: 'Optimized core workflows first; push notifications and analytics were deferred.',
  },

  // ===============================
  // Systems / AI / Academic Projects
  // ===============================
  {
    id: 'os-labs',
    title: 'Operating Systems Labs (CMPUT 379)',
    summary: 'Low-level OS components, concurrency, and virtual memory simulations in C.',
    description:
      'Implemented core operating system concepts in C under Linux, including process and thread abstractions, synchronization primitives, and virtual memory simulations. Analyzed correctness and performance trade-offs through systematic testing.',
    tags: ['Systems', 'Concurrency', 'Low-Level', 'School Project'],
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
    title: 'Bullying Classifier Model',
    summary: 'BERT-based NLP model for detecting bullying and harmful language.',
    description:
      'Fine-tuned a BERT-based NLP classifier to detect bullying in social media text. Built evaluation pipelines with precision, recall, and F1-score, and designed the architecture for real-time and multi-modal extensions.',
    tags: ['AI', 'NLP', 'ML', 'Team Project', 'Hackathon'],
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
    tradeoffs: 'Focused on text-only signals; multi-modal inputs were deferred.',
  },

  {
    id: 'lookmate',
    title: 'LookMate',
    summary: 'AI-powered style assistant with weather-aware outfit recommendations.',
    description:
      'Built a personalized style assistant using React and Next.js, integrating OpenAI APIs and AWS Lambda to generate outfit recommendations. Deployed on Vercel with cloud-backed services.',
    tags: ['AI', 'Full-Stack', 'Team Project'],
    tech: ['React', 'Next.js', 'TypeScript', 'OpenAI API', 'AWS Lambda', 'Vercel'],
    links: [{ label: 'GitHub', href: 'https://github.com/boxerarakelyan777/LookMate' }],
    image: '/projects/placeholder.svg',
    status: 'Completed',
    impact: [
      'Generated personalized outfit recommendations with weather context.',
      'Delivered a full-stack flow from prompt to suggestion.',
    ],
    whatIDid: [
      'Built the Next.js UI and serverless API integrations.',
      'Connected OpenAI API and Lambda for the recommendation flow.',
    ],
    tradeoffs: 'Kept rule-based guardrails minimal to move quickly.',
  },

  {
    id: 'memorix-ai',
    title: 'MemorixAI',
    summary: 'AI-powered flashcard web app using RAG and LLM APIs.',
    description:
      'Built an AI-powered flashcard application using Llama 3 via Groq, handling backend APIs and multi-modal input features. Applied RAG techniques using LangChain to improve learning relevance.',
    tags: ['AI', 'Full-Stack', 'RAG', 'Team Project'],
    tech: ['React', 'Next.js', 'TypeScript', 'LangChain', 'Groq API', 'Firebase'],
    links: [{ label: 'GitHub', href: 'https://github.com/boxerarakelyan777/MemorixAI' }],
    image: '/projects/placeholder.svg',
    status: 'Completed',
    impact: [
      'Improved flashcard relevance with RAG-assisted generation.',
      'Supported multi-modal inputs for study sessions.',
    ],
    whatIDid: [
      'Built the API layer and integrated LangChain pipelines.',
      'Implemented retrieval flow using Groq Llama 3.',
    ],
    tradeoffs: 'Optimized for accuracy; real-time collaboration was deferred.',
  },

  {
    id: 'keepr',
    title: 'Keepr',
    summary: 'Smart pantry management app with AI-generated recipes.',
    description:
      'Developed a pantry management web app using Firebase for storage and OpenAI-powered recipe generation based on available ingredients.',
    tags: ['AI', 'Full-Stack'],
    tech: ['React', 'Next.js', 'TypeScript', 'Firebase', 'OpenAI API'],
    links: [{ label: 'GitHub', href: 'https://github.com/davephoenix360/keepr' }],
    image: '/projects/placeholder.svg',
    status: 'Completed',
    impact: [
      'Reduced pantry planning friction with AI recipe generation.',
      'Centralized ingredient tracking with Firebase.',
    ],
    whatIDid: [
      'Built the React UI and Firebase data layer.',
      'Integrated OpenAI API for recipe suggestions.',
    ],
    tradeoffs: 'Scoped to core pantry flows; grocery integrations were deferred.',
  },

  {
    id: 'guide-bot',
    title: 'Guide Bot',
    summary: 'Arduino-powered navigation robot for visually impaired users.',
    description:
      'Led a team to build an Arduino-based guide robot using Python and C++. Implemented outdoor navigation using Google Maps and OpenRouteService APIs to support precise movement between saved locations.',
    tags: ['Robotics', 'Systems', 'Embedded', 'Team Project', 'Hackathon'],
    tech: ['Python', 'C++', 'Arduino', 'Google Maps API', 'OpenRouteService API'],
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/hacked-2024' }],
    image: '/projects/placeholder.svg',
    status: 'Completed',
    impact: [
      'Demonstrated navigation assistance for visually impaired users.',
      'Integrated routing APIs for outdoor path planning.',
    ],
    whatIDid: [
      'Implemented route planning with mapping APIs.',
      'Coordinated hardware and software integration on Arduino.',
    ],
    tradeoffs: 'Prototype optimized for outdoor navigation; indoor SLAM was deferred.',
  },
];

export const projectTags = Array.from(new Set(projects.flatMap((project) => project.tags)));
