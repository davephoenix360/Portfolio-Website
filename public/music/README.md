# Music files

Drop your MP3s (or `.ogg`, `.m4a`, `.wav`) here, then list them in
`src/data/music.ts` so the player knows about them.

## Filename convention

Lowercase, kebab-case, no spaces. The filename is referenced from
`src/data/music.ts` as `file: 'your-filename.mp3'`.

```
public/music/
  lofi-beats-1.mp3
  lofi-beats-2.mp3
  ambient-piano.mp3
```

## Registering tracks

Open `src/data/music.ts` and add an entry per file:

```ts
export const tracks: Track[] = [
  { id: 'lofi-1', file: 'lofi-beats-1.mp3', title: 'Coffee Shop',     artist: 'Lo-Fi Beats' },
  { id: 'lofi-2', file: 'lofi-beats-2.mp3', title: 'Rainy Window',    artist: 'Lo-Fi Beats' },
  { id: 'pno-1',  file: 'ambient-piano.mp3', title: 'Quiet Room',     artist: 'Ambient Mix' },
];
```

`id` must be unique. `title` and `artist` are shown in the player UI.

## Why no autoplay?

Browsers block autoplay. The player only starts when the user
clicks PLAY in the first-visit prompt. No audio is loaded until then.
