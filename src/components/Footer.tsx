import { profile } from '../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-border bg-bg">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-1">
          <div className="font-mono text-[10px] uppercase tracking-wide2 text-textSubtle">
            © {new Date().getFullYear()} {profile.name}
          </div>
          <div className="font-mono text-xs text-textMuted">
            {profile.location} ·{' '}
            <a
              href={`mailto:${profile.emailPersonal}`}
              className="text-gold transition hover:text-goldSoft"
            >
              {profile.emailPersonal}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wide2 text-textMuted transition hover:text-gold"
            >
              {social.label.replace('_', ' ')} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
