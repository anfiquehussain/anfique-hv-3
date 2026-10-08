import React from "react";
import { Sparkles } from "lucide-react";

export default function NeofetchView() {
  return (
    <div className="space-y-3 font-mono-terminal">
      <div className="text-neutral-400 flex items-center gap-1.5">
        <span className="text-emerald-400 font-bold">anfique@archlinux</span>
        <span className="text-neutral-500">:</span>
        <span className="text-cyan-300">~</span>
        <span className="text-white font-bold">$</span>
        <span className="text-cyan-200 font-semibold ml-1">neofetch --portfolio</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center pt-0.5">
        {/* Arch / Linux Stylized ASCII Art */}
        <div className="sm:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-teal-500/10 to-indigo-500/20 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500" />
          <div className="relative text-cyan-400 font-bold whitespace-pre text-[11px] sm:text-[12px] leading-tight select-none bg-black/60 p-3 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
{`       /\\
      /  \\
     /\\   \\
    /      \\
   /   ,,   \\
  /   |  |  -\\
 /_-''    ''-_\\`}
            <div className="mt-2.5 pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[10px] text-cyan-300 font-mono-terminal font-bold">
              <span>ARCH // LINUX</span>
              <span className="text-emerald-400 font-normal">● ONLINE</span>
            </div>
          </div>
        </div>

        {/* System Specs List */}
        <div className="sm:col-span-7 space-y-1.5 text-xs bg-black/40 p-3 rounded-xl border border-white/5">
          <div className="text-sm font-bold text-white border-b border-white/10 pb-1.5 flex items-center justify-between">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 font-bold">
              anfique@archlinux
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 font-mono-terminal font-semibold">
              v2026.1
            </span>
          </div>

          <div className="pt-0.5 space-y-1 text-[11px] sm:text-xs">
            <p className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
              <span className="text-neutral-400 font-semibold">OS</span>
              <span className="text-white font-medium">Arch Linux x86_64</span>
            </p>
            <p className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
              <span className="text-neutral-400 font-semibold">Role</span>
              <span className="text-cyan-300 font-semibold">Full-Stack Engineer</span>
            </p>
            <p className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
              <span className="text-neutral-400 font-semibold">Stack</span>
              <span className="text-emerald-300 font-medium">Django + React.js</span>
            </p>
            <p className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
              <span className="text-neutral-400 font-semibold">Experience</span>
              <span className="text-white font-medium">4+ Years Building</span>
            </p>
            <p className="flex justify-between items-center py-0.5 border-b border-white/[0.03]">
              <span className="text-neutral-400 font-semibold">Projects</span>
              <span className="text-amber-300 font-mono-terminal font-bold">10+ Production Apps</span>
            </p>
            <p className="flex justify-between items-center py-0.5">
              <span className="text-neutral-400 font-semibold">Latency</span>
              <span className="text-emerald-400 font-bold font-mono-terminal">&lt; 40ms Edge</span>
            </p>
          </div>
        </div>
      </div>

      {/* Linux Terminal 8-Color Palette Bar with Glow */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 justify-center select-none">
        <span className="w-5 h-2.5 rounded bg-[#1e222a]" />
        <span className="w-5 h-2.5 rounded bg-[#e06c75] shadow-[0_0_6px_rgba(224,108,117,0.3)]" />
        <span className="w-5 h-2.5 rounded bg-[#98c379] shadow-[0_0_6px_rgba(152,195,121,0.3)]" />
        <span className="w-5 h-2.5 rounded bg-[#e5c07b] shadow-[0_0_6px_rgba(229,192,123,0.3)]" />
        <span className="w-5 h-2.5 rounded bg-[#61afef] shadow-[0_0_6px_rgba(97,175,239,0.3)]" />
        <span className="w-5 h-2.5 rounded bg-[#c678dd] shadow-[0_0_6px_rgba(198,120,221,0.3)]" />
        <span className="w-5 h-2.5 rounded bg-[#56b6c2] shadow-[0_0_6px_rgba(86,182,194,0.3)]" />
        <span className="w-5 h-2.5 rounded bg-[#abb2bf]" />
      </div>
    </div>
  );
}
