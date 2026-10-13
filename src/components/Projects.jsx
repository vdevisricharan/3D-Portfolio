import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  indexLabel,
  name,
  case_study_id,
  category,
  storyAngle,
  description,
  metricHighlight,
  architecturePreview,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.article
      variants={fadeIn("up", "tween", index * 0.08, 0.55)}
      className="comic-panel comic-panel-red rounded-xl overflow-hidden flex flex-col justify-between h-full group relative"
    >
      {/* Subtle Top Web-Line Accent on Hover */}
      <div
        className="h-[2px] w-full bg-gradient-to-r from-[#9B4DFF] via-[#C4A2FF] to-[#FF304F] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Card Header: Mission Index + Display Label */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF304F]">
            {indexLabel || `MISSION 0${index + 1}`}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2.5 py-0.5 rounded bg-[#08060F] border border-[#9B4DFF]/35 text-[#C4A2FF] truncate">
            {category}
          </span>
        </div>

        {/* Artwork & Architecture Preview Container */}
        <div className="relative w-full h-[205px] rounded-lg overflow-hidden bg-[#08060F] border border-[#9B4DFF]/25 mb-4">
          <Link
            to={`/project/${case_study_id}`}
            aria-label={`View ${name} technical case study`}
            className="block w-full h-full focus:outline-none"
          >
            <img
              src={image}
              alt={`${name} architecture and interface preview`}
              loading="lazy"
              className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] group-hover:-translate-y-0.5 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08060F] via-[#08060F]/25 to-transparent" />
          </Link>

          {/* Architecture Flow Strip Overlay */}
          {architecturePreview && (
            <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded bg-[#08060F]/90 backdrop-blur-sm border border-[#9B4DFF]/30">
              <p className="font-mono text-[10px] text-[#C4A2FF] truncate">
                {architecturePreview}
              </p>
            </div>
          )}
        </div>

        {/* Project Title */}
        <Link
          to={`/project/${case_study_id}`}
          className="group/title inline-block focus:outline-none"
        >
          <h3 className="font-display font-extrabold uppercase text-[26px] sm:text-[28px] leading-[1.05] tracking-[0.02em] text-[#F7F5FF] group-hover/title:text-[#C4A2FF] transition-colors">
            {name}
          </h3>
        </Link>

        {/* Compelling Story Angle Sentence */}
        {storyAngle && (
          <p className="font-sans font-semibold text-[14px] text-[#C4A2FF] mt-2 leading-snug">
            {storyAngle}
          </p>
        )}

        {/* Technical Description */}
        <p className="font-sans text-[13.5px] text-[#BDB4CC] mt-2 leading-[1.6] flex-1">
          {description}
        </p>

        {/* Verified Differentiator / Metric Pill */}
        {metricHighlight && (
          <div className="mt-4 px-3 py-2 rounded-md bg-[#08060F]/90 border-l-2 border-[#FF304F] border-y border-r border-y-[#9B4DFF]/20 border-r-[#9B4DFF]/20">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-[#FF304F] block">
              VERIFIED DIFFERENTIATOR
            </span>
            <p className="font-mono text-[11px] font-semibold text-[#F7F5FF] mt-0.5">
              {metricHighlight}
            </p>
          </div>
        )}

        {/* Key Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mt-4" aria-label="Technologies used">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-2.5 py-0.5 rounded bg-[#08060F] border border-[#9B4DFF]/25 font-mono text-[11px] text-[#BDB4CC] group-hover:border-[#9B4DFF]/45 transition-colors"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions: View Case Study + GitHub + Live Demo */}
      <div className="px-5 sm:px-6 py-3.5 bg-[#08060F]/85 border-t border-[#9B4DFF]/20 flex items-center justify-between gap-3">
        <Link
          to={`/project/${case_study_id}`}
          className="spider-sense-btn inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-[#FF304F] hover:text-[#F7F5FF] transition-colors"
        >
          <span>View Case Study</span>
          <span
            className="transform group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} source code on GitHub`}
              className="px-2.5 py-1.5 rounded bg-[#171126] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/30 hover:border-[#9B4DFF] font-mono text-[11px] text-[#F7F5FF] flex items-center gap-1.5 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
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
          )}

          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name} live demo`}
              className="px-2.5 py-1.5 rounded bg-[#FF304F]/15 hover:bg-[#FF304F] border border-[#FF304F]/60 font-mono text-[11px] text-[#F7F5FF] flex items-center gap-1 transition-colors"
            >
              <span>Demo</span>
              <span aria-hidden="true">&#8599;</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <div className="relative">
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF304F] font-semibold">
            03 // FEATURED MISSIONS
          </span>
          <span className="h-[1px] w-12 bg-[#9B4DFF]/40" aria-hidden="true" />
        </div>
        <h2 className={styles.sectionHeadText}>
          EVERY MISSION STARTS WITH A PROBLEM.
        </h2>
        <p className="font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] font-medium mt-2">
          Systems designed. Problems solved. Ideas brought to life.
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "tween", 0.1, 0.5)}
        className="mt-3 font-sans text-[#BDB4CC] text-[15px] sm:text-[16px] max-w-3xl leading-[1.65]"
      >
        Six verified engineering case studies spanning multi-agent orchestration, zero-idle-cost RAG infrastructure, bias-mitigated LLM evaluation, 4-bit QLoRA fine-tuning, computer vision critique, and edge-actuated hardware systems. Select any mission to inspect its full system architecture, trade-offs, and benchmarks.
      </motion.p>

      {/* 6 Project Cards Grid with Subtle Web-Geometry Background */}
      <div className="relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.case_study_id || index} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");