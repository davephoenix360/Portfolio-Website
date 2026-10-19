import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { tracks } from '../data/music';

/* ============================================================
   MusicPlayer — a small bottom-left music player.

   Three visual states:
     1. INTRO  — first-visit only, a small pill that says
        "♫ click for music" then auto-collapses to minimized
        after ~6s (or on click).
     2. MINIMIZED — small pill with ♫ icon + a play/pause hint
        + a tiny track counter. Clicking expands.
     3. EXPANDED — full mini-player with prev / pause / next,
        volume slider, current track info, and an "x" to
        collapse back to minimized.

   Persistence (localStorage):
     - intro-seen:       boolean — has the user seen the intro?
     - volume:           0..1    — current volume
     - track-index:      int     — last played track

   If the tracks array is empty, the player shows a static
   "♫ music coming soon" pill — non-interactive, so the
   structure is visible before the user uploads files.
   ============================================================ */

const STORAGE = {
  introSeen: 'dcd-music-intro-seen',
  volume: 'dcd-music-volume',
  trackIndex: 'dcd-music-track-index',
};

const DEFAULT_VOLUME = 0.25;

const formatTime = (s: number): string => {
  if (!isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const MusicPlayer: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const hasTracks = tracks.length > 0;

  // === state ===
  // view: which UI we're showing
  const [view, setView] = useState<'intro' | 'minimized' | 'expanded' | 'hidden'>(
    'hidden',
  );
  // audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // === mount: read localStorage, decide initial view ===
  useEffect(() => {
    if (!hasTracks) {
      setView('hidden');
      return;
    }
    const introSeen = localStorage.getItem(STORAGE.introSeen) === '1';
    if (introSeen) {
      setView('minimized');
    } else {
      setView('intro');
    }
    const savedVolume = parseFloat(localStorage.getItem(STORAGE.volume) || '');
    if (!isNaN(savedVolume) && savedVolume >= 0 && savedVolume <= 1) {
      setVolume(savedVolume);
    }
    const savedIdx = parseInt(localStorage.getItem(STORAGE.trackIndex) || '', 10);
    if (!isNaN(savedIdx) && savedIdx >= 0 && savedIdx < tracks.length) {
      setTrackIndex(savedIdx);
    }
  }, [hasTracks]);

  // === keep audio element in sync with track + volume ===
  useEffect(() => {
    if (!audioRef.current || !hasTracks) return;
    const track = tracks[trackIndex];
    audioRef.current.src = `/music/${track.file}`;
    audioRef.current.volume = volume;
  }, [trackIndex, hasTracks, volume]);

  // === intro auto-collapse after 6s ===
  useEffect(() => {
    if (view !== 'intro') return;
    const t = setTimeout(() => {
      setView('minimized');
      localStorage.setItem(STORAGE.introSeen, '1');
    }, 6000);
    return () => clearTimeout(t);
  }, [view]);

  // === persist volume + track ===
  useEffect(() => {
    localStorage.setItem(STORAGE.volume, String(volume));
  }, [volume]);
  useEffect(() => {
    localStorage.setItem(STORAGE.trackIndex, String(trackIndex));
  }, [trackIndex]);

  // === controls ===
  const play = useCallback(() => {
    if (!hasTracks) return;
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
      setError(null);
    }).catch((e) => {
      setError('Couldn\'t play — try clicking the play button again.');
      console.error('Audio play error:', e);
    });
  }, [hasTracks]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const next = useCallback(() => {
    setTrackIndex((i) => (i + 1) % tracks.length);
    setCurrentTime(0);
    // Autoplay the new track if we were already playing
    if (isPlaying) {
      setTimeout(() => play(), 50);
    }
  }, [isPlaying, play]);

  const prev = useCallback(() => {
    setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);
    setCurrentTime(0);
    if (isPlaying) {
      setTimeout(() => play(), 50);
    }
  }, [isPlaying, play]);

  // === audio element events ===
  const onTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };
  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };
  const onEnded = () => {
    // Auto-advance to the next track
    next();
  };
  const onError = () => {
    setError('Track failed to load — check the filename in /public/music/.');
    setIsPlaying(false);
  };

  // === user actions on the view ===
  const onIntroClick = () => {
    setView('minimized');
    localStorage.setItem(STORAGE.introSeen, '1');
    // Don't auto-start — user has to click play explicitly.
    // This respects browsers that block unrequested audio.
  };

  const toggleExpand = () => {
    setView((v) => (v === 'expanded' ? 'minimized' : 'expanded'));
  };

  // === empty state: no tracks yet ===
  if (view === 'hidden' || !hasTracks) {
    return (
      <div className="music-pill music-pill--empty" aria-label="Music player (no tracks loaded)">
        <span className="music-pill-icon">♫</span>
        <span className="music-pill-text">music coming soon</span>
      </div>
    );
  }

  const track = tracks[trackIndex];

  return (
    <>
      {/* Persistent audio element — never rendered visually */}
      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        onError={onError}
      />

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
            MINIMIZED state — small pill, click to expand
           ============================================================ */}
        {view === 'minimized' && (
          <motion.button
            key="min"
            onClick={toggleExpand}
            aria-label={`Open music player (${isPlaying ? 'playing' : 'paused'})`}
            className={`music-pill ${isPlaying ? 'music-pill--playing' : ''}`}
            initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <span className="music-pill-icon">{isPlaying ? '♫' : '♪'}</span>
            <span className="music-pill-text">
              {isPlaying ? 'now playing' : 'music off'}
            </span>
            <span className="music-pill-meta">
              {trackIndex + 1}/{tracks.length}
            </span>
          </motion.button>
        )}

        {/* ============================================================
            EXPANDED state — full mini-player
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
                onClick={toggleExpand}
                aria-label="Minimize music player"
                className="music-panel-close"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Track info */}
            <div className="music-panel-track">
              <div className="music-panel-title">{track.title}</div>
              <div className="music-panel-artist">{track.artist}</div>
            </div>

            {/* Progress bar */}
            <div className="music-progress">
              <span className="music-progress-time">{formatTime(currentTime)}</span>
              <div className="music-progress-bar">
                <div
                  className="music-progress-fill"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <span className="music-progress-time">{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="music-controls">
              <button
                onClick={prev}
                aria-label="Previous track"
                className="music-btn"
                type="button"
              >
                ⏮
              </button>
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                className={`music-btn music-btn--play ${isPlaying ? 'music-btn--playing' : ''}`}
                type="button"
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button
                onClick={next}
                aria-label="Next track"
                className="music-btn"
                type="button"
              >
                ⏭
              </button>
            </div>

            {/* Volume slider */}
            <div className="music-volume">
              <span className="music-volume-label">vol</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="music-volume-slider"
                aria-label="Volume"
              />
              <span className="music-volume-value">{Math.round(volume * 100)}%</span>
            </div>

            {/* Error message */}
            {error && (
              <div className="music-error">{error}</div>
            )}

            {/* Track counter */}
            <div className="music-panel-footer">
              track {trackIndex + 1} of {tracks.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
