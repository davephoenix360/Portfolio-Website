import { profile } from '../data/profile';
import { GithubIcon, LinkedInIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 py-10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">Stay in touch</div>
          <div className="text-lg font-semibold">{profile.name}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">{profile.tagline}</div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="pill inline-flex items-center gap-2"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            <MailIcon />
            Email
          </a>
          <a
            className="pill inline-flex items-center gap-2"
            href={profile.socials.find((s) => s.label === 'GitHub')?.href}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            className="pill inline-flex items-center gap-2"
            href={profile.socials.find((s) => s.label === 'LinkedIn')?.href}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
