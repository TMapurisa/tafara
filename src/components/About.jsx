import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <section id="about" className="bg-bg-secondary py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Profile Image Column */}
        <div className="w-full md:w-auto flex-shrink-0 flex justify-center reveal">
          <div className="about-img w-[260px] h-[340px] md:w-[300px] md:h-[380px] rounded-xl overflow-hidden border-2 border-border-color relative shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <img src="./img/img-2.jpg" alt="Tafara Mapurisa portrait" />
            <div className="absolute inset-0 rounded-xl border-2 border-accent-border pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text and Tabs Column */}
        <div className="w-full flex-1 reveal">
          <h1 className="font-headings text-[3.4rem] font-bold text-text-primary tracking-tight text-left mb-2">
            About <span className="text-accent">Me</span>
          </h1>
          <h2 className="font-headings text-[1.4rem] font-semibold text-accent uppercase tracking-[0.15em] mb-4">
            Software Engineer
          </h2>
          <p className="text-[1.55rem] text-text-secondary leading-[1.7] mb-4">
            Graduate Software Engineer passionate about crafting elegant, robust solutions. With a degree in Computer Science, I balance logic and creative design to build reliable digital products.
          </p>
          <p className="text-[1.55rem] text-text-secondary leading-[1.7] mb-7">
            I see challenges as opportunities for growth, keeping my skills aligned with emerging technologies. Clear technical communication and strong teamwork are central to my approach.
          </p>

          {/* Tab Button Lists */}
          <div className="tab-titles flex border-bottom border-border-color mt-3 mb-6 overflow-x-auto" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={tab.id}
                className={`tab-links text-[1.45rem] font-medium py-3 px-[18px] relative whitespace-nowrap transition-colors duration-250 border-b-2 mb-[-1px] ${
                  activeTab === tab.id
                    ? 'text-text-primary font-semibold border-b-accent'
                    : 'text-text-muted border-b-transparent hover:text-text-primary'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="tab-container min-h-[220px]">
            {/* Skills Tab Panel */}
            <div 
              id="skills" 
              role="tabpanel" 
              className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`}
            >
              <ul className="list-none">
                <li className="pl-5 relative py-3 border-b border-border-color before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">Software Engineering</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">System analysis, object-oriented design, database architecture, and implementation workflows.</p>
                </li>
                <li className="pl-5 relative py-3 border-b border-border-color before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">Web Development</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">Responsive front-ends, clean layouts, and functional web tools with modern standards.</p>
                </li>
                <li className="pl-5 relative py-3 border-b-0 before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">App Development</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">Native Java development on Android, focusing on performant UI and API integration.</p>
                </li>
              </ul>
            </div>

            {/* Experience Tab Panel */}
            <div 
              id="experience" 
              role="tabpanel" 
              className={`tab-content ${activeTab === 'experience' ? 'active-tab' : ''}`}
            >
              <ul className="list-none">
                <li className="pl-5 relative py-3 border-b-0 before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">IT Intern</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">IHS Towers Zambia</p>
                  <i className="text-[1.3rem] not-italic text-text-muted mt-0.5 block">Dec 2022 – Feb 2023</i>
                </li>
              </ul>
            </div>

            {/* Education Tab Panel */}
            <div 
              id="education" 
              role="tabpanel" 
              className={`tab-content ${activeTab === 'education' ? 'active-tab' : ''}`}
            >
              <ul className="list-none">
                <li className="pl-5 relative py-3 border-b border-border-color before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">B.Sc. Computer Science</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">The University of Zambia</p>
                  <i className="text-[1.3rem] not-italic text-text-muted mt-0.5 block">2020 – 2024</i>
                </li>
                <li className="pl-5 relative py-3 border-b-0 before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">Advanced Level</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">Shungu High School</p>
                  <i className="text-[1.3rem] not-italic text-text-muted mt-0.5 block">2016 – 2017</i>
                </li>
              </ul>
            </div>

            {/* Certifications Tab Panel */}
            <div 
              id="certifications" 
              role="tabpanel" 
              className={`tab-content ${activeTab === 'certifications' ? 'active-tab' : ''}`}
            >
              <ul className="list-none">
                <li className="pl-5 relative py-3 border-b border-border-color before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">CCNA 1</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">CISCO Networking Academy</p>
                </li>
                <li className="pl-5 relative py-3 border-b border-border-color before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">IT Essentials</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">CISCO Networking Academy</p>
                </li>
                <li className="pl-5 relative py-3 border-b border-border-color before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">Linux Unhatched</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">CISCO Networking Academy</p>
                </li>
                <li className="pl-5 relative py-3 border-b-0 before:content-[''] before:absolute before:left-0 before:top-5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
                  <span className="font-headings text-2xl font-semibold text-text-primary block">Computer Operations &amp; Packages</span>
                  <p className="text-[1.4rem] text-text-secondary mt-0.5">HEXCO</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Download Resume Button */}
          <a 
            href="/Tafara_Mapurisa_CV.pdf" 
            className="cta mt-7 text-[1.5rem] font-semibold py-[13px] px-[30px] rounded-lg bg-accent border border-accent hover:bg-accent-hover hover:-translate-y-[2px] text-white inline-flex items-center gap-2 transition-all duration-300"
            download
            id="download-cv-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
