import React from "react";

interface ServerListEntryProps {
  iconSrc: string;
  name: string;
  description: string;
  ping?: number;
  players: number;
  maxPlayers: number;
  onClick?: () => void;  
  githubLink?: string;      
}

export default function ServerListEntry({
  iconSrc,
  name,
  description,
  ping = 20,
  players,
  maxPlayers,
  onClick,
  githubLink
}: ServerListEntryProps) {
  
  const signalStrength = ping < 50 ? 5 : ping < 150 ? 4 : ping < 300 ? 3 : 2;

  return (
    <div
      onClick={onClick}
      className="
        group
        relative w-full h-[75px]
        flex items-center 
        px-2 cursor-pointer
        border-[2px] border-transparent 
        /* SELECTION HIGHLIGHT */
        hover:border-[#808080] 
        hover:bg-black/40
        transition-all duration-75
      "
    >
      {/* 1. SERVER ICON */}
      <img
        src={iconSrc}
        alt={name}
        className="w-[64px] h-[64px] mr-3 object-cover image-pixelated border border-white/10"
      />

      {/* 2. TEXT CONTENT */}
      <div className="flex-1 flex flex-col justify-center h-full overflow-hidden">
        <span className="font-minecraft text-white text-lg leading-tight drop-shadow-md truncate py-1">
          {name}
        </span>
        <span className="font-minecraft text-[#AAAAAA] text-sm leading-tight drop-shadow-md truncate">
          {description}
        </span>
      </div>

      {/* 3. ACTIONS & STATUS */}
      <div className="flex items-center h-full ml-4 gap-4">
        
        {/* GITHUB BUTTON*/}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} 
            className="
              hidden group-hover:flex /* Show only on hover to keep it clean */
              items-center justify-center
              w-8 h-8
              bg-[#3c3c3c] hover:bg-[#525252]
              border-2 border-black
              image-pixelated
            "
            title="View Source Code"
          >
            {/* Simple Github SVG Icon */}
            <svg role="img" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        )}

        {/* CONNECTION INFO */}
        <div className="flex flex-col items-end gap-1">
          <span className="font-minecraft text-[#AAAAAA] text-sm drop-shadow-md">
            {players}/{maxPlayers}
          </span>
          <div className="w-6 h-4 flex items-end justify-between gap-[2px]">
             {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-[3px] border-black/20 ${i < signalStrength ? 'bg-[#00FF00]' : 'bg-[#3a3a3a]'}`}
                  style={{ height: `${(i + 1) * 20}%` }} 
                />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}