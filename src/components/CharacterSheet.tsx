import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import type { SkillGroup } from '../data/skills';

type Props = {
  skillGroups: SkillGroup[];
};

/* ============================================================
   CharacterSheet — RPG-style stat panel.

   The whole portfolio is minimal + clean. This is the ONE section
   that gets to be playful. The user lands here and goes "oh, cool"
   instead of "oh, no, this is a kid's site."

   Sections:
     - Identity card (class, level, HP, XP, role)
     - Stat bars (Languages, Backend, AI, Frontend, Cloud, Testing)
     - Achievements (unlocked + locked)
   ============================================================ */

// Map a skill group to a 0-100 "proficiency" by counting items
const prof = (count: number): number => {
  // Saturate at ~9 items per group = 100%
  if (count >= 9) return 100;
  if (count >= 7) return 88;
  if (count >= 5) return 75;
  if (count >= 4) return 65;
  if (count >= 3) return 55;
  if (count >= 2) return 45;
  return 35;
};

const level = (xp: number): { lvl: number; next: number; pct: number } => {
  // Pseudo level formula — each level needs more XP
  let lvl = 1;
  let remaining = xp;
  while (remaining >= lvl * 100) {
    remaining -= lvl * 100;
    lvl += 1;
  }
  const next = lvl * 100;
  return { lvl, next, pct: Math.round((remaining / next) * 100) };
};

