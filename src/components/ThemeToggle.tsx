import { MoonIcon, SunIcon } from './icons';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-ink dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      aria-label="Toggle color mode"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      <span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'} mode</span>
    </button>
  );
};

export default ThemeToggle;
