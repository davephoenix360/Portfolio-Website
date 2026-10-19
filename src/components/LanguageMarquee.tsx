import React from 'react';
import Marquee from './Marquee';
import { languages } from '../data/skills';

/* ============================================================
   LanguageMarquee — auto-scrolling pill row of every language
   Diepreye has worked with. Used inside the stats section.
   ============================================================ */

const LanguagePill: React.FC<{ name: string }> = ({ name }) => (
  <span className="marquee-pill">
    <span className="marquee-pill-dot" aria-hidden="true" />
    <span className="marquee-pill-text">{name}</span>
  </span>
);

const LanguageMarquee: React.FC = () => {
  return (
    <div className="marquee-wrap">
      {/* Top row — scrolls left */}
      <Marquee duration={45}>
        {languages.map((lang) => (
          <LanguagePill key={`a-${lang}`} name={lang} />
        ))}
      </Marquee>
      {/* Bottom row — scrolls right (reverse) for visual parallax */}
      <Marquee duration={55} reverse>
        {languages.map((lang) => (
          <LanguagePill key={`b-${lang}`} name={lang} />
        ))}
      </Marquee>
    </div>
  );
};

export default LanguageMarquee;
