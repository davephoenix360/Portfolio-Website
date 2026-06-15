import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeUp, staggerContainer } from '../components/motion';
import { profile } from '../data/profile';
import { GithubIcon, LinkedInIcon, MailIcon } from '../components/icons';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied(null), 1500);
    } catch (err) {
      console.error('Unable to copy email', err);
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
        eyebrow="Wire Transfer"
        title="Open an account"
        description="Internship opportunity, interesting problem, or just want to talk about AI systems or compiler complaints — I'm in. The fastest route is email; the slowest is LinkedIn (but I do check it)."
      />

      <motion.div
        variants={fadeUp(reducedMotion)}
        className="card-surface grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr]"
      >
        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
            Account · Email
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-vault/30 bg-parchment px-4 py-2 font-mono text-sm text-ink dark:border-gold/30 dark:bg-vaultInk dark:text-parchment">
              <MailIcon />
              {profile.emailPersonal}
            </div>
            <button
              onClick={() => handleCopy(profile.emailPersonal)}
              className="rounded-full border border-vault/30 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-vault transition hover:-translate-y-0.5 hover:border-gold hover:text-goldInk dark:border-gold/30 dark:text-parchment dark:hover:border-goldSoft dark:hover:text-goldSoft"
            >
              {copied === profile.emailPersonal ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-vault/30 bg-parchment px-4 py-2 font-mono text-sm text-ink dark:border-gold/30 dark:bg-vaultInk dark:text-parchment">
              <MailIcon />
              {profile.emailSchool}
            </div>
            <button
              onClick={() => handleCopy(profile.emailSchool)}
              className="rounded-full border border-vault/30 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-vault transition hover:-translate-y-0.5 hover:border-gold hover:text-goldInk dark:border-gold/30 dark:text-parchment dark:hover:border-goldSoft dark:hover:text-goldSoft"
            >
              {copied === profile.emailSchool ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          <p className="text-base leading-relaxed text-inkSoft dark:text-parchment/80">
            <span className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
              Pro tip
            </span>{' '}
            Include the role, the team, and the rough timeline in the first message. I respond fastest to concise notes — usually within 24 hours, definitely within the week.
          </p>
        </div>

        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
            Also reachable at
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              className="pill"
              href={profile.socials.find((s) => s.label === 'GitHub')?.href}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              className="pill"
              href={profile.socials.find((s) => s.label === 'GitHub_School')?.href}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> School GH
            </a>
            <a
              className="pill"
              href={profile.socials.find((s) => s.label === 'LinkedIn')?.href}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
          <div className="rounded-lg border border-vault/15 bg-parchment/60 p-4 dark:border-gold/15 dark:bg-vaultInk/60">
            <div className="font-mono text-[10px] uppercase tracking-ledger text-goldInk dark:text-goldSoft">
              Book time (in beta)
            </div>
            <iframe
              src="https://calendly.com/diepreye-ualberta"
              width="100%"
              height="400"
              frameBorder={0}
              title="Book a 30-min slot with Diepreye"
              className="mt-2 rounded-md"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
