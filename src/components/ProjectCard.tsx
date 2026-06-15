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
            <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
              {/* Status + a fake "ROI" line as a fun money touch */}
              {project.status ?? 'Active'}  ·  est. ROI ↑
            </div>
            <h3 className="mt-1 font-display text-2xl font-semibold text-vault dark:text-parchment">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-inkSoft dark:text-parchment/80">{project.summary}</p>
          </div>
          <button
            className="rounded-full border border-vault/30 bg-parchment px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-vault transition hover:-translate-y-0.5 hover:border-gold hover:text-goldInk dark:border-gold/30 dark:bg-vaultInk dark:text-parchment dark:hover:border-goldSoft dark:hover:text-goldSoft"
            onClick={() => onOpen(project)}
          >
            Open file
          </button>
        </div>

        {!featured && project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-40 w-full rounded-lg border border-vault/15 object-cover"
            loading="lazy"
          />
        )}

        {impact.length > 0 && (
          <ul className="space-y-1.5 text-sm text-inkSoft dark:text-parchment/80">
            {impact.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-vault/20 bg-parchment/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-vault dark:border-gold/20 dark:bg-vaultInk/60 dark:text-parchment"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 text-xs text-inkSoft dark:text-parchment/70">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-vault/10 px-2 py-0.5 font-mono dark:bg-gold/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-goldInk transition hover:text-gold dark:text-goldSoft dark:hover:text-gold"
            >
              {link.label.toLowerCase().includes('github') ? <GithubIcon /> : <ExternalIcon />}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {featured && project.image && (
        <div className="mt-2 overflow-hidden rounded-lg border border-vault/15 bg-parchment/60 lg:mt-0 lg:w-60 lg:self-stretch dark:border-gold/15">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
