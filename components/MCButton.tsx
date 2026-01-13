"use client";

import React from "react";
import { triggerSound } from "@/src/utils/playSound";

interface MCButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function MCButton({ children, fullWidth = false, className = "", ...props }: MCButtonProps) {
  
  const handleInteraction = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerSound("click");
    
    setTimeout(() => {
      if (props.onClick) {
        props.onClick(e);
      } }, 620);
  };
  return (
    <button
      {...props}
      onClick={handleInteraction}
      className={`
        relative 
        h-12 
        cursor-pointer
        ${fullWidth ? "w-full" : "w-auto"} 
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
        ${className}
      `}
      style={{
        fontSize: "1.06rem",
        textShadow: "3px 3px 0px #3f3f3f",
      }}
    >
      {children}
    </button>
  );
}