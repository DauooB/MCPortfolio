"use client";

import React, { useState } from "react";
import MCButton from "./MCButton"; // Reuse your existing button

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!isOpen) return null;

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Formspree Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xykgpzze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Optional: Close after 2 seconds
        setTimeout(() => {
           setStatus("idle");
           onClose();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    // 1. BACKDROP (Darkens the rest of the screen)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      
      {/* 2. THE GUI CONTAINER (Matches 'Edit Server Info' screen) */}
      <div className="
        relative w-full max-w-lg
        flex flex-col items-center
        bg-[#1e1e1e] /* Dark Grey GUI Background */
        border-[2px] border-[#a0a0a0] /* Light Grey Outer Border */
        shadow-2xl
      ">
        {/* Inner Border for depth */}
        <div className="absolute inset-[2px] border-[2px] border-[#555555] pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 p-8 z-10">
          
          {/* TITLE */}
          <h2 className="font-minecraft text-white text-xl text-center mb-2 drop-shadow-md">
            Contact Info
          </h2>

          {/* SUCCESS MESSAGE */}
          {status === "success" ? (
             <div className="text-green-400 font-minecraft text-center py-10">
                Message Sent Successfully! <br/> returning to game...
             </div>
          ) : (
            <>
              {/* NAME FIELD */}
              <div className="flex flex-col gap-1">
                <label className="font-minecraft text-[#a0a0a0] text-sm ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full h-10 px-3
                    bg-black border-[2px] border-[#a0a0a0]
                    font-minecraft text-white outline-none
                    focus:border-white transition-colors
                  "
                />
              </div>

              {/* EMAIL FIELD */}
              <div className="flex flex-col gap-1">
                <label className="font-minecraft text-[#a0a0a0] text-sm ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full h-10 px-3
                    bg-black border-[2px] border-[#a0a0a0]
                    font-minecraft text-white outline-none
                    focus:border-white transition-colors
                  "
                />
              </div>

              {/* MESSAGE FIELD */}
              <div className="flex flex-col gap-1">
                <label className="font-minecraft text-[#a0a0a0] text-sm ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full p-3
                    bg-black border-[2px] border-[#a0a0a0]
                    font-minecraft text-white outline-none resize-none
                    focus:border-white transition-colors custom-scrollbar
                  "
                />
              </div>

              {/* ERROR STATE */}
              {status === "error" && (
                <p className="text-red-500 font-minecraft text-xs text-center">
                  Connection Failed. Please try again.
                </p>
              )}

              {/* BUTTONS ROW */}
              <div className="flex gap-4 mt-4">
                {/* DONE (Send) */}
                <div className="flex-1">
                  <MCButton className="pt-3" 
                    fullWidth 
                    type="submit" 
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Done"}
                  </MCButton>
                </div>

                {/* CANCEL */}
                <div className="flex-1">
                  <MCButton className="pt-3"
                    fullWidth 
                    type="button" 
                    onClick={onClose}
                  >
                    Cancel
                  </MCButton>
                </div>
              </div>
            </>
          )}

        </form>
      </div>
    </div>
  );
}