import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import { ArrowIcon } from './icons';

const links = [
  { to: '/', label: 'The Vault', short: 'Vault' },
  { to: '/projects', label: 'Holdings', short: 'Holdings' },
  { to: '/experience', label: 'Career Ledger', short: 'Ledger' },
  { to: '/skills', label: 'Receipts', short: 'Skills' },
  { to: '/about', label: 'The Story', short: 'Story' },
  { to: '/contact', label: 'Wire Transfer', short: 'Contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-vault/20 bg-parchmentSoft/80 backdrop-blur-md dark:border-gold/20 dark:bg-vaultInk/80">
      <nav className="section-shell flex items-center gap-3 py-3">
        <div className="flex flex-1 items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            {/* The "vault seal" — a small coin with the monogram */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldInk font-display text-sm font-bold text-vaultInk shadow-emboss ring-2 ring-goldInk/40 dark:from-goldSoft dark:to-gold dark:text-vaultInk">
              {profile.monogram}
            </div>
            <div className="leading-tight">
              <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                The Vault
              </div>
              <div className="font-display text-base font-semibold text-vault dark:text-parchment">
                {profile.name.split(' ')[0]} {profile.name.split(' ').slice(-1)[0]}
              </div>
            </div>
          </Link>

          <button
            className="ml-auto rounded-full border border-vault/30 bg-parchment px-3 py-2 font-mono text-xs uppercase tracking-wider text-vault shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:text-goldInk sm:hidden dark:border-gold/30 dark:bg-vaultInk dark:text-parchment dark:hover:border-goldSoft dark:hover:text-goldSoft"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            Menu
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 font-mono text-xs uppercase tracking-wider transition hover:-translate-y-0.5 ${
                    isActive
                      ? 'border border-gold/40 bg-gold/10 text-goldInk dark:border-goldSoft/40 dark:bg-goldSoft/10 dark:text-goldSoft'
                      : 'text-ink/70 hover:text-goldInk dark:text-parchment/70 dark:hover:text-goldSoft'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <a
            className="coin-btn"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Résumé
            <ArrowIcon />
          </a>
        </div>
      </nav>

      {open && (
        <div className="section-shell pt-0 sm:hidden">
          <div className="card-surface flex flex-col gap-2 p-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition hover:bg-gold/10 ${
                    isActive ? 'text-goldInk dark:text-goldSoft' : 'text-ink/80 dark:text-parchment/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between gap-3 pt-2">
              <ThemeToggle />
              <a
                className="coin-btn"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
