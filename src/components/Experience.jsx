import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceMilestone = ({ experience, index }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const visiblePoints = expanded ? experience.points : experience.points.slice(0, 2);

  return (
    <motion.article
      variants={fadeIn("up", "tween", index * 0.12, 0.55)}
      className="relative pl-8 sm:pl-16 pb-12 last:pb-0 min-w-0"
    >
      {/* Web Node Marker on the Vertical Timeline */}
      <div
        className="absolute left-0 sm:left-2 top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#171126] border-2 border-[#9B4DFF] shadow-[0_0_16px_rgba(155,77,255,0.45)] flex items-center justify-center z-10 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={experience.icon}
          alt=""
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain bg-white rounded-sm p-0.5"
        />
      </div>

      {/* Horizontal Web-Connector Tick */}
      <div
        className="absolute left-6 sm:left-11 top-5 w-2 sm:w-5 h-[2px] bg-gradient-to-r from-[#9B4DFF] to-[#FF304F]"
        aria-hidden="true"
      />

      {/* Mission Log Card */}
      <div className="comic-panel rounded-xl p-5 sm:p-8 border border-[#9B4DFF]/30 min-w-0 overflow-hidden">
        {/* Top Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#9B4DFF]/20">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF304F]">
              {experience.code || `MISSION LOG // 0${index + 1}`}
            </span>
            <span
              className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-[0.12em] ${
                experience.status === "ACTIVE DEPLOYMENT"
                  ? "bg-[#FF304F]/15 text-[#FF304F] border border-[#FF304F]/40"
                  : "bg-[#9B4DFF]/15 text-[#C4A2FF] border border-[#9B4DFF]/35"
              }`}
            >
              {experience.status}
            </span>
          </div>

          <time className="font-mono text-[12px] font-semibold text-[#C4A2FF] uppercase tracking-[0.1em]">
            {experience.date}
          </time>
        </div>

        {/* Role & Employer Heading */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h3 className="font-display font-extrabold uppercase text-[28px] sm:text-[32px] text-[#F7F5FF] tracking-[0.02em] leading-tight">
              {experience.title}{" "}
              <span className="text-[#9B4DFF]">//</span>{" "}
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4A2FF] hover:text-[#FF304F] underline decoration-[#9B4DFF]/40 underline-offset-4 transition-colors"
              >
                {experience.company}
              </a>
            </h3>
            <p className="font-mono text-[12px] text-[#BDB4CC] mt-0.5">
              {experience.location}
            </p>
          </div>
        </div>

        {/* Concise Role Summary */}
        {experience.summary && (
          <p className="mt-3 font-sans text-[15px] text-[#F7F5FF]/90 leading-[1.65]">
            {experience.summary}
          </p>
        )}

        {/* Scannable Impact Highlights Strip */}
        {experience.highlights && (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
            {experience.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#08060F]/85 border border-[#9B4DFF]/25"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FF304F] block">
                  {item.label}
                </span>
                <p className="font-mono text-[12px] font-semibold text-[#F7F5FF] mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Technical Contributions Bullet List */}
        <ul className="mt-5 space-y-3">
          {visiblePoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 font-sans text-[14px] sm:text-[14.5px] text-[#BDB4CC] leading-[1.65]"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF304F] flex-shrink-0"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Expand / Collapse Technical Details Control */}
        {experience.points.length > 2 && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#08060F] hover:bg-[#9B4DFF]/20 border border-[#9B4DFF]/35 font-mono text-[11px] uppercase tracking-[0.12em] text-[#C4A2FF] hover:text-[#F7F5FF] transition-colors cursor-pointer"
            >
              <span>
                {expanded
                  ? "Collapse Technical Details"
                  : `Expand All ${experience.points.length} Engineering Contributions`}
              </span>
              <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
            </button>
          </div>
        )}

        {/* Verified Technology Stack Pills */}
        {experience.techTags && (
          <div className="mt-5 pt-4 border-t border-[#9B4DFF]/15 flex flex-wrap gap-1.5">
            {experience.techTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded bg-[#08060F]/90 border border-[#9B4DFF]/25 font-mono text-[11px] text-[#BDB4CC]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 25%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0.12, 1]);

  return (
    <div className="relative">
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF304F] font-semibold">
            04 // PRODUCTION TRACK RECORD
          </span>
          <span className="h-[1px] w-12 bg-[#9B4DFF]/40" aria-hidden="true" />
        </div>
        <h2 className={styles.sectionHeadText}>BUILT IN THE REAL WORLD.</h2>
        <p className="font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] font-medium mt-2">
          Production engineering across high-growth startup and enterprise systems.
        </p>
      </motion.div>

      {/* Progressive Web-Line Vertical Timeline */}
      <div ref={timelineRef} className="relative mt-12">
        {/* Static Background Web Strand */}
        <div
          className="absolute left-3.5 sm:left-6 top-2 bottom-2 w-[2px] bg-[#9B4DFF]/20"
          aria-hidden="true"
        />
        {/* Scroll-Illuminated Neon Web Strand */}
        <motion.div
          style={{ scaleY: lineScaleY, transformOrigin: "top" }}
          className="absolute left-3.5 sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#FF304F] via-[#9B4DFF] to-[#C4A2FF] shadow-[0_0_12px_rgba(155,77,255,0.75)]"
          aria-hidden="true"
        />

        <div>
          {experiences.map((experience, index) => (
            <ExperienceMilestone
              key={experience.id || index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Archival LinkedIn Link */}
      <div className="mt-10 flex justify-start sm:pl-16 min-w-0 max-w-full">
        <a
          href="https://linkedin.com/in/vdevisricharan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-4 sm:px-5 py-3 rounded-lg comic-panel text-[#BDB4CC] hover:text-[#F7F5FF] font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em] transition-colors group max-w-full"
        >
          <span className="break-words">Explore full career history &amp; earlier research roles on LinkedIn</span>
          <span
            className="text-[#FF304F] group-hover:translate-x-1 transition-transform shrink-0"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");