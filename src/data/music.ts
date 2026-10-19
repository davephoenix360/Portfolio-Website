/* ============================================================
   Music — the background playlist for the portfolio.

   Uses a Spotify embed iframe so we don't have to host the
   audio files ourselves. Spotify handles all the audio,
   bandwidth, and controls.

   To swap the playlist:
   1. Open your Spotify playlist
   2. Click "..." → "Share" → "Embed playlist"
   3. Copy the iframe src URL (looks like:
      https://open.spotify.com/embed/playlist/XXXXX?...)
   4. Paste it below as `spotifyEmbedUrl`
   ============================================================ */

export const playlist = {
  // Spotify editorial "Chill R&B" playlist.
  // Swap this for your own playlist whenever you want.
  spotifyEmbedUrl:
    'https://open.spotify.com/embed/playlist/37i9dQZF1FOWu8jolY8N3P?utm_source=generator',
  displayName: 'Chill Calm R&B',
};
