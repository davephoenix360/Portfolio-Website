import { profile } from '../data/profile';
import { GithubIcon, LinkedInIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-vault/20 bg-parchmentSoft/80 py-10 backdrop-blur-md dark:border-gold/20 dark:bg-vaultInk/80">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-ledger text-goldInk dark:text-goldSoft">
            Wire Details
          </div>
          <div className="font-display text-lg font-semibold text-vault dark:text-parchment">
            {profile.name}
          </div>
          <div className="text-sm text-inkSoft dark:text-parchment/70">
            {profile.tagline}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            className="pill"
            href={`mailto:${profile.emailPersonal}`}
            aria-label="Personal Email"
          >
            <MailIcon /> Personal
          </a>
          <a
            className="pill"
            href={`mailto:${profile.emailSchool}`}
            aria-label="School Email"
          >
            <MailIcon /> School
          </a>
          <a
            className="pill"
            href={profile.socials.find((s) => s.label === 'GitHub')?.href}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            className="pill"
            href={profile.socials.find((s) => s.label === 'GitHub_School')?.href}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> School GH
          </a>
          <a
            className="pill"
            href={profile.socials.find((s) => s.label === 'LinkedIn')?.href}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>

      <div className="section-shell pt-6">
        <div className="flex flex-col items-start justify-between gap-2 font-mono text-[10px] uppercase tracking-ledger text-ink/60 sm:flex-row sm:items-center dark:text-parchment/50">
          <div>© {new Date().getFullYear()} · {profile.monogram} {profile.name} · {profile.location}</div>
          <div>Compound interest applied · Built with React + Three.js + a little too much espresso</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
