import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, staggerContainer } from '../components/motion';
import { skillGroups } from '../data/skills';

/**
 * Skills — "Receipts"
 *
 * Each skill group is presented as a receipt: a tabulated list with
 * a fake "line total" on the right. The humor is that the totals
 * are made-up "value" numbers (1-5, dollar amounts), which gives
 * the page a fun, finance-flavored interaction without being
 * unprofessional about the actual skills.
 */

const Skills: React.FC = () => {
  const reducedMotion = useReducedMotion();

  // Deterministic "value" derived from the index — just for the visual.
  // 1-5 stars + a fake dollar amount per skill.
  const fakeValue = (i: number) => 1 + ((i * 7) % 5); // 1-5
  const fakePrice = (i: number) => 25 + ((i * 13) % 200); // 25-225

  return (
    <motion.section
      className="section-shell"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      <SectionHeader
        eyebrow="Receipts"
        title="A toolkit, with a (fake) price tag on each item"
        description="Languages, frameworks, and the boring parts of shipping software. The 'value' column is for fun; the actual skill levels are visible in the Career Ledger and the project files."
      />

      <motion.div variants={fadeUp(reducedMotion)} className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, groupIdx) => {
          const subtotal = group.items.reduce(
            (sum, _, i) => sum + fakePrice(groupIdx * 10 + i),
            0,
          );

          return (
            <div key={group.title} className="card-surface p-5">
              <div className="flex items-center justify-between border-b border-vault/15 pb-2 dark:border-gold/15">
                <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                  Receipt · {group.title}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-inkSoft dark:text-parchment/60">
                  #{String(groupIdx + 1).padStart(3, '0')}
                </div>
              </div>

              <ul className="mt-3 divide-y divide-vault/10 dark:divide-gold/10">
                {group.items.map((skill, i) => {
                  const idx = groupIdx * 10 + i;
                  const value = fakeValue(idx);
                  const price = fakePrice(idx);
                  return (
                    <li key={skill} className="flex items-center justify-between gap-3 py-2.5">
                      <span className="text-ink dark:text-parchment">{skill}</span>
                      <div className="flex items-center gap-3 font-mono text-xs tabular">
                        <span className="text-gold" title="1-5 self-rated value">
                          {Array.from({ length: 5 }).map((_, k) => (
                            <span
                              key={k}
                              className={k < value ? 'text-gold' : 'text-vault/20 dark:text-gold/15'}
                            >
                              ★
                            </span>
                          ))}
                        </span>
                        <span className="text-inkSoft dark:text-parchment/60">CA${price}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 flex items-center justify-between border-t border-vault/20 pt-2 font-mono text-[10px] uppercase tracking-wider dark:border-gold/20">
                <span className="text-goldInk dark:text-goldSoft">Subtotal</span>
                <span className="text-vault tabular dark:text-parchment">
                  CA${subtotal.toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
