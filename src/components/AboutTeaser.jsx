import React from 'react';
import { Link } from 'react-router-dom';

const AboutTeaser = () => {
  return (
    <section className="bg-bg-primary py-16 md:py-[100px] px-6">
      <div className="max-w-[760px] mx-auto text-center reveal">
        <h2 className="font-headings text-[1.1rem] sm:text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.15em] mb-5">
          About Me
        </h2>
        <p className="font-headings text-[1.7rem] sm:text-[2.2rem] md:text-[2.6rem] font-semibold text-text-primary leading-[1.35] mb-7">
          Graduate Trainee Software Engineer at TelOne, currently pursuing an MSc in Computer Science while building reliable, user-centric software.
        </p>
        <Link
          to="/about"
          className="font-headings text-[1.4rem] font-semibold text-accent hover:text-accent-hover transition-colors duration-200 inline-flex items-center gap-2"
        >
          Learn more about me
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default AboutTeaser;
