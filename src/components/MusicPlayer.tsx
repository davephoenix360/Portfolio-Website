import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { playlist } from '../data/music';

/* ============================================================
   MusicPlayer — a small bottom-left player powered by Spotify.

   Uses a Spotify embed iframe so we don't host any audio. All
   the actual music (play, pause, next, prev, volume, queue) is
   handled inside the Spotify iframe — we just provide the
   launcher and the frame.

   Three visual states:
     1. INTRO     — first-visit only, a small pill that says
        "♫ click for music" then auto-collapses to minimized
        after ~6s (or on click).
     2. MINIMIZED — small pill with ♫ icon + a play hint.
        Clicking opens the expanded player.
     3. EXPANDED  — Spotify embed iframe + a clear "✕ close"
        button. Closing unmounts the iframe and stops audio.

   Pausing/stopping is doubly explicit:
     - The Spotify embed has its own play/pause button.
     - Our own ✕ button unmounts the iframe entirely.
   ============================================================ */

const STORAGE = {
  introSeen: 'dcd-music-intro-seen',
};

const MusicPlayer: React.FC = () => {
  const reducedMotion = useReducedMotion();

  // view: which UI we're showing
  const [view, setView] = useState<'intro' | 'minimized' | 'expanded' | 'loading'>(
    'minimized',
  );

  // === mount: read localStorage, decide initial view ===
  useEffect(() => {
    const introSeen = localStorage.getItem(STORAGE.introSeen) === '1';
    setView(introSeen ? 'minimized' : 'intro');
  }, []);

  // === intro auto-collapse after 6s ===
  useEffect(() => {
    if (view !== 'intro') return;
    const t = setTimeout(() => {
      setView('minimized');
      localStorage.setItem(STORAGE.introSeen, '1');
    }, 6000);
    return () => clearTimeout(t);
  }, [view]);

  // === user actions ===
  const onIntroClick = () => {
    setView('minimized');
    localStorage.setItem(STORAGE.introSeen, '1');
  };

  const onPillClick = () => {
    setView('loading');
    // Show a brief loading state, then mount the iframe.
    // Tiny delay so the user sees the "loading" feedback
    // even though Spotify's iframe is fast.
    setTimeout(() => setView('expanded'), 80);
  };

  const onClose = () => {
    setView('minimized');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {/* ============================================================
            INTRO state — first visit, "click for music" pill
           ============================================================ */}
        {view === 'intro' && (
          <motion.button
            key="intro"
            onClick={onIntroClick}
            aria-label="Click to enable music player"
            className="music-pill music-pill--intro"
            initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <span className="music-pill-icon">♫</span>
            <span className="music-pill-text">click for music</span>
            <span className="music-pill-caret" aria-hidden="true" />
          </motion.button>
        )}

        {/* ============================================================
            MINIMIZED state — small pill, click to open
           ============================================================ */}
        {view === 'minimized' && (
          <motion.button
            key="min"
            onClick={onPillClick}
            aria-label="Open music player"
            className="music-pill"
            initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <span className="music-pill-icon">♫</span>
            <span className="music-pill-text">{playlist.displayName.toLowerCase()}</span>
            <span className="music-pill-meta">play</span>
          </motion.button>
        )}

        {/* ============================================================
            LOADING state — brief flash while the iframe mounts
           ============================================================ */}
        {view === 'loading' && (
          <motion.div
            key="loading"
            className="music-pill"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.08 }}
          >
            <span className="music-pill-icon">♫</span>
            <span className="music-pill-text">loading…</span>
          </motion.div>
        )}

        {/* ============================================================
            EXPANDED state — Spotify embed + close button
           ============================================================ */}
        {view === 'expanded' && (
          <motion.div
            key="exp"
            role="dialog"
            aria-label="Music player"
            className="music-panel"
            initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.95 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="music-panel-header">
              <span className="music-panel-eyebrow">
                <span className="text-textSubtle">~ $</span> now playing
              </span>
              <button
                onClick={onClose}
                aria-label="Close music player and stop playback"
                title="Close (stops music)"
                className="music-panel-close"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Track info header — gives the user context before Spotify loads */}
            <div className="music-panel-track">
              <div className="music-panel-title">{playlist.displayName}</div>
              <div className="music-panel-artist">Spotify · click ▶ inside to start</div>
            </div>

            {/* Spotify iframe — the actual player */}
            <div className="music-spotify-wrap">
              <iframe
                title={`${playlist.displayName} — Spotify player`}
                src={playlist.spotifyEmbedUrl}
                width="100%"
                height="352"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="music-spotify-iframe"
              />
            </div>

            {/* Footer hint — reinforces that ✕ stops music */}
            <div className="music-panel-footer">
              click ✕ above to stop
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
