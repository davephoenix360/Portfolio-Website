import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import LanguageMarquee from '../components/LanguageMarquee';
import AnimeMarquee from '../components/AnimeMarquee';

/* ============================================================
   Hero — name, pitch, CTAs. Minimal, single screen.
   ============================================================ */
const Hero: React.FC = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section
      id="top"
      className="section-shell gap-6 pb-20 pt-12 sm:pt-20"
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide2 text-gold">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          {profile.availability}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wide2 text-textMuted">
          {profile.location}
        </span>
      </motion.div>

      <motion.h1
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-5xl font-extrabold leading-[1.0] tracking-tighter text-text sm:text-6xl lg:text-7xl"
      >
        Hi, I'm{' '}
        <span className="text-gold">{profile.name.split(' ')[0]}</span>.
        <br />
        I ship{' '}
        <span className="text-gold">reliable code</span>.
      </motion.h1>

      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl text-base leading-relaxed text-textMuted sm:text-lg"
      >
        {profile.pitch}
      </motion.p>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-3"
      >
        <a href="#projects" className="btn-primary">
          See my work →
        </a>
        <a href="#contact" className="btn-ghost">
          Get in touch
        </a>
      </motion.div>
    </section>
  );
};

/* ============================================================
   About — the longer "who I am" + quick facts
   ============================================================ */
