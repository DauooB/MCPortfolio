export const triggerSound = (type: "click" | "hover") => {
    if (typeof window !== "undefined") {
      // Dispatch a custom event that SoundManager is listening for
      const event = new CustomEvent("minecraft-sound", { detail: { type } });
      window.dispatchEvent(event);
    }
  };