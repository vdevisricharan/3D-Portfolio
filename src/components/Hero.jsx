import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SkylineCanvas } from "./canvas";
import { EASE_OUT_EXPO } from "../utils/motion";

const TELEMETRY_NODES = [
  {
    id: "node-ai",
    code: "SYS // 01",
    label: "AGENTIC AI & RAG",
    detail: "LangGraph • Qdrant • Docling",
    href: "#projects",
    position: "top-6 left-4 sm:top-8 sm:left-6",
  },
  {
    id: "node-backend",
    code: "SYS // 02",
    label: "DISTRIBUTED BACKENDS",
    detail: "FastAPI • Django • Celery/Redis",
    href: "#experience",
    position: "top-16 right-3 sm:top-14 sm:right-6",
  },
  {
    id: "node-eval",
    code: "SYS // 03",
    label: "LLM RELIABILITY",
    detail: "Cohen's κ = 0.84 • Bias Gates",
    href: "#projects",
    position: "bottom-20 left-4 sm:bottom-16 sm:left-8",
  },
  {
    id: "node-cloud",
    code: "SYS // 04",
    label: "FULL-STACK & CLOUD",
    detail: "React Native • Next.js • AWS",
    href: "#skills",
    position: "bottom-8 right-4 sm:bottom-10 sm:right-6",
  },
];

