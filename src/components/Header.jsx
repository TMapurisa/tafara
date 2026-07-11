import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-secondary/85 border-b border-border-color backdrop-blur-xl h-[60px]'
          : 'bg-transparent border-b border-transparent h-[72px]'
      }`}
    >
      <div className="h-full flex items-center justify-between max-w-[1140px] mx-auto px-6">
        {/* Brand/Logo */}
        <div className="font-headings text-2xl font-bold text-text-primary tracking-tight">
          <Link to="/">
            <span className="text-accent">T</span>afara <span className="text-accent">M</span>apurisa
          </Link>
        </div>

        {/* Navigation List */}
        <nav className="relative flex items-center">
          {/* Hamburger Menu Icon */}
          <button
            className="hamburger flex items-center justify-center w-[42px] h-[42px] border border-border-color rounded-lg cursor-pointer hover:border-border-hover transition-all duration-300 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`w-[20px] h-[2px] bg-text-primary relative transition-all duration-300 ${isMenuOpen ? 'bg-transparent' : ''}`}>
              <div className={`absolute left-0 w-full h-full bg-text-primary transition-all duration-300 ${isMenuOpen ? 'bottom-0 rotate-45' : 'bottom-[6px]'}`}></div>
              <div className={`absolute left-0 w-full h-full bg-text-primary transition-all duration-300 ${isMenuOpen ? 'top-0 -rotate-45' : 'top-[6px]'}`}></div>
            </div>
          </button>

          {/* Nav Links Menu */}
          <ul
            className={`fixed lg:static inset-0 lg:inset-auto bg-bg-primary lg:bg-transparent flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-0 z-40 transition-transform duration-500 ease-custom ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
            }`}
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) => `font-headings text-[1.8rem] lg:text-[1.5rem] font-semibold lg:font-medium px-5 lg:px-4 py-3 lg:py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-accent lg:text-accent'
                      : 'text-text-primary lg:text-text-secondary hover:text-accent lg:hover:text-text-primary lg:hover:bg-black/[0.03]'
                  }`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
