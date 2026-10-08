import React, { useState, useEffect } from "react";

export default function BtopView() {
  const [cpuUsage, setCpuUsage] = useState({ core0: 62, core1: 84, core2: 45, core3: 73 });

  // Self-contained micro-fluctuation timer for CPU monitor
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage({
        core0: Math.floor(55 + Math.random() * 30),
        core1: Math.floor(65 + Math.random() * 25),
        core2: Math.floor(40 + Math.random() * 35),
        core3: Math.floor(60 + Math.random() * 30),
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 text-[11px] sm:text-xs font-mono-terminal">
      <div className="text-neutral-400 flex items-center justify-between pb-1 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="text-cyan-400 font-bold">btop++</span>
          <span className="text-neutral-500">v1.3.0</span>
          <span className="text-emerald-400 ml-2">● SYS_HEALTHY</span>
        </div>
        <span className="text-neutral-400 font-mono-terminal">UPTIME: 99.98%</span>
      </div>

      {/* CPU Cores Monitor Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {Object.entries(cpuUsage).map(([core, val], idx) => (
          <div key={idx} className="p-2 rounded bg-black/40 border border-white/5 space-y-1">
            <div className="flex justify-between text-[10px] text-neutral-400">
              <span>{core.toUpperCase()}</span>
              <span className="text-cyan-300 font-bold">{val}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-700"
                style={{ width: `${val}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Process Table Simulation */}
      <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 space-y-1.5 text-[10px] sm:text-[11px]">
        <div className="flex justify-between text-neutral-500 font-bold border-b border-white/5 pb-1">
          <span>PID  PROGRAM</span>
          <span>STATUS</span>
          <span>LATENCY</span>
        </div>
        <div className="flex justify-between text-neutral-300">
          <span className="text-white">101  django_production_srv</span>
          <span className="text-emerald-400 font-semibold">RUNNING</span>
          <span className="text-cyan-300 font-mono-terminal">12ms</span>
        </div>
        <div className="flex justify-between text-neutral-300">
          <span className="text-white">102  marketplace_api</span>
          <span className="text-emerald-400 font-semibold">RUNNING</span>
          <span className="text-cyan-300 font-mono-terminal">24ms</span>
        </div>
        <div className="flex justify-between text-neutral-300">
          <span className="text-white">103  portfolio_v2026</span>
          <span className="text-cyan-400 font-semibold">ACTIVE</span>
          <span className="text-cyan-300 font-mono-terminal">4ms</span>
        </div>
      </div>
    </div>
  );
}
