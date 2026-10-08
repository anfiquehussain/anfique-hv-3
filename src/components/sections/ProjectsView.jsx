import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import { siteConfig } from "../../data/siteConfig";

const getStatusBadge = (status) => {
  switch (status) {
    case "Live Production":
      return {
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        dot: "bg-emerald-400 animate-pulse",
        label: "Live App"
      };
    case "Desktop Release":
      return {
        badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        dot: "bg-amber-400",
        label: "Desktop"
      };
    case "In Development":
      return {
        badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        dot: "bg-purple-400",
        label: "In Dev"
      };
    default:
      return {
        badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        dot: "bg-cyan-400",
        label: "Open Source"
      };
  }
};

export default function ProjectsView() {
  const [selectedId, setSelectedId] = useState(siteConfig.projects[0].id);
  const [category, setCategory] = useState("all");

  const filteredProjects = siteConfig.projects.filter((p) => {
    if (category === "all") return true;
    return p.filterCategory === category;
  });

  const activeProject = siteConfig.projects.find((p) => p.id === selectedId) || siteConfig.projects[0];
  const activeIndex = siteConfig.projects.findIndex((p) => p.id === activeProject.id);

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + siteConfig.projects.length) % siteConfig.projects.length;
    setSelectedId(siteConfig.projects[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % siteConfig.projects.length;
    setSelectedId(siteConfig.projects[nextIdx].id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full flex flex-col justify-between max-w-4xl py-2"
    >
      {/* Top Header & Category Filters */}
      <div className="shrink-0 mb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono-code">
            <Layers className="w-3.5 h-3.5" />
            <span>Selected Works (2024 — 2026)</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-400">{siteConfig.projects.length} Projects</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: "all", label: `All (${siteConfig.projects.length})` },
              { id: "Full-Stack", label: "Full-Stack" },
              { id: "Frontend", label: "Frontend" },
              { id: "Python & Desktop", label: "Desktop & Python" }
            ].map((tab) => {
              const isActive = category === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setCategory(tab.id);
                    const matches = tab.id === "all"
                      ? siteConfig.projects
                      : siteConfig.projects.filter(p => p.filterCategory === tab.id);
                    if (matches.length > 0 && !matches.some(p => p.id === selectedId)) {
                      setSelectedId(matches[0].id);
                    }
                  }}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-mono-code tracking-wide whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.15)]"
                      : "bg-white/[0.02] text-neutral-400 border border-white/5 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch flex-1 min-h-0 overflow-hidden">
        {/* Left Column: Projects Directory List */}
        <div className="md:col-span-5 flex flex-col min-h-0">
          <div className="flex items-center justify-between px-1 pb-1.5 text-[10px] font-mono-code text-neutral-500 shrink-0">
            <span>PROJECT DIRECTORY</span>
            <span className="text-cyan-400">{filteredProjects.length} ITEMS</span>
          </div>

          <div className="overflow-y-auto pr-1.5 space-y-1.5 custom-scrollbar flex-1 min-h-0 max-h-[50vh]">
            {filteredProjects.map((proj) => {
              const isActive = proj.id === selectedId;
              const badge = getStatusBadge(proj.status);
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedId(proj.id)}
                  className={`w-full p-2.5 rounded-xl text-left border transition-all cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? "border-cyan-500/50 bg-gradient-to-r from-cyan-500/15 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.12)] text-white"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] text-neutral-300"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                  )}
                  <div className="flex items-center justify-between mb-1 pl-1">
                    <span className={`text-[10px] font-mono-code font-bold ${isActive ? "text-cyan-400" : "text-neutral-500"}`}>
                      PROJ #{proj.id}
                    </span>
                    <span className={`text-[9px] uppercase font-mono-code px-1.5 py-0.5 rounded border ${badge.badge} flex items-center gap-1`}>
                      <span className={`w-1 h-1 rounded-full ${badge.dot}`} />
                      {badge.label}
                    </span>
                  </div>
                  <div className="pl-1">
                    <h4 className={`text-xs sm:text-sm font-bold truncate ${isActive ? "text-white" : "group-hover:text-white"}`}>
                      {proj.title}
                    </h4>
                    <p className="text-[10px] text-neutral-400 truncate mt-0.5">
                      {proj.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Project Detail Card */}
        <div className="md:col-span-7 flex flex-col min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-5 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md relative overflow-hidden flex-1 flex flex-col justify-between min-h-0"
            >
              {/* Subtle accent highlight */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-1 shrink-0">
                  <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-mono-code font-bold">
                    {activeProject.category}
                  </span>
                  <span className={`text-[9px] font-mono-code px-2 py-0.5 rounded border ${getStatusBadge(activeProject.status).badge} flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getStatusBadge(activeProject.status).dot}`} />
                    {activeProject.status}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2 shrink-0">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono-code mt-0.5 truncate">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {activeProject.githubUrl && !activeProject.isPrivate && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-400 text-neutral-300 font-mono-code text-[11px] transition cursor-pointer"
                        title="Source Code on GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold font-mono-code text-[11px] transition shadow-[0_0_12px_rgba(6,182,212,0.3)] cursor-pointer"
                        title="Open Live Application"
                      >
                        <span>Live App</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Scrollable description & details */}
              <div className="overflow-y-auto custom-scrollbar pr-1 flex-1 space-y-2.5 min-h-0 my-1">
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {activeProject.description}
                </p>

                {activeProject.highlights && activeProject.highlights.length > 0 && (
                  <div className="p-2 sm:p-2.5 rounded-xl bg-black/30 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-cyan-300 font-mono-code block">
                      Key Highlights:
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {activeProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-neutral-300">
                          <span className="text-cyan-400 text-xs shrink-0 mt-0.5">✦</span>
                          <span className="leading-snug text-[11px] sm:text-xs">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1 font-mono-code">
                    Technologies & Stack:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {activeProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Prev / Next Navigation Bar */}
              <div className="flex items-center justify-between pt-2 mt-1 border-t border-white/10 text-xs font-mono-code text-neutral-400 shrink-0">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/10 hover:border-cyan-500/40 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition cursor-pointer"
                  title="Previous Project"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <span className="text-cyan-400 font-bold">PROJ #{activeProject.id}</span>
                  <span className="text-neutral-600">/</span>
                  <span>{siteConfig.projects.length.toString().padStart(2, '0')}</span>
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/10 hover:border-cyan-500/40 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition cursor-pointer"
                  title="Next Project"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
