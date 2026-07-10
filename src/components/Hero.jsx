import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const roles = ["Software Engineer", "Android App Developer", "Web Developer", "IT Consultant"];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timeoutId;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 40; // Speed up deletion for better UX
      } else {
        setRoleText(currentRole.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 80;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1800; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400; // Small delay before next word starts typing
      }

      timeoutId = setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-height-[100vh] min-h-screen flex items-center bg-[url(/img/hero-bg.jpg)] bg-center bg-cover bg-no-repeat relative overflow-hidden"
    >
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-bg-primary/82 z-1"></div>

      <div className="relative z-10 max-w-[1140px] w-full mx-auto px-6 py-[120px]">
        <div className="max-w-[700px]">
          <p className="font-headings text-[1.4rem] font-semibold text-accent uppercase tracking-[0.2em] mb-4 reveal">
            Welcome to my portfolio
          </p>
          <h1 className="font-headings text-5.2xl md:text-[6.4rem] font-bold text-text-primary tracking-tighter leading-[1.15] mb-3 reveal">
            Tafara Mapurisa
          </h1>
          <div className="font-headings text-2.2xl md:text-[2.6rem] font-medium text-text-secondary mb-6 h-9 md:h-11 flex items-center reveal">
            <span>{roleText}</span>
            <span className="typing-cursor w-[2px] h-[26px] md:h-[30px] bg-accent ml-1"></span>
          </div>
          <p className="text-[1.7rem] text-text-secondary max-w-[580px] leading-[1.7] mb-9 reveal">
            Graduate Software Engineer driven by a passion for solving complex technical problems and building reliable, user-centric solutions. I specialize in web technologies, mobile application development, and systems engineering.
          </p>
          <div className="flex gap-4 flex-wrap reveal">
            <a href="#projects" className="cta text-[1.5rem] font-semibold py-[13px] px-[30px] rounded-lg bg-accent border border-accent hover:bg-accent-hover hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)] text-white inline-flex items-center justify-center gap-2 transition-all duration-300">
              Explore Projects
            </a>
            <a href="#contact" className="cta cta-outline text-[1.5rem] font-semibold py-[13px] px-[30px] rounded-lg border border-white/15 text-text-primary bg-transparent hover:bg-white/4 hover:border-white/25 hover:-translate-y-[2px] inline-flex items-center justify-center gap-2 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
