import React from 'react';

// Placeholder Q&A — please review and personalize, especially availability/response time.
const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Web applications, Android apps, and IT consulting work — from small feature builds to full end-to-end systems.'
  },
  {
    q: 'What is your typical response time?',
    a: 'I usually reply within a day or two. For urgent inquiries, mention it in your message and I will prioritize it.'
  },
  {
    q: 'Are you open to full-time roles, or freelance work only?',
    a: 'I am currently a Graduate Trainee Software Engineer at TelOne, but I am open to discussing freelance projects and future full-time opportunities.'
  },
  {
    q: 'Which technologies do you specialize in?',
    a: 'Web development, native Android (Java), database design, and general IT infrastructure and support.'
  }
];

const FaqAccordion = () => {
  return (
    <section className="bg-bg-secondary py-16 md:py-[100px] px-6">
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-headings text-[1.1rem] sm:text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.15em] mb-8 text-center reveal">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              style={{ transitionDelay: `${i * 70}ms` }}
              className="faq-item bg-bg-card border border-border-color rounded-xl px-5 sm:px-6 py-4 reveal"
            >
              <summary className="font-headings text-[1.3rem] sm:text-[1.5rem] font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between gap-4">
                {faq.q}
                <span className="faq-icon flex-shrink-0 text-accent" aria-hidden="true"></span>
              </summary>
              <p className="text-[1.25rem] sm:text-[1.4rem] text-text-secondary leading-[1.65] mt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
