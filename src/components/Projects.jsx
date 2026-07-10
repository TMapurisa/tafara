import React from 'react';

const Projects = () => {
  const projectData = [
    {
      id: 'panic-button',
      category: 'Android Application',
      title: 'Virtual Panic Button',
      desc: 'An Android safety app providing a rapid-response emergency mechanism. Features live location geofencing, automatic background alerts, and ride-route sharing with emergency contacts.',
      tags: ['Android', 'Java', 'Geofencing', 'Google Maps API'],
      link: 'https://github.com/TMapurisa/PanicButtonTafara',
      img: './img/img-1.png'
    },
    {
      id: 'bank-system',
      category: 'Web Application',
      title: 'Bank Management System',
      desc: 'A comprehensive operations management system for banking processes. Automates transaction logging, account balancing, staff authorizations, and customer profiles tracking.',
      tags: ['HTML / CSS', 'JavaScript', 'Web App', 'SQL Database'],
      link: 'https://github.com/TMapurisa?tab=repositories',
      img: './img/img-1.png'
    }
  ];

  return (
    <section id="projects" className="bg-bg-primary py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-[50px] reveal">
          <h1 className="font-headings text-[3.4rem] md:text-[4rem] font-bold text-text-primary tracking-tight">
            Recent <span className="text-accent">Projects</span>
          </h1>
        </div>

        <div className="flex flex-col gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col md:flex-row md:even:flex-row-reverse bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-border-hover hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] transition-all duration-300 ease-custom md:min-h-[360px] reveal"
              id={`project-${project.id}`}
            >
              {/* Project Info Column */}
              <div className="flex-1.3 p-8 md:p-10 flex flex-col justify-center">
                <h1 className="font-headings text-[1.2rem] font-bold uppercase tracking-[0.12em] text-accent mb-2">
                  {project.category}
                </h1>
                <h2 className="font-headings text-2.4xl font-bold text-text-primary tracking-tight mb-[14px]">
                  {project.title}
                </h2>
                <p className="text-[1.5rem] text-text-secondary leading-[1.65] mb-[18px]">
                  {project.desc}
                </p>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-[22px]">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[1.2rem] font-medium text-text-primary bg-white/4 border border-border-color px-3 py-1 rounded-[6px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Link */}
                <div className="flex">
                  <a 
                    href={project.link} 
                    className="project-link inline-flex items-center gap-[6px] text-[1.4rem] font-medium text-text-primary hover:text-accent transition-colors duration-200"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>

              {/* Project Image Column */}
              <div className="flex-1 h-[220px] md:h-auto md:min-h-[360px] overflow-hidden group">
                <img 
                  src={project.img} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-custom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
