import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies, caseStudyKeys } from "../constants/caseStudies";
import { StarsCanvas } from "./canvas";
import Footer from "./Footer";
import MermaidDiagram from "./MermaidDiagram";

const DEFAULT_TITLE = "Devi Sri Charan | Software Engineer & AI Systems";

const ProjectCaseStudy = ({ onResumeClick }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudies[projectId];

  // Dynamic SEO Title per Case Study
  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} — Case Study | Devi Sri Charan`;
    } else {
      document.title = `Case Study Not Found | Devi Sri Charan`;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#08060F] flex flex-col justify-center items-center px-6 text-center relative z-0">
        <StarsCanvas />
        <div className="relative z-10 max-w-lg comic-panel rounded-xl p-8">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#FF304F] block">
            ERROR // 404
          </span>
          <h1 className="font-display font-extrabold uppercase text-[38px] text-[#F7F5FF] mt-2">
            CASE STUDY NOT FOUND
          </h1>
          <p className="font-sans text-[#BDB4CC] text-[14.5px] mt-3 leading-relaxed">
            The requested mission field report &ldquo;{projectId}&rdquo; could not be located in the archive.
          </p>
          <Link
            to="/#projects"
            className="spider-sense-btn inline-block mt-6 px-6 py-3 rounded-md bg-[#FF304F] hover:bg-[#e02442] text-[#F7F5FF] font-mono text-[12px] font-bold uppercase tracking-[0.14em] transition-all"
          >
            &larr; Return to Featured Missions
          </Link>
        </div>
      </div>
    );
  }

  // Calculate Previous and Next projects
  const currentIndex = caseStudyKeys.indexOf(projectId);
  const prevKey =
    currentIndex > 0
      ? caseStudyKeys[currentIndex - 1]
      : caseStudyKeys[caseStudyKeys.length - 1];
  const nextKey =
    currentIndex < caseStudyKeys.length - 1
      ? caseStudyKeys[currentIndex + 1]
      : caseStudyKeys[0];

  const prevProject = caseStudies[prevKey];
  const nextProject = caseStudies[nextKey];

  return (
    <div className="relative z-0 bg-[#08060F] min-h-screen text-[#F7F5FF] selection:bg-[#9B4DFF] selection:text-[#F7F5FF]">
      {/* Subtle Background Grid */}
      <div
        className="fixed inset-0 bg-arch-grid opacity-45 pointer-events-none z-[-1]"
        aria-hidden="true"
      />

      {/* Sticky Top Technical Field Report HUD Header */}
      <header className="sticky top-0 z-30 w-full bg-[#08060F]/90 backdrop-blur-md border-b border-[#9B4DFF]/30 py-3.5 px-5 sm:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-[#BDB4CC] hover:text-[#F7F5FF] transition-colors group"
            >
              <span
                className="text-[#FF304F] group-hover:-translate-x-1 transition-transform"
                aria-hidden="true"
              >
                &larr;
              </span>
              <span className="hidden sm:inline">Back to Missions</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <span className="text-[#9B4DFF]/30 hidden md:inline" aria-hidden="true">
              //
            </span>

            <nav
              aria-label="Breadcrumb"
              className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#BDB4CC]"
            >
              <Link to="/" className="hover:text-[#F7F5FF] transition-colors">
                Origin
              </Link>
              <span>/</span>
              <Link to="/#projects" className="hover:text-[#F7F5FF] transition-colors">
                Missions
              </Link>
              <span>/</span>
              <span className="text-[#C4A2FF] truncate max-w-[240px]">
                {caseStudy.title}
              </span>
            </nav>
          </div>

          {/* Repository, Live Demo & Resume Actions */}
          <div className="flex items-center gap-2.5">
            {caseStudy.github && (
              <a
                href={caseStudy.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-md bg-[#171126] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/40 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#F7F5FF] inline-flex items-center gap-2 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span className="hidden sm:inline">GitHub Repository</span>
                <span className="sm:hidden">Code</span>
              </a>
            )}

            {caseStudy.liveDemo && (
              <a
                href={caseStudy.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-md bg-[#FF304F] hover:bg-[#e02442] font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#F7F5FF] inline-flex items-center gap-1.5 transition-colors shadow-[0_0_16px_rgba(255,48,79,0.35)]"
              >
                <span>Live Demo</span>
                <span aria-hidden="true">&#8599;</span>
              </a>
            )}

            {onResumeClick && (
              <button
                type="button"
                onClick={onResumeClick}
                className="hidden lg:inline-flex items-center px-3 py-1.5 rounded-md bg-[#08060F] hover:bg-[#171126] border border-[#9B4DFF]/35 font-mono text-[11px] uppercase tracking-[0.1em] text-[#C4A2FF] hover:text-[#F7F5FF] transition-colors cursor-pointer"
              >
                Resume
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Field Report Body */}
      <main className="max-w-6xl mx-auto px-5 sm:px-12 py-10 sm:py-16">
        {/* 1. Project Title & Executive Summary Header */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded bg-[#FF304F]/15 border border-[#FF304F]/50 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF304F]">
              {caseStudy.missionCode || `FIELD REPORT // 0${currentIndex + 1}`}
            </span>
            {caseStudy.displayLabel && (
              <span className="px-3 py-1 rounded bg-[#171126] border border-[#9B4DFF]/40 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C4A2FF]">
                {caseStudy.displayLabel}
              </span>
            )}
            <span className="px-3 py-1 rounded bg-[#08060F] border border-[#9B4DFF]/25 font-mono text-[11px] text-[#BDB4CC]">
              {caseStudy.timeline}
            </span>
          </div>

          <h1 className="font-display font-black uppercase text-[42px] sm:text-[58px] lg:text-[68px] tracking-[0.01em] text-[#F7F5FF] leading-[0.96]">
            {caseStudy.title}
          </h1>

          <p className="mt-4 font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] leading-[1.55] max-w-4xl">
            {caseStudy.subtitle}
          </p>

          {/* Quick Metadata Strip */}
          <div className="mt-6 pt-5 border-t border-[#9B4DFF]/20 flex flex-wrap items-center gap-6 font-mono text-[12px]">
            <div>
              <span className="text-[#9B4DFF] uppercase tracking-[0.14em]">ROLE: </span>
              <span className="text-[#F7F5FF] font-semibold">{caseStudy.role}</span>
            </div>
            <div>
              <span className="text-[#9B4DFF] uppercase tracking-[0.14em]">DOMAIN: </span>
              <span className="text-[#F7F5FF]">{caseStudy.category}</span>
            </div>
            <div>
              <span className="text-[#FF304F] uppercase tracking-[0.14em]">STATUS: </span>
              <span className="text-[#F7F5FF]">VERIFIED OPEN SOURCE</span>
            </div>
          </div>
        </motion.section>

        {/* Key Metrics Callout Grid */}
        {caseStudy.stats && caseStudy.stats.length > 0 && (
          <section
            aria-label="Key Engineering Metrics"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {caseStudy.stats.map((stat, idx) => (
              <div
                key={idx}
                className="comic-panel rounded-xl p-4 sm:p-5 flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B4DFF] mb-1.5">
                  0{idx + 1} // {stat.label}
                </span>
                <span className="font-display font-extrabold uppercase text-[24px] sm:text-[28px] text-[#F7F5FF] tracking-wide leading-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </section>
        )}

        {/* Hero Visual Banner */}
        {caseStudy.image && (
          <section className="mb-14">
            <div className="w-full rounded-xl overflow-hidden comic-panel p-2 bg-[#171126]">
              <div className="relative rounded-lg overflow-hidden border border-[#9B4DFF]/25">
                <img
                  src={caseStudy.image}
                  alt={`${caseStudy.title} system architecture and interface`}
                  className="w-full h-auto max-h-[500px] object-cover object-top"
                />
              </div>
            </div>
          </section>
        )}

        {/* 2 & 3. Problem, Motivation & Verified Role Responsibilities */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 comic-panel rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF304F]">
                SECTION 01 // PROBLEM &amp; MOTIVATION
              </span>
            </div>
            <h2 className="font-display font-bold uppercase text-[28px] sm:text-[32px] text-[#F7F5FF] tracking-wide mb-4">
              Executive Overview
            </h2>
            <div className="font-sans text-[#BDB4CC] text-[15px] leading-[1.7] whitespace-pre-line">
              {caseStudy.overview}
            </div>
          </div>

          <div className="lg:col-span-5 comic-panel rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#9B4DFF] block mb-3">
                SECTION 02 // ROLE &amp; RESPONSIBILITIES
              </span>
              <h2 className="font-display font-bold uppercase text-[28px] sm:text-[32px] text-[#F7F5FF] tracking-wide mb-2">
                {caseStudy.role}
              </h2>
              <p className="font-mono text-[11px] text-[#C4A2FF] mb-4">
                VERIFIED ENGINEERING CONTRIBUTIONS
              </p>

              {caseStudy.responsibilities && (
                <ul className="space-y-3">
                  {caseStudy.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 font-sans text-[14px] text-[#BDB4CC] leading-[1.6]"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF304F] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 4. Technical Stack Summary inside Role Panel */}
            {caseStudy.techStack && (
              <div className="mt-6 pt-4 border-t border-[#9B4DFF]/20">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B4DFF] block mb-2.5">
                  CORE TECHNICAL STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#08060F] border border-[#9B4DFF]/35 font-mono text-[11px] text-[#F7F5FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5. System Architecture Diagram (Interactive Pipeline Nodes + Mermaid Flowchart) */}
        {caseStudy.architecture && (
          <section className="mb-14">
            <div className="mb-6">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF304F] block">
                SECTION 03 // SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-display font-extrabold uppercase text-[32px] sm:text-[38px] text-[#F7F5FF] tracking-wide mt-1">
                ARCHITECTURE &amp; EXECUTION PIPELINE
              </h2>
              <p className="font-sans text-[#BDB4CC] text-[15px] mt-1">
                {caseStudy.architecture.description}
              </p>
            </div>

            {/* Visual Pipeline Node Schematic */}
            {caseStudy.architecture.nodes && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                {caseStudy.architecture.nodes.map((node, idx) => (
                  <div
                    key={idx}
                    className="comic-panel rounded-lg p-4 relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] font-bold text-[#FF304F]">
                          STAGE {node.step}
                        </span>
                        {idx < caseStudy.architecture.nodes.length - 1 && (
                          <span
                            className="font-mono text-[12px] text-[#9B4DFF] hidden lg:inline"
                            aria-hidden="true"
                          >
                            &rarr;
                          </span>
                        )}
                      </div>
                      <h3 className="font-sans font-bold text-[14px] text-[#F7F5FF]">
                        {node.name}
                      </h3>
                      <p className="font-sans text-[12px] text-[#BDB4CC] mt-1 leading-relaxed">
                        {node.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Real Mermaid Flowchart Diagram */}
            {caseStudy.architecture.diagram && (
              <MermaidDiagram
                chart={caseStudy.architecture.diagram}
                title="architecture-graph.mmd"
              />
            )}
          </section>
        )}

        {/* 6. Implementation Methodology */}
        {caseStudy.methodology && caseStudy.methodology.length > 0 && (
          <section className="mb-14">
            <div className="mb-6">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#9B4DFF] block">
                SECTION 04 // IMPLEMENTATION METHODOLOGY
              </span>
              <h2 className="font-display font-extrabold uppercase text-[32px] sm:text-[38px] text-[#F7F5FF] tracking-wide mt-1">
                STEP-BY-STEP ENGINEERING PIPELINE
              </h2>
            </div>

            <div className="space-y-3.5">
              {caseStudy.methodology.map((step, idx) => (
                <div
                  key={idx}
                  className="comic-panel rounded-xl p-5 flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#08060F] border border-[#9B4DFF]/45 text-[#FF304F] font-mono font-bold text-[13px] flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <p className="font-sans text-[#BDB4CC] text-[14.5px] sm:text-[15px] leading-[1.65] pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Engineering Decisions & Trade-offs */}
        {caseStudy.technicalDecisions && caseStudy.technicalDecisions.length > 0 && (
          <section className="mb-14">
            <div className="mb-6">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF304F] block">
                SECTION 05 // ARCHITECTURAL RATIONALE
              </span>
              <h2 className="font-display font-extrabold uppercase text-[32px] sm:text-[38px] text-[#F7F5FF] tracking-wide mt-1">
                ENGINEERING DECISIONS &amp; TRADE-OFFS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {caseStudy.technicalDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="comic-panel rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF304F]">
                        DECISION // 0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] text-[#C4A2FF]">
                        EVALUATED TRADE-OFF
                      </span>
                    </div>
                    <h3 className="font-display font-bold uppercase text-[23px] text-[#F7F5FF] tracking-wide">
                      {decision.title}
                    </h3>
                    <p className="font-sans text-[#BDB4CC] text-[14px] leading-[1.65] mt-2.5">
                      {decision.rationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. Results & Verified Evaluation (Benchmarks Table) */}
        {caseStudy.benchmarks && caseStudy.benchmarks.length > 0 && (
          <section className="mb-14">
            <div className="mb-6">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#9B4DFF] block">
                SECTION 06 // EMPIRICAL EVALUATION
              </span>
              <h2 className="font-display font-extrabold uppercase text-[32px] sm:text-[38px] text-[#F7F5FF] tracking-wide mt-1">
                VERIFIED RESULTS &amp; BENCHMARKS
              </h2>
            </div>

            <div className="comic-panel rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#08060F] border-b border-[#9B4DFF]/30">
                      <th className="py-4 px-5 sm:px-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#BDB4CC]">
                        Evaluation Dimension / Metric
                      </th>
                      <th className="py-4 px-5 sm:px-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7F5FF]">
                        Verified Result &amp; Context
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#9B4DFF]/15">
                    {caseStudy.benchmarks.map((bench, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#9B4DFF]/[0.05] transition-colors"
                      >
                        <td className="py-4 px-5 sm:px-6 font-sans text-[14px] font-semibold text-[#F7F5FF]">
                          {bench.metric}
                        </td>
                        <td className="py-4 px-5 sm:px-6 font-mono text-[13px] text-[#C4A2FF]">
                          {bench.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* 8 & 10. Challenges & Solutions + Lessons Learned */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudy.challenges && caseStudy.challenges.length > 0 && (
            <div className="comic-panel rounded-xl p-6 sm:p-7">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF304F] block mb-2">
                SECTION 07 // CHALLENGES &amp; MITIGATIONS
              </span>
              <h2 className="font-display font-bold uppercase text-[28px] text-[#F7F5FF] tracking-wide mb-4">
                Production Obstacles Solved
              </h2>
              <ul className="space-y-3.5">
                {caseStudy.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-lg bg-[#08060F]/80 border border-[#9B4DFF]/25 font-sans text-[14px] text-[#BDB4CC] leading-[1.6]"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.lessonsLearned && caseStudy.lessonsLearned.length > 0 && (
            <div className="comic-panel rounded-xl p-6 sm:p-7">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#9B4DFF] block mb-2">
                SECTION 08 // KEY TAKEAWAYS
              </span>
              <h2 className="font-display font-bold uppercase text-[28px] text-[#F7F5FF] tracking-wide mb-4">
                Engineering Lessons Learned
              </h2>
              <ul className="space-y-3.5">
                {caseStudy.lessonsLearned.map((lesson, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-lg bg-[#08060F]/80 border border-[#9B4DFF]/25 font-sans text-[14px] text-[#BDB4CC] leading-[1.6] flex items-start gap-3"
                  >
                    <span className="font-mono text-[11px] font-bold text-[#C4A2FF] mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* 12. Previous / Next Mission Sequential Navigation */}
        <nav
          aria-label="Case Study Sequential Navigation"
          className="my-14 pt-8 border-t border-[#9B4DFF]/25 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {prevProject && (
            <Link
              to={`/project/${prevProject.id}`}
              className="comic-panel rounded-xl p-6 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9B4DFF]">
                  &larr; PREVIOUS MISSION
                </span>
                <h3 className="font-display font-bold uppercase text-[24px] text-[#F7F5FF] group-hover:text-[#C4A2FF] transition-colors mt-1">
                  {prevProject.title}
                </h3>
                <p className="font-sans text-[13px] text-[#BDB4CC] mt-1 line-clamp-2">
                  {prevProject.subtitle}
                </p>
              </div>
              <span className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF304F]">
                Inspect Field Report &larr;
              </span>
            </Link>
          )}

          {nextProject && (
            <Link
              to={`/project/${nextProject.id}`}
              className="comic-panel rounded-xl p-6 flex flex-col justify-between text-left sm:text-right group"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9B4DFF]">
                  NEXT MISSION &rarr;
                </span>
                <h3 className="font-display font-bold uppercase text-[24px] text-[#F7F5FF] group-hover:text-[#C4A2FF] transition-colors mt-1">
                  {nextProject.title}
                </h3>
                <p className="font-sans text-[13px] text-[#BDB4CC] mt-1 line-clamp-2">
                  {nextProject.subtitle}
                </p>
              </div>
              <span className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF304F]">
                Inspect Field Report &rarr;
              </span>
            </Link>
          )}
        </nav>

        {/* Conversion CTA Box */}
        <section className="my-12 comic-panel rounded-xl p-8 sm:p-10 text-center border border-[#9B4DFF]/40">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF304F] block">
            NEXT STEP // COLLABORATION
          </span>
          <h2 className="font-display font-extrabold uppercase text-[34px] sm:text-[42px] text-[#F7F5FF] mt-1">
            WANT TO DISCUSS THIS ARCHITECTURE?
          </h2>
          <p className="font-sans text-[#BDB4CC] text-[15px] max-w-2xl mx-auto mt-2">
            Explore the source repository, inspect my verified resume, or send a direct signal to discuss engineering roles and systems design.
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3.5">
            <button
              type="button"
              onClick={() => navigate("/#contact")}
              className="spider-sense-btn px-6 py-3 rounded-md bg-[#FF304F] hover:bg-[#e02442] text-[#F7F5FF] font-mono text-[12px] font-bold uppercase tracking-[0.14em] cursor-pointer"
            >
              Send a Signal
            </button>
            {onResumeClick && (
              <button
                type="button"
                onClick={onResumeClick}
                className="px-6 py-3 rounded-md bg-[#171126] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/50 text-[#F7F5FF] font-mono text-[12px] uppercase tracking-[0.14em] cursor-pointer"
              >
                View Resume
              </button>
            )}
            {caseStudy.github && (
              <a
                href={caseStudy.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-[#08060F] hover:bg-[#171126] border border-[#9B4DFF]/35 text-[#C4A2FF] font-mono text-[12px] uppercase tracking-[0.14em]"
              >
                View GitHub Repo &#8599;
              </a>
            )}
          </div>
        </section>
      </main>

      <Footer onResumeClick={onResumeClick} />
    </div>
  );
};

export default ProjectCaseStudy;
