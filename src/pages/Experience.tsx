import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've been focusing"
        description="Highlights from roles, projects, and mentorship that shaped how I build and collaborate."
      />

      <div className="relative mt-4 space-y-6 border-l border-slate-200 pl-6 dark:border-slate-800">
        {experiences.map((item) => (
          <div key={`${item.company}-${item.period}`} className="card-surface ml-[-6px] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">{item.period}</div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.company} · {item.location}</p>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {item.summary}
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
