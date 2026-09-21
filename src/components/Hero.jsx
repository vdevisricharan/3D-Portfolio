import { motion } from "framer-motion";
import { styles } from '../styles';

const Hero = ({ onResumeClick }) => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-[90rem] mx-auto flex flex-row items-start gap-3 xs:gap-4 sm:gap-6 lg:gap-8 xl:gap-10`}>
        <div className="flex flex-col justify-center items-center mt-2 xs:mt-4 sm:mt-8 lg:mt-12 xl:mt-16">
          <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[#915eff]" />
          <div className="w-0.5 sm:w-1 h-40 xs:h-48 sm:h-60 md:h-80 lg:h-96 xl:h-[28rem] violet-gradient" />
        </div>
        <div className="flex-1 mt-2 xs:mt-4 sm:mt-8 lg:mt-12 xl:mt-16">
          <h1 className={`${styles.heroHeadText} text-white mb-2 xs:mb-3 sm:mb-4 lg:mb-6`}>
            Building Scalable AI Systems & Distributed Architectures.
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-1 xs:mt-2 sm:mt-3`}>
            Hi, I'm <span className="text-[#915eff] font-semibold">Devi Sri Charan</span> — Software Engineer specializing in Multi-Agent Workflows, Production RAG, and Cloud-Native Backends.
          </p>
          <p className="text-secondary text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] max-w-2xl mt-3 leading-relaxed hidden sm:block">
            Architecting production-grade agentic AI, low-latency search systems, and resilient data pipelines with PyTorch, LangGraph, FastAPI, and AWS.
          </p>

          {/* Above-the-fold CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 xs:mt-8">
            <button
              onClick={onResumeClick}
              className="bg-[#915eff] hover:bg-[#7e4ee0] text-white px-5 py-2.5 rounded-xl font-medium text-[13px] sm:text-[15px] transition-all duration-200 shadow-lg shadow-[#915eff]/30 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>

            <a
              href="https://github.com/vdevisricharan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#232631] border border-white/15 hover:border-[#915eff]/60 text-white px-4 py-2.5 rounded-xl font-medium text-[13px] sm:text-[15px] transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/vdevisricharan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#232631] border border-white/15 hover:border-[#915eff]/60 text-white px-4 py-2.5 rounded-xl font-medium text-[13px] sm:text-[15px] transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.66 1.64 1.63 1.63 0 0 0 1.66 1.63 1.63 1.63 0 0 0 1.65-1.63A1.64 1.64 0 0 0 7.83 6.2Z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="mailto:vdevisricharan@gmail.com"
              className="bg-tertiary hover:bg-[#232631] border border-white/15 hover:border-[#915eff]/60 text-white px-4 py-2.5 rounded-xl font-medium text-[13px] sm:text-[15px] transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>

            <a
              href="#projects"
              className="text-secondary hover:text-white font-medium text-[13px] sm:text-[15px] px-2 py-2 flex items-center gap-1 transition-colors group cursor-pointer"
            >
              <span>View Projects</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' className="hover:scale-110 transition-transform duration-300">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;