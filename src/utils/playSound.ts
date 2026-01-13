export const triggerSound = (type: "click" | "hover") => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("minecraft-sound", { detail: { type } });
      window.dispatchEvent(event);
    }
  };