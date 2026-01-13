"use client";

import { useCallback } from "react";

export default function useMinecraftSound() {
  const playClick = useCallback(() => {
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 0.5; // Don't blow the user's ears out
    audio.play().catch((e) => console.error("Audio play failed", e));
  }, []);


  return { playClick};
}