import React from "react";
import { siteConfig } from "../../data/siteConfig";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="text-sm font-semibold tracking-wider text-white">
        {siteConfig.name} <span className="text-cyan-400">.</span>
      </div>
      <div className="flex items-center gap-6 text-xs text-neutral-400">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
}
