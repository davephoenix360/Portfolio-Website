import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, staggerContainer } from '../components/motion';
import { profile } from '../data/profile';

const About: React.FC = () => {
  // The "asset classes" — the things I bring to a team. Written in
  // a slightly playful way that fits the user's voice.
  const assetClasses = [
    {
      title: 'Reliability & performance',
      code: 'TICKER: RELY',
      text: "I like systems that are fast, measurable, and safe to change. Usually by tightening SQL/APIs, adding guardrails, and removing the parts that were there 'just in case' (and that nobody could explain).",
    },
    {
      title: 'Testing + feedback loops',
      code: 'TICKER: QA-FE',
      text: "Unit, integration, UI, smoke — I pick the test that fails first when something breaks. CI is a feedback loop, not a checkbox. If the tests are slow or flaky, that's a bug too.",
    },
    {
      title: 'Automation & dev experience',
      code: 'TICKER: AUTO',
      text: 'If a workflow repeats more than twice, I try to automate it. Scripts, CLIs, templates, and the docs nobody asked for. The friction you save compounds.',
    },
    {
      title: 'Writing things down',
      code: 'TICKER: DOCS',
      text: "Half the value of writing code is being able to explain it on Slack six months later. I write a lot of READMEs, ADRs, and 'decision logs' that turn out to save the team weeks.",
    },
  ];

  // The "current positions" — what I'm doing now
  const positions = [
    'Finishing the SWE Co-op at UAlberta (graduating May 2027, hold the applause).',
    'Wrangling a Dayforce internship (DevOps-flavored) — happy to talk details over a real call.',
    'Iterating on Nextep, the resume + job-tracking tool. Source is private for now.',
    'Practicing systems fundamentals (Linux, concurrency, low-level C) so I don\'t get bored.',
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
        eyebrow="The Story"
        title="The fine print (the part recruiters skip)"
        description={profile.aboutShort}
      />

      <motion.div variants={fadeUp(reducedMotion)} className="card-surface grid gap-8 p-6 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <div className="font-display text-2xl font-semibold text-vault dark:text-parchment">
            Hi, I'm {profile.name.split(' ')[0]}.
          </div>

          <p className="text-base leading-relaxed text-inkSoft dark:text-parchment/80 whitespace-pre-line">
            {profile.aboutLong}
          </p>

          <div className="mt-6 rounded-lg border border-dashed border-gold/40 bg-gold/5 p-5 dark:border-goldSoft/30 dark:bg-goldSoft/5">
            <div className="section-eyebrow">Current positions</div>
            <ul className="mt-3 space-y-2 text-sm text-inkSoft dark:text-parchment/80">
              {positions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <div className="section-eyebrow">Asset classes</div>
          <div className="grid gap-3">
            {assetClasses.map((asset) => (
              <div
                key={asset.title}
                className="rounded-lg border border-vault/15 bg-parchment/60 p-4 transition hover:border-gold/40 dark:border-gold/15 dark:bg-vaultInk/60"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-display text-lg font-semibold text-vault dark:text-parchment">
                    {asset.title}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                    {asset.code}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft dark:text-parchment/80">{asset.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
