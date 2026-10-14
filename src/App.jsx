import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Technologies,
  Projects,
  Achievements,
  ResumeSection,
  Footer,
  StarsCanvas,
  ResumeModal,
  ProjectCaseStudy,
  ScrollToTop,
} from "./components";

const App = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [nightPatrol, setNightPatrol] = useState(false);

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const handleToggleNightPatrol = () => {
    setNightPatrol((prev) => !prev);
  };

  useEffect(() => {
    if (nightPatrol) {
      document.documentElement.setAttribute("data-night-patrol", "true");
    } else {
      document.documentElement.removeAttribute("data-night-patrol");
    }
  }, [nightPatrol]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:bg-[#FF304F] focus:text-[#F7F5FF] focus:font-mono focus:text-xs focus:uppercase"
      >
        Skip to main content
      </a>

      <div className="relative z-0 bg-[#08060F] min-h-screen text-[#F7F5FF] overflow-x-hidden w-full max-w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar
                  onResumeClick={handleResumeClick}
                  nightPatrol={nightPatrol}
                  onToggleNightPatrol={handleToggleNightPatrol}
                />
                <main id="main-content" className="overflow-x-hidden w-full max-w-full">
                  {/* SECTION 01 — HERO: THE ORIGIN */}
                  <Hero
                    onResumeClick={handleResumeClick}
                    nightPatrol={nightPatrol}
                  />
                  {/* SECTION 02 — ABOUT: BEHIND THE MASK */}
                  <About />
                  {/* SECTION 03 — FEATURED PROJECTS: THE MISSIONS */}
                  <Projects />
                  {/* SECTION 04 — EXPERIENCE: THE JOURNEY */}
                  <Experience />
                  {/* SECTION 05 — SKILLS: THE TECH ARSENAL */}
                  <Technologies />
                  {/* SECTION 06 — ACHIEVEMENTS: MILESTONES */}
                  <Achievements />
                  {/* SECTION 07 — RESUME: THE DOSSIER */}
                  <ResumeSection onResumeClick={handleResumeClick} />
                  {/* SECTION 08 — CONTACT: SEND A SIGNAL */}
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                </main>
                <Footer onResumeClick={handleResumeClick} />
              </>
            }
          />
          <Route
            path="/project/:projectId"
            element={<ProjectCaseStudy onResumeClick={handleResumeClick} />}
          />
          <Route
            path="/case-study/:projectId"
            element={<ProjectCaseStudy onResumeClick={handleResumeClick} />}
          />
        </Routes>

        {/* Interactive Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={handleCloseResumeModal}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
