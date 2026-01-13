"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ServerListEntry from "@/components/ServerListEntry";
import MCButton from "@/components/MCButton";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    desc: "My personal portfolio website.",
    icon: "/projects/portfolio.png", 
    ping: 23,
    completed: 8,
    total: 10,
    link: "https://mc-portfolio-self.vercel.app/",
    github: "https://github.com/DauooB/MCPortfolio"
  },
  {
    id: 2,
    name: "Password Manager",
    desc: "Secure password manager with encryption.",
    icon: "/projects/passwordmanager.png",
    ping: 140, 
    completed: 10,
    total: 10,
    link: "https://password-manager-lovat-delta.vercel.app/", 
    github: "https://github.com/DauooB/PasswordManager"
  },
  {
    id: 3,
    name: "Slinks App",
    desc: "A simple URL shortening service.",
    icon: "/projects/slinks.png",
    ping: 450, 
    completed: 3,
    total: 15,
    link: "https://slinks-kohl.vercel.app/",
    github: "https://github.com/DauooB/Slinks"
  },
  {
    id: 4,
    name: "Sircus",
    desc: "An elite gamified learning platform.",
    icon: "/projects/sircus.png",
    ping: 450, 
    completed: 3,
    total: 15,
    link: "https://sircus-next-phi.vercel.app/",
    github: "https://github.com/ASH-13xen/sircus-next"
  },
  
];

export default function ProjectsPage() {
  const router = useRouter();

  const handleOpenProject = (link: string) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 px-4 mt-10">
      
      {/* HEADER */}
      <h1 className="font-minecraft text-white text-3xl mb-2 drop-shadow-md">
        My Projects
      </h1>

      {/* SERVER LIST CONTAINER*/}
      <div className="
        w-full max-w-4xl 
        flex flex-col gap-1 p-1 
        bg-black/30 backdrop-blur-sm
        border border-[#555555] 
        shadow-2xl
      ">
        
        {/* HEADER ROW*/}
        <div className="flex justify-between px-2 py-1 bg-black/20 text-[#AAAAAA] font-minecraft text-xs">
           <span>Server Name</span>
           <span className="mr-8">Connection</span>
        </div>

        {/* LIST */}
        <div className="overflow-y-auto max-h-[60vh] custom-scrollbar">
          {projects.map((proj) => (
            <ServerListEntry
              key={proj.id}
              name={proj.name}
              description={proj.desc}
              iconSrc={proj.icon || "https://placehold.co/64x64/png"}
              ping={proj.ping}
              players={proj.completed}
              maxPlayers={proj.total}
              onClick={() => handleOpenProject(proj.link)}
              githubLink={proj.github}
            />
          ))}

           {/* Empty slots for realism */}
          {[...Array(3)].map((_, i) => (
             <div key={`empty-${i}`} className="w-full h-[72px] bg-transparent opacity-10" />
          ))}
        </div>

      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex gap-4 mt-6 w-full max-w-4xl">
         <MCButton className="pt-3" fullWidth onClick={() => router.push("/")}>Back to main menu</MCButton>
         <MCButton className="pt-3" fullWidth onClick={() => window.open("https://github.com/DauooB", "_blank")}>
            Direct Connect (Github)
         </MCButton>
      </div>

    </main>
  );
}