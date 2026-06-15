import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowIcon, GithubIcon, LinkedInIcon } from '../components/icons';
import { fadeUp, staggerContainer } from '../components/motion';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

const HeroCanvas = lazy(() => import('../components/HeroCanvas'));

/**
 * Home — "The Vault" landing page.
 *
 * Money theming applied as a metaphor, not a costume:
 *   - Headline + pitch are first-person + conversational
 *   - Sections are named after bank-doc primitives: "Top Holdings",
 *     "Year-to-date returns", "Wire Details"
 *   - Numbers are tabular (monospaced) where they appear
 *   - The 3D hero is a gold coin (the signature element)
 *   - Copy is honest about being 21 and writing about money
 */

const Home: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const github = profile.socials.find((s) => s.label.toLowerCase().includes('github'))?.href;
  const linkedin = profile.socials.find((s) => s.label.toLowerCase().includes('linkedin'))?.href;
  const featured = projects.filter((project) => project.featured).slice(0, 2);
  const featuredProjects = featured.length > 0 ? featured : projects.slice(0, 2);

  // A handful of "year-to-date returns" — high-level wins, but
  // written in the user's voice (not corporate).
  const returns = [
    {
      label: '11',
      headline: 'Projects shipped',
      blurb: 'Across AI, backend, mobile, systems, and the occasional game jam. None of them won awards. Some of them shipped.',
    },
    {
      label: '20-30%',
      headline: 'Latency reduction',
      blurb: 'Tightened a high-traffic WordPress + PHP platform at Goodmorning.com. Mostly by deleting code, not adding it.',
    },
    {
      label: '~90',
      headline: 'Credits toward the SWE',
      blurb: 'University of Alberta, Co-op, May 2027. Still passing the classes, which is the part they don\'t put on the brochure.',
    },
    {
      label: '4 yrs',
      headline: 'Writing the same backend twice',
      blurb: 'Once in Java for school, once in Python/TS for work, once in C for fun. The third one is where the muscle memory actually shows up.',
    },
  ];

  return (
    <motion.section
      className="section-shell gap-8"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      {/* ============================================================
          HERO — headline + 3D coin
          ============================================================ */}
      <div className="grid gap-6 lg:grid-cols-6">
        <motion.div
          variants={fadeUp(reducedMotion)}
          className="card-surface relative overflow-hidden p-6 lg:col-span-4 lg:row-span-2"
        >
          {/* Subtle "embossed seal" in the top-right corner */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-2 border-dashed border-gold/30 dark:border-goldSoft/20" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-dashed border-gold/20 dark:border-goldSoft/15" />

          <div className="relative z-10 flex h-full flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-goldInk dark:border-goldSoft/40 dark:bg-goldSoft/10 dark:text-goldSoft">
                {profile.availability}
              </div>
              <div className="space-y-3">
                <h1 className="font-display text-4xl font-bold leading-tight text-vault sm:text-5xl dark:text-parchment">
                  {profile.name}
                  <span className="mt-2 block font-display text-xl font-medium italic text-inkSoft sm:text-2xl dark:text-parchment/80">
                    {profile.headline}
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-inkSoft dark:text-parchment/80">
                  {profile.pitch}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/projects" className="coin-btn">
                  Top Holdings
                  <ArrowIcon />
                </Link>
                <a className="ghost-btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  View Résumé
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Backend', 'DevOps', 'AI/ML', 'Systems', 'Mobile'].map((chip) => (
                  <span key={chip} className="pill">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-72">
              <div className="relative h-64 overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-parchmentSoft to-parchment shadow-vault dark:from-vaultInk dark:to-vaultInk">
                <Suspense
                  fallback={
                    <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-wider text-goldInk dark:text-goldSoft">
                      Loading the gold…
                    </div>
                  }
                >
                  <HeroCanvas monogram={profile.monogram} reducedMotion={!!reducedMotion} />
                </Suspense>
              </div>
              <div className="mt-2 text-center font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                ◆ 1 {profile.monogram} COIN · EST. 2003 · 21 GRAMS OF GOOD JUDGMENT ◆
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile card — the "account holder" */}
        <motion.div
          variants={fadeUp(reducedMotion)}
          className="card-surface relative overflow-hidden p-4 lg:col-span-2 lg:row-span-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
          <div className="relative z-10 space-y-4">
            <img
              src="/assets/profile-pic.png"
              alt={profile.name}
              className="h-64 w-full rounded-lg border border-vault/20 object-cover shadow-emboss dark:border-gold/20"
            />
            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                Account Holder
              </div>
              <div className="font-mono text-sm font-semibold text-ink dark:text-parchment">
                {profile.location}
              </div>
            </div>
            <div className="border-t border-vault/15 pt-3 dark:border-gold/15">
              <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                Status
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-ink dark:text-parchment">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Open to full-time · S27
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            YEAR-TO-DATE RETURNS — the "Proof" section
            ============================================================ */}
        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="section-eyebrow">Year-to-date returns</div>
              <h3 className="mt-1 font-display text-2xl font-semibold text-vault dark:text-parchment">
                The part the brokers like to gloss over
              </h3>
              <div className="ledger-rule mt-2" />
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-ledger text-goldInk sm:block dark:text-goldSoft">
              Q1 → Q2 2026 · 21 yrs old
            </div>
          </div>

          <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-vault/15 bg-vault/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-gold/15 dark:bg-gold/10">
            {returns.map((ret, i) => (
              <div
                key={i}
                className="bg-parchmentSoft/95 p-5 transition hover:bg-parchmentSoft dark:bg-vaultInk/95 dark:hover:bg-vaultInk"
              >
                <div className="font-display text-3xl font-bold text-goldInk dark:text-goldSoft tabular">
                  {ret.label}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-vault dark:text-parchment">
                  {ret.headline}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft dark:text-parchment/80">
                  {ret.blurb}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ============================================================
            TOP HOLDINGS — the "Featured" projects
            ============================================================ */}
        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="section-eyebrow">Top holdings</div>
              <h3 className="mt-1 font-display text-2xl font-semibold text-vault dark:text-parchment">
                The ones I'd point at in an interview
              </h3>
              <div className="ledger-rule mt-2" />
            </div>
            <Link
              to="/projects"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-goldInk transition hover:text-gold dark:text-goldSoft dark:hover:text-gold"
            >
              See all 11 →
            </Link>
          </div>
          <div className="mt-5 space-y-4">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg border border-vault/15 bg-parchment/60 p-4 transition hover:border-gold/40 dark:border-gold/15 dark:bg-vaultInk/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-goldInk dark:text-goldSoft">
                      {project.status ?? 'Active'} · {project.tags[0]}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold text-vault dark:text-parchment">
                      {project.title}
                    </div>
                    <p className="mt-1 text-sm text-inkSoft dark:text-parchment/80">
                      {project.summary}
                    </p>
                  </div>
                  <Link
                    to="/projects"
                    className="shrink-0 rounded-full border border-vault/30 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-vault transition hover:border-gold hover:text-goldInk dark:border-gold/30 dark:text-parchment dark:hover:border-goldSoft dark:hover:text-goldSoft"
                  >
                    Open file
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-vault/20 bg-parchment/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-vault dark:border-gold/20 dark:bg-vaultInk/60 dark:text-parchment"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ============================================================
            WHAT I'M WORKING ON — the "Now" section
            ============================================================ */}
        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-2">
          <div className="section-eyebrow">Current investments</div>
          <h3 className="mt-1 font-display text-2xl font-semibold text-vault dark:text-parchment">
            What I'm putting time into
          </h3>
          <div className="ledger-rule mt-2" />
          <p className="mt-4 text-sm leading-relaxed text-inkSoft dark:text-parchment/80">
            Polishing{' '}
            <Link to="/projects" className="font-semibold text-goldInk hover:text-gold dark:text-goldSoft dark:hover:text-gold">
              Nextep
            </Link>
            , the resume + job-tracking tool, until it stops embarrassing me. Reading more systems code than I write. Trying to ship one side project a quarter (so far in Q2: zero, so don't check the math).
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {['AI workflows', 'Backend', 'DevOps', 'Testing', 'Documentation'].map((chip) => (
              <span key={chip} className="pill">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ============================================================
            WIRE DETAILS — the "Connect" section
            ============================================================ */}
        <motion.div variants={fadeUp(reducedMotion)} className="card-surface p-6 lg:col-span-6">
          <div className="section-eyebrow">Wire details</div>
          <h3 className="mt-1 font-display text-2xl font-semibold text-vault dark:text-parchment">
            How to actually reach me
          </h3>
          <div className="ledger-rule mt-2" />

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                {github && (
                  <a className="coin-btn" href={github} target="_blank" rel="noreferrer">
                    <GithubIcon /> GitHub
                  </a>
                )}
                {linkedin && (
                  <a className="coin-btn" href={linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon /> LinkedIn
                  </a>
                )}
                <Link to="/contact" className="ghost-btn">
                  Full wire form →
                </Link>
              </div>
              <div className="rounded-lg border border-dashed border-gold/40 bg-gold/5 p-4 font-mono text-sm leading-relaxed text-vault dark:border-goldSoft/30 dark:bg-goldSoft/5 dark:text-parchment">
                <div className="text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
                  Quote of the session
                </div>
                <div className="mt-2 italic">
                  "I ship measurable, testable systems with clean architecture and fast iteration loops. (I also over-document, in case you were worried.)"
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-vault/15 bg-parchment/60 p-5 font-mono text-sm dark:border-gold/15 dark:bg-vaultInk/60">
              <div className="mb-3 flex items-center justify-between border-b border-vault/20 pb-2 text-[10px] uppercase tracking-ledger text-goldInk dark:border-gold/20 dark:text-goldSoft">
                <span>End-of-day summary</span>
                <span className="tabular">USD · CA$</span>
              </div>
              <div className="space-y-1.5 tabular">
                <div className="flex justify-between">
                  <span className="text-inkSoft dark:text-parchment/70">Coffee drunk</span>
                  <span className="text-vault dark:text-parchment">3 cups · $7.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-inkSoft dark:text-parchment/70">Bugs shipped</span>
                  <span className="text-vault dark:text-parchment">2 · $0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-inkSoft dark:text-parchment/70">Tests passing</span>
                  <span className="text-success">+5 · ROI ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-inkSoft dark:text-parchment/70">Hours procrastinating</span>
                  <span className="text-danger">−1.5 · lossy</span>
                </div>
                <div className="flex justify-between border-t border-vault/20 pt-2 dark:border-gold/20">
                  <span className="font-semibold text-vault dark:text-parchment">Net worth</span>
                  <span className="font-semibold text-goldInk dark:text-goldSoft">↑ 1 fun day</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
