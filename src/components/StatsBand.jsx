import React from 'react';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '4', label: 'Certifications' },
  { value: '2', label: 'Projects Shipped' },
  { value: 'MSc', label: 'In Progress' }
];

const StatsBand = () => {
  return (
    <section className="bg-bg-primary border-y border-border-color py-8 sm:py-10 px-6">
      <div className="max-w-[1140px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:divide-x sm:divide-border-color">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{ transitionDelay: `${i * 80}ms` }}
            className="reveal reveal-scale text-center px-4"
          >
            <span className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary block mb-1">
              {stat.value}
            </span>
            <span className="text-[1rem] sm:text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.1em]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBand;
