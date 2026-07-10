import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Map input fields to form state keys
    const fieldMap = {
      'form-name': 'name',
      'form-email': 'email',
      'form-message': 'message'
    };
    
    setFormData((prev) => ({
      ...prev,
      [fieldMap[id]]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus(`Thank you, ${formData.name}! Your message has been sent successfully.`);
      
      // Clear input fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Auto fade-out status message after 6 seconds
      setTimeout(() => {
        setStatus('');
      }, 6000);
    }, 1200);
  };

  const contactDetails = [
    {
      id: 'phone',
      label: 'Phone',
      value: '+263 77 948 7751',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      id: 'email',
      label: 'Email',
      value: 'tafaramapurisa31@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      id: 'address',
      label: 'Address',
      value: '19981 Mhizha Street, Rujeko C, Masvingo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="bg-bg-primary py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="font-headings text-[3.4rem] md:text-[4rem] font-bold text-text-primary tracking-tight text-center reveal">
          Get in <span className="text-accent">Touch</span>
        </h1>

        <div className="contact-layout flex flex-col md:flex-row gap-8 mt-12">
          {/* Contact Information Cards */}
          <div className="contact-info-column flex flex-col gap-4 flex-1 reveal">
            {contactDetails.map((detail) => (
              <div 
                key={detail.id} 
                className="contact-item flex items-center gap-5 bg-bg-card border border-border-color rounded-xl p-6 hover:border-border-hover hover:bg-bg-card-hover transition-all duration-250"
                id={`contact-${detail.id}`}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-accent-subtle border border-accent-border rounded-lg text-accent" aria-hidden="true">
                  {detail.icon}
                </div>
                <div className="contact-info">
                  <h1 className="font-headings text-[1.2rem] font-semibold text-text-muted uppercase tracking-[0.1em] mb-0.5">
                    {detail.label}
                  </h1>
                  <h2 className="text-[1.55rem] font-medium text-text-primary">
                    {detail.value}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Input Form */}
          <div className="contact-form-column flex-1.2 reveal">
            <form onSubmit={handleFormSubmit} className="contact-form bg-bg-card border border-border-color rounded-xl p-8 flex flex-col gap-5">
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="form-name" className="font-headings text-[1.35rem] font-semibold text-text-primary">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="form-name" 
                  className="form-control bg-white/3 border border-border-color rounded-lg p-[13px_16px] text-text-primary font-body text-[1.5rem] placeholder-text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] transition-all duration-250"
                  placeholder="Your full name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group flex flex-col gap-2">
                <label htmlFor="form-email" className="font-headings text-[1.35rem] font-semibold text-text-primary">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="form-email" 
                  className="form-control bg-white/3 border border-border-color rounded-lg p-[13px_16px] text-text-primary font-body text-[1.5rem] placeholder-text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] transition-all duration-250"
                  placeholder="Your email address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group flex flex-col gap-2">
                <label htmlFor="form-message" className="font-headings text-[1.35rem] font-semibold text-text-primary">
                  Message
                </label>
                <textarea 
                  id="form-message" 
                  className="form-control bg-white/3 border border-border-color rounded-lg p-[13px_16px] text-text-primary font-body text-[1.5rem] placeholder-text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] transition-all duration-250 resize-y min-h-[130px]"
                  placeholder="How can I help you?" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="cta text-[1.5rem] font-semibold py-[13px] px-[30px] rounded-lg bg-accent border border-accent hover:bg-accent-hover hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)] text-white inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>

              {status && (
                <div className="form-feedback success bg-green-500/8 border border-green-500/20 text-[#22c55e] p-[14px_18px] rounded-lg text-[1.4rem] font-semibold">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
