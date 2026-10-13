import { motion } from "framer-motion";
import { styles } from "../styles";
import { achievements, education, testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, code, title, issuer, date, description, type, badge, link }) => (
  <motion.article
    variants={fadeIn("up", "tween", index * 0.08, 0.5)}
    className="comic-panel rounded-xl p-6 flex flex-col justify-between h-full relative overflow-hidden group"
  >
    {/* Subtle Top Accent */}
    <div
      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9B4DFF] to-[#FF304F] opacity-50 group-hover:opacity-100 transition-opacity"
      aria-hidden="true"
    />

    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF304F]">
          {code || `MILESTONE // 0${index + 1}`}
        </span>
        <span className="px-2.5 py-0.5 rounded bg-[#08060F] border border-[#9B4DFF]/35 font-mono text-[10px] uppercase tracking-[0.12em] text-[#C4A2FF]">
          {type}
        </span>
      </div>

      <h3 className="font-display font-bold uppercase text-[24px] sm:text-[26px] text-[#F7F5FF] leading-tight tracking-wide">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C4A2FF] transition-colors"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      <div className="mt-1.5 flex items-center justify-between gap-2 font-mono text-[12px]">
        <span className="text-[#9B4DFF] font-semibold">{issuer}</span>
        <span className="text-[#BDB4CC]">{date}</span>
      </div>

      <p className="mt-3 font-sans text-[14px] text-[#BDB4CC] leading-[1.6]">
        {description}
      </p>
    </div>

    <div className="mt-5 pt-3.5 border-t border-[#9B4DFF]/20 flex items-center justify-between">
      <span className="px-2.5 py-1 rounded bg-[#08060F] border border-[#9B4DFF]/30 font-mono text-[11px] font-semibold text-[#F7F5FF] uppercase tracking-[0.1em]">
        {badge}
      </span>
      <span className="font-mono text-[11px] text-[#C4A2FF] uppercase tracking-[0.14em]">
        VERIFIED
      </span>
    </div>
  </motion.article>
);

const Achievements = () => {
  const iiitdRecord = education[0];

  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF304F] font-semibold">
            06 // CREDENTIALS &amp; HONORS
          </span>
          <span className="h-[1px] w-12 bg-[#9B4DFF]/40" aria-hidden="true" />
        </div>
        <h2 className={styles.sectionHeadText}>THE STORY SO FAR.</h2>
        <p className="font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] font-medium mt-2">
          Academic foundation, national hackathon victory, and verified credentials.
        </p>
      </motion.div>

      {/* Collectible Editorial Milestone Panels */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}

        {/* Academic Coursework Panel (IIIT Delhi Highlight) */}
        {iiitdRecord && (
          <motion.article
            variants={fadeIn("up", "tween", 0.35, 0.5)}
            className="comic-panel rounded-xl p-6 flex flex-col justify-between h-full border border-[#9B4DFF]/35"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9B4DFF]">
                  ACADEMIC ARCHIVE // IIITD
                </span>
                <span className="font-mono text-[10px] text-[#BDB4CC]">
                  {iiitdRecord.date}
                </span>
              </div>
              <h3 className="font-display font-bold uppercase text-[24px] text-[#F7F5FF] tracking-wide">
                Core CS &amp; AI Coursework
              </h3>
              <p className="font-mono text-[11px] text-[#C4A2FF] mt-1">
                {iiitdRecord.company_name}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {iiitdRecord.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded bg-[#08060F] border border-[#9B4DFF]/25 font-mono text-[10.5px] text-[#BDB4CC]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#9B4DFF]/20 flex items-center justify-between">
              <a
                href={iiitdRecord.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#C4A2FF] hover:text-[#FF304F] uppercase tracking-[0.12em] transition-colors"
              >
                iiitd.ac.in &#8599;
              </a>
              <span className="font-mono text-[11px] text-[#9B4DFF]">CSD &apos;24</span>
            </div>
          </motion.article>
        )}
      </div>

      {/* Verified Collaborator & Faculty Endorsements */}
      {testimonials && testimonials.length > 0 && (
        <div className="mt-14 pt-10 border-t border-[#9B4DFF]/20" id="testimonials">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9B4DFF] block">
                FIELD ENDORSEMENTS // VERIFIED COLLABORATORS
              </span>
              <h3 className="font-display font-extrabold uppercase text-[30px] sm:text-[36px] text-[#F7F5FF] tracking-wide mt-1">
                VOICES FROM THE FIELD.
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[#BDB4CC] uppercase tracking-[0.14em]">
              IIIT DELHI LABS &amp; STARTUP LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <motion.blockquote
                key={item.name}
                variants={fadeIn("up", "tween", idx * 0.1, 0.5)}
                className="comic-panel rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span
                    className="font-display font-black text-[42px] leading-none text-[#9B4DFF]"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="font-sans text-[14.5px] text-[#F7F5FF]/90 leading-[1.65] mt-1">
                    {item.testimonial}
                  </p>
                </div>

                <footer className="mt-6 pt-4 border-t border-[#9B4DFF]/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover border border-[#9B4DFF]/50"
                    />
                    <div>
                      <cite className="not-italic font-sans font-bold text-[14px] text-[#F7F5FF] block">
                        {item.name}
                      </cite>
                      <span className="font-mono text-[10.5px] text-[#BDB4CC] block">
                        {item.designation} • {item.company}
                      </span>
                    </div>
                  </div>

                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.name} on LinkedIn`}
                      className="w-8 h-8 rounded bg-[#08060F] border border-[#9B4DFF]/30 hover:border-[#FF304F] flex items-center justify-center text-[#C4A2FF] hover:text-[#F7F5FF] transition-colors flex-shrink-0"
                    >
                      <span className="font-mono text-[11px]" aria-hidden="true">
                        in
                      </span>
                    </a>
                  )}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
