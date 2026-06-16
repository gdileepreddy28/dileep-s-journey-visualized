import { useEffect, useRef } from "react";

const skills = [
  { icon: "☕", label: "Java", x: "8%", y: "18%", d: "0s" },
  { icon: "🐍", label: "Python", x: "16%", y: "62%", d: "1.2s" },
  { icon: "🗄️", label: "SQL", x: "30%", y: "82%", d: "0.6s" },
  { icon: "💾", label: "MySQL", x: "70%", y: "78%", d: "2.1s" },
  { icon: "🌐", label: "HTML", x: "84%", y: "20%", d: "1.7s" },
  { icon: "🎨", label: "CSS", x: "92%", y: "55%", d: "0.3s" },
  { icon: "🧪", label: "Testing", x: "44%", y: "12%", d: "2.4s" },
];

const workspace = [
  { x: "12%", y: "44%", w: 180, content: "const dev = 'G Dileep';\nawait build(future);" },
  { x: "62%", y: "30%", w: 200, content: "$ npm run journey\n> deploying...\n> ✓ ready" },
  { x: "74%", y: "62%", w: 160, content: "SELECT * FROM\n  dreams\nWHERE year=2026;" },
];

export function AnimatedBackground() {
  const heroNameRef = useRef<HTMLDivElement>(null);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {/* Base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(168,85,247,0.10), transparent 60%), radial-gradient(700px 500px at 50% 50%, rgba(34,211,238,0.05), transparent 60%)",
        }}
      />

      {/* Grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-[55vh] grid-floor opacity-60" />

      {/* Rotating circles behind hero name */}
      <div ref={heroNameRef} className="absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2">
        <div className="hero-glow absolute inset-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
        <div className="relative h-[520px] w-[520px]">
          <div className="spin-slow absolute inset-0 rounded-full border border-blue-500/20" />
          <div className="spin-reverse absolute inset-8 rounded-full border border-purple-500/15 border-dashed" />
          <div className="spin-slow absolute inset-20 rounded-full border border-cyan-400/15" />
          <div className="spin-reverse absolute inset-32 rounded-full border border-blue-400/10" />
        </div>
      </div>

      {/* Neural network on the right */}
      <NeuralNet />

      {/* Roadmap on the left */}
      <Roadmap />

      {/* Deepfake split-face panel */}
      <DeepfakePanel />

      {/* Floating skill icons */}
      {skills.map((s) => (
        <div
          key={s.label}
          className="skill-chip float-slow absolute flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
          style={{ left: s.x, top: s.y, opacity: 0.1, animationDelay: s.d }}
        >
          <span className="text-base leading-none">{s.icon}</span>
          <span className="font-mono tracking-wide text-slate-300">{s.label}</span>
        </div>
      ))}

      {/* Workspace code/terminal snippets */}
      {workspace.map((w, i) => (
        <pre
          key={i}
          className="absolute font-mono text-[10px] leading-tight text-cyan-200"
          style={{
            left: w.x,
            top: w.y,
            width: w.w,
            opacity: 0.05,
            border: "1px solid rgba(34,211,238,0.4)",
            background: "rgba(8,8,12,0.5)",
            padding: "8px 10px",
            borderRadius: 6,
          }}
        >
          {w.content}
        </pre>
      ))}

      {/* Chittoor location pin */}
      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-slate-400">
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        </span>
        <span className="font-mono tracking-wider">Chittoor, Andhra Pradesh</span>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}

