export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  aboutShort: string;
  aboutLong: string;
  socials: SocialLink[];
};

export const profile: Profile = {
  name: 'Diepreye Charles-Daniel',
  headline: 'Software Engineering Co-op student · University of Alberta',
  tagline: 'AI / Backend / DevOps / Full-Stack — shipping reliable systems with clean architecture.',
  location: 'Edmonton, AB · Open to Summer 2026 internships',
  email: 'hello@diepreyecd.dev', // TODO: replace with your preferred inbox
  resumeUrl: '/assets/Resume.pdf', // TODO: update if you have a newer resume
  aboutShort:
    'I build resilient, testable systems that balance developer experience with production reliability.',
  aboutLong:
    "I'm driven by clean architecture, automation, and thoughtful developer tooling. My recent work spans AI-backed features, backend services, DevOps pipelines, and full-stack product iterations. I enjoy shipping fast without sacrificing code quality or observability.",
  socials: [
    { label: 'GitHub', href: 'https://github.com/davephoenix360' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diepreyecd' }, // TODO: confirm URL
    { label: 'Twitter', href: 'https://x.com/diepreyecd' }, // TODO: confirm handle
  ],
};
