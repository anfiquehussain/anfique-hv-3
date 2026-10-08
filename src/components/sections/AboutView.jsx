import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Download, Terminal } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

const SMOOTH_EASE = [0.16, 1, 0.3, 1];

export default function AboutView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: SMOOTH_EASE, delay: 0.1 }}
      className="w-full max-w-5xl mx-auto flex-1 min-h-0 flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch h-full lg:max-h-[66vh] overflow-y-auto custom-scrollbar py-1">
        {/* Left Column: Bio Bento Card & Credentials Action Dock */}
        <div className="md:col-span-7 flex flex-col justify-between gap-3">
          {/* Bio & Background Bento Card */}
          <div className="flex-1 p-4 sm:p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm flex flex-col justify-between shadow-xl shadow-black/20 hover:border-cyan-500/30 transition-colors duration-300">
            <div>
              {/* Card Header with Status Tag */}
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-mono-code font-semibold">
                    BIO // PROFILE
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AVAILABLE FOR HIRE</span>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="my-3 space-y-2.5">
                <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-200">
                  Dedicated <strong className="text-white font-semibold">Software Developer</strong> specialized in{" "}
                  <span className="text-cyan-300 font-medium">Django</span> and{" "}
                  <span className="text-cyan-300 font-medium">React.js</span> with a proven track record of architecting user-friendly, high-performance web applications.
                </p>
                <p className="text-[11px] sm:text-xs leading-relaxed text-neutral-400">
                  Outside of pure code, I bring deep enthusiasm for <span className="text-neutral-300 font-medium">UI/UX & graphic design</span>, seamlessly integrating aesthetic finesse with robust architectural patterns.
                </p>
              </div>
            </div>

            {/* Quick Impact Micro-Stats */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
              <div className="px-2.5 py-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                <span className="text-sm sm:text-base font-bold font-mono-code text-cyan-400 block leading-tight">10+</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 tracking-wider uppercase block mt-0.5">Projects Built</span>
              </div>
              <div className="px-2.5 py-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                <span className="text-sm sm:text-base font-bold font-mono-code text-white block leading-tight">Full-Stack</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 tracking-wider uppercase block mt-0.5">React + Django</span>
              </div>
              <div className="px-2.5 py-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                <span className="text-sm sm:text-base font-bold font-mono-code text-emerald-400 block leading-tight">UI / UX</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 tracking-wider uppercase block mt-0.5">Design Systems</span>
              </div>
            </div>
          </div>

          {/* Integrated Education & Resume Action Dock */}
          <div className="p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-mono-code tracking-wider text-cyan-400 font-semibold block">
                  Education Credential
                </span>
                <p className="text-xs font-medium text-white truncate">
                  Diploma in Computer Engineering
                </p>
                <p className="text-[10px] text-neutral-400 truncate">
                  Govt. Polytechnic College Mananthavady
                </p>
              </div>
            </div>

            {/* Resume Download Action Button */}
            <a
              href={siteConfig.resumeUrl}
              download="Anfique_Hussain_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-neutral-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0 cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (.PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Technical Stack Matrix */}
        <div className="md:col-span-5 flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-sm shadow-xl shadow-black/20 hover:border-cyan-500/30 transition-colors duration-300">
          <div>
            {/* Matrix Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Terminal className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] uppercase tracking-widest text-neutral-300 font-mono-code font-semibold">
                  TECHNICAL STACK
                </span>
              </div>
              <span className="text-[10px] font-mono-code text-cyan-400/90 px-2 py-0.5 rounded bg-cyan-500/5 border border-cyan-500/20">
                CORE MATRIX
              </span>
            </div>

            {/* Clean Categorized Skills */}
            <div className="space-y-3.5 py-3">
              {siteConfig.skillCategories.map((group, idx) => {
                const primarySkills = ["React.js", "Django", "Python", "TailwindCSS", "PostgreSQL", "REST APIs"];
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono-code flex items-center gap-1.5">
                        <span className="text-cyan-400 font-bold">//</span>
                        <span className="font-semibold text-neutral-300">{group.category}</span>
                      </span>
                      <span className="text-[9px] font-mono-code text-neutral-600">
                        {group.skills.length} skills
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill, sIdx) => {
                        const isPrimary = primarySkills.includes(skill);
                        return (
                          <span
                            key={sIdx}
                            className={`px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-mono-code tracking-wide transition-all duration-200 ${
                              isPrimary
                                ? "border border-cyan-500/35 bg-cyan-500/10 text-cyan-200 font-medium shadow-[0_0_8px_rgba(6,182,212,0.12)] hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
                                : "border border-white/10 bg-white/[0.025] text-neutral-300 hover:border-white/20 hover:text-white hover:bg-white/[0.06]"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Status / Specs Footer */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
              <span>PRODUCTION_READY</span>
            </span>
            <span className="text-neutral-600">MODERN_WEB_STACK</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
