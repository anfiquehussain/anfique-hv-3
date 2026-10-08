import React from "react";
import { siteConfig } from "../../data/siteConfig";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        {siteConfig.status}
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl">
        Hello World. I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">{siteConfig.name}</span>
      </h1>

      <p className="mt-6 text-neutral-400 max-w-xl text-base sm:text-lg">
        {siteConfig.tagline}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <a
          href="#projects"
          className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-medium text-sm transition"
        >
          Explore Work
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-lg border border-white/15 hover:border-white/40 text-white font-medium text-sm transition bg-white/5"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
