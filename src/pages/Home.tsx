import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowIcon, GithubIcon, LinkedInIcon } from '../components/icons';
import { fadeUp, staggerContainer } from '../components/motion';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

const HeroCanvas = lazy(() => import('../components/HeroCanvas'));

const Home: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const github = profile.socials.find((s) => s.label.toLowerCase().includes('github'))?.href;
  const linkedin = profile.socials.find((s) => s.label.toLowerCase().includes('linkedin'))?.href;
  const featured = projects.filter((project) => project.featured).slice(0, 2);
  const featuredProjects = featured.length > 0 ? featured : projects.slice(0, 2);
  // const enable3DHero = import.meta.env.VITE_3D_HERO === 'true';

  const heroFallback = (
    <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)]" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/25 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Spatial Preview</div>
        <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">Low-poly motion scene</div>
      </div>
    </div>
  );

  return (
    <motion.section
      className="section-shell gap-8"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      <div className="grid gap-6 lg:grid-cols-6">
        <motion.div
          variants={fadeUp(reducedMotion)}
          className="card-surface relative overflow-hidden p-6 lg:col-span-4 lg:row-span-2"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
          <div className="relative z-10 flex h-full flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {profile.availability}
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  {profile.name}
                  <span className="block text-2xl font-semibold text-slate-500 dark:text-slate-300">
                    {profile.headline}
                  </span>
                </h1>
                <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-200">
                  {profile.tagline}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-accent"
                >
                  Resume
                  <ArrowIcon />
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-100"
                >
                  Projects
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-200">
                {[
                  'AI systems',
                  'Backend reliability',
                  'DevOps automation',
                  'Full-stack delivery',
                ].map((chip) => (
                  <span key={chip} className="pill">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-64">
              {/* {enable3DHero && !reducedMotion ? (
                <Suspense fallback={heroFallback}>
                  <HeroCanvas />
                </Suspense>
              ) : (
                heroFallback
              )} */}
              <HeroCanvas />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(reducedMotion)}
          className="card-surface relative overflow-hidden p-4 lg:col-span-2 lg:row-span-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-blue-500/20" />
          <div className="relative z-10 space-y-4">
            <img
              src="/assets/profile-pic.png"
              alt={profile.name}
              className="h-72 w-full rounded-2xl object-cover ring-1 ring-white/70 dark:ring-slate-800/70"
            />
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Location
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {profile.location}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-3">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Proof
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Shipped 10+ projects across AI, systems, mobile, and web experiences.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Built Nextep + Chrome extension to streamline resume and job-tracking workflows.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Delivered a multi-role Android platform with Firebase plus automated tests.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Prototyped NLP/RAG pipelines with evaluation metrics baked into iteration.
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-3">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Featured
            </div>
            <Link
              to="/projects"
              className="text-sm font-semibold text-accent hover:text-ink dark:hover:text-white"
            >
              View all
            </Link>
          </div>
          <div className="mt-4 space-y-4">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      {project.status ?? 'Active'}
                    </div>
                    <div className="text-lg font-semibold">{project.title}</div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {project.summary}
                    </p>
                  </div>
                  <Link
                    to="/projects"
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
                  >
                    Explore
                  </Link>
                </div>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-3 h-32 w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                )}
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-200">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-2">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Now
          </div>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
            Building AI-native developer tooling, tightening backend reliability, and keeping
            delivery velocity high.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-200">
            {['AI workflows', 'Backend', 'DevOps', 'Testing', 'Automation'].map((chip) => (
              <span key={chip} className="pill">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-4">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Connect
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {github && (
              <a
                className="pill inline-flex items-center gap-2"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                GitHub
              </a>
            )}
            {linkedin && (
              <a
                className="pill inline-flex items-center gap-2"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            )}
            <Link to="/contact" className="pill inline-flex items-center gap-2">
              Say hello
            </Link>
          </div>
          <div className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            "I ship measurable, testable systems with clean architecture and fast iteration loops."
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
