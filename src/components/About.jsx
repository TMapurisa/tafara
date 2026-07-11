import React from 'react';

const skills = [
  {
    title: 'Software Engineering',
    desc: 'System analysis, object-oriented design, database architecture, and implementation workflows.'
  },
  {
    title: 'Web Development',
    desc: 'Responsive front-ends, clean layouts, and functional web tools with modern standards.'
  },
  {
    title: 'App Development',
    desc: 'Native Java development on Android, focusing on performant UI and API integration.'
  }
];

const timeline = [
  { year: 'Feb 2026 – Present', title: 'MSc Computer Science', place: 'University of Zimbabwe', current: true },
  { year: 'Jan 2025 – Present', title: 'Graduate Trainee Software Engineer', place: 'TelOne', current: true },
  { year: 'Dec 2022 – Feb 2023', title: 'IT Intern', place: 'IHS Towers Zambia' },
  { year: '2020 – 2024', title: 'B.Sc. Computer Science', place: 'The University of Zambia' },
  { year: '2016 – 2017', title: 'Advanced Level', place: 'Shungu High School' }
];

const certifications = [
  { title: 'CCNA 1', issuer: 'CISCO Networking Academy' },
  { title: 'IT Essentials', issuer: 'CISCO Networking Academy' },
  { title: 'Linux Unhatched', issuer: 'CISCO Networking Academy' },
  { title: 'Computer Operations & Packages', issuer: 'HEXCO' }
];

const About = () => {
  return (
    <section id="about" className="bg-bg-secondary py-16 md:py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">

        {/* Profile Image Column */}
        <div className="w-full md:w-auto flex-shrink-0 flex justify-center reveal">
          <div className="about-img w-[220px] h-[290px] sm:w-[260px] sm:h-[340px] md:w-[300px] md:h-[380px] rounded-xl overflow-hidden border-2 border-border-color relative shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <img src="./img/img-2.jpg" alt="Tafara Mapurisa portrait" />
            <div className="absolute inset-0 rounded-xl border-2 border-accent-border pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full flex-1 reveal">
          <h2 className="font-headings text-[2.4rem] sm:text-[3.4rem] font-bold text-text-primary tracking-tight text-left mb-2">
            About <span className="text-accent">Me</span>
          </h2>
          <h3 className="font-headings text-[1.2rem] sm:text-[1.4rem] font-semibold text-accent uppercase tracking-[0.15em] mb-4">
            Graduate Trainee Software Engineer
          </h3>
          <p className="text-[1.3rem] sm:text-[1.55rem] text-text-secondary leading-[1.7] mb-4">
            Graduate Trainee Software Engineer at TelOne, currently pursuing an MSc in Computer Science at the University of Zimbabwe. I balance logic and creative design to build reliable digital products.
          </p>
          <p className="text-[1.3rem] sm:text-[1.55rem] text-text-secondary leading-[1.7] mb-10">
            I see challenges as opportunities for growth, keeping my skills aligned with emerging technologies. Clear technical communication and strong teamwork are central to my approach.
          </p>

          {/* Skills */}
          <h4 className="font-headings text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
            What I Do
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-5 mb-10 sm:divide-x sm:divide-border-color">
            {skills.map((skill, i) => (
              <div
                key={skill.title}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="sm:pl-8 sm:first:pl-0 reveal"
              >
                <span className="font-headings text-2xl font-semibold text-text-primary block mb-1">{skill.title}</span>
                <p className="text-[1.2rem] sm:text-[1.35rem] text-text-secondary leading-[1.6]">{skill.desc}</p>
              </div>
            ))}
          </div>

          {/* Experience & Education Timeline */}
          <h4 className="font-headings text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
            Experience &amp; Education
          </h4>
          <ol className="mb-10">
            {timeline.map((entry, i) => (
              <li
                key={entry.title}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`timeline-rail relative pl-7 reveal ${i !== timeline.length - 1 ? 'pb-6' : ''}`}
              >
                <span className={`timeline-dot ${entry.current ? 'timeline-dot-current' : ''}`} aria-hidden="true"></span>
                <span className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.1em] block mb-0.5">{entry.year}</span>
                <span className="font-headings text-[1.3rem] sm:text-2xl font-semibold text-text-primary block">{entry.title}</span>
                <p className="text-[1.2rem] sm:text-[1.35rem] text-text-secondary mt-0.5">{entry.place}</p>
              </li>
            ))}
          </ol>

          {/* Certifications */}
          <h4 className="font-headings text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
            Certifications
          </h4>
          <div className="flex flex-wrap gap-3 mb-10">
            {certifications.map((cert) => (
              <span
                key={cert.title}
                title={cert.issuer}
                className="tag-pill text-[1.3rem] font-medium text-text-secondary rounded-full px-4 py-2"
              >
                {cert.title}
              </span>
            ))}
          </div>

          {/* Download Resume Button */}
          <a
            href="/Tafara_Mapurisa_CV.pdf"
            className="cta text-[1.4rem] sm:text-[1.5rem] font-semibold py-[13px] px-[30px] rounded-lg bg-accent border border-accent hover:bg-accent-hover hover:-translate-y-[2px] text-white inline-flex items-center gap-2 transition-all duration-300"
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
