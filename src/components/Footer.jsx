import { logo } from "../assets";
import { navLinks } from "../constants";

const Footer = ({ onResumeClick }) => {
  return (
    <footer className="w-full bg-black-200 border-t border-white/10 py-12 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
            <span className="text-white font-bold text-[18px] tracking-wide">
              Devi Sri Charan Valupadasu
            </span>
          </div>
          <p className="text-secondary text-[14px] mt-2 max-w-sm">
            Software Engineer specializing in Multi-Agent AI Systems, Production RAG Pipelines, and Scalable Backend Architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px]">
          {navLinks.map((link) => (
            <a
              key={`footer-${link.id}`}
              href={link.id === "resume" ? "#" : link.id}
              onClick={(e) => {
                if (link.id === "resume") {
                  e.preventDefault();
                  if (onResumeClick) onResumeClick();
                }
              }}
              className="text-secondary hover:text-white transition-colors duration-200"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Social / Profiles */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vdevisricharan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-tertiary border border-white/10 flex items-center justify-center text-white hover:border-[#915eff] hover:scale-110 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/vdevisricharan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-tertiary border border-white/10 flex items-center justify-center text-[#0077b5] hover:border-[#915eff] hover:scale-110 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.66 1.64 1.63 1.63 0 0 0 1.66 1.63 1.63 1.63 0 0 0 1.65-1.63A1.64 1.64 0 0 0 7.83 6.2Z" />
            </svg>
          </a>

          <a
            href="mailto:vdevisricharan@gmail.com"
            aria-label="Send Email"
            className="w-10 h-10 rounded-full bg-tertiary border border-white/10 flex items-center justify-center text-emerald-400 hover:border-[#915eff] hover:scale-110 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center text-secondary text-[13px]">
        &copy; 2026 Devi Sri Charan Valupadasu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
