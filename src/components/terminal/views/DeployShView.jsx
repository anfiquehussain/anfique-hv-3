import React from "react";
import { Check } from "lucide-react";

export default function DeployShView() {
  return (
    <div className="space-y-2 text-[11px] sm:text-xs font-mono-terminal">
      <div className="text-neutral-400 flex items-center gap-1.5">
        <span className="text-emerald-400 font-bold">anfique@archlinux</span>
        <span className="text-neutral-500">:</span>
        <span className="text-cyan-300">~</span>
        <span className="text-white font-bold">$</span>
        <span className="text-cyan-200 font-semibold ml-1">./deploy.sh --release</span>
      </div>

      <div className="space-y-1.5 p-3 rounded-lg bg-black/40 border border-white/5">
        <p className="text-neutral-300 flex items-center gap-1.5">
          <span className="text-cyan-400">➜</span> [1/4] Linting modules & typechecking...
          <span className="text-emerald-400 ml-auto font-bold">0 ERRORS</span>
        </p>
        <p className="text-neutral-300 flex items-center gap-1.5">
          <span className="text-cyan-400">➜</span> [2/4] Testing Django endpoints & auth pipelines...
          <span className="text-emerald-400 ml-auto font-bold">PASS (100%)</span>
        </p>
        <p className="text-neutral-300 flex items-center gap-1.5">
          <span className="text-cyan-400">➜</span> [3/4] Optimizing React bundle & asset chunks...
          <span className="text-cyan-300 ml-auto font-mono-terminal">131 kB gzipped</span>
        </p>
        <p className="text-neutral-300 flex items-center gap-1.5">
          <span className="text-cyan-400">➜</span> [4/4] Deploying to global edge infrastructure...
          <span className="text-emerald-400 ml-auto font-bold">LIVE</span>
        </p>
        <div className="pt-2 border-t border-white/10 text-emerald-400 font-bold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Deployment Complete! Ready for client review.</span>
        </div>
      </div>
    </div>
  );
}
