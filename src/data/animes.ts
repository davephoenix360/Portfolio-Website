/* ============================================================
   Anime list — used by the stats marquee.
   Each entry maps a logo file in /public/anime/ to a display
   title (used for alt text + tooltip).
   ============================================================ */
export type Anime = {
  id: string;
  file: string;   // path under /anime/ (e.g. "jujutsu-kaisen.png")
  title: string;  // display title
};

export const animes: Anime[] = [
  { id: 'jujutsu-kaisen',      file: 'jujutsu-kaisen.png',     title: 'Jujutsu Kaisen' },
  { id: 'demon-slayer',        file: 'demon-slayer.jpg',       title: 'Demon Slayer' },
  { id: 'attack-on-titan',     file: 'attack-on-titan.png',    title: 'Attack on Titan' },
  { id: 'one-piece',           file: 'one-piece.jpg',          title: 'One Piece' },
  { id: 'naruto-shippuden',    file: 'naruto-shippuden.png',   title: 'Naruto Shippuden' },
  { id: 'fullmetal-alchemist', file: 'fullmetal-alchemist.jpg',title: 'Fullmetal Alchemist' },
  { id: 'hunter-x-hunter',     file: 'hunter-x-hunter.jpg',    title: 'Hunter x Hunter' },
  { id: 'dragon-ball-super',   file: 'dragon-ball-super.jpg',  title: 'Dragon Ball Super' },
  { id: 'chainsaw-man',        file: 'chainsaw-man.jpg',       title: 'Chainsaw Man' },
  { id: 'tokyo-ghoul',         file: 'tokyo-ghoul.png',        title: 'Tokyo Ghoul' },
  { id: 'my-hero-academia',    file: 'my-hero-academia.jpg',   title: 'My Hero Academia' },
  { id: 'black-clover',        file: 'black-clover.png',       title: 'Black Clover' },
];
