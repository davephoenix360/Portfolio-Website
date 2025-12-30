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
    image: '/assets/Nextep Full Logo (1).png',
    status: 'Iterating',
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
    image: '/assets/Ace Budget AI.png',
    status: 'Prototype',
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
    image: '/assets/Streamer University.png',
    status: 'Shipped',
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
    image: '/assets/FairDraw.png',
    status: 'Shipped',
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
    status: 'Completed',
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
    status: 'Completed',
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
    status: 'Completed',
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
    status: 'Completed',
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
    status: 'Completed',
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
    status: 'Completed',
  },
];

export const projectTags = Array.from(new Set(projects.flatMap((project) => project.tags)));