const About: React.FC = () => {
  const reducedMotion = useReducedMotion();
  return (
    <motion.section
      id="about"
      className="section-shell"
      initial={false}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="eyebrow-cmd">
          <span className="shell-prompt">~ $</span> <span className="text-text">cd</span>{' '}
          <span className="text-gold">./about</span>
        </div>
        <h2 className="section-title mt-2">{profile.aboutShort.split('.')[0]}.</h2>
        <div className="gold-rule" />
      </div>

      <div className="card-surface max-w-3xl">
        <p className="text-base leading-relaxed text-text sm:text-lg whitespace-pre-line">
          {profile.aboutLong}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card-surface">
          <div className="eyebrow-cmd">
            <span className="shell-prompt-secondary">//</span>{' '}
            <span className="text-textMuted">currently</span>
          </div>
          <ul className="mt-3 space-y-1.5 font-mono text-sm text-text">
            <li>
              <span className="text-textMuted">📚 Reading:</span>{' '}
              <span className="text-gold">Designing Data-Intensive Apps</span>{' '}
              <span className="text-textMuted">(again)</span>
            </li>
            <li>
              <span className="text-textMuted">🛠 Building:</span>{' '}
              <span className="text-gold">Nexstepper</span>{' '}
              <span className="text-textMuted">(nexstepper.com)</span>
            </li>
            <li>
              <span className="text-textMuted">💼 Working:</span>{' '}
              <span className="text-gold">Dayforce</span>{' '}
              <span className="text-textMuted">(devops intern, remote)</span>
            </li>
            <li>
              <span className="text-textMuted">🎮 Playing:</span>{' '}
              <span className="text-gold">Apex Legends</span>
            </li>
            <li>
              <span className="text-textMuted">📺 Watching:</span>{' '}
              <span className="text-gold">One Piece</span>{' '}
              <span className="text-textMuted">+ Jujutsu Kaisen</span>
            </li>
          </ul>
        </div>

        <div className="card-surface">
          <div className="eyebrow-cmd">
            <span className="shell-prompt-secondary">//</span>{' '}
            <span className="text-textMuted">fun_facts</span>
            <span className="text-textSubtle">.txt</span>
          </div>
          <ul className="mt-3 space-y-1.5 font-mono text-sm text-text">
            <li>
              🌶️ Nigerian. Lives in Edmonton. Eats a concerning amount of
              protein.
            </li>
            <li>
              ♟️ Online chess rating:{' '}
              <span className="text-gold">~900</span> (still learning, still
              losing)
            </li>
            <li>
              📂 Has 3 "dotfiles" folders in <code>~/</code>, all empty
            </li>
            <li>
              🎯 Long-term:{' '}
              <span className="text-gold">
                build cool stuff with cool people
              </span>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

/* ============================================================
   Projects — flagship first
   ============================================================ */
const Projects: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="section-shell"
      initial={false}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="eyebrow-cmd">
          <span className="shell-prompt">~ $</span> <span className="text-text">ls</span>{' '}
          <span className="text-gold">./projects</span>
          <span className="text-textMuted"> --featured</span>
        </div>
        <h2 className="section-title mt-2">
          The ones I'd point at in an interview.
        </h2>
        <div className="gold-rule" />
        <p className="section-subtitle mt-4">
          Production builds, shipped games, and a few things I'm proud of even
          if they never made it past a hackathon.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={false}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`card-surface group flex flex-col gap-4 transition hover:border-gold/40 ${
              project.featured ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-text group-hover:text-gold">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="pill-gold !text-[9px]">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-textMuted">
                  {project.summary}
                </p>
              </div>
            </div>

            {project.whatIDid && project.whatIDid.length > 0 && (
              <ul className="space-y-1 text-sm text-text">
                {project.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-gold">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs uppercase tracking-wide2 text-gold transition hover:text-goldSoft"
                  >
                    {link.label} <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

/* ============================================================
   Experience — timeline
   ============================================================ */
const Experience: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      className="section-shell"
      initial={false}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="eyebrow-cmd">
          <span className="shell-prompt">~ $</span> <span className="text-text">cat</span>{' '}
          <span className="text-gold">./experience.log</span>
        </div>
        <h2 className="section-title mt-2">Where I've worked.</h2>
        <div className="gold-rule" />
        <p className="section-subtitle mt-4">
          Internships + co-ops + leadership. Recency-weighted, with the boring
          parts emphasized.
        </p>
      </div>

      <div className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={false}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <div className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-gold sm:-left-[41px]" />
            <div className="card-surface">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="font-display text-lg font-bold text-text">
                    {exp.role}
                  </div>
                  <div className="mt-0.5 font-mono text-sm text-gold">
                    {exp.company}
                  </div>
                </div>
                <div className="font-mono text-xs text-textMuted">
                  {exp.period} · {exp.location}
                </div>
              </div>
              <p className="mt-2 text-sm text-textMuted">{exp.summary}</p>
              {exp.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm text-text">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-gold">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

/* ============================================================
   Contact — clean, single card
   ============================================================ */
const Contact: React.FC = () => {
  const reducedMotion = useReducedMotion();
  return (
    <motion.section
      id="contact"
      className="section-shell"
      initial={false}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="eyebrow-cmd">
          <span className="shell-prompt">~ $</span> <span className="text-text">ping</span>{' '}
          <span className="text-gold">diepreye@dev</span>
        </div>
        <h2 className="section-title mt-2">
          Let's build something <span className="text-gold">cool</span>.
        </h2>
        <div className="gold-rule" />
      </div>

      <div className="card-surface grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-text sm:text-lg">
            Open to full-time SWE roles starting{' '}
            <span className="text-gold">May 2027</span>, interesting co-op /
            contract projects, and anime recommendations. (The last one
            especially.)
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`mailto:${profile.emailPersonal}`}
              className="btn-primary"
            >
              {profile.emailPersonal}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Résumé <span aria-hidden>↗</span>
            </a>
          </div>

          <p className="text-xs text-textMuted">
            Or DM me on LinkedIn / GitHub. I respond faster than I commit, which
            is saying something.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-bg/60 p-5 font-mono text-sm">
          <div className="mb-3 flex items-center justify-between border-b border-border pb-2 text-[10px] uppercase tracking-wide2 text-textMuted">
            <span>// request.log</span>
            <span className="text-gold">2XX OK</span>
          </div>
          <pre className="overflow-x-auto text-text leading-relaxed">{`GET /collaboration
→ 200 OK

GET /anime-recs
→ 200 OK
→ payload: [
    "Frieren",
    "Dungeon Meshi",
    "Bocchi the Rock!",
    "Mob Psycho 100"
  ]

POST /hire-diepreye
→ 202 Accepted
→ (he's reading it)`}</pre>
        </div>
      </div>
    </motion.section>
  );
};

/* ============================================================
   Stats — infinite-scroll language + anime lists.

   Two horizontal marquees replace the old RPG character sheet.
   Languages first (the focus), then animes (the personality).
   Both auto-scroll infinitely, pause on hover, and respect
   prefers-reduced-motion.
   ============================================================ */
const Stats: React.FC = () => {
  const reducedMotion = useReducedMotion();
  return (
    <motion.section
      id="stats"
      className="section-shell"
      initial={false}
    >
      {/* Eyebrow */}
      <div className="eyebrow-cmd">
        <span className="shell-prompt">~ $</span> <span className="text-text">ls</span>{' '}
        <span className="text-gold">./languages --all</span>
      </div>

      <h2 className="section-title">
        Every language I&apos;ve shipped something real in.
      </h2>
      <p className="section-subtitle">
        From production backend services to game scripts and
        OS-level code — these are the ones that earned their
        place on the roster.
      </p>

      <div className="mt-2">
        <LanguageMarquee />
      </div>

      <div className="tty-divider mt-12">
        <span>now playing</span>
      </div>

      <div className="eyebrow-cmd">
        <span className="shell-prompt">~ $</span> <span className="text-text">ls</span>{' '}
        <span className="text-gold">./animes --watched</span>
      </div>

      <h2 className="section-title">
        What I&apos;m watching when I&apos;m not shipping code.
      </h2>
      <p className="section-subtitle">
        A small slice of the shelf. Drop me a rec — I&apos;m always
        looking for the next thing.
      </p>

      <div className="mt-2">
        <AnimeMarquee />
      </div>

      {/* If reduced motion is on, the marquees render static —
          we still want to credit the source on hover. */}
      {reducedMotion && (
        <p className="font-mono text-[10px] uppercase tracking-wide2 text-textSubtle">
          (animations paused — enable motion for the scrolling list)
        </p>
      )}
    </motion.section>
  );
};

/* ============================================================
   Home — single-page scroll
   ============================================================ */
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Stats />
      <Contact />
    </div>
  );
};

export default Home;
