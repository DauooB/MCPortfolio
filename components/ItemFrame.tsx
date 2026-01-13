import React from "react";

interface ItemFrameProps {
  children?: React.ReactNode;
  size?: string; // Allow resizing (default w-20 h-20)
  label?: string; // Optional text label below the frame (like a tooltip)
}

export default function ItemFrame({ children, size = "w-24 h-24", label }: ItemFrameProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      {/* THE FRAME ITSELF */}
      <div 
        className={`
          relative 
          ${size}
          flex items-center justify-center
          
          /* TEXTURES */
          bg-[#5e381b] /* Dark Leather Brown Background */
          border-[4px] border-[#cbbf86] /* Birch Wood Border */
          
          /* 3D DEPTH */
          shadow-[inset_3px_3px_0px_#3a2311,inset_-3px_-3px_0px_#7d4b24,0px_4px_0px_rgba(0,0,0,0.3)]
          
          /* HOVER EFFECT: The item pops out slightly */
          transition-transform hover:scale-105 duration-100 ease-linear cursor-pointer
        `}
      >
        {/* The Content (Tool/Block) */}
        <div className="relative z-10 w-[70%] h-[70%] drop-shadow-md group-hover:scale-110 transition-transform">
          {children}
        </div>

        {/* The "Nail" (Optional detail to look realistic) */}
        {/* <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3a2311] rounded-full opacity-50"></div> */}
      </div>

      {/* OPTIONAL LABEL (Only shows on hover if you want) */}
      {label && (
        <span className="font-minecraft text-white text-xs text-shadow opacity-70 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      )}
    </div>
  );
}