const Hero = ({ onResumeClick, nightPatrol = false }) => {
  const [skipIntroDelay, setSkipIntroDelay] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("bnd_intro_seen");
      if (seen) {
        setSkipIntroDelay(true);
      } else {
        sessionStorage.setItem("bnd_intro_seen", "1");
      }
    } catch {
      setSkipIntroDelay(true);
    }
  }, []);

  const d = (seconds) => (skipIntroDelay ? 0 : seconds);

  return (
    <section
      id="hero"
      aria-label="Introduction and Origin"
      className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 bg-hero-radial"
    >
      {/* Subtle Architectural Grid & Halftone Texture */}
      <div
        className="absolute inset-0 bg-arch-grid opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-halftone opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Atmospheric Glows */}
      <div
        className={`absolute -top-24 right-[10%] w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none transition-opacity duration-500 ${
          nightPatrol ? "bg-[#9B4DFF]/35" : "bg-[#9B4DFF]/20"
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-10 left-[8%] w-[320px] h-[320px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${
          nightPatrol ? "bg-[#FF304F]/25" : "bg-[#FF304F]/12"
        }`}
        aria-hidden="true"
      />

      {/* Main Asymmetrical Split Container */}
      <div
        className={`${styles.paddingX} relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0`}
      >
        {/* Left Column: Origin Narrative & Typography (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left min-w-0 w-full">
          {/* Top Metadata & Eyebrow Bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: d(0.05), ease: EASE_OUT_EXPO }}
            className="flex flex-wrap items-center gap-3 mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#171126] border border-[#FF304F]/50 font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#F7F5FF]">
              <span
                className="w-2 h-2 rounded-full bg-[#FF304F] animate-pulse"
                aria-hidden="true"
              />
              CHARAN // SOFTWARE ENGINEER
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#C4A2FF] hidden sm:inline">
              ENGINEERING / AI / DESIGN
            </span>
          </motion.div>

          {/* Mandatory Signature Tagline Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: d(0.12), ease: EASE_OUT_EXPO }}
            className={`${styles.heroHeadText} select-text`}
          >
            <span className="block text-[#F7F5FF]">YOUR FRIENDLY</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9B4DFF] via-[#C4A2FF] to-[#FF304F]">
              NEIGHBOURHOOD
            </span>
            <span className="block text-[#F7F5FF]">DEVELOPER</span>
          </motion.h1>

          {/* Secondary Statement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: d(0.22), ease: EASE_OUT_EXPO }}
            className={`${styles.heroSubText} mt-5 max-w-2xl`}
          >
            I build intelligent systems, scalable backends, and thoughtful digital experiences.
          </motion.p>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: d(0.3), ease: EASE_OUT_EXPO }}
            className="font-sans text-[#BDB4CC] text-[15px] sm:text-[17px] leading-[1.65] max-w-2xl mt-3.5"
          >
            Hi, I&apos;m <strong className="text-[#F7F5FF] font-semibold">Charan</strong> — a Software Engineer working across Applied AI, distributed systems, and full-stack development. I turn challenging ideas into useful, dependable software.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: d(0.38), ease: EASE_OUT_EXPO }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7"
          >
            <a
              href="#projects"
              className="spider-sense-btn px-6 py-3.5 rounded-md bg-[#FF304F] hover:bg-[#e02442] text-[#F7F5FF] font-mono text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.14em] transition-all shadow-[0_0_24px_rgba(255,48,79,0.4)] flex items-center gap-2.5 group"
            >
              <span>Explore My Work</span>
              <span
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </a>

            <button
              type="button"
              onClick={onResumeClick}
              className="spider-sense-btn px-6 py-3.5 rounded-md bg-[#171126] hover:bg-[#9B4DFF]/20 border border-[#9B4DFF]/60 hover:border-[#C4A2FF] text-[#F7F5FF] font-mono text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.14em] transition-all shadow-[0_0_20px_rgba(155,77,255,0.2)] flex items-center gap-2.5 cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-[#C4A2FF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>View Resume</span>
            </button>
          </motion.div>

          {/* Utility Links: GitHub, LinkedIn, Email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: d(0.45) }}
            className="mt-7 pt-5 border-t border-[#9B4DFF]/20 flex flex-wrap items-center gap-5 sm:gap-6 w-full max-w-xl"
          >
            <a
              href="https://github.com/vdevisricharan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.12em] text-[#BDB4CC] hover:text-[#F7F5FF] transition-colors group"
            >
              <svg
                className="w-4 h-4 text-[#9B4DFF] group-hover:text-[#FF304F] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <span className="text-[#9B4DFF]/30" aria-hidden="true">
              //
            </span>

            <a
              href="https://linkedin.com/in/vdevisricharan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.12em] text-[#BDB4CC] hover:text-[#F7F5FF] transition-colors group"
            >
              <svg
                className="w-4 h-4 text-[#9B4DFF] group-hover:text-[#FF304F] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.66 1.64 1.63 1.63 0 0 0 1.66 1.63 1.63 1.63 0 0 0 1.65-1.63A1.64 1.64 0 0 0 7.83 6.2Z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <span className="text-[#9B4DFF]/30" aria-hidden="true">
              //
            </span>

            <a
              href="mailto:vdevisricharan@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.12em] text-[#BDB4CC] hover:text-[#F7F5FF] transition-colors group"
            >
              <svg
                className="w-4 h-4 text-[#9B4DFF] group-hover:text-[#FF304F] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Neo-Noir Skyline & Web Telemetry Panel (5 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: d(0.18), ease: EASE_OUT_EXPO }}
          className="lg:col-span-5 relative w-full min-w-0"
        >
          <div className="relative w-full rounded-xl comic-panel overflow-hidden border border-[#9B4DFF]/35 bg-[#08060F]/80">
            {/* Top Comic-Frame Panel Header */}
            <div className="px-3.5 sm:px-4 py-2.5 bg-[#171126]/90 border-b border-[#9B4DFF]/25 flex items-center justify-between gap-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-[#FF304F] shrink-0" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#F7F5FF] truncate">
                  SECTOR // BRAND NEW DAY
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-[#C4A2FF] shrink-0 whitespace-nowrap">
                {nightPatrol ? "PATROL OVERDRIVE" : "SKYLINE TELEMETRY"}
              </span>
            </div>

            {/* 3D / SVG Skyline Stage */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full">
              <SkylineCanvas nightPatrol={nightPatrol} />

              {/* Connected Telemetry Nodes Overlay */}
              {TELEMETRY_NODES.map((node) => (
                <a
                  key={node.id}
                  href={node.href}
                  className={`absolute ${node.position} z-20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md bg-[#08060F]/90 hover:bg-[#171126] border border-[#9B4DFF]/40 hover:border-[#FF304F] transition-all shadow-lg max-w-[155px] xs:max-w-[175px] sm:max-w-[195px] group`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF304F]">
                      {node.code}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B4DFF] group-hover:bg-[#FF304F]" />
                  </div>
                  <p className="font-mono text-[11px] font-bold text-[#F7F5FF] tracking-wide mt-0.5">
                    {node.label}
                  </p>
                  <p className="font-sans text-[10px] text-[#BDB4CC] truncate mt-0.5">
                    {node.detail}
                  </p>
                </a>
              ))}
            </div>

            {/* Bottom Status Bar */}
            <div className="px-3.5 sm:px-4 py-2 bg-[#171126]/90 border-t border-[#9B4DFF]/25 flex flex-wrap sm:flex-nowrap items-center justify-between gap-1 font-mono text-[9.5px] sm:text-[10px] text-[#BDB4CC] uppercase tracking-[0.14em] min-w-0">
              <span className="truncate">IIIT DELHI &apos;24 // SKIZEN // LUMIQ</span>
              <span className="text-[#C4A2FF] shrink-0 whitespace-nowrap">6 VERIFIED MISSIONS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator: SCROLL TO EXPLORE */}
      <div className="relative z-10 w-full flex justify-center items-center mt-8 sm:mt-4">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="group inline-flex flex-col items-center gap-2 text-[#BDB4CC] hover:text-[#F7F5FF] transition-colors"
        >
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.26em] group-hover:text-[#C4A2FF] transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-8 rounded-full border border-[#9B4DFF]/50 group-hover:border-[#FF304F] flex justify-center items-start p-1 transition-colors">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#FF304F]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;