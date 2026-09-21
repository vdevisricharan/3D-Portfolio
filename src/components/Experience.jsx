import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import {SectionWrapper} from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={
      {
        background: '#1d1836',
        color: "#fff"
      }
    }
    contentArrowStyle={
      { borderRight: '7px solid  #232631' }
    }
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full cursor-pointer" onClick={() => window.open(experience.website, "_blank")}>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain' />
      </div>
    }>
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold m-0">{experience.company_name}</p>
      <ul className="mt-5 list-disc ml-5 space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100/95 text-[14px] pl-1 leading-relaxed tracking-normal"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />))
          }
        </VerticalTimeline>
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://linkedin.com/in/vdevisricharan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-tertiary/80 hover:bg-tertiary border border-white/10 hover:border-[#915eff]/60 text-secondary hover:text-white transition-all duration-200 text-[13px] sm:text-[15px] shadow-lg"
        >
          <span>Looking for earlier research and university roles? View complete history on LinkedIn</span>
          <span className="text-[#915eff] font-bold">&rarr;</span>
        </a>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"experience");