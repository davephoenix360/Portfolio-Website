import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const About: React.FC = () => {
  const pillars = [
    {
      title: 'Architecture first',
      text: 'I care about layering, contracts, and maintainability — so the codebase stays calm as features scale.',
    },
    {
      title: 'Testing + observability',
      text: 'Quality comes from feedback loops. I lean on tests, tracing, and metrics to keep changes safe.',
    },
    {
      title: 'Developer experience',
      text: 'Good tooling and docs make teams faster. I like to automate the boring parts and keep workflows simple.',
    },
  ];

  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="About"
        title="The person behind the work"
        description={profile.aboutShort}
      />

      <div className="card-surface grid gap-8 p-6 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Hi, I'm {profile.name}</div>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">{profile.aboutLong}</p>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
            Beyond code, I enjoy mentoring peers, sketching product flows, and exploring how AI can make
            everyday tools more intuitive. I thrive in small teams that iterate quickly and care about the
            craft.
          </p>
        </div>
        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/70 dark:bg-slate-900/70">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
                {pillar.title}
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
