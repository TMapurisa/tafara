import React from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    id: 'panic-button',
    category: 'Android Application',
    title: 'Virtual Panic Button',
    img: './img/img-1.png'
  },
  {
    id: 'bank-system',
    category: 'Web Application',
    title: 'Bank Management System',
    img: './img/img-1.png'
  }
];

const WorkTeaser = () => {
  return (
    <section className="bg-bg-secondary py-16 md:py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-10 reveal">
          <h2 className="font-headings text-[2rem] sm:text-[2.4rem] md:text-[3rem] font-bold text-text-primary tracking-tight">
            Featured <span className="text-accent">Work</span>
          </h2>
          <Link
            to="/work"
            className="hidden sm:inline-flex items-center gap-2 font-headings text-[1.4rem] font-semibold text-accent hover:text-accent-hover transition-colors duration-200"
          >
            See all work
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <Link
              key={item.id}
              to="/work"
              className="group block bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-border-hover hover:shadow-[0_16px_48px_rgba(15,23,42,0.1)] transition-all duration-300 ease-custom reveal"
            >
              <div className="h-[180px] sm:h-[200px] overflow-hidden">
                <img
                  src={item.img}
                  alt={`${item.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-custom"
                />
              </div>
              <div className="p-5 sm:p-6">
                <span className="font-headings text-[1rem] sm:text-[1.1rem] font-bold uppercase tracking-[0.12em] text-accent block mb-1">
                  {item.category}
                </span>
                <span className="font-headings text-[1.4rem] sm:text-2xl font-semibold text-text-primary block">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden reveal">
          <Link to="/work" className="font-headings text-[1.4rem] font-semibold text-accent">
            See all work →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkTeaser;
