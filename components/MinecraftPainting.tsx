import React from "react";

interface MinecraftPaintingProps {
  src: string;
  alt?: string;
  className?: string;
  aspect?: "square" | "video" | "auto"; // New Prop to control shape
}

export default function MinecraftPainting({ 
  src, 
  alt = "Minecraft Painting", 
  className = "",
  aspect = "square" // Default to square like before
}: MinecraftPaintingProps) {
  
  // Determine aspect ratio class
  const aspectClass = 
    aspect === "square" ? "aspect-square" : 
    aspect === "video" ? "aspect-video" : 
    ""; // 'auto' lets the image dictate height

  return (
    <div className={`relative group ${className}`}>
      {/* THE FRAME */}
      <div 
        className={`
          relative 
          w-full 
          ${aspectClass} /* Uses the variable above */
          
          /* TEXTURE & BORDER */
          bg-[#c1b486] 
          border-[4px] border-[#9c8c63] /* Thicker border looks better for certificates */
          
          /* 3D THICKNESS EFFECT */
          shadow-[4px_4px_0px_rgba(0,0,0,0.3)]
          
          /* Hover Lift */
          transition-transform hover:-translate-y-1 duration-100 ease-linear
        `}
      >
        {/* THE ART */}
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-fill z-10 relative" // Changed to object-fill so it fills the rectangle
          style={{ 
            // We turn OFF pixelated for certificates so text is readable
            imageRendering: aspect === 'square' ? 'pixelated' : 'auto' 
          }}
        />

        {/* OVERLAY (Optional texture grain - reduced opacity for certificates) */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-5 bg-[url('/textures/noise.png')]"></div>
      </div>
    </div>
  );
}