"use client";

import { useRouter } from "next/navigation";
import MCButton from "@/components/MCButton";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">

<ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* LOGO AREA */}
      <div className="relative w-full max-w-4xl px-4 mb-8">
        <img
          src="/minecraft_title.png"
          alt="Minecraft Title"
          className="w-full h-auto scale-130 lg:scale-110"
        />
        <span
          className="
            absolute
            bottom-[10%] right-[10%] md:bottom-[60%] md:right-[7%]
            text-[#FFFF55] text-xl md:text-2xl
            whitespace-nowrap animate-splash pointer-events-none z-10
            rotate-[-20deg]
          "
          style={{
            textShadow: "3px 3px 0px #3f3f3f",
            transform: 'rotate(-20deg)',
            fontFamily: "var(--font-minecraft)"
          }}
        >
          Hi ! I am Dauoo Bhaiya.
        </span>
      </div>

      {/* MENU CONTAINER */}
      <div className="flex flex-col gap-3 w-full max-w-md z-20">

        {/* Top Buttons */}
        <MCButton className="pt-3" fullWidth onClick={() => router.push("/about")}>
          About Me
        </MCButton>

        <MCButton className="pt-3" fullWidth onClick={() => router.push("/projects")}>
          My Projects
        </MCButton>

        <MCButton className="pt-3" fullWidth onClick={() => router.push("/certifications")}>
          Certifications
        </MCButton>

        {/* --- BOTTOM ROW --- */}
        <div className="relative flex w-full gap-4 mt-3">

          {/* LANGUAGE BUTTON */}
          <div className="absolute -left-[4.3rem] top-0 hidden md:block ">
            <MCButton className="w-12 px-3" aria-label="Language">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </MCButton>
          </div>

          <div className="block md:hidden mr-1">
            <MCButton className="w-12 px-3" aria-label="Language">
              <img
                src="https://i.ibb.co/99187Lk/lang.png"
                alt="Language"
                className="w-6 h-6 object-contain"
              />
            </MCButton>
          </div>

          {/* Resume (Now takes 50% of the MAIN column) */}
          <div className="flex-1">
            <MCButton className="pt-3" fullWidth onClick={() => window.open("/resume.pdf", "_blank")}>
              Resume...
            </MCButton>
          </div>

          {/* Contact (Now takes 50% of the MAIN column) */}
          <div className="flex-1">
            <MCButton className="pt-3" fullWidth onClick={() => setIsContactOpen(true)}>
              Contact Me
            </MCButton>
          </div>

        </div>

      </div>
    </main>
  );
}