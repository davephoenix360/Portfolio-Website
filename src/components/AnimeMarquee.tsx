import React from 'react';
import Marquee from './Marquee';
import { animes } from '../data/animes';

/* ============================================================
   AnimeMarquee — auto-scrolling row of anime title-card logos.
   Uses the actual logos Diepreye uploaded in the zip.
   ============================================================ */

const AnimeCard: React.FC<{ file: string; title: string }> = ({
  file,
  title,
}) => (
  <div className="marquee-anime-card" title={title}>
    <img
      src={`/anime/${file}`}
      alt={title}
      loading="lazy"
      className="marquee-anime-img"
    />
  </div>
);

const AnimeMarquee: React.FC = () => {
  return (
    <div className="marquee-wrap marquee-anime-wrap">
      <Marquee duration={50}>
        {animes.map((a) => (
          <AnimeCard key={`a-${a.id}`} {...a} />
        ))}
      </Marquee>
    </div>
  );
};

export default AnimeMarquee;
