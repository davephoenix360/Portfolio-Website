import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type CounterProps = {
  /** Integer to count up to (e.g. 11). */
  value: number;
  /** Text before the number, e.g. '~' for '~90'. */
  prefix?: string;
  /** Text after the number, e.g. ' yrs'. */
  suffix?: string;
  /** Animation duration in seconds. Default 1.2. */
  duration?: number;
  /** Set false to skip animation and render the final value immediately. Useful for range labels like '20-30%'. */
  animate?: boolean;
  className?: string;
};

/**
 * Counter — counts up from 0 to `value` when scrolled into view.
 * Uses requestAnimationFrame for reliability (no Framer Motion value-chain gotchas).
 * Respects prefers-reduced-motion: shows the final value immediately.
 *
 * Used in "Year-to-date returns" on Home — gives each stat a satisfying
 * "moment" when you scroll to it (the music beat: every scroll = new visual).
 */
const Counter: React.FC<CounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1.2,
  animate: shouldAnimate = true,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState(shouldAnimate ? 0 : value);

  useEffect(() => {
    if (!inView || !shouldAnimate) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start: number | null = null;
    const totalMs = duration * 1000;

    // ease-out-cubic — fast at the start, slow at the end (matches `motion.ts` easing)
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / totalMs, 1);
      const current = Math.round(value * ease(progress));
      setDisplay(current);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, shouldAnimate]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default Counter;