import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ============================================================
      // Minimal neutral palette — single gold accent
      //
      //   Backgrounds: pure neutral grayscale (no blue tint)
      //   Text: off-white, gray scale (no purple)
      //   Border: barely-there line
      //   Gold (#FFB300): the ONLY chromatic accent
      // ============================================================
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        surfaceRaised: '#161616',
        text: '#ededed',
        textMuted: '#9a9a9a',
        textSubtle: '#6a6a6a',
        border: '#222222',
        gold: '#FFB300',
        goldSoft: '#FFD980',
        goldInk: '#7a5a00',
      },
      fontFamily: {
        // Display: a clean, modern sans (Inter) for hero
        // Body: same Inter for prose readability
        // Mono / shell: JetBrains Mono for shell bits, code, RPG bars
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
        shell: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        // Wide tracking for uppercase eyebrows
        wide2: '0.18em',
        wide3: '0.30em',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.5)',
        goldGlow: '0 0 18px rgba(255, 179, 0, 0.10)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-gold': 'pulseGold 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
