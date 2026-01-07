export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  headline: string;
  tagline: string;
  availability?: string;
  location: string;
  emailPersonal: string;
  emailSchool: string;
  resumeUrl: string;
  aboutShort: string;
  aboutLong: string;
  socials: SocialLink[];
};

export const profile: Profile = {
  name: 'Diepreye Charles-Daniel',

  headline: 'Software Engineering Co-op Student · University of Alberta',

  tagline:
    'AI / Backend / DevOps / Full-Stack — building reliable systems with clean architecture and strong engineering fundamentals.',

  availability: 'Available for Summer 2026 internships (8-month term)',

  location: 'Edmonton, AB · Open to Summer 2026 internships',

  emailPersonal: 'davediepreye05@gmail.com',

  emailSchool: 'diepreye@ualberta.ca', // university email

  resumeUrl: '/assets/Resume.pdf',

  aboutShort:
    'I design and ship resilient, testable software with an emphasis on clarity, automation, and production readiness.',

  aboutLong:
    "I'm a Software Engineering Co-op student focused on backend systems, DevOps workflows, and AI-enabled features. My recent work spans full-stack products, cloud-integrated services, and automation pipelines, with a strong emphasis on maintainability, testing, and observability. I enjoy owning features end-to-end and shipping quickly without compromising code quality.",

  socials: [
    { label: 'GitHub', href: 'https://github.com/davephoenix360' },
    { label: 'GitHub_School', href: 'https://github.com/DIEPREYECD' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diepreyecd' },
  ],
};
