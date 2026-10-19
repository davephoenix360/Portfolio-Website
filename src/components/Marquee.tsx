import React, { useEffect, useState } from 'react';

/* ============================================================
   Marquee — a generic infinite-scroll wrapper.

   How it works:
   1. Renders the children TWICE in a flex row (so the content
      fills 200% of the container width).
   2. Animates the row from translateX(0) to translateX(-50%)
      over `duration` seconds, with linear timing.
   3. When the first copy is fully off-screen, the second copy
      has come into its place — visually seamless.

   Pauses on hover for accessibility, and respects
   prefers-reduced-motion (renders the content without animation).
   ============================================================ */

interface MarqueeProps {
  children: React.ReactNode;
  /** Seconds to complete one full loop. Lower = faster. */
  duration?: number;
  /** Direction of scroll. */
  reverse?: boolean;
  /** Pause animation on hover. */
  pauseOnHover?: boolean;
  /** Optional className for the outer container. */
  className?: string;
}

const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

const Marquee: React.FC<MarqueeProps> = ({
  children,
  duration = 40,
  reverse = false,
  pauseOnHover = true,
  className = '',
}) => {
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);

  // If reduced-motion: render the content once, no animation, no
  // duplicate (no point duplicating if nothing is moving).
  if (reduced) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex w-max items-center gap-4">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className="flex w-max items-center gap-4 marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {/* Duplicate the children for seamless looping. */}
        <div className="flex shrink-0 items-center gap-4">{children}</div>
        <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
