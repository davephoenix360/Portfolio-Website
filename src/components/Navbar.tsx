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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when the viewport grows past the sm breakpoint so
  // we never end up with a stale "open" state hiding nothing on desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Close the menu on Escape, and lock body scroll while it's open so the
  // page behind doesn't scroll away under the sheet.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-[28px] z-30 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 font-mono text-sm"
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

        {/* Desktop nav — the 5 section links + résumé fit comfortably at sm+. */}
        <ul className="hidden items-center gap-2 font-mono md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-xs text-textMuted transition hover:text-gold"
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
              className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-gold/40 bg-gold/5 px-3 py-2 text-xs uppercase tracking-wide2 text-gold transition hover:bg-gold/10"
            >
              open résumé
              <span aria-hidden>↗</span>
            </a>
          </li>
        </ul>

        {/* Compact actions for < md: résumé shortcut + hamburger. */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-gold/40 bg-gold/5 px-2.5 py-2 font-mono text-xs uppercase tracking-wide2 text-gold transition hover:bg-gold/10"
          >
            résumé
            <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="tty-launcher flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface/60 font-mono text-sm text-gold transition hover:border-gold/60"
          >
            <span aria-hidden>{menuOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet — absolutely positioned dropdown under the bar. */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-b border-border bg-bg/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-5xl flex-col px-2 pb-3 font-mono">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-textMuted transition hover:bg-surface/60 hover:text-gold"
                >
                  <span className="text-gold">$</span>
                  <span>{link.cmd.replace('cd ', '')}</span>
                  <span aria-hidden className="ml-auto text-textSubtle">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;