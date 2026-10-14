import { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const RESUME_PUBLIC_URL = "/Devi_Sri_Charan_SWE_2026.html";

const ResumeSection = ({ onResumeClick }) => {
  const printFrameRef = useRef(null);

  const handlePrintResume = () => {
    try {
      if (printFrameRef.current && printFrameRef.current.contentWindow) {
        printFrameRef.current.contentWindow.focus();
        printFrameRef.current.contentWindow.print();
        return;
      }
    } catch {
      // Fallback to opening the standalone resume in a new tab if cross-context print is restricted
    }
    window.open(RESUME_PUBLIC_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative">
      {/* Hidden Print Helper Frame so Print / Save as PDF works directly with 1 click */}
      <iframe
        ref={printFrameRef}
        src={RESUME_PUBLIC_URL}
        title="Printable Resume Frame"
        className="sr-only w-0 h-0 border-0 pointer-events-none"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF304F] font-semibold">
            07 // THE DOSSIER
          </span>
          <span className="h-[1px] w-12 bg-[#9B4DFF]/40" aria-hidden="true" />
        </div>
        <h2 className={styles.sectionHeadText}>EVERY HERO HAS A BACKSTORY.</h2>
        <p className="font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] font-medium mt-2">
          Clean, semantic, ATS-ready engineering resume — built for instant review or PDF export.
        </p>
      </motion.div>

      {/* Dossier Feature Panel */}
      <motion.div
        variants={fadeIn("up", "tween", 0.1, 0.55)}
        className="mt-8 comic-panel rounded-xl p-5 sm:p-10 border border-[#9B4DFF]/40 relative overflow-hidden min-w-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-w-0">
          {/* Left: Dossier Metadata & Summary (7 Cols) */}
          <div className="lg:col-span-7 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08060F] border border-[#9B4DFF]/40 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#C4A2FF] mb-4 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
              <span className="truncate">VERIFIED TECHNICAL RESUME // 2026 EDITION</span>
            </div>

            <h3 className="font-display font-extrabold uppercase text-[28px] xs:text-[32px] sm:text-[40px] text-[#F7F5FF] leading-tight tracking-wide break-words">
              DEVI SRI CHARAN VALUPADASU
            </h3>
            <p className="font-mono text-[12px] sm:text-[13px] text-[#C4A2FF] mt-1 break-words">
              Software Engineer • Scalable Backend Systems • Applied AI/ML • Full-Stack
            </p>

            <p className="font-sans text-[15px] text-[#BDB4CC] leading-[1.65] mt-4 max-w-2xl">
              While this portfolio showcases interactive architecture and visual storytelling, my standalone resume is formatted as a clean, recruiter-conscious, print-optimized single-page document. Inspect it directly in the interactive viewer, open it full screen, or save a print-ready PDF.
            </p>

            {/* Quick Dossier Checkpoints */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-[#08060F]/80 border border-[#9B4DFF]/25">
                <span className="font-mono text-[10px] text-[#FF304F] uppercase block">
                  EXPERIENCE
                </span>
                <span className="font-sans font-bold text-[14px] text-[#F7F5FF]">
                  Skizen &amp; Lumiq
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#08060F]/80 border border-[#9B4DFF]/25">
                <span className="font-mono text-[10px] text-[#9B4DFF] uppercase block">
                  EDUCATION
                </span>
                <span className="font-sans font-bold text-[14px] text-[#F7F5FF]">
                  IIIT Delhi &apos;24
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#08060F]/80 border border-[#9B4DFF]/25">
                <span className="font-mono text-[10px] text-[#C4A2FF] uppercase block">
                  FORMAT
                </span>
                <span className="font-sans font-bold text-[14px] text-[#F7F5FF]">
                  ATS &amp; Print Ready
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#08060F]/80 border border-[#9B4DFF]/25">
                <span className="font-mono text-[10px] text-[#FF304F] uppercase block">
                  HACKATHON
                </span>
                <span className="font-sans font-bold text-[14px] text-[#F7F5FF]">
                  Micron 1st Place
                </span>
              </div>
            </div>
          </div>

          {/* Right: 3 Required Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 bg-[#08060F]/90 p-5 sm:p-6 rounded-xl border border-[#9B4DFF]/30 min-w-0">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9B4DFF] pb-2 border-b border-[#9B4DFF]/20">
              DOSSIER ACTIONS // SELECT MODE
            </span>

            {/* Action 1: View Resume (Modal) */}
            <button
              type="button"
              onClick={onResumeClick}
              className="spider-sense-btn w-full py-3.5 px-5 rounded-md bg-[#FF304F] hover:bg-[#e02442] text-[#F7F5FF] font-mono text-[13px] font-bold uppercase tracking-[0.14em] transition-all shadow-[0_0_20px_rgba(255,48,79,0.35)] flex items-center justify-between cursor-pointer"
            >
              <span>View Resume</span>
              <span aria-hidden="true">MODAL VIEWER &rarr;</span>
            </button>

            {/* Action 2: Open Fullscreen */}
            <a
              href={RESUME_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="spider-sense-btn w-full py-3.5 px-5 rounded-md bg-[#171126] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/50 hover:border-[#C4A2FF] text-[#F7F5FF] font-mono text-[13px] font-semibold uppercase tracking-[0.14em] transition-all flex items-center justify-between"
            >
              <span>Open Fullscreen</span>
              <span className="text-[#C4A2FF]" aria-hidden="true">
                NEW TAB &#8599;
              </span>
            </a>

            {/* Action 3: Print / Save as PDF */}
            <button
              type="button"
              onClick={handlePrintResume}
              className="w-full py-3.5 px-5 rounded-md bg-[#08060F] hover:bg-[#171126] border border-[#9B4DFF]/35 hover:border-[#9B4DFF] text-[#BDB4CC] hover:text-[#F7F5FF] font-mono text-[13px] font-semibold uppercase tracking-[0.14em] transition-all flex items-center justify-between cursor-pointer"
            >
              <span>Print / Save as PDF</span>
              <span className="text-[#9B4DFF]" aria-hidden="true">
                ATS PDF &#9113;
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ResumeSection, "resume-dossier");
