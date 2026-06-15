import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, staggerContainer } from '../components/motion';
import { experiences } from '../data/experience';

/**
 * Experience — "Career Ledger"
 *
 * The timeline of roles, formatted like a brokerage statement:
 *   - Date column on the left (monospaced, "as of")
 *   - Each entry is a "transaction" — role, organization, location
 *   - Highlights are itemized below
 */

const Experience: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="section-shell"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      <SectionHeader
        eyebrow="Career Ledger"
        title="Where I've been putting in the hours"
        description="Roles, internships, and the leadership stuff. Ordered most-recent first, like a brokerage statement."
      />

      <motion.div
        variants={fadeUp(reducedMotion)}
        className="relative mt-4"
      >
        {/* The "ledger spine" — a thin gold line down the left */}
        <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent sm:block" />

        <div className="space-y-8 sm:pl-8">
          {experiences.map((item) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              variants={fadeUp(reducedMotion)}
              className="relative"
            >
              {/* The "transaction dot" on the ledger line */}
              <div className="absolute -left-[33px] top-3 hidden h-2 w-2 rounded-full bg-gold ring-4 ring-parchment dark:ring-vaultInk sm:block" />

              <div className="card-surface p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                      {item.period} · {item.location}
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-vault dark:text-parchment">
                      {item.role}
                    </h3>
                    <p className="font-mono text-sm text-inkSoft dark:text-parchment/80">
                      {item.company}
                    </p>
                  </div>
                  <div className="rounded-full border border-vault/30 bg-parchment px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-vault dark:border-gold/30 dark:bg-vaultInk dark:text-parchment">
                    {item.summary}
                  </div>
                </div>

                {item.highlights.length > 0 && (
                  <div className="mt-4 border-t border-vault/15 pt-4 dark:border-gold/15">
                    <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                      Itemized returns
                    </div>
                    <ul className="mt-2 space-y-2 text-sm text-inkSoft dark:text-parchment/80">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
