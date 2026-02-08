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
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900"
        initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.96, y: reducedMotion ? 0 : 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.98, y: reducedMotion ? 0 : 8 }}
        transition={modalTransition}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">{project.status ?? 'Active'}</div>
            <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{project.summary}</p>
          </div>
          <button
            className="rounded-full px-3 py-1 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mt-4 h-56 w-full rounded-xl object-cover"
            loading="lazy"
          />
        )}

        <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-200">{project.description}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.impact && project.impact.length > 0 && (
            <div className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Impact</div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {project.impact.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.whatIDid && project.whatIDid.length > 0 && (
            <div className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">What I Did</div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {project.whatIDid.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tradeoffs && (
            <div className="space-y-3 md:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Constraints / Tradeoffs</div>
              <p className="text-sm text-slate-700 dark:text-slate-200">{project.tradeoffs}</p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tech</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Links</div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent"
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
