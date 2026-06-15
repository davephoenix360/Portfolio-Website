import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ============================================================
      // "Old-school money" color palette
      //
      // Light mode = the $100 bill + parchment feel.
      //   - parchment cream backgrounds
      //   - ink-black text
      //   - deep vault green for surfaces & actions
      //   - antique gold for accents (sparingly — like an embossed seal)
      //
      // Dark mode = a private banker's vault at night.
      //   - vault dark (deep emerald-black) backgrounds
      //   - cream text
      //   - lighter vault green for surfaces
      //   - bright antique gold for accents (catches the light)
      // ============================================================
      colors: {
        parchment: '#F4ECD8',
        parchmentSoft: '#FBF6E7',
        ink: '#1A1A1A',
        inkSoft: '#3A3A3A',
        vault: '#0F4C3A', // deep vault green
        vaultSoft: '#1B5E48',
        vaultInk: '#062019',
        gold: '#B8860B', // dark gold (restrained, like an embossed seal)
        goldSoft: '#D4AF37', // lighter for dark mode
        goldInk: '#6B4F08',
        ledger: '#6B7280', // muted gray for ledger lines + captions
        ledgerDark: '#4A5568',
        success: '#1F6B3A',
        danger: '#8B1A1A',
      },
      fontFamily: {
        // "old money" display: a refined serif (Playfair Display)
        // Body: clean modern sans (Inter) for legibility at small sizes
        // Mono: ledger / brokerage-statement monospace
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        // Banking documents use generous letter-spacing on small caps
        ledger: '0.18em',
        wide2: '0.22em',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 76, 58, 0.08)',
        vault: '0 14px 40px -16px rgba(6, 32, 25, 0.35)',
        emboss: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        // A subtle "ledger" striped paper feel
        'ledger-lines':
          'repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(15,76,58,0.04) 23px, rgba(15,76,58,0.04) 24px)',
        'ledger-lines-dark':
          'repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(212,175,55,0.05) 23px, rgba(212,175,55,0.05) 24px)',
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'float-y': 'floatY 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3.5s ease-in-out infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
