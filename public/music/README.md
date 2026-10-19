# Music

The portfolio uses a **Spotify embed** for the background playlist.
No audio files are hosted in this repo — Spotify handles everything.

## Swapping the playlist

1. Open your Spotify playlist (your own, or an editorial one)
2. Click **...** → **Share** → **Embed playlist**
3. Copy the iframe `src` URL (looks like `https://open.spotify.com/embed/playlist/XXXXX?...`)
4. Paste it into `src/data/music.ts` as `spotifyEmbedUrl`
5. Also update `displayName` to match the playlist name

```ts
export const playlist = {
  spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/YOUR_ID?utm_source=generator&...',
  displayName: 'Your Playlist Name',
};
```

## How the player works

- A small pill at the **bottom-left** of every page (`♫ chill lo-fi · play`)
- Click it → Spotify's full embed UI opens (cover art, play/pause, track list)
- Close with **✕** to stop the music entirely
- The playlist is **not** autoplayed — the user has to click ▶ inside the embed first
  (respects browser autoplay policies and visitor preferences)

## Why Spotify, not self-hosted?

- Zero repo size impact
- No bandwidth costs (Spotify serves the audio)
- Free, licensed, curated playlists
- Works on every browser, every device
