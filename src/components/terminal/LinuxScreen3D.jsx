import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  Sparkles,
  Activity,
  Play,
  Maximize2,
  Minimize2
} from "lucide-react";
import confetti from "canvas-confetti";
import { handleTerminalCommand } from "./commands/terminalCommands";
import NeofetchView from "./views/NeofetchView";
import EngineerPyView from "./views/EngineerPyView";
import BtopView from "./views/BtopView";
import DeployShView from "./views/DeployShView";
import MatrixCanvas from "./views/MatrixCanvas";

const TABS = [
  { id: "neofetch", label: "$ neofetch", icon: Sparkles },
  { id: "engineer.py", label: "$ cat engineer.py", icon: Terminal },
  { id: "btop", label: "$ btop", icon: Activity },
  { id: "deploy.sh", label: "$ ./deploy.sh", icon: Play },
  { id: "cmatrix", label: "$ cmatrix", icon: Terminal },
];

export default function LinuxScreen3D({ onSelectTab }) {
  const [activeCommand, setActiveCommand] = useState("neofetch");
  const [copied, setCopied] = useState(false);
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  // CLI state
  const [inputVal, setInputVal] = useState("");
  const [commandLogs, setCommandLogs] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // 3D Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e) => {
    if (isMaximized) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCopy = () => {
    let textToCopy = `anfique@archlinux:~$ ${activeCommand}\n`;
    if (activeCommand === "neofetch") {
      textToCopy += "OS: Arch Linux x86_64\nRole: Full-Stack Engineer\nCore: Django + React.js\nExperience: 4+ Years";
    } else if (activeCommand === "engineer.py") {
      textToCopy += "class SoftwareEngineer:\n  name = 'Anfique Hussain V'\n  primary_stack = ['React.js', 'Django', 'Python', 'Tailwind']";
    } else if (activeCommand === "btop") {
      textToCopy += "btop++ v1.3.0 | Status: Healthy | Uptime: 99.98%";
    } else {
      textToCopy += "Build & Edge Deployment verified.";
    }

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIdx(-1);
    setInputVal("");

    handleTerminalCommand(rawCmd, {
      onSelectTab,
      setCommandLogs,
      setActiveCommand,
      scrollRef
    });

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length > 0) {
        const nextIdx = historyIdx + 1 < commandHistory.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || "");
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal("");
      }
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full flex items-center justify-center transition-all duration-300 ${
        isMaximized ? "fixed inset-2 sm:inset-6 z-50 p-0" : "max-w-2xl py-2"
      }`}
      style={{ perspective: isMaximized ? "none" : 1200 }}
    >
      <motion.div
        style={{
          rotateX: isMaximized ? 0 : rotateX,
          rotateY: isMaximized ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`w-full rounded-2xl border border-white/10 bg-[#0d0f14]/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? "h-full border-cyan-500/40 shadow-cyan-500/10" : "h-[440px] sm:h-[470px]"
        }`}
      >
        {/* ================= TERMINAL WINDOW TITLE BAR ================= */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-black/60 border-b border-white/[0.08] select-none z-20 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  setCommandLogs([]);
                  setActiveCommand("neofetch");
                }}
                title="Reset Terminal (Close output)"
                className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-[0_0_6px_rgba(255,95,86,0.35)] cursor-pointer hover:brightness-125 transition active:scale-90"
              />
              <button
                onClick={() => setCommandLogs([])}
                title="Clear Logs (Minimize)"
                className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-[0_0_6px_rgba(255,189,46,0.35)] cursor-pointer hover:brightness-125 transition active:scale-90"
              />
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                title={isMaximized ? "Restore Size" : "Expand Size"}
                className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-[0_0_6px_rgba(39,201,63,0.35)] cursor-pointer hover:brightness-125 transition active:scale-90"
              />
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 font-mono-terminal">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-white font-bold tracking-tight">anfique@archlinux</span>
              <span className="text-neutral-500">:</span>
              <span className="text-cyan-300 font-medium">~/portfolio</span>
              <span className="hidden sm:inline-flex items-center text-[10px] text-emerald-400 font-mono-terminal px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25">
                git:(main)
              </span>
              <button
                onClick={() => onSelectTab && onSelectTab("versions")}
                title="View System Changelog & Evolution (v3.0.0)"
                className="hidden md:inline-flex items-center gap-1 text-[10px] text-neutral-400 hover:text-cyan-300 font-mono-terminal px-1.5 py-0.5 rounded bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 transition cursor-pointer"
              >
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>v3.0</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCrtEnabled(!crtEnabled)}
              title="Toggle Retro CRT Scanlines"
              className={`px-2 py-0.5 rounded text-[10px] font-mono-terminal transition cursor-pointer border ${
                crtEnabled
                  ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/35"
                  : "bg-white/5 text-neutral-400 border-white/10 hover:text-white"
              }`}
            >
              CRT: {crtEnabled ? "ON" : "OFF"}
            </button>

            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded-md border border-white/10 bg-white/5 hover:border-cyan-500/40 text-neutral-400 hover:text-cyan-300 transition cursor-pointer hidden sm:flex items-center"
              title={isMaximized ? "Collapse View" : "Expand View"}
            >
              {isMaximized ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            </button>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/40 text-neutral-400 hover:text-cyan-300 transition cursor-pointer"
              title="Copy Output"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* ================= COMMAND TAB DOCK ================= */}
        <div className="flex items-center gap-1 px-3 py-1.5 bg-black/45 border-b border-white/[0.06] overflow-x-auto no-scrollbar z-20 text-[11px] font-mono-terminal shrink-0">
          {TABS.map((tab) => {
            const isActive = activeCommand === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCommand(tab.id);
                  setCommandLogs([]);
                  if (scrollRef.current) scrollRef.current.scrollTop = 0;
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono-terminal whitespace-nowrap transition cursor-pointer select-none ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.15)] font-semibold"
                    : "bg-white/[0.03] text-neutral-400 border border-white/5 hover:text-white hover:border-white/15 hover:bg-white/[0.06]"
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= TERMINAL SCROLLABLE CONTENT AREA ================= */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current && inputRef.current.focus()}
          className={`flex-1 p-3 sm:p-4 overflow-y-auto custom-scrollbar relative font-mono-terminal text-xs sm:text-sm select-text min-h-0 ${
            crtEnabled ? "terminal-crt" : ""
          }`}
        >
          {/* TAB 1: NEOFETCH */}
          {activeCommand === "neofetch" && <NeofetchView />}

          {/* TAB 2: CAT ENGINEER.PY */}
          {activeCommand === "engineer.py" && <EngineerPyView />}

          {/* TAB 3: BTOP */}
          {activeCommand === "btop" && <BtopView />}

          {/* TAB 4: DEPLOY.SH */}
          {activeCommand === "deploy.sh" && <DeployShView />}

          {/* TAB 5: CMATRIX */}
          {activeCommand === "cmatrix" && <MatrixCanvas />}

          {/* LOGS FROM EXECUTED COMMANDS */}
          {commandLogs.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-white/5 my-2">
              {commandLogs.map((log, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-center text-neutral-400 font-mono-terminal">
                    <span className="text-emerald-400 font-bold whitespace-nowrap">anfique@archlinux</span>
                    <span className="text-neutral-500">:</span>
                    <span className="text-cyan-300 whitespace-nowrap">~</span>
                    <span className="text-white font-bold mr-1.5">$</span>
                    <span className="text-white ml-0.5 font-semibold">{log.cmd}</span>
                  </div>
                  <pre
                    className={`whitespace-pre-wrap pl-3 text-[11px] leading-relaxed ${
                      log.error
                        ? "text-red-400"
                        : log.highlight === "emerald"
                        ? "text-emerald-300 font-bold"
                        : log.highlight === "cyan"
                        ? "text-cyan-300 font-bold"
                        : "text-neutral-300"
                    }`}
                  >
                    {log.output}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= PINNED ALWAYS-VISIBLE CLI INPUT DOCK ================= */}
        <div className="p-2 sm:px-3 bg-black/80 border-t border-white/[0.08] shrink-0 z-20">
          {/* Quick-tap suggestion pills for instant access */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mb-1.5 select-none">
            <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono-terminal shrink-0">
              SUGGEST:
            </span>
            {["help", "version", "projects", "resume", "coffee"].map((hint) => (
              <button
                key={hint}
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(hint);
                }}
                className="px-2 py-0.5 rounded text-[10px] font-mono-terminal bg-white/[0.04] hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-500/30 text-neutral-400 hover:text-cyan-300 transition cursor-pointer shrink-0"
              >
                ${hint}
              </button>
            ))}
          </div>

          {/* Glowing Input Field Container */}
          <div className="flex items-center px-2.5 py-1.5 rounded-lg bg-black/70 border border-white/10 focus-within:border-cyan-500/40 focus-within:shadow-[0_0_12px_rgba(6,182,212,0.18)] transition-all text-neutral-300 font-mono-terminal">
            <span className="text-emerald-400 font-bold whitespace-nowrap shrink-0 hidden xs:inline text-xs">
              anfique@archlinux
            </span>
            <span className="text-neutral-500 shrink-0 hidden xs:inline mx-1">:</span>
            <span className="text-cyan-300 whitespace-nowrap shrink-0 hidden xs:inline text-xs">~</span>
            <span className="text-cyan-400 font-bold whitespace-nowrap shrink-0 xs:hidden mr-1">➜</span>
            <span className="text-white font-bold mx-1 shrink-0 text-xs">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (or click suggestion above)..."
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-white font-mono-terminal text-xs sm:text-[13px] placeholder-neutral-600 caret-cyan-400 p-0 m-0"
              autoFocus={false}
              spellCheck={false}
              autoComplete="off"
            />
            <span className="w-1.5 h-3.5 bg-cyan-400 rounded-sm animate-pulse ml-1 shrink-0" />
          </div>
        </div>

        {/* ================= BOTTOM STATUS FOOTER ================= */}
        <div className="px-3 sm:px-4 py-1.5 bg-black/90 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-neutral-400 select-none z-20 shrink-0 font-mono-terminal">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-400 hidden xs:inline">UTF-8</span>
            <span className="text-neutral-600 hidden xs:inline">•</span>
            <span className="text-cyan-300 font-mono-terminal">ZSH // 3D SHELL</span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>INTERACTIVE CLI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
