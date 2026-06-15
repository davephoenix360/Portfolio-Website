import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from './motion';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  /**
   * When true, forces the header to stack vertically (title/description on top,
   * actions below) at every viewport. Use this when the title is long OR the
   * actions are wide (e.g. a row of filter pills on /projects). Without this,
   * the header uses a row layout on sm+ which can squish long titles into a
   * narrow column.
   */
  stacked?: boolean;
};

const SectionHeader: React.FC<Props> = ({ eyebrow, title, description, actions, stacked = false }) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={
        stacked
          ? 'flex flex-col gap-6'
          : 'flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8'
      }
      variants={fadeUp(reducedMotion)}
    >
      <div className={stacked ? 'space-y-2 max-w-3xl' : 'min-w-0 flex-1 space-y-2'}>
        {eyebrow && (
          <div className="section-eyebrow flex items-center gap-2">
            <span className="block h-px w-6 bg-gold" />
            {eyebrow}
          </div>
        )}
        <h2 className="section-title">{title}</h2>
        <div className="ledger-rule" />
        {description && (
          <p className="text-base leading-relaxed text-inkSoft dark:text-parchment/80">
            {description}
          </p>
        )}
      </div>
      {actions && <div className={stacked ? '' : 'shrink-0'}>{actions}</div>}
    </motion.div>
  );
};

export default SectionHeader;
