import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { skillGroups } from '../data/skills';

/* ============================================================
   Terminal — a real interactive shell.
   Floating button bottom-right opens a tty-styled modal.
   Commands: help, ls, cd, cat, whoami, pwd, clear, skills, etc.
   ============================================================ */

type Line = {
  id: number;
  kind: 'echo' | 'ok' | 'err' | 'dim' | 'accent' | 'raw';
  text: string;
};

const SECTIONS = [
  { id: 'top', name: '~', label: 'home' },
  { id: 'about', name: 'about', label: 'about' },
  { id: 'projects', name: 'projects', label: 'projects' },
  { id: 'experience', name: 'experience', label: 'experience' },
  { id: 'stats', name: 'stats', label: 'character sheet' },
  { id: 'contact', name: 'contact', label: 'contact' },
];

const HELP = [
  { cmd: 'help', desc: 'show this help' },
  { cmd: 'ls', desc: 'list sections' },
  { cmd: 'cd <section>', desc: 'navigate to a section' },
  { cmd: 'pwd', desc: 'print current section' },
  { cmd: 'whoami', desc: 'show profile summary' },
  { cmd: 'skills', desc: 'list skill groups' },
  { cmd: 'projects', desc: 'list all projects' },
  { cmd: 'cat <project>', desc: 'show a project (try: cat nexstepper)' },
  { cmd: 'contact', desc: 'show contact info' },
  { cmd: 'github | linkedin | email', desc: 'open a link' },
  { cmd: 'resume', desc: 'open résumé' },
  { cmd: 'date', desc: 'current time' },
  { cmd: 'echo <text>', desc: 'echo back' },
  { cmd: 'clear', desc: 'clear the terminal' },
  { cmd: 'exit', desc: '(just kidding)' },
];

const PROJECT_BY_ID: Record<string, (typeof projects)[number]> = projects.reduce(
  (acc, p) => {
    acc[p.id] = p;
    acc[p.title.toLowerCase()] = p;
    return acc;
  },
  {} as Record<string, (typeof projects)[number]>,
);

/* ============================================================
   TerminalButton — the floating, animated launcher.

   Goals:
   1. Pull the eye — the terminal is a hidden feature, the
      button is the only way to find it.
   2. Stay on-brand — uses the same shell aesthetic, not a
      stock "click me" CTA.
   3. Don't be annoying — animations respect reduced-motion
      and pause when the terminal is already open.
   ============================================================ */

const TIP_MESSAGES = [
  'try "help"',
  'cat nexstepper',
  'cd ./projects',
  'whoami',
  'click me',
  'type something',
];

interface TerminalButtonProps {
  open: boolean;
  onToggle: () => void;
  reducedMotion: boolean | null;
}

