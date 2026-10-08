import React from "react";

export default function EngineerPyView() {
  return (
    <div className="space-y-2 font-mono-terminal">
      <div className="text-neutral-400 flex items-center gap-1.5">
        <span className="text-emerald-400 font-bold">anfique@archlinux</span>
        <span className="text-neutral-500">:</span>
        <span className="text-cyan-300">~</span>
        <span className="text-white font-bold">$</span>
        <span className="text-cyan-200 font-semibold ml-1">cat core/engineer.py</span>
      </div>

      <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1 text-[11px] sm:text-xs">
        <p>
          <span className="text-purple-400 font-bold">class</span>{" "}
          <span className="text-yellow-300 font-semibold">SoftwareEngineer</span>
          <span className="text-white">:</span>
        </p>
        <p className="pl-4 text-neutral-500">
          # High-performance full-stack web architectures
        </p>
        <p className="pl-4">
          <span className="text-cyan-400">name</span> = <span className="text-emerald-300">"Anfique Hussain V"</span>
        </p>
        <p className="pl-4">
          <span className="text-cyan-400">primary_stack</span> = [
          <span className="text-emerald-300">"React.js"</span>,{" "}
          <span className="text-emerald-300">"Django"</span>,{" "}
          <span className="text-emerald-300">"Python"</span>,{" "}
          <span className="text-emerald-300">"Tailwind"</span>]
        </p>
        <p className="pl-4">
          <span className="text-cyan-400">database</span> = [
          <span className="text-emerald-300">"PostgreSQL"</span>,{" "}
          <span className="text-emerald-300">"MySQL"</span>,{" "}
          <span className="text-emerald-300">"Firestore"</span>]
        </p>
        <p className="pl-4 pt-1">
          <span className="text-purple-400 font-bold">def</span>{" "}
          <span className="text-blue-400 font-semibold">build_production_app</span>
          <span className="text-white">(self, vision):</span>
        </p>
        <p className="pl-8">
          backend = self.<span className="text-blue-300">architect_rest_api</span>(scale=<span className="text-amber-400">True</span>)
        </p>
        <p className="pl-8">
          frontend = self.<span className="text-blue-300">craft_fluid_ui</span>(latency=<span className="text-emerald-300">"sub-50ms"</span>)
        </p>
        <p className="pl-8">
          <span className="text-purple-400 font-bold">return</span> self.<span className="text-blue-300">deploy</span>(backend, frontend)
        </p>
        <p className="pl-4 pt-1">
          <span className="text-purple-400 font-bold">def</span>{" "}
          <span className="text-blue-400 font-semibold">is_available</span>
          <span className="text-white">(self) -&gt; </span>
          <span className="text-yellow-300">bool</span>
          <span className="text-white">:</span>
        </p>
        <p className="pl-8">
          <span className="text-purple-400 font-bold">return</span>{" "}
          <span className="text-amber-400 font-bold">True</span>{" "}
          <span className="text-neutral-500"># Open for freelance & full-time roles</span>
        </p>
      </div>
    </div>
  );
}
