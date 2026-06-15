import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from './motion';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

const SectionHeader: React.FC<Props> = ({ eyebrow, title, description, actions }) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      variants={fadeUp(reducedMotion)}
    >
      <div className="space-y-2">
        {eyebrow && (
          <div className="section-eyebrow flex items-center gap-2">
            <span className="block h-px w-6 bg-gold" />
            {eyebrow}
          </div>
        )}
        <h2 className="section-title">{title}</h2>
        <div className="ledger-rule" />
        {description && (
          <p className="max-w-3xl text-base leading-relaxed text-inkSoft dark:text-parchment/80">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </motion.div>
  );
};

export default SectionHeader;
