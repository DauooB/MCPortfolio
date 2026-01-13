"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume 50%

  // 1. ATTEMPT AUTO-PLAY ON MOUNT
  useEffect(() => {
    // Check if user previously muted it
    const savedMute = localStorage.getItem("mc-music-muted");
    if (savedMute === "true") return; // Don't auto-play if they muted it last time

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    // Browser Autoplay Policy: We try to play. If it fails, we wait for a click.
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Auto-play was blocked. We add a one-time listener to start it on first click.
          const startAudio = () => {
            audio.play();
            setIsPlaying(true);
            window.removeEventListener("click", startAudio);
          };
          window.addEventListener("click", startAudio);
        });
    }
  }, []);

  // 2. TOGGLE FUNCTION
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem("mc-music-muted", "true");
    } else {
      audio.play();
      setIsPlaying(true);
      localStorage.setItem("mc-music-muted", "false");
    }
  };

  return (
    <>
      {/* THE AUDIO ELEMENT (Hidden) */}
      <audio 
        ref={audioRef} 
        src="/sounds/bgm.mp3" 
        loop // Loop forever
        hidden 
      />

      {/* THE TOGGLE BUTTON (Fixed to bottom-left) */}
      <button
        onClick={toggleMusic}
        className="
          fixed top-4 right-4 z-50
          w-7 h-7
          bg-[#696767] 
        text-gray-300
        text-sm md:text-base
        border-t-3 border-t-zinc-300
        border-l-3 border-t-zinc-300
        border-r-3 border-gray-700
        border-b-3 border-gray-700
        outline-neutral-950
        outline-3
        
        /* THE CLASSIC BEVEL LOOK */
        shadow-[inset_1px_2px_0px_rgba(255,255,255,0.25),inset_-1px_-2px_0px_rgba(0,0,0,0.5)]


        transform-gpu hover:[transform:scale3d(1.02,1.02,1)] transition-transform duration-150
        hover:border-t-[#fff]
        hover:border-l-[#fff]
        hover:border-r-[gray]
        hover:border-b-[gray]
        
        /* ACTIVE STATE (Pressed) */
        active:bg-[#4a4a4a]
        active:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_0px_rgba(255,255,255,0.25)]
        
        transition-none
        flex items-center justify-center
        "
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          /* Music Note Icon (Playing) */
          <svg className="w-6 h-6 fill-[#00FF00]" viewBox="0 0 24 24">
             <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        ) : (
          /* Muted Icon */
          <svg className="w-6 h-6 fill-[#FF5555]" viewBox="0 0 24 24">
             <path d="M4.27 3L3 4.27 12 13.27v2.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4v-.73l7.73 7.73 1.27-1.27L4.27 3zM12 7V3h4v4h-4z" />
          </svg>
        )}
      </button>
    </>
  );
}