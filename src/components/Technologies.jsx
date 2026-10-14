import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { skillCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Coordinates for the 5-domain Developer Web pentagon around the central hub (cx=220, cy=180)
const WEB_DOMAIN_COORDS = [
  { x: 220, y: 42 },  // DOM-01: AI, ML, and RAG (Top)
  { x: 375, y: 128 }, // DOM-02: Backend & Distributed (Top-Right)
  { x: 325, y: 295 }, // DOM-03: Frontend & Mobile (Bottom-Right)
  { x: 115, y: 295 }, // DOM-04: Cloud, Data & DevOps (Bottom-Left)
  { x: 65, y: 128 },  // DOM-05: Languages & Foundations (Top-Left)
];

const Technologies = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeDomain = skillCategories[selectedIndex] || skillCategories[0];

  return (
    <div className="relative">
      {/* Legacy hash anchor so #technologies links also resolve cleanly */}
      <span id="technologies" className="sr-only" aria-hidden="true" />

      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF304F] font-semibold">
            05 // THE TECH ARSENAL
          </span>
          <span className="h-[1px] w-12 bg-[#9B4DFF]/40" aria-hidden="true" />
        </div>
        <h2 className={styles.sectionHeadText}>THE TOOLS BEHIND THE WORK.</h2>
        <p className="font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] font-medium mt-2">
          Five specialized engineering domains connected into one cohesive stack.
        </p>
      </motion.div>

      {/* Interactive Developer Web Hub + Selected Domain Inspector */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-w-0">
        {/* Left: Interactive Developer Web Visualization (5 Columns) */}
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.55)}
          className="lg:col-span-5 comic-panel rounded-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden min-w-0"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#9B4DFF]/20 min-w-0">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#9B4DFF] truncate">
              DEVELOPER WEB // DOMAIN HUB
            </span>
            <span className="font-mono text-[10px] text-[#FF304F] shrink-0">SELECT A NODE</span>
          </div>

          {/* Accessible SVG Developer Web */}
          <div className="w-full bg-[#08060F]/90 rounded-lg border border-[#9B4DFF]/25 p-2 flex items-center justify-center">
            <svg
              viewBox="0 0 440 350"
              className="w-full h-[260px] sm:h-[290px]"
              role="img"
              aria-label="Developer Web connecting central engineering core to five technical skill domains"
            >
              {/* Concentric Web Rings */}
              <g stroke="#9B4DFF" strokeOpacity="0.16" strokeWidth="1" fill="none">
                <circle cx="220" cy="180" r="55" />
                <circle cx="220" cy="180" r="105" />
                <polygon
                  points={WEB_DOMAIN_COORDS.map((c) => `${c.x},${c.y}`).join(" ")}
                  strokeOpacity="0.24"
                />
              </g>

              {/* Radial Strands from Central Hub to Each Domain */}
              {WEB_DOMAIN_COORDS.map((coord, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <line
                    key={`strand-${idx}`}
                    x1="220"
                    y1="180"
                    x2={coord.x}
                    y2={coord.y}
                    stroke={isSelected ? "#FF304F" : "#9B4DFF"}
                    strokeWidth={isSelected ? "2.5" : "1.2"}
                    strokeOpacity={isSelected ? "0.95" : "0.35"}
                  />
                );
              })}

              {/* Central Core Hub */}
              <g>
                <circle
                  cx="220"
                  cy="180"
                  r="30"
                  fill="#171126"
                  stroke="#9B4DFF"
                  strokeWidth="2"
                />
                <circle cx="220" cy="180" r="4" fill="#FF304F" />
                <text
                  x="220"
                  y="176"
                  textAnchor="middle"
                  fill="#F7F5FF"
                  fontSize="9"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="700"
                >
                  CHARAN
                </text>
                <text
                  x="220"
                  y="189"
                  textAnchor="middle"
                  fill="#C4A2FF"
                  fontSize="8"
                  fontFamily="JetBrains Mono, monospace"
                >
                  DEV CORE
                </text>
              </g>

              {/* 5 Domain Nodes */}
              {skillCategories.map((domain, idx) => {
                const coord = WEB_DOMAIN_COORDS[idx];
                const isSelected = idx === selectedIndex;
                return (
                  <g
                    key={domain.id}
                    onClick={() => setSelectedIndex(idx)}
                    className="cursor-pointer"
                  >
                    {isSelected && (
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r="31"
                        fill="rgba(255, 48, 79, 0.16)"
                        stroke="#FF304F"
                        strokeWidth="1.2"
                      />
                    )}
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r="22"
                      fill={isSelected ? "#FF304F" : "#171126"}
                      stroke={isSelected ? "#F7F5FF" : "#9B4DFF"}
                      strokeWidth="2"
                    />
                    <text
                      x={coord.x}
                      y={coord.y + 3}
                      textAnchor="middle"
                      fill="#F7F5FF"
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                      fontWeight="700"
                    >
                      0{idx + 1}
                    </text>
                    <text
                      x={coord.x}
                      y={coord.y + (idx === 0 ? -28 : 36)}
                      textAnchor="middle"
                      fill={isSelected ? "#F7F5FF" : "#BDB4CC"}
                      fontSize="10"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight={isSelected ? "700" : "500"}
                    >
                      {domain.shortTitle}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Keyboard-Operable Domain Selector Buttons */}
          <div
            className="mt-4 flex flex-wrap gap-1.5"
            role="tablist"
            aria-label="Engineering Skill Domains"
          >
            {skillCategories.map((domain, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3 py-1.5 rounded font-mono text-[11px] uppercase tracking-[0.1em] transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#FF304F] text-[#F7F5FF] font-bold shadow-[0_0_12px_rgba(255,48,79,0.35)]"
                      : "bg-[#08060F] text-[#BDB4CC] hover:text-[#F7F5FF] border border-[#9B4DFF]/25"
                  }`}
                >
                  0{idx + 1} // {domain.shortTitle}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Active Domain Deep-Dive Panel (7 Columns) */}
        <motion.div
          variants={fadeIn("left", "tween", 0.16, 0.55)}
          className="lg:col-span-7 comic-panel rounded-xl p-5 sm:p-8 flex flex-col justify-between overflow-hidden min-w-0"
          aria-live="polite"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#9B4DFF]/20">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF304F]">
                {activeDomain.code} // ACTIVE DOMAIN
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#9B4DFF]/20 border border-[#9B4DFF]/40 font-mono text-[11px] text-[#C4A2FF]">
                {activeDomain.badge}
              </span>
            </div>

            <h3 className="font-display font-extrabold uppercase text-[30px] sm:text-[36px] text-[#F7F5FF] tracking-[0.02em] mt-4">
              {activeDomain.title}
            </h3>

            <p className="font-sans text-[15px] text-[#BDB4CC] leading-[1.65] mt-2">
              {activeDomain.description}
            </p>

            {/* Domain Technologies */}
            <div className="mt-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B4DFF] block mb-3">
                VERIFIED TECHNOLOGIES &amp; FRAMEWORKS ({activeDomain.skills.length})
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDomain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-md bg-[#08060F] border border-[#9B4DFF]/40 text-[#F7F5FF] font-mono text-[12px] font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Representative Missions Using This Domain */}
          {activeDomain.relatedProjects && activeDomain.relatedProjects.length > 0 && (
            <div className="mt-8 pt-5 border-t border-[#9B4DFF]/20">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C4A2FF] block mb-3">
                REPRESENTATIVE MISSIONS IN THIS DOMAIN
              </span>
              <div className="flex flex-wrap gap-2.5">
                {activeDomain.relatedProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    to={`/project/${proj.id}`}
                    className="px-3.5 py-2 rounded-md bg-[#171126] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/35 hover:border-[#FF304F] font-mono text-[12px] text-[#F7F5FF] inline-flex items-center gap-2 transition-colors"
                  >
                    <span>{proj.name}</span>
                    <span className="text-[#FF304F]" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Complete Accessible 5-Domain Reference Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <div
              key={category.id}
              onClick={() => setSelectedIndex(idx)}
              className={`comic-panel rounded-xl p-5 cursor-pointer transition-all ${
                isSelected
                  ? "border-[#FF304F]/70 shadow-[0_0_24px_rgba(255,48,79,0.15)]"
                  : "border-[#9B4DFF]/25"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#9B4DFF]">
                  0{idx + 1} // {category.badge}
                </span>
                <span className="font-mono text-[11px] text-[#BDB4CC]">
                  {category.skills.length} tools
                </span>
              </div>
              <h4 className="font-display font-bold uppercase text-[22px] text-[#F7F5FF] tracking-wide">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#08060F]/85 border border-[#9B4DFF]/20 font-mono text-[11px] text-[#BDB4CC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Technologies, "skills");
