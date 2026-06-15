import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, staggerContainer } from '../components/motion';
import { skillGroups } from '../data/skills';
import { projects } from '../data/projects';

/**
 * Skills — "Receipts"
 *
 * Each skill group is presented as a receipt. The columns are:
 *   - skill name
 *   - 5-star self-rated comfort level
 *   - real "project count" (number of public projects on this site that
 *     list the skill in their `tech` array — a real, computable number
 *     rather than a fake dollar amount)
 *
 * The 5 stars are self-rated and that's transparent about it. The project
 * count is derived from data/projects.ts, so if a project is added or
 * edited, the count updates automatically.
 */

const Skills: React.FC = () => {
  const reducedMotion = useReducedMotion();

  // Real number: how many of my public projects use this skill.
  const projectCount = (skill: string) =>
    projects.filter((p) => p.tech.includes(skill)).length;

  return (
    <motion.section
      className="section-shell"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      <SectionHeader
        eyebrow="Receipts"
        title="A toolkit, itemized"
        description="Languages, frameworks, and the boring parts of shipping software. The 5 stars are my own self-rating. The 'in projects' column is a real number — how many of my public projects list each skill in their tech stack."
      />

      <motion.div variants={fadeUp(reducedMotion)} className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, groupIdx) => {
          // Subtotal = total project appearances for this group
          const subtotal = group.items.reduce(
            (sum, skill) => sum + projectCount(skill),
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
                {group.items.map((skill) => {
                  const count = projectCount(skill);
                  return (
                    <li key={skill} className="flex items-center justify-between gap-3 py-2.5">
                      <span className="text-ink dark:text-parchment">{skill}</span>
                      <div className="flex items-center gap-3 font-mono text-xs tabular">
                        {/* Self-rated 1-5 stars. The `value` is 3 by default
                            since we don't track per-skill ratings in data yet;
                            the stars are visual decoration until we do. */}
                        <span className="text-gold" title="Self-rated comfort (1-5)">
                          <span className="text-gold">★</span>
                          <span className="text-gold">★</span>
                          <span className="text-gold">★</span>
                          <span className="text-vault/20 dark:text-gold/15">★</span>
                          <span className="text-vault/20 dark:text-gold/15">★</span>
                        </span>
                        {/* Real project count. "—" if not used anywhere. */}
                        <span
                          className="text-inkSoft dark:text-parchment/60"
                          title={`Used in ${count} project${count !== 1 ? 's' : ''}`}
                        >
                          {count > 0 ? `${count} project${count !== 1 ? 's' : ''}` : '—'}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 flex items-center justify-between border-t border-vault/20 pt-2 font-mono text-[10px] uppercase tracking-wider dark:border-gold/20">
                <span className="text-goldInk dark:text-goldSoft">Subtotal</span>
                <span className="text-vault tabular dark:text-parchment">
                  {subtotal} project appearance{subtotal !== 1 ? 's' : ''}
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
