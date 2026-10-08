import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCommit,
  GitBranch,
  Sparkles,
  ExternalLink,
  Tag,
  Clock,
  CheckCircle2,
  Archive,
  Layers,
  ArrowUpRight,
  Terminal,
  ShieldCheck
} from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import { siteConfig } from "../../data/siteConfig";

const TABS = [
  { id: "all", label: "ALL BUILDS" },
  { id: "v3", label: "V3 (CURRENT)" },
  { id: "v2", label: "V2 SERIES" },
  { id: "v1", label: "V1 SERIES" },
  { id: "beta", label: "BETA" },
  { id: "archives", label: "ARCHIVES" }
];

export default function VersionsView() {
  const [activeTab, setActiveTab] = useState("all");
  const releases = siteConfig.portfolioReleases;

  const current = releases.current;
  const v2 = releases.v2;
  const v1 = releases.v1;
  const beta = releases.beta;
  const archives = releases.archives;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="w-full max-w-5xl mx-auto flex-1 min-h-0 flex flex-col justify-center"
    >
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            SYSTEM // RELEASES
          </span>
          <span className="text-xs text-neutral-400 font-mono-code hidden sm:inline">
            Version Evolution & Release Changelog
          </span>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono-code uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.15)] font-semibold"
                  : "bg-white/[0.03] text-neutral-400 border border-white/5 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Scrollable Bento Container */}
      <div className="h-full lg:max-h-[66vh] overflow-y-auto custom-scrollbar pr-1 sm:pr-2 space-y-3.5">
        
        {/* CURRENT PRODUCTION HERO CARD (v3.0) */}
        {(activeTab === "all" || activeTab === "v3") && (
          <div className="p-4 sm:p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/[0.08] via-cyan-500/[0.04] to-transparent backdrop-blur-sm relative overflow-hidden shadow-xl shadow-black/30">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.08] rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Header / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {current.version}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse">
                      ACTIVE PRODUCTION
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono-code block">
                    {current.tagline}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {current.githubUrl && (
                  <a
                    href={current.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 text-neutral-300 text-[11px] font-mono-code transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
                {current.liveUrl && (
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-emerald-300 text-[11px] font-mono-code font-semibold transition shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {current.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded-lg bg-black/30 border border-white/5 text-[11px] text-neutral-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSION 2 CARD */}
        {(activeTab === "all" || activeTab === "v2") && (
          <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm shadow-lg hover:border-cyan-500/30 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono-code text-[11px] font-bold">
                  {v2.category}
                </span>
                <span className="text-sm font-bold text-white tracking-wide">
                  {v2.title}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono-code">
                  ({v2.period})
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {v2.githubUrl && (
                  <a
                    href={v2.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-white/10 bg-white/5 hover:border-cyan-500/40 text-neutral-300 hover:text-cyan-300 text-[10px] font-mono-code transition"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                )}
                {v2.liveUrl && (
                  <a
                    href={v2.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-[10px] font-mono-code transition shadow-[0_0_8px_rgba(6,182,212,0.15)] font-semibold"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-neutral-400 my-2.5 leading-relaxed">
              {v2.description}
            </p>

            {/* Release Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono-code">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] text-neutral-500 uppercase">
                    <th className="py-1.5 px-2">#</th>
                    <th className="py-1.5 px-2">Release</th>
                    <th className="py-1.5 px-2">Timestamp</th>
                    <th className="py-1.5 px-2 hidden sm:table-cell">Milestone Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {v2.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-1.5 px-2 text-neutral-600">{idx + 1}</td>
                      <td className="py-1.5 px-2 font-bold text-cyan-300">{item.version}</td>
                      <td className="py-1.5 px-2 text-neutral-400 text-[11px]">{item.date}</td>
                      <td className="py-1.5 px-2 text-neutral-500 hidden sm:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VERSION 1 CARD */}
        {(activeTab === "all" || activeTab === "v1") && (
          <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm shadow-lg hover:border-indigo-500/30 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono-code text-[11px] font-bold">
                  {v1.category}
                </span>
                <span className="text-sm font-bold text-white tracking-wide">
                  {v1.title}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono-code">
                  ({v1.period})
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {v1.githubUrl && (
                  <a
                    href={v1.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-white/10 bg-white/5 hover:border-indigo-500/40 text-neutral-300 hover:text-indigo-300 text-[10px] font-mono-code transition"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                )}
                {v1.liveUrl && (
                  <a
                    href={v1.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-[10px] font-mono-code transition shadow-[0_0_8px_rgba(99,102,241,0.15)] font-semibold"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-neutral-400 my-2.5 leading-relaxed">
              {v1.description}
            </p>

            {/* Release Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono-code">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] text-neutral-500 uppercase">
                    <th className="py-1.5 px-2">#</th>
                    <th className="py-1.5 px-2">Release</th>
                    <th className="py-1.5 px-2">Timestamp</th>
                    <th className="py-1.5 px-2 hidden sm:table-cell">Milestone Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {v1.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-1.5 px-2 text-neutral-600">{idx + 1}</td>
                      <td className="py-1.5 px-2 font-bold text-indigo-300">{item.version}</td>
                      <td className="py-1.5 px-2 text-neutral-400 text-[11px]">{item.date}</td>
                      <td className="py-1.5 px-2 text-neutral-500 hidden sm:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DUAL GRID: BETA & ARCHIVE RELEASES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* BETA CARD */}
          {(activeTab === "all" || activeTab === "beta") && (
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono-code text-[10px] font-bold">
                      BETA
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide">
                      {beta.title}
                    </span>
                  </div>

                  {beta.githubUrl && (
                    <a
                      href={beta.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition"
                      title="Beta Repo"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="text-[11px] text-neutral-400 my-2">
                  {beta.description}
                </p>

                <div className="space-y-1 mt-2">
                  {beta.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-1.5 rounded bg-black/20 text-[11px] font-mono-code"
                    >
                      <span className="font-bold text-amber-300">{item.version}</span>
                      <span className="text-neutral-500 text-[10px]">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ARCHIVE CARD */}
          {(activeTab === "all" || activeTab === "archives") && (
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Archive className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      {archives.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {archives.githubUrl && (
                      <a
                        href={archives.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition"
                        title="Archive GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {archives.liveUrl && (
                      <a
                        href={archives.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-cyan-300 transition"
                        title="Archive Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-neutral-400 my-2">
                  {archives.description}
                </p>

                <div className="grid grid-cols-2 gap-1.5 mt-2">
                  {archives.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 rounded bg-black/20 text-[10px] font-mono-code border border-white/5"
                    >
                      <div className="font-bold text-neutral-300">{item.version}</div>
                      <div className="text-neutral-500 text-[9px] truncate">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Bottom Footer Note */}
      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-neutral-500 shrink-0">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
          <span>CONTINUOUS_DELIVERY</span>
        </span>
        <span>ARCHIVED & VERIFIED ON GITHUB</span>
      </div>
    </motion.div>
  );
}
