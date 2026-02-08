import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, staggerContainer } from '../components/motion';
import { profile } from '../data/profile';
import { GithubIcon, LinkedInIcon, MailIcon } from '../components/icons';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Unable to copy email', err);
      setCopied(false);
    }
  };

  return (
    <motion.section
      className="section-shell"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something useful"
        description="If you have an internship opportunity, interesting problem, or you just want to talk about AI systems, feel free to reach out."
      />

      <motion.div
        variants={fadeUp(reducedMotion)}
        className="card-surface grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr]"
      >
        <div className="space-y-4">
          <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Email</div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-100">
              <MailIcon />
              {profile.emailPersonal}
            </div>
            <button
              onClick={() => handleCopy(profile.emailPersonal)}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent"
            >
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-100">
              <MailIcon />
              {profile.emailSchool}
            </div>
            <button
              onClick={() => handleCopy(profile.emailSchool)}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent"
            >
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>
          <p className="text-base text-slate-700 dark:text-slate-200">
            Please include context about timelines, team size, and the problems you want solved. I
            respond quickly to concise notes.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Socials</div>
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
              href={profile.socials.find((s) => s.label === 'GitHub_School')?.href}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              School GitHub
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
          <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-200">
            {/* Calendly Landing Page */}
            <iframe
              src="https://calendly.com/diepreye-ualberta"
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
