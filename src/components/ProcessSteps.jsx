import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Gather requirements, study the problem domain, and map out system needs before writing a line of code.'
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Plan the architecture, data model, and user experience so the build phase has a clear technical direction.'
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Iterative development with clean, tested code — frequent check-ins so nothing drifts from the plan.'
  },
  {
    number: '04',
    title: 'Ship & Support',
    desc: 'Deploy, monitor, and stay available for fixes and improvements after launch.'
  }
];

const ProcessSteps = () => {
  return (
    <section className="bg-bg-primary py-16 md:py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-10 md:mb-[60px] reveal">
          <h2 className="font-headings text-[1.1rem] sm:text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
            How I Work
          </h2>
          <p className="font-headings text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] font-bold text-text-primary tracking-tight">
            A straightforward process
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} style={{ transitionDelay: `${i * 90}ms` }} className="reveal">
              <span className="process-step-num font-headings text-4xl sm:text-5xl font-bold block mb-4" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="font-headings text-xl sm:text-2xl font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-[1.3rem] sm:text-[1.4rem] text-text-secondary leading-[1.6]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
