import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ onResumeClick, nightPatrol = false, onToggleNightPatrol }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll position, HUD backdrop, and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 24);

      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver on home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = ["hero", "about", "projects", "experience", "skills", "achievements", "resume-dossier", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id === "hero") setActive("Home");
          else if (id === "about") setActive("About");
          else if (id === "projects") setActive("Projects");
          else if (id === "experience") setActive("Experience");
          else if (id === "skills") setActive("Skills");
          else if (id === "achievements" || id === "resume-dossier") setActive("Achievements");
          else if (id === "contact") setActive("Contact");
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Close mobile drawer on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && toggle) {
        setToggle(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActive(link.title);
    setToggle(false);

    const targetId = link.id.replace("#", "");
    if (location.pathname !== "/") {
      navigate(`/${link.id}`);
      return;
    }

    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`${styles.paddingX} w-full fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-[#08060F]/90 backdrop-blur-md border-b border-[#9B4DFF]/25 shadow-[0_8px_32px_rgba(8,6,15,0.85)]"
          : "py-4 bg-gradient-to-b from-[#08060F]/95 via-[#08060F]/70 to-transparent"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4"
      >
        {/* Brand Identity */}
        <Link
          to="/"
          onClick={() => {
            setActive("Home");
            setToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#171126] border border-[#9B4DFF]/40 group-hover:border-[#FF304F] transition-colors">
            <img
              src={logo}
              alt="Devi Sri Charan Logo"
              className="w-6 h-6 object-contain"
            />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF304F]"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-[18px] sm:text-[20px] tracking-[0.06em] uppercase text-[#F7F5FF] leading-none group-hover:text-[#C4A2FF] transition-colors">
              CHARAN
            </span>
            <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#BDB4CC]">
              DEV // VERSE
            </span>
          </div>
        </Link>

        {/* Desktop HUD Navigation Links */}
        <ul className="list-none hidden lg:flex items-center gap-1 xl:gap-2 bg-[#171126]/80 border border-[#9B4DFF]/20 rounded-lg px-2 py-1">
          {navLinks.map((link) => {
            const isActive = active === link.title;
            return (
              <li key={link.id}>
                <a
                  href={link.id}
                  onClick={(e) => handleNavClick(e, link)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-1.5 rounded-md font-mono text-[12px] xl:text-[13px] uppercase tracking-[0.1em] transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#F7F5FF] bg-[#9B4DFF]/20 border border-[#9B4DFF]/50 shadow-[0_0_12px_rgba(155,77,255,0.25)]"
                      : "text-[#BDB4CC] hover:text-[#F7F5FF] hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#FF304F]"
                      aria-hidden="true"
                    />
                  )}
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right HUD Controls: Night Patrol Easter Egg + Persistent Resume CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {onToggleNightPatrol && (
            <button
              type="button"
              onClick={onToggleNightPatrol}
              aria-pressed={nightPatrol}
              title={
                nightPatrol
                  ? "Exit Night Patrol Mode (Standard Atmosphere)"
                  : "Activate Night Patrol Mode (Enhanced Neon Skyline)"
              }
              className={`px-2.5 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-[0.12em] border transition-all flex items-center gap-1.5 cursor-pointer ${
                nightPatrol
                  ? "bg-[#FF304F]/15 border-[#FF304F] text-[#F7F5FF] shadow-[0_0_15px_rgba(255,48,79,0.35)]"
                  : "bg-[#171126]/80 border-[#9B4DFF]/25 text-[#BDB4CC] hover:text-[#F7F5FF] hover:border-[#9B4DFF]/60"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  nightPatrol ? "bg-[#FF304F] animate-pulse" : "bg-[#9B4DFF]"
                }`}
                aria-hidden="true"
              />
              <span>{nightPatrol ? "Patrol: ON" : "Night Patrol"}</span>
            </button>
          )}

          <button
            type="button"
            onClick={onResumeClick}
            className="spider-sense-btn px-4 py-2 rounded-md bg-[#FF304F] hover:bg-[#e02442] text-[#F7F5FF] font-mono text-[12px] font-semibold uppercase tracking-[0.12em] transition-all shadow-[0_0_20px_rgba(255,48,79,0.35)] flex items-center gap-2 cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile / Tablet Quick Actions & Hamburger */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            type="button"
            onClick={onResumeClick}
            className="px-3 py-1.5 rounded-md bg-[#FF304F] text-[#F7F5FF] font-mono text-[11px] font-semibold uppercase tracking-[0.1em]"
          >
            Resume
          </button>

          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle}
            aria-controls="mobile-hud-drawer"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            className="w-10 h-10 rounded-md bg-[#171126] border border-[#9B4DFF]/35 flex items-center justify-center text-[#F7F5FF] hover:border-[#9B4DFF]"
          >
            {toggle ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Subtle Web-Strand Scroll Progress Indicator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#171126] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#9B4DFF] via-[#C4A2FF] to-[#FF304F] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Navigation Backdrop */}
      {toggle && (
        <div
          className="fixed inset-0 top-[57px] bg-[#08060F]/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setToggle(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile HUD Drawer */}
      <div
        id="mobile-hud-drawer"
        className={`fixed top-[57px] right-0 w-[290px] sm:w-[330px] h-[calc(100vh-57px)] bg-[#08060F] border-l border-[#9B4DFF]/30 z-50 lg:hidden transform transition-transform duration-300 ease-out flex flex-col justify-between p-6 ${
          toggle ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#9B4DFF]/20">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9B4DFF]">
              HUD // NAVIGATION
            </span>
            <span className="font-mono text-[11px] text-[#BDB4CC]">01—08</span>
          </div>

          <ul className="list-none flex flex-col gap-1.5">
            {navLinks.map((link, idx) => {
              const isActive = active === link.title;
              return (
                <li key={link.id}>
                  <a
                    href={link.id}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`w-full px-3.5 py-2.5 rounded-md font-mono text-[13px] uppercase tracking-[0.12em] flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-[#9B4DFF]/20 text-[#F7F5FF] border border-[#9B4DFF]/50"
                        : "text-[#BDB4CC] hover:text-[#F7F5FF] hover:bg-[#171126]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-[10px] text-[#9B4DFF]">0{idx + 1}</span>
                      <span>{link.title}</span>
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#FF304F]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {onToggleNightPatrol && (
            <div className="mt-6 pt-4 border-t border-[#9B4DFF]/20">
              <button
                type="button"
                onClick={onToggleNightPatrol}
                aria-pressed={nightPatrol}
                className={`w-full px-3.5 py-2.5 rounded-md font-mono text-[12px] uppercase tracking-[0.12em] border flex items-center justify-between ${
                  nightPatrol
                    ? "bg-[#FF304F]/15 border-[#FF304F] text-[#F7F5FF]"
                    : "bg-[#171126] border-[#9B4DFF]/30 text-[#BDB4CC]"
                }`}
              >
                <span>Night Patrol Mode</span>
                <span className={nightPatrol ? "text-[#FF304F] font-bold" : "text-[#9B4DFF]"}>
                  {nightPatrol ? "ACTIVE" : "OFF"}
                </span>
              </button>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-[#9B4DFF]/20 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              setToggle(false);
              onResumeClick();
            }}
            className="w-full py-2.5 rounded-md bg-[#FF304F] text-[#F7F5FF] font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-center"
          >
            View Interactive Resume
          </button>
          <p className="font-mono text-[10px] text-center text-[#BDB4CC]/70 uppercase tracking-[0.12em]">
            CHARAN // FRIENDLY NEIGHBOURHOOD DEV
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;