import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ============================================================
      // Minimal dark + gold palette
      //
      //   - bg (near-black, blue-tinted)
      //   - surface (slightly raised)
      //   - text (off-white, not pure white)
      //   - textMuted (gray for body copy)
      //   - border (subtle)
      //   - gold (#FFB300) — the only accent
      // ============================================================
      colors: {
        bg: '#0a0a14',
        surface: '#13131f',
        surfaceRaised: '#1a1a2a',
        text: '#f0f0ff',
        textMuted: '#8a8aa8',
        textSubtle: '#5a5a78',
        border: '#2a2a40',
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
        soft: '0 8px 30px rgba(0, 0, 0, 0.4)',
        goldGlow: '0 0 24px rgba(255, 179, 0, 0.15)',
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
