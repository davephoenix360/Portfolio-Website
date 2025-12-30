import React from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

const SectionHeader: React.FC<Props> = ({ eyebrow, title, description, actions }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{eyebrow}</div>}
        <div className="text-2xl font-semibold sm:text-3xl">{title}</div>
        {description && <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">{description}</p>}
      </div>
      {actions}
    </div>
  );
};

export default SectionHeader;
