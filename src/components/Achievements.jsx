import { motion } from "framer-motion";
import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, issuer, date, description, type, badge }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary p-6 sm:p-8 rounded-2xl sm:w-[540px] w-full border border-white/5 hover:border-[#915eff]/40 transition-all duration-300 shadow-card flex flex-col justify-between"
  >
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 text-[12px] font-semibold rounded-full bg-[#915eff]/20 text-[#915eff] border border-[#915eff]/30">
          {type}
        </span>
        <span className="text-secondary text-[13px] font-medium">{date}</span>
      </div>

      <h3 className="text-white font-bold text-[20px] sm:text-[22px] tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-[#915eff] text-[14px] font-medium mb-4">{issuer}</p>
      <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed">
        {description}
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
      <span className="text-[12px] font-bold text-white uppercase tracking-wider bg-white/5 px-3 py-1 rounded-lg">
        {badge}
      </span>
      <span className="text-[#915eff] text-[18px]">&bull;&bull;&bull;</span>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Honors & Credentials</p>
        <h2 className={styles.sectionHeadText}>Achievements & Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          National hackathon victory, professional cloud data engineering credentials, and competitive examination benchmarks validating problem-solving aptitude and technical rigor.
        </motion.p>
      </div>

      <div className="mt-14 flex flex-wrap gap-7 justify-center">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
