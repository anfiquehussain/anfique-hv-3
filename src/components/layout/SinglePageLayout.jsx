import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  StackOverflowIcon,
  LeetCodeIcon,
  InstagramIcon,
  FacebookIcon
} from "../icons/SocialIcons";
import { siteConfig } from "../../data/siteConfig";
import LinuxScreen3D from "../terminal/LinuxScreen3D";
import AboutView from "../sections/AboutView";
import ProjectsView from "../sections/ProjectsView";
import ContactView from "../sections/ContactView";
import VersionsView from "../sections/VersionsView";

const MENU_ITEMS = [
  { id: "about", label: "ABOUT", num: "01" },
  { id: "projects", label: "PROJECTS", num: "02" },
  { id: "contact", label: "CONTACT", num: "03" },
];

const VALID_PAGES = ["about", "projects", "contact", "versions", "v"];

const getInitialPage = () => {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace("#", "").toLowerCase().trim();
  if (hash === "v" || hash === "versions") return "versions";
  if (VALID_PAGES.includes(hash)) {
    return hash;
  }
  const path = window.location.pathname.replace(/^\//, "").toLowerCase().trim();
  if (path === "v" || path === "versions") return "versions";
  if (VALID_PAGES.includes(path)) {
    return path;
  }
  return null;
};

const SMOOTH_EASE = [0.16, 1, 0.3, 1];

export default function SinglePageLayout() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Sync activePage with browser hash/URL
  useEffect(() => {
    if (activePage) {
      if (window.location.hash !== `#${activePage}`) {
        window.history.replaceState(null, "", `#${activePage}`);
      }
    } else {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  }, [activePage]);

  // Handle browser Back / Forward buttons and manual hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setActivePage(page);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const navigateToPage = (id) => {
    if (id) {
      window.history.pushState(null, "", `#${id}`);
      setActivePage(id);
    } else {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
      setActivePage(null);
    }
  };

  const handleMenuClick = (id) => {
    navigateToPage(activePage === id ? null : id);
  };

  const handleBackToMenu = () => {
    navigateToPage(null);
  };

  const isExpanded = activePage !== null;

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen w-full max-w-full bg-[#08090d] text-slate-100 flex flex-col justify-between p-3 sm:p-5 lg:p-8 overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[450px] lg:w-[500px] h-[280px] sm:h-[450px] lg:h-[500px] bg-cyan-500/[0.05] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-indigo-500/[0.04] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* Subtle modern background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* TOP HEADER */}
      <header className="flex items-center justify-between z-20 shrink-0 pb-2.5 sm:pb-3.5 border-b border-white/[0.06] mb-2 sm:mb-3">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
          <div
            onClick={handleBackToMenu}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-sm sm:text-base shadow-[0_0_12px_rgba(6,182,212,0.2)] cursor-pointer hover:border-cyan-400 transition shrink-0"
          >
            A
          </div>
          <div className="min-w-0">
            <span
              onClick={handleBackToMenu}
              className="font-bold text-white text-xs sm:text-sm tracking-wide block uppercase cursor-pointer hover:text-cyan-300 transition truncate"
            >
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-xs text-neutral-400 block tracking-wider uppercase truncate">
              {siteConfig.title}
            </span>
          </div>
        </div>

        {/* Status indicator & social links / Back Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.button
                key="back-btn"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25, ease: SMOOTH_EASE }}
                onClick={handleBackToMenu}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-[11px] sm:text-xs uppercase tracking-wider hover:bg-cyan-500/20 active:scale-95 transition cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.15)] shrink-0 font-mono-code font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">RETURN_INDEX</span>
                <span className="sm:hidden">BACK</span>
              </motion.button>
            ) : (
              <motion.div
                key="status-pill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: SMOOTH_EASE }}
                className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>AVAILABLE_FOR_HIRE</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social icons */}
          <div className={`items-center gap-1.5 sm:gap-2 text-neutral-400 ${isExpanded ? "hidden sm:flex" : "flex"}`}>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 sm:p-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-400"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1 sm:p-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-400"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-1 sm:p-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-400"
              title="Twitter (X)"
            >
              <TwitterIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={siteConfig.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-1 sm:p-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition text-neutral-400 hidden xs:inline-flex"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 min-h-0 flex flex-col justify-center relative z-10 w-full max-w-full">
        <div className="w-full h-full flex flex-col justify-center">

          {/* HOME LANDING VIEW (Navigation List + 3D Linux Terminal) */}
          <div className="w-full flex justify-center">
            <motion.div
              initial={false}
              animate={{
                opacity: isExpanded ? 0 : 1,
                scale: isExpanded ? 0.98 : 1,
                y: isExpanded ? -8 : 0,
              }}
              transition={{
                duration: isExpanded ? 0.35 : 0.85,
                delay: isExpanded ? 0 : 0.2,
                ease: SMOOTH_EASE,
              }}
              className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center"
              style={{
                display: isExpanded ? "none" : "grid",
                transition: "display 0.3s",
              }}
            >
              {/* Left Column: Navigation Index */}
              <div className="lg:col-span-5 flex flex-col justify-center px-1 sm:pl-4">
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 mb-2 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                  <span>NAVIGATION_INDEX</span>
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-5 lg:gap-6">
                  {MENU_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item.id)}
                      onMouseEnter={() => setHoveredTab(item.id)}
                      onMouseLeave={() => setHoveredTab(null)}
                      className="group inline-flex items-baseline gap-2.5 sm:gap-5 py-0.5 transition-all outline-none w-fit cursor-pointer text-left"
                    >
                      <span className="text-[11px] sm:text-sm tracking-widest text-neutral-500 group-hover:text-cyan-400 transition-colors duration-300 font-mono-code">
                        [{item.num}]
                      </span>
                      <span
                        className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider transition-all duration-300 transform inline-block ${
                          hoveredTab === item.id
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 translate-x-2 sm:translate-x-3 geist-pixel-heavy"
                            : "text-neutral-400 group-hover:text-white group-hover:translate-x-2 sm:group-hover:translate-x-3 geist-pixel-bold"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Subtitle & Quick Status */}
                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3.5 border-t border-white/[0.06] text-xs text-neutral-400 max-w-sm">
                  <p className="leading-relaxed text-[11px] sm:text-xs text-neutral-300">
                    Full-Stack Software Developer specialized in <span className="text-cyan-300 font-semibold">Django</span> & <span className="text-cyan-300 font-semibold">React</span>. Architecting high-performance web systems with sub-second latency.
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-cyan-400/90 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
                    <span>Try typing in the interactive Linux CLI below →</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Linux Terminal Screen */}
              <div className="lg:col-span-7 flex items-center justify-center w-full min-w-0">
                <LinuxScreen3D onSelectTab={navigateToPage} />
              </div>
            </motion.div>
          </div>

          {/* DYNAMIC MODULAR EXPANDED CONTENT AREA */}
          <AnimatePresence mode="wait">
            {activePage === "about" && <AboutView key="about-view" />}
            {activePage === "projects" && <ProjectsView key="projects-view" />}
            {activePage === "contact" && <ContactView key="contact-view" />}
            {activePage === "versions" && <VersionsView key="versions-view" />}
          </AnimatePresence>

        </div>
      </main>

      {/* FOOTER BAR */}
      <footer className="flex items-center justify-between text-[11px] text-neutral-500 pt-1.5 border-t border-white/[0.04] z-20 shrink-0 gap-2">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
          <span className="uppercase tracking-wider">{siteConfig.location}</span>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <span className="uppercase tracking-wider hidden sm:inline">
            {isExpanded ? `STATE: ${activePage?.toUpperCase()}_EXPANDED` : "STATE: INDEX_READY"}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => navigateToPage(activePage === "versions" ? null : "versions")}
            title="View System Release Changelog & Version History"
            aria-label="View system release changelog"
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[10px] font-mono-code transition-all cursor-pointer select-none ${
              activePage === "versions"
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.2)] font-semibold"
                : "bg-white/[0.02] text-neutral-500 border-white/5 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05]"
            }`}
          >
            <span className="w-1 h-1 rounded-full bg-cyan-400/80" />
            <span>{siteConfig.portfolioReleases?.current?.version || "v3.0"}</span>
          </button>

          <span className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest truncate">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
        </div>
      </footer>
    </div>
  );
}
