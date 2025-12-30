import { Project } from '../data/projects';
import { ExternalIcon, GithubIcon } from './icons';

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onOpen }) => {
  return (
    <article className="card-surface flex flex-col gap-4 p-5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500">{project.status ?? 'Active'}</div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
        </div>
        <button
          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-accent hover:text-white dark:bg-slate-800 dark:text-slate-200"
          onClick={() => onOpen(project)}
        >
          Details
        </button>
      </div>
      {project.image && (
        <img src={project.image} alt={project.title} className="h-40 w-full rounded-xl object-cover" loading="lazy" />
      )}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="pill bg-accentMuted/80 text-slate-700 dark:text-slate-100">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-200">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent dark:text-slate-100"
          >
            {link.label === 'GitHub' ? <GithubIcon /> : <ExternalIcon />}
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
