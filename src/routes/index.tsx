import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground, CursorEffects, useReveal } from "@/components/portfolio/AnimatedBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G Dileep · AI Engineer & Software Developer" },
      { name: "description", content: "Portfolio of G Dileep — B.Tech student from Chittoor on a journey from learner to Software Developer, with work in Java, Python, SQL and Deepfake Detection." },
      { property: "og:title", content: "G Dileep · AI Engineer & Software Developer" },
      { property: "og:description", content: "From 10th grade to B.Tech graduation — an animated journey through code, AI and software craft." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#080808", fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
      <AnimatedBackground />
      <CursorEffects />

      {/* NAV */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-cyan-300">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          GD<span className="text-slate-500">/</span>dev
        </div>
        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#journey" className="hover:text-cyan-300 transition">Journey</a>
          <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="rounded-2xl bg-black/40 px-8 py-10 backdrop-blur-md ring-1 ring-white/5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-cyan-400/80">AI Engineer · Software Developer</p>
          <h1 className="title-glow text-5xl font-bold leading-tight text-white sm:text-7xl">
            G <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Dileep</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            From a classroom in Chittoor to building intelligent systems — turning curiosity into code, and code into impact.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="lift rounded-md border border-blue-400/50 bg-blue-500/10 px-5 py-2.5 text-sm text-blue-200">View Projects</a>
            <a href="#contact" className="lift rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200">Get in touch</a>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="relative z-10 mx-auto max-w-4xl px-6 py-24">
        <div className="reveal rounded-2xl bg-black/50 p-8 backdrop-blur-md ring-1 ring-white/5">
          <h2 className="mb-2 text-3xl font-semibold text-white">The Journey</h2>
          <p className="mb-8 text-sm text-slate-400">A roadmap from student to software developer.</p>
          <ol className="relative space-y-6 border-l border-cyan-400/30 pl-6">
            {[
              { y: "2020", t: "10th Grade", d: "Scored 86.7% — first taste of computers and curiosity." },
              { y: "2022", t: "Intermediate", d: "Completed Intermediate (64%) — chose engineering as the path forward." },
              { y: "2025", t: "Software Development Intern", d: "Interned at KodNest Technologies — hands-on with real-world software." },
              { y: "2025", t: "Deepfake Detection (Deep Learning)", d: "Built a model to detect manipulated media using neural networks." },
              { y: "2026", t: "B.Tech Graduation", d: "Graduating with a focus on full-stack & applied AI." },
              { y: "Next", t: "Software Developer", d: "Ready to build products people love." },
            ].map((m, i) => (
              <li key={i} className="reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                <div className="font-mono text-xs text-cyan-300">{m.y}</div>
                <div className="text-lg text-white">{m.t}</div>
                <div className="text-sm text-slate-400">{m.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="reveal">
          <h2 className="mb-8 text-3xl font-semibold text-white">Skills & Tools</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { i: "☕", n: "Java" },
              { i: "🐍", n: "Python" },
              { i: "🗄️", n: "SQL" },
              { i: "💾", n: "MySQL" },
              { i: "🌐", n: "HTML" },
              { i: "🎨", n: "CSS" },
              { i: "🧪", n: "Manual Testing" },
              { i: "🤖", n: "Deep Learning" },
            ].map((s) => (
              <div key={s.n} className="lift rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
                <div className="text-2xl">{s.i}</div>
                <div className="mt-2 text-sm text-slate-200">{s.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="reveal">
          <h2 className="mb-8 text-3xl font-semibold text-white">Featured Work</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="lift rounded-2xl border border-purple-500/30 bg-black/50 p-6 backdrop-blur-md">
              <div className="font-mono text-xs text-purple-300">DEEP LEARNING</div>
              <h3 className="mt-2 text-xl text-white">Deepfake Detection</h3>
              <p className="mt-2 text-sm text-slate-400">
                A neural network that distinguishes real faces from AI-generated forgeries using
                CNN feature extraction and frame-level scanning.
              </p>
              <div className="mt-4 flex gap-2 font-mono text-[10px] text-slate-400">
                <span className="rounded bg-white/5 px-2 py-1">Python</span>
                <span className="rounded bg-white/5 px-2 py-1">TensorFlow</span>
                <span className="rounded bg-white/5 px-2 py-1">OpenCV</span>
              </div>
            </article>
            <article className="lift rounded-2xl border border-blue-500/30 bg-black/50 p-6 backdrop-blur-md">
              <div className="font-mono text-xs text-blue-300">INTERNSHIP</div>
              <h3 className="mt-2 text-xl text-white">KodNest Technologies</h3>
              <p className="mt-2 text-sm text-slate-400">
                Software Development Intern — built UI features, wrote SQL queries, and
                contributed to test plans across real product workstreams.
              </p>
              <div className="mt-4 flex gap-2 font-mono text-[10px] text-slate-400">
                <span className="rounded bg-white/5 px-2 py-1">Java</span>
                <span className="rounded bg-white/5 px-2 py-1">MySQL</span>
                <span className="rounded bg-white/5 px-2 py-1">Testing</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="reveal rounded-2xl bg-black/50 p-10 backdrop-blur-md ring-1 ring-white/5">
          <h2 className="text-3xl font-semibold text-white">Let's build something.</h2>
          <p className="mt-3 text-sm text-slate-400">
            Open to software engineering roles, internships and collaborations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="mailto:dileep@example.com" className="lift rounded-md border border-cyan-400/50 bg-cyan-500/10 px-5 py-2.5 text-sm text-cyan-200">Email me</a>
            <a href="#" className="lift rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200">GitHub</a>
            <a href="#" className="lift rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200">LinkedIn</a>
          </div>
        </div>
        <p className="mt-10 font-mono text-xs text-slate-600">© {new Date().getFullYear()} G Dileep · Chittoor, AP</p>
      </section>
    </div>
  );
}
