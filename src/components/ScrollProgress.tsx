import { useEffect, useState } from 'react';

/**
 * ScrollProgress — a thin gold line at the very top of the viewport that
 * fills as you scroll down the page. Brand-appropriate (gold = money meter),
 * always visible, never in the way.
 *
 * The "music beat" analog: it's the conductor's baton. You always know where
 * you are in the composition.
 *
 * Respects prefers-reduced-motion: shows a static thin line (no width animation).
 */
const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-[3px] bg-vault/5 dark:bg-gold/5"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-gold via-goldSoft to-gold transition-[width] duration-150 ease-out dark:from-goldSoft dark:via-gold dark:to-goldSoft"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

export default ScrollProgress;