const TerminalButton: React.FC<TerminalButtonProps> = ({
  open,
  onToggle,
  reducedMotion,
}) => {
  // Cycling typed-message animation
  const [msgIndex, setMsgIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  // One-time attention pulse on mount
  const [justMounted, setJustMounted] = useState(true);
  useEffect(() => {
    if (reducedMotion) return;
    const t = setTimeout(() => setJustMounted(false), 1400);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  // Typing cycle — pause animation while terminal is open
  useEffect(() => {
    if (reducedMotion || open) return;
    const target = TIP_MESSAGES[msgIndex];
    const isTyping = phase === 'typing';
    const isDeleting = phase === 'deleting';

    const delay = isTyping
      ? 75 + Math.random() * 40 // human-ish typing jitter
      : isDeleting
      ? 35
      : 0;

    const timeout = setTimeout(() => {
      if (phase === 'typing') {
        const next = target.slice(0, typed.length + 1);
        setTyped(next);
        if (next === target) {
          setTimeout(() => setPhase('pausing'), 0);
        }
      } else if (phase === 'pausing') {
        // Hold the full message for a beat, then start deleting
        setTimeout(() => setPhase('deleting'), 1400);
      } else if (phase === 'deleting') {
        const next = target.slice(0, typed.length - 1);
        setTyped(next);
        if (next === '') {
          setMsgIndex((i) => (i + 1) % TIP_MESSAGES.length);
          setPhase('typing');
        }
      }
    }, delay || (phase === 'pausing' ? 1400 : 0));

    return () => clearTimeout(timeout);
  }, [typed, phase, msgIndex, open, reducedMotion]);

  // When terminal opens, snap to a static message
  const labelText = reducedMotion
    ? TIP_MESSAGES[0]
    : open
    ? TIP_MESSAGES[msgIndex]
    : typed;

  return (
    <button
      onClick={onToggle}
      aria-label={open ? 'Close terminal' : 'Open terminal'}
      className={`tty-launcher fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-bg/90 px-4 py-2.5 font-mono text-xs uppercase tracking-wide2 text-gold shadow-goldGlow backdrop-blur transition-[border-color,background-color,box-shadow] duration-200 hover:border-gold hover:bg-surface ${
        justMounted ? 'tty-launcher-intro' : ''
      } ${open ? 'tty-launcher-active' : ''}`}
    >
      <span>&gt;_</span>
      <span className="hidden sm:inline-block sm:min-w-[140px]">
        {labelText}
        {!reducedMotion && !open && <span className="tty-launcher-caret" aria-hidden="true" />}
      </span>
      <span className="ml-1 hidden h-1.5 w-1.5 animate-pulse rounded-full bg-gold sm:inline-block" />
    </button>
  );
};

const Terminal: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Line[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdHistIdx, setCmdHistIdx] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lineIdRef = useRef(0);

  // Welcome banner
  useEffect(() => {
    if (open && history.length === 0) {
      const banner: Line[] = [
        { id: ++lineIdRef.current, kind: 'raw', text: '' },
        {
          id: ++lineIdRef.current,
          kind: 'accent',
          text: '  ╔══════════════════════════════════════════╗',
        },
        {
          id: ++lineIdRef.current,
          kind: 'accent',
          text: '  ║   diepreyecd@dev — interactive shell    ║',
        },
        {
          id: ++lineIdRef.current,
          kind: 'accent',
          text: '  ╚══════════════════════════════════════════╝',
        },
        {
          id: ++lineIdRef.current,
          kind: 'dim',
          text: '  Type "help" to see what you can do. Esc to close.',
        },
        { id: ++lineIdRef.current, kind: 'raw', text: '' },
      ];
      setHistory(banner);
    }
  }, [open, history.length]);

  // Auto-scroll output to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const addLine = useCallback((kind: Line['kind'], text: string) => {
    setHistory((prev) => [
      ...prev,
      { id: ++lineIdRef.current, kind, text },
    ]);
  }, []);

  const addLines = useCallback((lines: { kind: Line['kind']; text: string }[]) => {
    setHistory((prev) => [
      ...prev,
      ...lines.map((l) => ({ ...l, id: ++lineIdRef.current })),
    ]);
  }, []);

  const navigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
      return true;
    }
    return false;
  }, []);

  const run = useCallback(
    (raw: string) => {
      const line = raw.trim();
      // Echo
      setHistory((prev) => [
        ...prev,
        {
          id: ++lineIdRef.current,
          kind: 'echo',
          text: `~ $ ${line}`,
        },
      ]);

      if (!line) return;

      // Add to command history (de-duped, latest at end)
      setCmdHistory((prev) => {
        if (prev[prev.length - 1] === line) return prev;
        return [...prev, line];
      });
      setCmdHistIdx(-1);

      const [cmd, ...args] = line.split(/\s+/);
      const arg = args.join(' ').toLowerCase();
      const argLower = arg.toLowerCase();

      switch (cmd.toLowerCase()) {
        case 'help':
        case '?': {
          addLine('dim', '');
          addLine('accent', '  available commands:');
          for (const { cmd: c, desc } of HELP) {
            addLine('echo', `    ${c.padEnd(22)}  ${desc}`);
          }
          addLine('dim', '');
          break;
        }
        case 'ls': {
          addLine('dim', '');
          addLine('accent', '  sections:');
          for (const s of SECTIONS) {
            addLine('echo', `    ${s.id.padEnd(14)}  ${s.label}`);
          }
          addLine('dim', '');
          addLine('dim', '  try: cd projects   or   cat nexstepper');
          addLine('dim', '');
          break;
        }
        case 'cd': {
          if (!arg) {
            addLine('err', 'cd: missing operand');
            break;
          }
          const target = SECTIONS.find(
            (s) => s.id === argLower || s.name === argLower || s.label === argLower,
          );
          if (target) {
            addLine('ok', `→ ${target.id}`);
            navigate(target.id);
          } else {
            addLine('err', `cd: no such section: ${arg}`);
            addLine('dim', '  try: ls');
          }
          break;
        }
        case 'pwd': {
          const current = SECTIONS.find((s) => s.id === 'top') || SECTIONS[0];
          addLine('echo', current.id);
          break;
        }
        case 'whoami': {
          addLines([
            { kind: 'dim', text: '' },
            { kind: 'accent', text: `  ${profile.name}` },
            { kind: 'echo', text: `  ${profile.headline}` },
            { kind: 'echo', text: `  ${profile.location}` },
            { kind: 'echo', text: `  email: ${profile.emailPersonal}` },
            { kind: 'dim', text: '' },
          ]);
          break;
        }
        case 'skills': {
          addLine('dim', '');
          for (const g of skillGroups) {
            addLine('accent', `  ${g.title}:`);
            addLine('echo', `    ${g.items.join(' · ')}`);
          }
          addLine('dim', '');
          break;
        }
        case 'projects': {
          addLine('dim', '');
          for (const p of projects) {
            addLine('echo', `  ${p.id.padEnd(14)}  ${p.title}  (${p.status ?? 'active'})`);
          }
          addLine('dim', '');
          addLine('dim', '  try: cat nexstepper');
          addLine('dim', '');
          break;
        }
        case 'cat': {
          if (!arg) {
            addLine('err', 'cat: missing file');
            addLine('dim', '  try: ls  or  projects');
            break;
          }
          const p = PROJECT_BY_ID[argLower];
          if (!p) {
            addLine('err', `cat: ${arg}: no such project`);
            break;
          }
          addLines([
            { kind: 'dim', text: '' },
            { kind: 'accent', text: `  ── ${p.title} ──` },
            { kind: 'echo', text: `  ${p.summary}` },
            { kind: 'dim', text: `  status: ${p.status ?? 'active'}  ·  tags: ${p.tags.join(', ')}` },
            { kind: 'dim', text: `  tech:   ${p.tech.join(', ')}` },
          ]);
          if (p.whatIDid) {
            addLine('echo', '  what I did:');
            for (const item of p.whatIDid) {
              addLine('echo', `    ▸ ${item}`);
            }
          }
          if (p.links.length > 0) {
            addLine('dim', '  links:');
            for (const l of p.links) {
              addLine('accent', `    ${l.label}: ${l.href}`);
            }
          }
          addLine('dim', '');
          break;
        }
        case 'contact': {
          addLines([
            { kind: 'dim', text: '' },
            { kind: 'echo', text: `  email:    ${profile.emailPersonal}` },
            { kind: 'echo', text: `  github:   ${profile.socials[0]?.href}` },
            { kind: 'echo', text: `  linkedin: ${profile.socials[2]?.href}` },
            { kind: 'dim', text: '' },
            { kind: 'dim', text: '  best reach: email.  responses usually within 24h.' },
            { kind: 'dim', text: '' },
          ]);
          break;
        }
        case 'github': {
          window.open(profile.socials[0]?.href, '_blank', 'noreferrer');
          addLine('ok', '→ opening github');
          break;
        }
        case 'linkedin': {
          window.open(profile.socials[2]?.href, '_blank', 'noreferrer');
          addLine('ok', '→ opening linkedin');
          break;
        }
        case 'email': {
          window.location.href = `mailto:${profile.emailPersonal}`;
          addLine('ok', '→ opening mail client');
          break;
        }
        case 'resume':
        case 'résumé': {
          window.open(profile.resumeUrl, '_blank', 'noreferrer');
          addLine('ok', '→ opening résumé');
          break;
        }
        case 'date': {
          const now = new Date();
          addLine('echo', now.toString());
          break;
        }
        case 'echo': {
          addLine('echo', arg || '');
          break;
        }
        case 'clear':
        case 'cls': {
          setHistory([]);
          break;
        }
        case 'exit':
        case 'quit':
        case 'logout': {
          addLine('dim', 'there is no exit. only more content.');
          addLine('dim', '(you can press esc or click outside)');
          break;
        }
        case 'sudo': {
          addLine('err', 'Permission denied: nice try.');
          break;
        }
        case 'vim':
        case 'emacs':
        case 'nano': {
          addLine('err', 'this is a portfolio, not a development environment.');
          addLine('dim', '  (try `cat nexstepper` instead)');
          break;
        }
        case 'rm': {
          addLine('err', 'rm: not removing anything on someone else\'s portfolio.');
          break;
        }
        case 'man': {
          if (!arg) {
            addLine('dim', 'what manual page do you want?');
          } else {
            addLine('dim', `no man page for "${arg}". try: help`);
          }
          break;
        }
        case 'hire':
        case 'job': {
          addLine('ok', '→ opening contact');
          navigate('contact');
          break;
        }
        default: {
          if (cmd) {
            addLine('err', `${cmd}: command not found`);
            addLine('dim', '  type "help" for a list of commands');
          }
        }
      }
    },
    [addLine, addLines, navigate],
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(input);
    setInput('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const newIdx = cmdHistIdx < 0 ? cmdHistory.length - 1 : Math.max(0, cmdHistIdx - 1);
      setCmdHistIdx(newIdx);
      setInput(cmdHistory[newIdx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistIdx < 0) return;
      const newIdx = cmdHistIdx + 1;
      if (newIdx >= cmdHistory.length) {
        setCmdHistIdx(-1);
        setInput('');
      } else {
        setCmdHistIdx(newIdx);
        setInput(cmdHistory[newIdx] ?? '');
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  // Mouse-down on the backdrop closes
  const onBackdropMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <>
      {/* Floating button — animated to draw attention */}
      <TerminalButton
        open={open}
        onToggle={() => setOpen((o) => !o)}
        reducedMotion={reducedMotion}
      />

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-bg/70 p-0 sm:items-center sm:p-6"
            onMouseDown={onBackdropMouseDown}
          >
            <motion.div
              initial={reducedMotion ? false : { y: 20, opacity: 0 }}
              animate={reducedMotion ? undefined : { y: 0, opacity: 1 }}
              exit={reducedMotion ? undefined : { y: 20, opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="tty-box flex h-[80vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-lg border-border bg-surface shadow-2xl sm:h-[60vh] sm:rounded-lg"
            >
              {/* Window header */}
              <div className="tty-window-header">
                <div className="flex items-center gap-2">
                  <span className="text-textMuted">diepreyecd@dev</span>
                  <span className="text-textSubtle">~</span>
                  <span className="text-gold">tty1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-textSubtle normal-case tracking-normal">
                    {experiences.length} jobs · {projects.length} projects · {skillGroups.length} skill groups
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close terminal"
                    className="ml-3 flex h-5 w-5 items-center justify-center rounded text-textMuted transition hover:bg-border hover:text-text"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Output log */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-3 font-mono text-sm leading-relaxed"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line) => (
                  <div
                    key={line.id}
                    className={
                      line.kind === 'echo'
                        ? 'tty-out-echo whitespace-pre-wrap'
                        : line.kind === 'ok'
                        ? 'tty-out-ok whitespace-pre-wrap'
                        : line.kind === 'err'
                        ? 'tty-out-err whitespace-pre-wrap'
                        : line.kind === 'accent'
                        ? 'tty-out-accent whitespace-pre-wrap'
                        : 'tty-out-dim whitespace-pre-wrap'
                    }
                  >
                    {line.text || '\u00A0'}
                  </div>
                ))}

                {/* Input row */}
                <form
                  onSubmit={onSubmit}
                  className="mt-1 flex items-center font-mono text-sm"
                >
                  <span className="text-gold">~ $&nbsp;</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    className="flex-1 bg-transparent text-text outline-none placeholder:text-textSubtle"
                    placeholder="type a command — try 'help'"
                  />
                </form>
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between border-t border-border bg-surfaceRaised px-4 py-1.5 font-mono text-[10px] uppercase tracking-wide2 text-textSubtle">
                <span>↑/↓ history · Ctrl-L clear · esc close</span>
                <span>built by diepreye · 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
