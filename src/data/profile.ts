export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  /** Monogram / short handle used in the vault seal */
  monogram: string;
  headline: string;
  tagline: string;
  /** The longer, more playful hero pitch */
  pitch: string;
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
  monogram: 'DCD',

  headline: 'Software Engineering Co-op · University of Alberta · Class of 2027',

  tagline:
    'Backend, DevOps, and the occasional AI experiment. I write the kind of code that compounds.',

  pitch:
    "Hi — I'm Diepreye. I build the reliable parts: backend services, automation pipelines, and the tools that make the rest of the team faster. The work is unglamorous on a good day and essential on a bad one. I'm into that. (Also, yes, I know I'm 21 and writing about money. We'll get to the jokes.)",

  availability: '⚡  Accepting offers · Full-time starting Summer 2027',

  location: 'Edmonton, Alberta, Canada',

  emailPersonal: 'davediepreye05@gmail.com',

  emailSchool: 'diepreye@ualberta.ca',

  resumeUrl: 'https://www.overleaf.com/read/xczvtpbcwddz#bb4705',

  aboutShort:
    "21, in Edmonton, building backend systems that don't wake people up at 3am. SWE Co-op at UAlberta. Currently writing code that mostly works, sometimes ships, and once in a while compounds.",

  aboutLong:
    "I design and ship resilient, testable software with an emphasis on clarity, automation, and the boring parts that actually matter. My recent work spans full-stack products, cloud-integrated services, AI-enabled features, and DevOps workflows that get out of the way. I like owning features end-to-end, and I like being the person who gets paged when something breaks — that's usually how you learn the most.\n\nOutside of work I'm usually chasing some side project that's 30% done (always), losing at online chess, or reorganizing the same three folders in my home directory.",

  socials: [
    { label: 'GitHub', href: 'https://github.com/davephoenix360' },
    { label: 'GitHub_School', href: 'https://github.com/DIEPREYECD' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diepreyecd' },
  ],
};
