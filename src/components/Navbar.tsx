import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const links = [
  { href: '#about', cmd: 'cd about', label: 'About' },
  { href: '#projects', cmd: 'cd projects', label: 'Projects' },
  { href: '#experience', cmd: 'cd experience', label: 'Experience' },
  { href: '#stats', cmd: 'cd stats', label: 'Stats' },
  { href: '#contact', cmd: 'cd contact', label: 'Contact' },
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
      className={`sticky top-[28px] z-30 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-gold/40 bg-gold/10 font-bold text-gold">
            D
          </span>
          <span className="hidden text-text sm:inline">
            <span className="text-gold">~</span>
            <span className="mx-1 text-textSubtle">$</span>
            <span className="font-bold">cd</span>
            <span className="text-textMuted">~/{profile.name.split(' ')[0].toLowerCase()}</span>
          </span>
        </a>

        <ul className="flex items-center gap-1 font-mono sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2 py-1.5 text-xs text-textMuted transition hover:text-gold sm:px-3"
              >
                <span className="text-gold">$</span>
                <span className="ml-1">{link.cmd.replace('cd ', '')}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-gold/40 bg-gold/5 px-3 py-1.5 text-xs uppercase tracking-wide2 text-gold transition hover:bg-gold/10 sm:ml-2"
            >
              open résumé
              <span aria-hidden>↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
