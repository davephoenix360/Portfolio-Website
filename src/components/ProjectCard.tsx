import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';
import { Project } from '../data/projects';
import { ExternalIcon, GithubIcon } from './icons';
import { hoverLift } from './motion';

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
  featured?: boolean;
}

const ProjectCard: React.FC<Props> = ({ project, onOpen, featured = false }) => {
  const reducedMotion = useReducedMotion();
  const impact = project.impact?.slice(0, featured ? 3 : 2) ?? [];

  return (
    <motion.article
      className={clsx(
        'card-surface group relative flex h-full flex-col gap-4 p-5',
        featured && 'lg:flex-row lg:items-stretch',
      )}
      variants={hoverLift(reducedMotion)}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      <div className={clsx('flex flex-1 flex-col gap-4', featured && 'lg:pr-3')}>
        <div className="flex items-start justify-between gap-3">
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

        {!featured && project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-40 w-full rounded-xl object-cover"
            loading="lazy"
          />
        )}

        {impact.length > 0 && (
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
            {impact.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
              {link.label.toLowerCase().includes('github') ? <GithubIcon /> : <ExternalIcon />}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {featured && project.image && (
        <div className="mt-2 overflow-hidden rounded-xl border border-slate-200/60 bg-slate-50 dark:border-slate-800/70 dark:bg-slate-900/70 lg:mt-0 lg:w-60 lg:self-stretch">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
