import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, staggerContainer } from '../components/motion';
import { profile } from '../data/profile';

const About: React.FC = () => {
  const pillars = [
    {
      title: 'Reliability & performance',
      text: 'I like systems that are fast, measurable, and safe to change—often by tightening SQL/APIs, adding guardrails, and removing sharp edges.',
    },
    {
      title: 'Testing + feedback loops',
      text: 'I lean on unit/integration/UI tests and CI to keep iteration fast. When something breaks, I want it to be obvious and easy to debug.',
    },
    {
      title: 'Automation & developer experience',
      text: 'If a workflow repeats, I try to automate it—scripts, CLIs, templates, and docs that help teams ship with less friction.',
    },
  ];

  const now = [
    'Building Nextep (resume + job-application tooling) and improving my portfolio stack for GitHub Pages.',
    'Exploring AI-assisted workflows (RAG/LLM) that are transparent, testable, and easy to extend.',
    'Practicing systems fundamentals (Linux, concurrency, and backend design) with production-style constraints.',
  ];

  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="section-shell"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      <SectionHeader
        eyebrow="About"
        title="The person behind the work"
        description={profile.aboutShort}
      />

      <motion.div variants={fadeUp(reducedMotion)} className="card-surface grid gap-8 p-6 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Hi, I'm {profile.name}</div>

          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
            {profile.aboutLong}
          </p>

          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
            Outside of internships and coursework, I build tools that make shipping easier—whether
            that’s a Chrome extension, an automation script, or a cleaner workflow for a team
            project. I’m also active with BESA, helping improve how we communicate events,
            mentorship, and opportunities across the community.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-800/70 dark:bg-slate-900/70">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
              What I&apos;m focused on right now
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {now.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/70 dark:bg-slate-900/70"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
                {pillar.title}
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{pillar.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
