import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActive(link.title);
    if (link.id.startsWith('#')) {
      // Handle hash links
      const element = document.querySelector(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle regular route links
      navigate(link.id);
    }
    setToggle(false);
  };

  return (
    <nav className={`
      ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    `}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white font-bold text-[18px] cursor-pointer'>Charan</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleLinkClick(link)}>
              {link.id.startsWith('#') ? (
                <a href={link.id}>{link.title}</a>
              ) : (
                <Link to={link.id}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28] h-[28] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title
                    ? "text-white"
                    : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => handleLinkClick(link)}>
                  {link.id.startsWith('#') ? (
                    <a href={link.id}>{link.title}</a>
                  ) : (
                    <Link to={link.id}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar