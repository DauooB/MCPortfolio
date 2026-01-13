"use client";

import React from "react";
import MinecraftPainting from "@/components/MinecraftPainting";
import MCButton from "@/components/MCButton";
import { useRouter } from "next/navigation";

const paintingsData = [
  {
    id: 1,
    src: "/certificates/python.png",
    alt: "Python Certificate",
    sizeClass: "w-full md:w-full",
    link: "/pythoncertificate.pdf" 
  },
  {
    id: 2,
    src: "/certificates/Webdev.png",
    alt: "Web Development Certificate",
    sizeClass: "w-full md:w-full",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-ba4042e0-29be-4af9-a341-6ac38b04e15c.jpg?v=1766248349000"
  },
];

export default function PaintingGallery() {
    const router = useRouter();
  return (
    
    <main className="min-h-screen bg-black/10 backdrop-blur-sm p-8 flex flex-col items-center">
      
      <h1 className="font-minecraft text-white text-3xl text-center mb-12 drop-shadow-md mt-20">
        My Certifications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center w-full max-w-5xl">
        
        {paintingsData.map((painting) => (
          <div key={painting.id} className={`flex flex-col items-center group ${painting.sizeClass}`}>
            
            <a 
              href={painting.link}
              target="_blank"             
              rel="noopener noreferrer"   
              className="block w-full h-full cursor-pointer"
            >
              <MinecraftPainting 
                src={painting.src} 
                alt={painting.alt}
                className="hover:brightness-110 transition-all"
              />
            </a>

            <p className="font-minecraft text-white/80 text-center mt-4 text-lg bg-black/40 px-3 py-1 rounded">
              {painting.alt}
            </p>
          </div>
        ))}

      </div>
      <div className="flex gap-4 mt-6 w-full max-w-60 mt-40">
               <MCButton className="pt-3" fullWidth onClick={() => router.push("/")}>Back to main menu</MCButton>
            </div>
    </main>
  );
}