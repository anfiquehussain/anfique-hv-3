import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal, Code, Cpu } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function HomeView({ onSelectTab }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full flex flex-col justify-between max-w-2xl py-2"
    >
      {/* Top Status */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono-code mb-5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{siteConfig.status}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08] mb-4">
          Engineering tomorrow's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
            web systems.
          </span>
        </h1>

        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
          {siteConfig.tagline} Focused on sub-second latency, modern design systems, and rock-solid full-stack architectures.
        </p>
      </div>

      {/* Feature / Capability Highlights Cards */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div
          onClick={() => onSelectTab("projects")}
          className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2.5 group-hover:scale-110 transition">
            <Cpu className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-white flex items-center justify-between">
            <span>Production Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-cyan-400 transition" />
          </h4>
          <p className="text-neutral-400 text-xs mt-1">
            Explore 4+ high-impact case studies & live systems.
          </p>
        </div>

        <div
          onClick={() => onSelectTab("about")}
          className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-teal-500/30 transition cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-2.5 group-hover:scale-110 transition">
            <Code className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-white flex items-center justify-between">
            <span>Technical Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-teal-400 transition" />
          </h4>
          <p className="text-neutral-400 text-xs mt-1">
            Full-stack capabilities, background & engineering stack.
          </p>
        </div>
      </div>

      {/* Bottom CTA / Terminal Footer */}
      <div className="p-4 rounded-xl border border-white/10 bg-black/40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono-code text-neutral-300">
            anfique@portfolio:~$ <span className="text-cyan-400">select_module</span>
          </span>
        </div>
        <button
          onClick={() => onSelectTab("contact")}
          className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold text-xs transition"
        >
          Start a Conversation
        </button>
      </div>
    </motion.div>
  );
}