function Roadmap() {
  const milestones = [
    { y: 80, label: "2020 · 10th (86.7%)", icon: "🎓" },
    { y: 200, label: "2022 · Intermediate (64%)", icon: "🎓" },
    { y: 320, label: "2025 · KodNest Intern", icon: "💼" },
    { y: 440, label: "Deepfake Detection (DL)", icon: "🤖" },
    { y: 560, label: "2026 · B.Tech Graduation", icon: "🎓" },
    { y: 680, label: "Future · Software Developer", icon: "🚀" },
  ];
  return (
    <svg
      className="absolute left-4 top-24 hidden h-[760px] w-[280px] md:block"
      viewBox="0 0 280 760"
      fill="none"
    >
      <defs>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <filter id="glowR">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M40 40 C 120 140, -20 220, 60 320 S 140 480, 40 560 S 120 700, 60 740"
        stroke="url(#road)"
        strokeWidth="1.5"
        strokeOpacity="0.55"
        filter="url(#glowR)"
      />
      <path
        d="M40 40 C 120 140, -20 220, 60 320 S 140 480, 40 560 S 120 700, 60 740"
        stroke="#22d3ee"
        strokeOpacity="0.7"
        strokeWidth="1"
        className="dash-flow"
      />
      {milestones.map((m, i) => (
        <g key={i} transform={`translate(${i % 2 === 0 ? 40 : 60}, ${m.y})`}>
          <circle r="6" fill="#0b0b10" stroke="#22d3ee" className="pulse-node" />
          <text x="14" y="4" fontSize="10" fill="#cbd5e1" fontFamily="JetBrains Mono, monospace">
            {m.icon} {m.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function NeuralNet() {
  const cols = 4;
  const rows = 5;
  const w = 320;
  const h = 520;
  const pad = 30;
  const nodes: { x: number; y: number; c: number; r: number }[] = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      nodes.push({
        x: pad + (c * (w - pad * 2)) / (cols - 1),
        y: pad + (r * (h - pad * 2)) / (rows - 1),
        c,
        r,
      });
    }
  }
  const get = (c: number, r: number) => nodes.find((n) => n.c === c && n.r === r)!;
  const edges: { x1: number; y1: number; x2: number; y2: number; d: string }[] = [];
  for (let c = 0; c < cols - 1; c++) {
    for (let r1 = 0; r1 < rows; r1++) {
      for (let r2 = 0; r2 < rows; r2++) {
        const a = get(c, r1);
        const b = get(c + 1, r2);
        edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, d: `${(r1 + r2) * 0.2}s` });
      }
    }
  }
  return (
    <svg
      className="absolute right-4 top-24 hidden h-[520px] w-[320px] opacity-50 lg:block"
      viewBox={`0 0 ${w} ${h}`}
    >
      <defs>
        <linearGradient id="edge" x1="0" x2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {edges.map((e, i) => (
        <line
          key={i}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="url(#edge)"
          strokeWidth="0.5"
          opacity={0.35}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="3"
          fill="#22d3ee"
          className="pulse-node"
          style={{ animationDelay: `${(i % 7) * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

function DeepfakePanel() {
  return (
    <div
      className="absolute bottom-10 right-6 hidden h-44 w-72 overflow-hidden rounded-lg border border-purple-500/30 md:block"
      style={{ opacity: 0.18, background: "rgba(8,8,12,0.6)" }}
    >
      <div className="grid h-full grid-cols-2">
        <div className="relative flex items-center justify-center border-r border-purple-500/30">
          <FaceGlyph color="#22d3ee" />
          <span className="absolute bottom-1 left-2 font-mono text-[9px] text-cyan-300">REAL</span>
        </div>
        <div className="relative flex items-center justify-center">
          <FaceGlyph color="#a855f7" glitch />
          <span className="absolute bottom-1 right-2 font-mono text-[9px] text-purple-300">FAKE</span>
        </div>
      </div>
      <div
        className="scan-line absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #22d3ee, transparent)" }}
      />
      <div
        className="scan-line absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)", animationDelay: "2s" }}
      />
    </div>
  );
}

function FaceGlyph({ color, glitch }: { color: string; glitch?: boolean }) {
  return (
    <svg viewBox="0 0 80 80" className="h-24 w-24" style={glitch ? { filter: "blur(0.4px)" } : undefined}>
      <circle cx="40" cy="40" r="28" stroke={color} strokeOpacity="0.6" fill="none" />
      <circle cx="30" cy="34" r="2" fill={color} />
      <circle cx="50" cy="34" r="2" fill={color} />
      <path d="M28 50 Q40 58 52 50" stroke={color} fill="none" strokeOpacity="0.7" />
      {glitch && <rect x="22" y="38" width="36" height="2" fill={color} opacity="0.5" />}
    </svg>
  );
}

export function CursorEffects() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.style.opacity = "0";
    document.body.appendChild(glow);

    let lastTrail = 0;
    const onMove = (e: MouseEvent) => {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
      const now = performance.now();
      if (now - lastTrail > 40) {
        lastTrail = now;
        const dot = document.createElement("div");
        dot.className = "trail-dot";
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
        document.body.appendChild(dot);
        setTimeout(() => dot.remove(), 800);
      }
    };
    const onLeave = () => (glow.style.opacity = "0");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      glow.remove();
    };
  }, []);
  return null;
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}