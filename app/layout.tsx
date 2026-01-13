import type { Metadata } from "next";
import SoundManager from "@/components/SoundManager";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata: Metadata = {
  title: "Minecraft Portfolio",
  description: "Portfolio Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // 2. INJECT VARIABLE
        className={`antialiased`}
      >
        <SoundManager />
        <BackgroundMusic />
        <div 
          className="fixed inset-0 z-[-1] animate-panorama"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* --- DARK OVERLAY (Optional but recommended) --- */}
        {/* We separate this so the overlay doesn't move with the image */}
        <div className="fixed inset-0 z-[-1] bg-black/40 pointer-events-none" />

        {/* --- MAIN CONTENT --- */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

