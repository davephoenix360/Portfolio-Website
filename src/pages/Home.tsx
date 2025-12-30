import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { ArrowIcon, GithubIcon, LinkedInIcon } from '../components/icons';

const Home: React.FC = () => {
  return (
    <section className="section-shell gap-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Summer 2026 internships · AI / Backend / DevOps / Full-Stack
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              {profile.name}
              <span className="block text-2xl font-semibold text-slate-500 dark:text-slate-300">
                {profile.headline}
              </span>
            </h1>
            <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-200">{profile.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-accent"
            >
              View resume
              <ArrowIcon />
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-100"
            >
              See projects
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: 'Focus', value: 'AI, backend, DevOps' },
              { label: 'Strength', value: 'Clean architecture & testing' },
              { label: 'Location', value: profile.location },
            ].map((item) => (
              <div key={item.label} className="card-surface p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                <div className="mt-2 text-base font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface overflow-hidden">
          <img src="/assets/profile-pic.png" alt={profile.name} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="card-surface grid gap-6 p-6 sm:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-slate-500">Core principles</div>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li>• Design for change, build for reliability.</li>
            <li>• Ship with guardrails: tests, observability, rollout plans.</li>
            <li>• Make the developer path delightful and fast.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold text-slate-500">Recent focus</div>
          <p className="text-sm text-slate-700 dark:text-slate-200">
            Prototyping RAG/LLM-backed features, strengthening CI/CD, and refining backend APIs that
            balance ergonomics with performance.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-200">
            {['RAG', 'Observability', 'DX', 'Testing', 'API design', 'Automation'].map((chip) => (
              <span key={chip} className="pill">
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-500">Connect</div>
          <div className="flex flex-wrap gap-3">
            <a
              className="pill inline-flex items-center gap-2"
              href={profile.socials.find((s) => s.label === 'GitHub')?.href}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              className="pill inline-flex items-center gap-2"
              href={profile.socials.find((s) => s.label === 'LinkedIn')?.href}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            "I enjoy pairing clean architecture with pragmatic delivery—always aiming for features
            that are measurable, observable, and easy to iterate on."
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
