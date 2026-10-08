import React, { useEffect, useRef } from "react";

export default function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = canvas.parentElement?.clientWidth || 500;
    canvas.height = 320;

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンANFIQUE2026<>/{}[]*+";
    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff88";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] overflow-hidden rounded-lg bg-black flex flex-col justify-between font-mono-terminal">
      <div className="absolute top-2 left-2 z-20 text-[10px] text-emerald-400/80 bg-black/80 px-2 py-0.5 rounded border border-emerald-500/20">
        [cmatrix active - type 'clear' or click tabs to exit]
      </div>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
