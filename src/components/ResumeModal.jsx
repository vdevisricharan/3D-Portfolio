import { useEffect, useRef } from "react";
import resumeUrl from "../assets/Devi_Sri_Charan_SWE_2026.html?url";
import { motion, AnimatePresence } from "framer-motion";

const PUBLIC_RESUME_PATH = "/Devi_Sri_Charan_SWE_2026.html";

const ResumeModal = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        if (closeBtnRef.current) closeBtnRef.current.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrint = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.focus();
        iframeRef.current.contentWindow.print();
        return;
      }
    } catch {
      // Fallback to opening in new tab
    }
    window.open(PUBLIC_RESUME_PATH, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#08060F]/85 backdrop-blur-md"
            onClick={handleBackdropClick}
          />

          {/* Modal Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-5xl h-[92vh] bg-[#171126] border border-[#9B4DFF]/50 rounded-xl shadow-[0_24px_80px_rgba(8,6,15,0.95)] flex flex-col overflow-hidden"
          >
            {/* Modal Top HUD Action Bar */}
            <div className="px-4 sm:px-6 py-3 bg-[#08060F] border-b border-[#9B4DFF]/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FF304F]" aria-hidden="true" />
                <h2
                  id="resume-modal-title"
                  className="font-mono text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#F7F5FF]"
                >
                  DOSSIER // DEVI SRI CHARAN — VERIFIED RESUME
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded bg-[#FF304F] hover:bg-[#e02442] text-[#F7F5FF] font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer"
                >
                  Print / Save PDF
                </button>

                <a
                  href={PUBLIC_RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#171126] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/40 text-[#F7F5FF] font-mono text-[11px] uppercase tracking-[0.12em] transition-colors"
                >
                  Open Fullscreen &#8599;
                </a>

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close Resume Viewer"
                  className="w-8 h-8 rounded bg-[#171126] hover:bg-[#FF304F] border border-[#9B4DFF]/40 text-[#F7F5FF] font-mono text-[16px] font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Embedded Semantic Resume Document */}
            <div className="flex-1 w-full bg-white overflow-hidden relative">
              <iframe
                ref={iframeRef}
                src={resumeUrl || PUBLIC_RESUME_PATH}
                className="w-full h-full border-none"
                title="Devi Sri Charan Valupadasu - Software Engineer Resume"
              />
            </div>

            {/* Direct Fallback Footer Bar for Mobile Browsers */}
            <div className="px-4 py-2 bg-[#08060F] border-t border-[#9B4DFF]/25 flex items-center justify-between text-[11px] font-mono text-[#BDB4CC]">
              <span>ATS-Ready Semantic HTML Document</span>
              <a
                href={PUBLIC_RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4A2FF] hover:text-[#FF304F] underline"
              >
                Having trouble viewing? Open direct resume link &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;