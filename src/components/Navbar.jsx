// Navbar.jsx - Improved responsive design
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = ({ onResumeClick }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && !event.target.closest('.mobile-menu-container')) {
        setToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [toggle]);

  const handleLinkClick = (link) => {
    setActive(link.title);
    
    if (link.id === 'resume') {
      // Handle resume modal
      onResumeClick();
    } else if (link.id.startsWith('#')) {
      // Handle hash links
      const element = document.querySelector(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setToggle(false);
  };

  return (
    <nav className={`
      ${styles.paddingX} w-full flex items-center py-3 xs:py-4 sm:py-5 fixed top-0 z-20 
      ${scrolled ? "bg-primary/95 backdrop-blur-sm" : "bg-primary"}
      transition-all duration-300
    `}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <Link
          to="/"
          className='flex items-center gap-1.5 xs:gap-2 hover:scale-105 transition-transform duration-200'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img 
            src={logo} 
            alt="logo" 
            className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 object-contain" 
          />
          <p className='text-white font-bold text-[14px] xs:text-[16px] sm:text-[18px] cursor-pointer'>
            Charan
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden lg:flex flex-row gap-6 xl:gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-secondary"} 
                hover:text-white text-[16px] xl:text-[18px] font-medium cursor-pointer
                transition-colors duration-200 relative group`}
              onClick={() => handleLinkClick(link)}>
              {link.id === 'resume' ? (
                <span className="relative">
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#915eff] group-hover:w-full transition-all duration-300"></span>
                </span>
              ) : link.id.startsWith('#') ? (
                <a href={link.id} className="relative">
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#915eff] group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link to={link.id} className="relative">
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#915eff] group-hover:w-full transition-all duration-300"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex flex-1 justify-end items-center mobile-menu-container'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[24px] h-[24px] xs:w-[26px] xs:h-[26px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer hover:scale-110 transition-transform duration-200' 
            onClick={() => setToggle(!toggle)} 
          />
          
          {/* Mobile Menu Overlay */}
          <div className={`${!toggle ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} 
            fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40`}
            onClick={() => setToggle(false)}
          />
          
          {/* Mobile Menu */}
          <div className={`${!toggle ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} 
            fixed top-0 right-0 w-[280px] xs:w-[320px] sm:w-[360px] h-full
            bg-gradient-to-b from-tertiary via-black-100 to-black-200
            backdrop-blur-md border-l border-white/10
            transform transition-all duration-300 ease-out z-50
            shadow-2xl`}>
            
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 xs:p-5 sm:p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-6 h-6 xs:w-7 xs:h-7 object-contain" />
                <p className='text-white font-bold text-[14px] xs:text-[16px]'>Charan</p>
              </div>
              <img 
                src={close} 
                alt="close" 
                className='w-[20px] h-[20px] xs:w-[22px] xs:h-[22px] object-contain cursor-pointer hover:scale-110 transition-transform duration-200' 
                onClick={() => setToggle(false)} 
              />
            </div>

            {/* Mobile Menu Items */}
            <div className="p-4 xs:p-5 sm:p-6">
              <ul className='list-none flex flex-col gap-3 xs:gap-4'>
                {navLinks.map((link, index) => (
                  <li key={link.id}
                    className={`${active === link.title
                      ? "text-white bg-white/5"
                      : "text-secondary hover:text-white hover:bg-white/5"} 
                      font-medium cursor-pointer text-[14px] xs:text-[15px] sm:text-[16px]
                      px-3 xs:px-4 py-2 xs:py-3 rounded-lg transition-all duration-200
                      border border-transparent hover:border-white/10
                      transform hover:translate-x-1`}
                    onClick={() => handleLinkClick(link)}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: toggle ? 'slideInRight 0.3s ease-out forwards' : 'none'
                    }}>
                    {link.id === 'resume' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#915eff] rounded-full"></span>
                        {link.title}
                      </span>
                    ) : link.id.startsWith('#') ? (
                      <a href={link.id} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#915eff] rounded-full"></span>
                        {link.title}
                      </a>
                    ) : (
                      <Link to={link.id} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#915eff] rounded-full"></span>
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-4 xs:bottom-5 sm:bottom-6 left-4 xs:left-5 sm:left-6 right-4 xs:right-5 sm:right-6">
              <div className="text-center text-secondary text-[12px] xs:text-[13px] border-t border-white/10 pt-4">
                © 2026 Charan. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar;