/* ============================================================
   Music — the chill background playlist for the portfolio.

   Drop MP3/.ogg/.m4a files into /public/music/ and add an entry
   below. The player will pick them up automatically.

   See /public/music/README.md for the full instructions.
   ============================================================ */

export type Track = {
  id: string;
  file: string;   // path under /music/ (e.g. "lofi-1.mp3")
  title: string;  // display title
  artist: string; // display artist
};

export const tracks: Track[] = [
  // Example entry — replace with your real tracks:
  // { id: 'lofi-1', file: 'lofi-beats-1.mp3', title: 'Coffee Shop',  artist: 'Lo-Fi Beats' },
  // { id: 'lofi-2', file: 'lofi-beats-2.mp3', title: 'Rainy Window', artist: 'Lo-Fi Beats' },
];
