import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Education,
  Testimonials,
  Hero,
  Navbar,
  Technologies,
  Projects,
  Achievements,
  Footer,
  StarsCanvas,
  ResumeModal,
  ProjectCaseStudy,
  ScrollToTop
} from "./components";
import { useState } from "react";

const App = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar onResumeClick={handleResumeClick} />
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero onResumeClick={handleResumeClick} />
              </div>
              <About />
              <Experience />
              <Projects />
              <Technologies />
              <Achievements />
              <Education />
              <Testimonials />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
              <Footer onResumeClick={handleResumeClick} />
            </>
          } />
          <Route
            path="/project/:projectId"
            element={<ProjectCaseStudy onResumeClick={handleResumeClick} />}
          />
          <Route
            path="/case-study/:projectId"
            element={<ProjectCaseStudy onResumeClick={handleResumeClick} />}
          />
        </Routes>
        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={handleCloseResumeModal}
        />
      </div>
    </BrowserRouter>
  );
};


export default App
