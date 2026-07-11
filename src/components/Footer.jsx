import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-bg-secondary border-t border-border-color">
      <div className="footer max-w-[1140px] mx-auto flex flex-col items-center text-center py-12 px-6 gap-3">
        <div className="brand font-headings text-2xl font-bold text-text-primary">
          <h1><Link to="/"><span>T</span>afara <span>M</span>apurisa</Link></h1>
        </div>
        <h2 className="font-headings text-[1.3rem] font-semibold text-text-muted uppercase tracking-[0.12em]">
          Graduate Trainee Software Engineer
        </h2>
        
        {/* Social Icons */}
        <div className="social-icons flex gap-4 my-2">
          <a 
            href="https://github.com/TMapurisa" 
            className="social-icon-link text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-200" 
            aria-label="GitHub" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            className="social-icon-link text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-200" 
            aria-label="LinkedIn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href="mailto:tafaramapurisa31@gmail.com" 
            className="social-icon-link text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-200" 
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <p className="text-text-muted text-[1.3rem] mt-2">
          &copy; {currentYear} Tafara Mapurisa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
