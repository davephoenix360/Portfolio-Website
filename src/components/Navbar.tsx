import { useEffect, useState } from 'react';
import { profile } from '../data/profile';


const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#stats', label: 'Stats' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-wide2 text-text"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-gold/40 bg-gold/10 text-gold">
            D
          </span>
          <span className="hidden sm:inline">
            {profile.name.split(' ')[0]}
            <span className="ml-1 text-textMuted">/ {profile.name.split(' ').slice(1).join(' ')}</span>
          </span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2 py-1.5 font-mono text-xs uppercase tracking-wide2 text-textMuted transition hover:text-gold sm:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-gold/40 bg-gold/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wide2 text-gold transition hover:bg-gold/10 sm:ml-2"
            >
              Résumé
              <span aria-hidden>↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
