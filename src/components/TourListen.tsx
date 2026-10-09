"use client";

import { useEffect, useRef, useState } from "react";

let activeAudio: HTMLAudioElement | null = null;

export function TourListen({ slug, title }: { slug: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const sync = () => setPressed(!audio.paused);
    const onHide = () => {
      if (document.hidden) audio.pause();
    };
    const onPageHide = () => audio.pause();

    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", onPageHide);
      audio.pause();
      if (activeAudio === audio) activeAudio = null;
    };
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    if (activeAudio && activeAudio !== audio) activeAudio.pause();
    activeAudio = audio;
    try {
      await audio.play();
    } catch {
      setPressed(false);
    }
  }

  return (
    <div className="tour-listen-slot">
      <button
        type="button"
        className="tour-listen"
        aria-pressed={pressed}
        aria-label={`Play the sounds of ${title}`}
        onClick={toggle}
      >
        <span className="record-disc" aria-hidden="true">
          <svg className="record-svg" viewBox="0 0 72 72" focusable="false">
            <circle cx="36" cy="36" r="35" fill="#3e5559" />
            <circle cx="36" cy="36" r="33.4" fill="#80a6ad" />
            <circle cx="36" cy="36" r="30.5" fill="none" stroke="#6a9299" strokeWidth="0.8" />
            <circle cx="36" cy="36" r="27.6" fill="none" stroke="#a9c9ce" strokeWidth="0.45" />
            <circle cx="36" cy="36" r="24.8" fill="none" stroke="#6a9299" strokeWidth="0.8" />
            <circle cx="36" cy="36" r="22" fill="none" stroke="#a9c9ce" strokeWidth="0.45" />
            <circle cx="36" cy="36" r="16.6" fill="#f6f3ee" />
            <circle cx="36" cy="36" r="16.6" fill="none" stroke="#d5e3e6" strokeWidth="0.7" />
          </svg>
          <img className="record-mark" src="/logo/sunburst.png" alt="" />
          <span className="record-hole" />
        </span>
        <span className="tour-listen-label">Listen to this tour</span>
      </button>
      <audio ref={audioRef} className="tour-audio" loop preload="none" aria-hidden="true">
        <source src={`/audio/tours/${slug}.m4a`} type="audio/mp4" />
        <source src={`/audio/tours/${slug}.mp3`} type="audio/mpeg" />
      </audio>
    </div>
  );
}
