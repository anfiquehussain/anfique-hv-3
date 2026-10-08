import React from "react";
import { siteConfig } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-neutral-500">
      <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
}
