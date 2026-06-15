import { MoonIcon, SunIcon } from './icons';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-vault/30 bg-parchment px-3 py-2 font-mono text-xs uppercase tracking-wider text-vault shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:text-goldInk dark:border-gold/30 dark:bg-vaultInk dark:text-parchment dark:hover:border-goldSoft dark:hover:text-goldSoft"
      aria-label="Toggle color mode"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      <span className="hidden sm:inline">{theme === 'light' ? 'Vault' : 'Parchment'}</span>
    </button>
  );
};

export default ThemeToggle;
