import { useMemo } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { technologies, skillCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Helper to detect mobile screens
const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

const Technologies = () => {
  // Memoize the marquee technology list for 3D spheres
  const marqueeTechList = useMemo(() => {
    if (isMobile()) {
      // On mobile devices, limit to 8 marquee spheres to prevent WebGL context limits
      return technologies.slice(0, 8);
    }
    return technologies;
  }, []);

  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Technologies & Skills.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
        >
          A production-proven technical stack spanning applied AI systems, distributed backend pipelines,
          cross-platform applications, and cloud data infrastructure. Drag the interactive 3D spheres
          to inspect core frameworks, or browse the specialized skill domains below.
        </motion.p>
      </div>

      {/* Interactive 3D Ball Showcase */}
      <div className="mt-14 flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
        {marqueeTechList.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center group cursor-grab active:cursor-grabbing"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <span className="text-secondary group-hover:text-white text-[12px] sm:text-[13px] font-semibold tracking-wide transition-colors mt-1">
              {technology.name}
            </span>
          </div>
        ))}
      </div>

      {/* Categorized Technical Skills Matrix */}
      <div className="mt-16 sm:mt-20">
        <div className="border-l-4 border-[#915eff] pl-4 sm:pl-6 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Specialized Skill Domains & Tooling
          </h3>
          <p className="text-xs text-secondary uppercase tracking-widest mt-1">
            Grounded in production deployments and verified technical competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              className="bg-tertiary/70 border border-white/10 rounded-2xl p-6 hover:border-[#915eff]/50 transition-all duration-300 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{category.icon}</span>
                    <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">
                      {category.title}
                    </h4>
                  </div>
                  {category.badge && (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-[#915eff]/20 text-[#915eff] border border-[#915eff]/30">
                      {category.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-white/5 hover:bg-[#915eff]/20 border border-white/5 hover:border-[#915eff]/40 text-secondary hover:text-white text-xs font-medium transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-secondary/60">
                <span>{category.skills.length} core competencies</span>
                <span className="text-[#915eff]">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Technologies, "technologies");
