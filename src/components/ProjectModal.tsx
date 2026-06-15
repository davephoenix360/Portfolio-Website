import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Project } from '../data/projects';
import { ExternalIcon, GithubIcon } from './icons';

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const reducedMotion = useReducedMotion();
  const modalTransition = reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 22 };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-vaultInk/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-gold/30 bg-parchment p-6 shadow-vault dark:bg-vaultInk"
        initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.96, y: reducedMotion ? 0 : 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.98, y: reducedMotion ? 0 : 8 }}
        transition={modalTransition}
        onClick={(event) => event.stopPropagation()}
      >
        {/* The "file header" — a thin gold rule + monogram, like a folder tab */}
        <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
          <span className="block h-px w-6 bg-gold" />
          Project File · {project.id}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
              {project.status ?? 'Active'}
            </div>
            <h3 className="mt-1 font-display text-3xl font-semibold text-vault dark:text-parchment">
              {project.title}
            </h3>
            <p className="mt-2 text-inkSoft dark:text-parchment/80">{project.summary}</p>
          </div>
          <button
            className="rounded-full border border-vault/30 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-vault transition hover:border-gold hover:text-goldInk dark:border-gold/30 dark:text-parchment dark:hover:border-goldSoft dark:hover:text-goldSoft"
            onClick={onClose}
            aria-label="Close modal"
          >
            Close
          </button>
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mt-4 h-56 w-full rounded-lg border border-vault/15 object-cover"
            loading="lazy"
          />
        )}

        <p className="mt-4 leading-relaxed text-inkSoft dark:text-parchment/80">{project.description}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.impact && project.impact.length > 0 && (
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                Returns
              </div>
              <ul className="space-y-2 text-sm text-inkSoft dark:text-parchment/80">
                {project.impact.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.whatIDid && project.whatIDid.length > 0 && (
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                What I put in
              </div>
              <ul className="space-y-2 text-sm text-inkSoft dark:text-parchment/80">
                {project.whatIDid.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tradeoffs && (
            <div className="space-y-3 md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                Risk disclosures
              </div>
              <p className="text-sm italic text-inkSoft dark:text-parchment/80">{project.tradeoffs}</p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
            Tech (the tools)
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-vault/20 bg-parchment/70 px-2 py-0.5 font-mono text-xs text-vault dark:border-gold/20 dark:bg-vaultInk/60 dark:text-parchment"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
            Open the file
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="coin-btn"
              >
                {link.label.toLowerCase().includes('github') ? <GithubIcon /> : <ExternalIcon />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
