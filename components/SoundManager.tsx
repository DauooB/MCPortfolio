"use client";

import { useEffect, useRef } from "react";

export default function SoundManager() {
  const clickRef = useRef<HTMLAudioElement>(null);
  const hoverRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Define the event listener
    const handlePlaySound = (event: CustomEvent) => {
      const type = event.detail.type;
      
      if (type === "click" && clickRef.current) {
        clickRef.current.currentTime = 0;
        clickRef.current.play().catch(() => {});
      } else if (type === "hover" && hoverRef.current) {
        hoverRef.current.currentTime = 0;
        hoverRef.current.play().catch(() => {});
      }
    };

    // Attach listener to window
    window.addEventListener("minecraft-sound" as any, handlePlaySound);

    // Cleanup
    return () => {
      window.removeEventListener("minecraft-sound" as any, handlePlaySound);
    };
  }, []);

  return (
    <div hidden>
      {/* Preload is crucial for instant playback */}
      <audio ref={clickRef} src="/sounds/click.mp3" preload="auto" />
      <audio ref={hoverRef} src="/sounds/hover.mp3" preload="auto" />
    </div>
  );
}