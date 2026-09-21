import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[200px] sm:w-[220px] md:w-[250px] mx-auto">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-4 xs:py-5 px-8 xs:px-10 sm:px-12 min-h-[220px] xs:min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon} 
            alt={title} 
            className='w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 object-contain' 
          />
          <h3 className='text-white text-[16px] xs:text-[18px] sm:text-[20px] font-bold text-center leading-tight'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className='mt-3 xs:mt-4 sm:mt-6 text-secondary text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[22px] xs:leading-[24px] sm:leading-[26px] md:leading-[30px]'
      >
        I'm a Software Engineer with a B.Tech in Computer Science and Design from IIIT Delhi. I architect production AI systems, distributed backend pipelines, and high-performance web and mobile applications. Having shipped enterprise solutions at Skizen and Lumiq from multi-agent orchestration and deduplication engines to cloud-scale APIs. I bridge applied AI with resilient software engineering.
      </motion.p>
      <div className='mt-12 xs:mt-16 sm:mt-20 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-20 justify-items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");