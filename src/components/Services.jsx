import React from 'react';

const Services = () => {
  const serviceData = [
    {
      id: 'web',
      title: 'Web Development',
      desc: 'Responsive, standards-compliant, high-performance websites and web applications tailored for speed and clarity.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 'app',
      title: 'App Development',
      desc: 'Native Android mobile applications. Full lifecycle from UX architecture to Play Store deployment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      desc: 'Data-driven guidance for businesses auditing IT infrastructure, automating workflows, and designing scalable strategies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 'support',
      title: 'Tech Support',
      desc: 'Ongoing technical troubleshooting, maintenance, code quality updates, bug patches, and security audits.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="bg-bg-secondary py-16 md:py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-10 md:mb-[50px] reveal">
          <h1 className="font-headings text-[2.4rem] sm:text-[3.4rem] md:text-[4rem] font-bold text-text-primary tracking-tight mb-4">
            My <span className="text-accent">Services</span>
          </h1>
          <p className="text-base text-text-secondary max-w-[560px] mx-auto leading-[1.7]">
            Robust software design, web solutions, and mobile apps engineered for reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="bg-bg-card border border-border-color rounded-xl p-[28px_24px] sm:p-[32px_28px] hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_16px_48px_rgba(15,23,42,0.1)] transition-all duration-300 ease-custom reveal"
              id={`service-${service.id}`}
            >
              <div className="w-[52px] h-[52px] flex items-center justify-center bg-accent-subtle border border-accent-border rounded-lg text-accent mb-5" aria-hidden="true">
                {service.icon}
              </div>
              <h2 className="font-headings text-[1.7rem] sm:text-[1.9rem] font-semibold text-text-primary mb-3">
                {service.title}
              </h2>
              <p className="text-[1.35rem] sm:text-[1.5rem] text-text-secondary leading-[1.65]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
