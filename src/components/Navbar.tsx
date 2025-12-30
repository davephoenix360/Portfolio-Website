import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import { ArrowIcon } from './icons';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
      <nav className="section-shell flex items-center gap-3 py-4">
        <div className="flex flex-1 items-center gap-3">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
              {profile.name.charAt(0)}
            </div>
            <div className="leading-tight">
              <div className="text-sm text-slate-500 dark:text-slate-300">Portfolio</div>
              <div>{profile.name}</div>
            </div>
          </Link>
          <button
            className="ml-auto rounded-full border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-ink dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            Menu
          </button>
          <div className="hidden items-center gap-2 sm:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:text-accent ${
                    isActive
                      ? 'bg-slate-100 text-ink dark:bg-slate-800 dark:text-white'
                      : 'text-slate-600 dark:text-slate-200'
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
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accent"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume
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
                  `rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                    isActive ? 'text-accent' : 'text-slate-700 dark:text-slate-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between gap-3 pt-2">
              <ThemeToggle />
              <a
                className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accent"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
