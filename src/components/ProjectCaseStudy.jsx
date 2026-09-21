import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies, caseStudyKeys } from "../constants/caseStudies";
import { github, website, logo } from "../assets";
import { StarsCanvas } from "./canvas";
import Footer from "./Footer";

const ProjectCaseStudy = ({ onResumeClick }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudies[projectId];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-primary flex flex-col justify-center items-center px-6 text-center relative z-0">
        <StarsCanvas />
        <div className="relative z-10 max-w-lg bg-tertiary/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <span className="text-[#915eff] text-5xl font-bold">404</span>
          <h1 className="text-white text-2xl font-bold mt-4">Case Study Not Found</h1>
          <p className="text-secondary text-sm mt-3 leading-relaxed">
            The requested project case study "{projectId}" does not exist or has been relocated.
          </p>
          <Link
            to="/#projects"
            className="inline-block mt-6 px-6 py-3 bg-[#915eff] hover:bg-[#804bee] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#915eff]/30"
          >
            &larr; Return to Featured Projects
          </Link>
        </div>
      </div>
    );
  }

  // Calculate Previous and Next projects
  const currentIndex = caseStudyKeys.indexOf(projectId);
  const prevKey = currentIndex > 0 ? caseStudyKeys[currentIndex - 1] : caseStudyKeys[caseStudyKeys.length - 1];
  const nextKey = currentIndex < caseStudyKeys.length - 1 ? caseStudyKeys[currentIndex + 1] : caseStudyKeys[0];

  const prevProject = caseStudies[prevKey];
  const nextProject = caseStudies[nextKey];

  return (
    <div className="relative z-0 bg-primary min-h-screen text-white selection:bg-[#915eff] selection:text-white">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-30 w-full bg-primary/85 backdrop-blur-md border-b border-white/10 py-3.5 px-6 sm:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/#projects")}
              className="inline-flex items-center gap-2 text-secondary hover:text-white text-sm font-medium transition-colors group cursor-pointer"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </button>
            <span className="text-white/20 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-2 text-xs text-secondary">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <button onClick={() => navigate("/#projects")} className="hover:text-white transition-colors">
                Projects
              </button>
              <span>/</span>
              <span className="text-white font-medium truncate max-w-[200px]">{caseStudy.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {caseStudy.github && (
              <a
                href={caseStudy.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-tertiary border border-white/10 hover:border-[#915eff]/60 text-xs font-semibold text-white transition-all hover:scale-105 shadow-sm"
                title="View Source on GitHub"
              >
                <img src={github} alt="GitHub" className="w-4 h-4 object-contain" />
                <span className="hidden sm:inline">GitHub Repository</span>
              </a>
            )}

            {caseStudy.liveDemo && (
              <a
                href={caseStudy.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#915eff] hover:bg-[#804bee] text-xs font-semibold text-white transition-all hover:scale-105 shadow-md shadow-[#915eff]/30"
                title="Open Live Deployment"
              >
                <img src={website} alt="Demo" className="w-3.5 h-3.5 object-contain" />
                <span>Live Demo</span>
              </a>
            )}

            {onResumeClick && (
              <button
                onClick={onResumeClick}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-secondary hover:text-white transition-all"
              >
                Resume
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 py-10 sm:py-16">
        {/* Hero Section */}
        <section className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {caseStudy.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#915eff]/20 text-[#915eff] border border-[#915eff]/40">
                {caseStudy.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-secondary border border-white/10">
              {caseStudy.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-secondary border border-white/10">
              {caseStudy.timeline}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {caseStudy.title}
          </h1>

          <p className="mt-5 text-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl">
            {caseStudy.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-secondary">
            <div className="flex items-center gap-2">
              <span className="text-[#915eff] font-semibold">Role:</span>
              <span className="text-white">{caseStudy.role}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#915eff] font-semibold">Verification:</span>
              <span className="text-white">Open Source & Verified Metrics</span>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        {caseStudy.stats && caseStudy.stats.length > 0 && (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {caseStudy.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-tertiary/70 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#915eff]/40 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider text-secondary font-medium mb-2">
                  {stat.label}
                </span>
                <span className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </section>
        )}

        {/* Hero Visual Asset */}
        {caseStudy.image && (
          <section className="mb-16">
            <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-tertiary shadow-2xl group relative">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-auto max-h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </section>
        )}

        {/* Executive Overview & Problem */}
        <section className="mb-16">
          <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Problem & Executive Overview
            </h2>
            <p className="text-xs text-secondary uppercase tracking-widest mt-1">
              Context, motivation, and system objectives
            </p>
          </div>
          <div className="bg-tertiary/50 border border-white/10 rounded-2xl p-6 sm:p-8 leading-relaxed text-secondary text-sm sm:text-base whitespace-pre-line">
            {caseStudy.overview}
          </div>
        </section>

        {/* System Architecture & Flow */}
        {caseStudy.architecture && (
          <section className="mb-16">
            <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                System Architecture & Data Pipeline
              </h2>
              <p className="text-xs text-secondary uppercase tracking-widest mt-1">
                Data flow, execution graph, and agent interactions
              </p>
            </div>

            <p className="text-secondary text-sm sm:text-base mb-6 leading-relaxed">
              {caseStudy.architecture.description}
            </p>

            {caseStudy.architecture.diagram && (
              <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="bg-[#161b22] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="text-xs text-secondary font-mono ml-2">architecture-flowchart.mmd</span>
                  </div>
                  <span className="text-[11px] font-mono text-secondary/60 uppercase">Mermaid Workflow</span>
                </div>
                {/* Diagram Code / Visual */}
                <div className="p-6 overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-[#915eff] leading-relaxed select-all">
                    <code>{caseStudy.architecture.diagram}</code>
                  </pre>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Key Engineering Decisions & Trade-offs */}
        {caseStudy.technicalDecisions && caseStudy.technicalDecisions.length > 0 && (
          <section className="mb-16">
            <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Key Technical Decisions & Trade-offs
              </h2>
              <p className="text-xs text-secondary uppercase tracking-widest mt-1">
                Engineering rationale and design alternatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {caseStudy.technicalDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="bg-tertiary/60 border border-white/10 rounded-2xl p-6 hover:border-[#915eff]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#915eff]" />
                      <h3 className="text-white font-bold text-base sm:text-lg">{decision.title}</h3>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">{decision.rationale}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-secondary/70">
                    <span>Decision #{idx + 1}</span>
                    <span className="text-[#915eff]">Evaluated & Implemented</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Methodology & Implementation Pipeline */}
        {caseStudy.methodology && caseStudy.methodology.length > 0 && (
          <section className="mb-16">
            <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Methodology & Pipeline Implementation
              </h2>
              <p className="text-xs text-secondary uppercase tracking-widest mt-1">
                Systematic step-by-step engineering process
              </p>
            </div>

            <div className="space-y-4">
              {caseStudy.methodology.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-tertiary/40 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#915eff]/20 border border-[#915eff]/40 text-[#915eff] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quantitative Benchmarks & Results */}
        {caseStudy.benchmarks && caseStudy.benchmarks.length > 0 && (
          <section className="mb-16">
            <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Empirical Evaluation & Benchmarks
              </h2>
              <p className="text-xs text-secondary uppercase tracking-widest mt-1">
                Measured results, comparative tests, and runtime metrics
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-tertiary/50 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-secondary">
                      Metric / Dimension
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-white">
                      Observed Result / Verification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {caseStudy.benchmarks.map((bench, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 text-sm font-medium text-white/90">
                        {bench.metric}
                      </td>
                      <td className="py-4 px-6 text-sm text-[#915eff] font-mono font-semibold">
                        {bench.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Challenges & Mitigations */}
        {caseStudy.challenges && caseStudy.challenges.length > 0 && (
          <section className="mb-16">
            <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Production Challenges & Engineering Mitigations
              </h2>
              <p className="text-xs text-secondary uppercase tracking-widest mt-1">
                Obstacles encountered and technical solutions
              </p>
            </div>

            <div className="space-y-4">
              {caseStudy.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-tertiary/50 border border-white/10 hover:border-[#915eff]/30 transition-all flex items-start gap-4"
                >
                  <span className="text-[#915eff] text-lg font-bold">⚡</span>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies Used */}
        {caseStudy.techStack && (
          <section className="mb-16">
            <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Technologies & Tools
              </h2>
              <p className="text-xs text-secondary uppercase tracking-widest mt-1">
                Frameworks, libraries, and cloud infrastructure
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {caseStudy.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-tertiary border border-white/10 text-xs sm:text-sm font-medium text-white hover:border-[#915eff] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Next / Previous Project Navigation */}
        <section className="my-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevProject && (
              <Link
                to={`/project/${prevProject.id}`}
                className="group p-6 rounded-2xl bg-tertiary/40 border border-white/10 hover:border-[#915eff]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-medium">
                    &larr; Previous Case Study
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-[#915eff] transition-colors">
                    {prevProject.title}
                  </h4>
                  <p className="text-xs text-secondary mt-2 line-clamp-2">{prevProject.subtitle}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#915eff] flex items-center gap-1">
                  <span>Explore Architecture</span>
                  <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link
                to={`/project/${nextProject.id}`}
                className="group p-6 rounded-2xl bg-tertiary/40 border border-white/10 hover:border-[#915eff]/50 transition-all flex flex-col justify-between text-left sm:text-right"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-medium">
                    Next Case Study &rarr;
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-[#915eff] transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-secondary mt-2 line-clamp-2">{nextProject.subtitle}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#915eff] flex items-center justify-start sm:justify-end gap-1">
                  <span>Explore Architecture</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            )}
          </div>
        </section>

        {/* Conversion & Contact CTA */}
        <section className="my-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-tertiary via-black-100 to-tertiary border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interested in discussing this architecture?
            </h3>
            <p className="mt-4 text-secondary text-sm sm:text-base leading-relaxed">
              I am actively exploring Software Engineering, Applied AI, and Backend roles.
              Let's connect to discuss systems design, project implementations, or collaboration opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => navigate("/#contact")}
                className="px-6 py-3 rounded-xl bg-[#915eff] hover:bg-[#804bee] text-white text-sm font-semibold transition-all shadow-lg shadow-[#915eff]/30 cursor-pointer"
              >
                Send Message / Get in Touch
              </button>
              {onResumeClick && (
                <button
                  onClick={onResumeClick}
                  className="px-6 py-3 rounded-xl bg-tertiary hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all cursor-pointer"
                >
                  View Interactive Resume
                </button>
              )}
              <a
                href={caseStudy.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all"
              >
                Star on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer onResumeClick={onResumeClick} />
    </div>
  );
};

export default ProjectCaseStudy;
