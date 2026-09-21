import { useEffect } from 'react';
import resumeUrl from '../assets/Devi_Sri_Charan_SWE_2026.html?url';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={handleBackdropClick}
          />
          
          {/* Resume Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative w-full max-w-5xl h-[90vh] bg-tertiary rounded-xl p-4 shadow-2xl">
              {/* Actions Header */}
              <div className="absolute -top-4 -right-4 flex items-center gap-2 z-50">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-all duration-300 border-2 border-white/20 text-white"
                  aria-label="Open Resume in new tab"
                  title="Open in new tab"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-all duration-300 border-2 border-white/20"
                  aria-label="Close Resume"
                >
                  <span className="text-white text-2xl font-bold">×</span>
                </button>
              </div>

              {/* Resume Container */}
              <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                <iframe
                  src={resumeUrl}
                  className="w-full h-full border-none"
                  title="Devi Sri Charan - Resume"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;