const CharacterSheet: React.FC<Props> = ({ skillGroups }) => {
  const reducedMotion = useReducedMotion();

  // Derived stats
  // 1.5 years of professional internship experience, 4 internships, 1.5+ years of projects
  const xp = 1840; // 1.5 yrs co-op + 5+ shipped projects + leadership
  const { lvl, next, pct } = level(xp);

  // Identity numbers
  const years = '1.5+';
  const internships = 4;
  const projectsShipped = 5;

  // Achievements (unlocked + locked)
  const achievements = [
    {
      icon: '⚔️',
      title: 'First Ship',
      desc: 'Production code that real users touched.',
      unlocked: true,
    },
    {
      icon: '🏢',
      title: 'Enterprise Certified',
      desc: 'Survived a Fortune-500 codebase (Dayforce).',
      unlocked: true,
    },
    {
      icon: '🤖',
      title: 'AI Whisperer',
      desc: 'Production LLM workflows in a real product.',
      unlocked: true,
    },
    {
      icon: '🏆',
      title: 'Hackathon Hero',
      desc: 'Built a thing in 48 hrs, presented, won something.',
      unlocked: true,
    },
    {
      icon: '👥',
      title: 'Team Lead',
      desc: 'Shipped a gold release with a multi-dev team.',
      unlocked: true,
    },
    {
      icon: '🌍',
      title: 'Open Source',
      desc: 'Public repo with meaningful stars / forks.',
      unlocked: false,
    },
    {
      icon: '📚',
      title: 'TA / Mentor',
      desc: 'Taught a CS course or mentored a junior dev.',
      unlocked: false,
    },
    {
      icon: '🚀',
      title: 'Founder',
      desc: 'Solo shipped a paying product to real users.',
      unlocked: true, // Nexstepper counts
    },
  ];

  return (
    <motion.section
      id="stats"
      className="section-shell"
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="section-eyebrow">// Character Sheet</div>
        <h2 className="section-title mt-2">
          The <span className="text-gold">stats</span> behind the résumé.
        </h2>
        <div className="gold-rule" />
        <p className="section-subtitle mt-4">
          One section that's allowed to be playful. The rest of the page is
          normal. (I promise.)
        </p>
      </div>

      {/* ===== Identity card ===== */}
      <div className="rpg-panel">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          {/* Left: identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border-2 border-gold/40 bg-gold/10 font-display text-2xl font-bold text-gold">
                {profile.monogram}
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-text">
                  {profile.name}
                </div>
                <div className="mt-0.5 font-mono text-xs text-textMuted">
                  <span className="text-gold">CLASS</span> ·{' '}
                  Software Engineer (Backend / DevOps)
                </div>
                <div className="font-mono text-xs text-textMuted">
                  <span className="text-gold">RACE</span> · Nigerian, in Edmonton
                </div>
              </div>
            </div>

            {/* XP bar */}
            <div>
              <div className="flex items-baseline justify-between">
                <span className="rpg-stat-label">
                  LVL <span className="text-gold tabular text-base">{lvl}</span>{' '}
                  · XP
                </span>
                <span className="font-mono text-[10px] text-textSubtle tabular">
                  {pct}% → LVL {lvl + 1}
                </span>
              </div>
              <div className="rpg-bar mt-2">
                <motion.div
                  className="rpg-bar-fill"
                  initial={reducedMotion ? false : { width: 0 }}
                  whileInView={reducedMotion ? undefined : { width: `${pct}%` }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-1.5 font-mono text-[10px] text-textSubtle tabular">
                {pct * (next / 100)} / {next} XP this level
              </div>
            </div>
          </div>

          {/* Right: vital stats */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="rpg-stat-label">HP · Energy</div>
              <div className="rpg-stat-value mt-1 tabular">100 / 100</div>
              <div className="rpg-bar mt-2">
                <div className="rpg-bar-fill" style={{ width: '100%' }} />
              </div>
            </div>
            <div>
              <div className="rpg-stat-label">MP · Coffee</div>
              <div className="rpg-stat-value mt-1 tabular">42 / 100</div>
              <div className="rpg-bar mt-2">
                <div className="rpg-bar-fill" style={{ width: '42%' }} />
              </div>
            </div>
            <div>
              <div className="rpg-stat-label">Years Coding</div>
              <div className="rpg-stat-value mt-1 tabular">{years}</div>
              <div className="mt-1 font-mono text-[10px] text-textSubtle">
                of professional internship XP
              </div>
            </div>
            <div>
              <div className="rpg-stat-label">Internships</div>
              <div className="rpg-stat-value mt-1 tabular">{internships}</div>
              <div className="mt-1 font-mono text-[10px] text-textSubtle">
                Dayforce · Goodmorning · Headstarter · UofA
              </div>
            </div>
            <div>
              <div className="rpg-stat-label">Projects Shipped</div>
              <div className="rpg-stat-value mt-1 tabular">
                {projectsShipped}+
              </div>
              <div className="mt-1 font-mono text-[10px] text-textSubtle">
                includes production Nexstepper
              </div>
            </div>
            <div>
              <div className="rpg-stat-label">Gold Releases</div>
              <div className="rpg-stat-value mt-1 tabular">1</div>
              <div className="mt-1 font-mono text-[10px] text-textSubtle">
                Streamer University
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Stat bars (skill groups) ===== */}
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rpg-panel">
            <div className="flex items-baseline justify-between">
              <div className="font-mono text-[10px] uppercase tracking-wide2 text-textMuted">
                {group.title}
              </div>
              <div className="font-mono text-[10px] text-gold tabular">
                {group.items.length} skills
              </div>
            </div>
            <div className="rpg-bar mt-3">
              <motion.div
                className="rpg-bar-fill"
                initial={reducedMotion ? false : { width: 0 }}
                whileInView={
                  reducedMotion ? undefined : { width: `${prof(group.items.length)}%` }
                }
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ===== Achievements ===== */}
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-lg font-bold text-text">
            Achievements
          </h3>
          <div className="font-mono text-[10px] uppercase tracking-wide2 text-textMuted">
            {achievements.filter((a) => a.unlocked).length} / {achievements.length} unlocked
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {achievements.map((a) => (
            <div
              key={a.title}
              className={`rpg-achievement ${a.unlocked ? '' : 'rpg-achievement-locked'}`}
            >
              <div className="rpg-achievement-icon">{a.icon}</div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-text">
                    {a.title}
                  </span>
                  {!a.unlocked && (
                    <span className="font-mono text-[10px] uppercase tracking-wide2 text-textSubtle">
                      · locked
                    </span>
                  )}
                </div>
                <div className="mt-0.5 text-xs text-textMuted">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CharacterSheet;
