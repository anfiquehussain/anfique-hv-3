import { siteConfig } from "../../../data/siteConfig";
import confetti from "canvas-confetti";

export function handleTerminalCommand(rawCmd, { onSelectTab, setCommandLogs, setActiveCommand, scrollRef }) {
  const trimmed = rawCmd.trim();
  const lower = trimmed.toLowerCase();

  // 1. Navigation Commands
  if (lower === "projects" || lower === "cd projects" || lower === "cd projects/") {
    setCommandLogs((prev) => [
      ...prev,
      { cmd: rawCmd, output: "➜ Entering projects directory... Navigating now.", highlight: "cyan" },
    ]);
    if (onSelectTab) {
      setTimeout(() => onSelectTab("projects"), 300);
    }
    return;
  }

  if (lower === "about" || lower === "cd about" || lower === "cd about/") {
    setCommandLogs((prev) => [
      ...prev,
      { cmd: rawCmd, output: "➜ Reading developer credentials... Navigating now.", highlight: "cyan" },
    ]);
    if (onSelectTab) {
      setTimeout(() => onSelectTab("about"), 300);
    }
    return;
  }

  if (lower === "contact" || lower === "cd contact" || lower === "cd contact/") {
    setCommandLogs((prev) => [
      ...prev,
      { cmd: rawCmd, output: "➜ Initializing direct communication... Navigating now.", highlight: "emerald" },
    ]);
    if (onSelectTab) {
      setTimeout(() => onSelectTab("contact"), 300);
    }
    return;
  }

  // Version inspection commands (developer CLI simulation)
  const isVersionAll =
    lower === "version --all" ||
    lower === "versions --all" ||
    lower === "version -a" ||
    lower === "versions -a" ||
    lower === "version --gui" ||
    lower === "versions --gui" ||
    lower === "changelog" ||
    lower === "releases" ||
    lower === "git log" ||
    lower === "git log --all" ||
    lower === "gitk";

  const isVersionInfo =
    lower === "version" ||
    lower === "versions" ||
    lower === "version -v" ||
    lower === "versions -v" ||
    lower === "--version" ||
    lower === "-v" ||
    lower === "git describe" ||
    lower === "git tag";

  if (isVersionAll) {
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: "➜ Launching Interactive Version Evolution Matrix & Full Release Changelog...\n[Navigating to #versions GUI view]",
        highlight: "cyan",
      },
    ]);
    if (onSelectTab) {
      setTimeout(() => onSelectTab("versions"), 400);
    }
    return;
  }

  if (isVersionInfo) {
    const cur = siteConfig.portfolioReleases?.current || {};
    const outputText = [
      `➜ System Release: ${cur.version || "v3.0"} (${cur.tagline ? cur.tagline.split(":")[0] : "Neo-Portfolio 2026"})`,
      `  Status      : ${cur.status || "CURRENT PRODUCTION"}`,
      `  Release Date: ${cur.releaseDate || "2026-03"}`,
      `  Archived    : v2.x (7 releases) • v1.x (6 releases) • Beta • v8-v12`,
      `  Repository  : ${cur.githubUrl || "https://github.com/anfiquehussain/anfique-portfolio-2026"}`,
      ``,
      `💡 Run 'version --all' or 'version -a' to open the complete interactive changelog.`,
    ].join("\n");

    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: outputText,
        highlight: "cyan",
      },
    ]);
    return;
  }

  // 2. Secret / Easter Egg & Developer Simulation Commands
  if (lower === "ls" || lower === "dir" || lower === "ll" || lower === "ls -la") {
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: [
          "drwxr-xr-x  2  anfique  staff   about/         (Technical Bio & Skills)",
          "drwxr-xr-x  2  anfique  staff   projects/      (10+ Production Showcases)",
          "drwxr-xr-x  2  anfique  staff   contact/       (Encrypted Transmission Form)",
          "-rw-r--r--  1  anfique  staff   engineer.py    (Core Architecture Class)",
          "-rwxr-xr-x  1  anfique  staff   deploy.sh      (CI/CD Pipeline Script)",
          "-rw-r--r--  1  anfique  staff   resume.pdf     (Curriculum Vitae)",
          "-rw-r--r--  1  anfique  staff   CHANGELOG.md   (v3.0.0 Release Matrix)",
        ].join("\n"),
      },
    ]);
    return;
  }

  if (lower === "resume" || lower === "cat resume.pdf" || lower === "open resume" || lower === "download resume") {
    window.open(siteConfig.resumeUrl || "/Resume/resume.pdf", "_blank");
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: "📄 Accessing developer credentials...\n➜ Resume opened in new preview window. (PDF dispatched)",
        highlight: "emerald",
      },
    ]);
    return;
  }

  if (lower === "cat changelog.md" || lower === "cat changelog") {
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: "➜ Opening full Version Evolution matrix & release logs...",
        highlight: "cyan",
      },
    ]);
    if (onSelectTab) {
      setTimeout(() => onSelectTab("versions"), 400);
    }
    return;
  }

  if (lower === "coffee" || lower === "brew coffee" || lower === "make coffee") {
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: [
          "☕ Brewing fresh dark-roast espresso...",
          "   [████████████████████] 100%",
          "✨ Caffeine injected. Developer productivity now operating at 200% velocity.",
        ].join("\n"),
        highlight: "emerald",
      },
    ]);
    return;
  }

  if (lower.startsWith("rm -rf") || lower.startsWith("sudo rm") || lower === "rm -rf /") {
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: "⚠️  PERMISSION DENIED: Self-destruct aborted.\nNice try! Anfique's portfolio runs on read-only immutable edge infrastructure. 😉",
        error: true,
      },
    ]);
    return;
  }

  if (lower === "ping" || lower.startsWith("ping ")) {
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: [
          "PING anfiquehv.netlify.app (127.0.0.1): 56 data bytes",
          "64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms",
          "64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms",
          "--- anfiquehv.netlify.app ping statistics ---",
          "2 packets transmitted, 2 packets received, 0.0% packet loss",
          "round-trip min/avg/max = 0.038/0.040/0.042 ms (Sub-millisecond ultra-fast response)",
        ].join("\n"),
        highlight: "cyan",
      },
    ]);
    return;
  }

  if (lower === "quote" || lower === "fortune") {
    const quotes = [
      '"First, solve the problem. Then, write the code." – John Johnson',
      '"Simplicity is prerequisite for reliability." – Edsger W. Dijkstra',
      '"Make it work, make it right, make it fast." – Kent Beck',
      '"The best error message is the one that never shows up." – Thomas Fuchs',
      '"Code is like humor. When you have to explain it, it’s bad." – Cory House'
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: `💬 ${randomQuote}`,
        highlight: "cyan",
      },
    ]);
    return;
  }

  if (lower.startsWith("sudo hire") || lower === "hire" || lower === "hire me") {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#10b981", "#818cf8"],
    });
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: "✨ [sudo] Access Granted. Verified authorization.\nEmail: anfiquehussain6@gmail.com\nStatus: Available for immediate hire & contracts.\n➜ Opening Contact inquiry form now...",
        highlight: "emerald",
      },
    ]);
    if (onSelectTab) {
      setTimeout(() => onSelectTab("contact"), 1000);
    }
    return;
  }

  // 3. Tab Views - Directly switch and display the view!
  if (lower === "neofetch" || lower === "fetch") {
    setActiveCommand("neofetch");
    setCommandLogs([]);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return;
  }

  if (lower === "cat engineer.py" || lower === "skills" || lower === "code" || lower === "py" || lower === "engineer.py") {
    setActiveCommand("engineer.py");
    setCommandLogs([]);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return;
  }

  if (lower === "btop" || lower === "top" || lower === "htop") {
    setActiveCommand("btop");
    setCommandLogs([]);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return;
  }

  if (lower === "deploy" || lower === "./deploy.sh" || lower === "sh deploy.sh" || lower === "deploy.sh") {
    setActiveCommand("deploy.sh");
    setCommandLogs([]);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return;
  }

  if (lower === "matrix" || lower === "cmatrix") {
    setActiveCommand("cmatrix");
    setCommandLogs([]);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return;
  }

  // 4. Utility Commands
  if (lower === "clear" || lower === "cls") {
    setCommandLogs([]);
    setActiveCommand("neofetch");
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return;
  }

  if (lower === "whoami") {
    setCommandLogs((prev) => [
      ...prev,
      { cmd: rawCmd, output: "guest@anfique-portfolio (Welcome, tech recruiter & engineering collaborator!)" },
    ]);
    return;
  }

  if (lower === "help" || lower === "?") {
    setCommandLogs((prev) => [
      ...prev,
      {
        cmd: rawCmd,
        output: [
          "================= AVAILABLE TERMINAL COMMANDS =================",
          "",
          "📁 NAVIGATION & EXPLORATION:",
          "  ls / dir        - List portfolio directory files & components",
          "  projects        - Navigate to Selected Works & project drawer",
          "  about           - View Developer bio, education & skills matrix",
          "  contact         - Open direct inquiry transmission form",
          "",
          "🖥️ SYSTEM VIEWS & MONITORS:",
          "  neofetch        - Display developer profile & system specifications",
          "  cat engineer.py - View Python developer architecture class code",
          "  btop            - View live simulated CPU monitor & active services",
          "  deploy          - Execute automated build & edge release test",
          "  matrix / cmatrix- Stream retro green digital falling matrix rain",
          "",
          "📦 VERSIONS & RELEASES:",
          "  version / -v    - Print current production build details in terminal",
          "  version --all   - Open complete interactive release evolution & matrix",
          "  git log / git tag- View git tag history & release timeline",
          "  cat changelog   - Open version history & changelog",
          "",
          "📄 CREDENTIALS & DOWNLOADS:",
          "  resume          - Open & download official PDF resume",
          "  whoami          - Print active terminal user identity",
          "",
          "⚡ UTILITIES & DEVELOPER FUN:",
          "  coffee          - Brew a cup of developer fuel",
          "  ping            - Test ultra-low latency response to host",
          "  quote / fortune - Print an inspiring software engineering quote",
          "  sudo hire       - Trigger fast-track hire inquiry (with confetti!)",
          "  rm -rf /        - Attempt system self-destruct (protected!)",
          "  clear / cls     - Clear terminal logs and reset view",
          "",
          "💡 Tip: Use Up/Down arrows to cycle through command history.",
        ].join("\n"),
      },
    ]);
    return;
  }

  // Default: Unrecognized command
  setCommandLogs((prev) => [
    ...prev,
    { cmd: rawCmd, output: `zsh: command not found: ${rawCmd}. Type 'help' for available commands.`, error: true },
  ]);
}
