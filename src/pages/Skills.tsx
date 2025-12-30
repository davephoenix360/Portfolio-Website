import SectionHeader from '../components/SectionHeader';
import { skillGroups } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="A toolkit for building and shipping"
        description="A snapshot of the languages, frameworks, and practices I lean on to deliver reliable software."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="card-surface p-5">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500">{group.title}</div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-700 dark:text-slate-200">
              {group.items.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
