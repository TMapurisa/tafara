import React from 'react';
import { Link } from 'react-router-dom';

const CtaBand = ({
  title = "Let's build something great together",
  subtitle = 'Have a project in mind or an opportunity to discuss? I’d love to hear from you.',
  buttonLabel = 'Get in Touch',
  to = '/contact'
}) => {
  return (
    <section className="bg-bg-secondary py-16 md:py-[100px] px-6">
      <div className="max-w-[820px] mx-auto text-center bg-bg-card border border-accent-border rounded-2xl px-6 sm:px-8 py-10 sm:py-14 reveal reveal-scale">
        <h2 className="font-headings text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] font-bold text-text-primary tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-[1.3rem] sm:text-[1.5rem] text-text-secondary leading-[1.7] max-w-[520px] mx-auto mb-8">
          {subtitle}
        </p>
        <Link
          to={to}
          className="cta text-[1.4rem] sm:text-[1.5rem] font-semibold py-[13px] px-[30px] rounded-lg bg-accent border border-accent hover:bg-accent-hover hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)] text-white inline-flex items-center justify-center gap-2 transition-all duration-300"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
};

export default CtaBand;
