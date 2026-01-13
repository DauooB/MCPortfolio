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

        <div className="fixed inset-0 z-[-1] bg-black/40 pointer-events-none" />

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

