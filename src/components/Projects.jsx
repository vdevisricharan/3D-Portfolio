import { Tilt } from "react-tilt"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, case_study_id, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={
          {
            max: 35,
            scale: 1,
            speed: 450
          }
        }
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-[#915eff]/40 transition-all duration-300 flex flex-col justify-between h-full"
      >
        <div>
          <div className="relative w-full h-[230px] overflow-hidden rounded-2xl group">
            {case_study_id ? (
              <Link to={`/project/${case_study_id}`} className="block w-full h-full cursor-pointer">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ) : (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2 pointer-events-auto">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-md"
                title="View Source Code"
              >
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
              {live_link && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(live_link, "_blank");
                  }}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-md"
                  title="View Live Demo"
                >
                  <img src={website} alt="live" className="w-1/2 h-1/2 object-contain" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            {case_study_id ? (
              <Link
                to={`/project/${case_study_id}`}
                className="hover:text-[#915eff] transition-colors"
              >
                <h3 className="text-white font-bold text-[22px] sm:text-[24px] tracking-tight">{name}</h3>
              </Link>
            ) : (
              <h3 className="text-white font-bold text-[22px] sm:text-[24px] tracking-tight">{name}</h3>
            )}
            <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] font-medium ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>

          {case_study_id && (
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <Link
                to={`/project/${case_study_id}`}
                className="inline-flex items-center gap-2 text-[#915eff] hover:text-white font-semibold text-[14px] transition-colors group cursor-pointer"
              >
                <span>View Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
              <span className="text-[12px] uppercase tracking-wider font-semibold text-secondary/70 bg-white/5 px-2 py-0.5 rounded">
                Deep Dive
              </span>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  )
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects demonstrate practical engineering depth across agentic AI systems,
          deep learning pipelines, and production backend services. Each showcase highlights
          real-world problem solving, architectural decisions, and complete open-source implementations.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
};

export default SectionWrapper(Projects, "projects");