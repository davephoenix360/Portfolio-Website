import React from 'react';
import { Project } from '../data/projects';
import { ExternalIcon, GithubIcon } from './icons';

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">
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

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent"
            >
              {link.label === 'GitHub' ? <GithubIcon /> : <ExternalIcon />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
