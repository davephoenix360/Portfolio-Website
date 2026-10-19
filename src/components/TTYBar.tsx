import { useEffect, useState } from 'react';

/* ============================================================
   TTYBar — thin status bar at the very top of the page.
   Pure decoration. Looks like the row at the top of a tmux pane.
   ============================================================ */

const TTYBar: React.FC = () => {
  const [now, setNow] = useState<string>('');

  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="tty-bar sticky top-0 z-40 flex items-center justify-between border-b border-border bg-bg/90 px-4 py-1.5 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-gold">tty1</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden sm:inline">diepreyecd@dev</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden md:inline">up 1.5y</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">load 0.04 0.12 0.08</span>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="hidden sm:inline">NORMAL</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden md:inline">en-CA</span>
        <span className="hidden md:inline">·</span>
        <span className="text-text tabular">{now}</span>
      </div>
    </div>
  );
};

export default TTYBar;
