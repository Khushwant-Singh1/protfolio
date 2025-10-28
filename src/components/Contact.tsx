'use client';

import { useState } from 'react';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import { ZodError } from 'zod';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrors({});

    try {
      // Validate form data with Zod on the frontend
      const validatedData = contactFormSchema.parse(formData);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        // Handle backend validation errors
        if (data.errors) {
          const errorMap: Record<string, string> = {};
          data.errors.forEach((err: { field: string; message: string }) => {
            errorMap[err.field] = err.message;
          });
          setErrors(errorMap);
        }
      }
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle frontend validation errors
        const errorMap: Record<string, string> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as string;
          errorMap[field] = issue.message;
        });
        setErrors(errorMap);
        setSubmitStatus('error');
      } else {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative z-10" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="contact-heading" className="font-marker text-5xl md:text-7xl text-center mb-8 transform rotate-1">
          The <span className="highlight-pink">Note-to-Self</span>
        </h2>

        {/* Sticky note style form */}
        <div className="sticky-note max-w-2xl mx-auto">
          <div className="mb-6 text-center">
            <p className="font-handwritten text-3xl mb-2">
              Don&apos;t write this down on a sticky note...
            </p>
            <p className="font-marker text-4xl" style={{ color: '#D84880' }}>
              Let&apos;s Automate It!
            </p>
            
            {/* Doodle underline */}
            <svg className="w-64 h-8 mx-auto" viewBox="0 0 200 20">
              <path 
                d="M5,10 Q50,15 100,10 T195,10" 
                fill="none" 
                stroke="#C4DB5D" 
                strokeWidth="4"
                opacity="0.6"
              />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8" aria-label="Contact form">
            {/* Name field */}
            <div className="relative">
              <label htmlFor="contact-name" className="font-sketch text-2xl block mb-2">
                Your Name:
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                className={`w-full p-4 border-3 font-handwritten text-xl bg-white focus:outline-none focus:ring-4 focus:ring-lime-green/30 ${
                  errors.name ? 'border-red-500' : 'border-black'
                }`}
                style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
                placeholder="John Doe"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-red-600 font-handwritten text-lg" role="alert">
                  ⚠️ {errors.name}
                </p>
              )}
              {/* Small doodle */}
              <svg className="absolute -right-8 top-0 w-12 h-12" viewBox="0 0 50 50" aria-hidden="true">
                <path d="M10,25 L20,15 L30,25 L40,15" fill="none" stroke="#D84880" strokeWidth="2"/>
              </svg>
            </div>

            {/* Email field */}
            <div className="relative">
              <label htmlFor="contact-email" className="font-sketch text-2xl block mb-2">
                Email Address:
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full p-4 border-3 font-handwritten text-xl bg-white focus:outline-none focus:ring-4 focus:ring-lime-green/30 ${
                  errors.email ? 'border-red-500' : 'border-black'
                }`}
                style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
                placeholder="john@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-red-600 font-handwritten text-lg" role="alert">
                  ⚠️ {errors.email}
                </p>
              )}
            </div>

            {/* Message field */}
            <div className="relative">
              <label htmlFor="contact-message" className="font-sketch text-2xl block mb-2">
                What do you want to build?
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                rows={5}
                className={`w-full p-4 border-3 font-handwritten text-xl bg-white focus:outline-none focus:ring-4 focus:ring-lime-green/30 resize-none ${
                  errors.message ? 'border-red-500' : 'border-black'
                }`}
                style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
                placeholder="I need help with..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-red-600 font-handwritten text-lg" role="alert">
                  ⚠️ {errors.message}
                </p>
              )}
              {/* Arrow pointing to submit */}
              <svg className="absolute -bottom-12 right-0 w-24 h-24" viewBox="0 0 100 100" aria-hidden="true">
                <path 
                  d="M10,10 Q40,30 60,60" 
                  fill="none" 
                  stroke="#C4DB5D" 
                  strokeWidth="3"
                />
                <path d="M55,55 L60,60 L55,65" fill="none" stroke="#C4DB5D" strokeWidth="3"/>
                <text x="5" y="20" className="font-marker text-xs" fill="#C4DB5D">
                  Click!
                </text>
              </svg>
            </div>

            {/* Submit button */}
            <div className="pt-8 text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending message..." : "Send message"}
                className="doodle-btn text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending... ✈️' : 'Send It! 🚀'}
              </button>
              
              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg" role="alert" aria-live="polite">
                  <p className="font-handwritten text-xl text-green-700">
                    ✅ Message sent successfully! I&apos;ll get back to you soon!
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 rounded-lg" role="alert" aria-live="assertive">
                  <p className="font-handwritten text-xl text-red-700">
                    ❌ Oops! Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}
            </div>
          </form>

          {/* Bottom note */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-400">
            <p className="font-handwritten text-xl text-center">
              Response time: <span className="highlight-pink font-bold">Usually within 24hrs</span>
            </p>
          </div>
        </div>

        {/* Alternative contact methods */}
        <nav aria-label="Social media and contact links" className="mt-16 flex flex-wrap justify-center gap-8">
          {/* GitHub */}
          <a
            href="https://github.com/Khushwant-Singh1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile (opens in new tab)"
            className="sketch-border bg-white p-6 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-pointer"
          >
            <FaGithub className="w-16 h-16 mx-auto mb-3 text-black" />
            <p className="font-sketch text-xl text-center">
              GitHub
            </p>
            <p className="font-handwritten text-lg text-center mt-2">
              @Khushwant-Singh1
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/khushwant-singh-68249a335/"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-border bg-white p-6 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-pointer"
          >
            <FaLinkedin className="w-16 h-16 mx-auto mb-3 text-[#0077B5]" />
            <p className="font-sketch text-xl text-center">
              LinkedIn
            </p>
            <p className="font-handwritten text-lg text-center mt-2">
              /in/khushwant-singh-68249a335
            </p>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/Khushwant_248"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-border bg-white p-6 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all cursor-pointer"
          >
            <BsTwitterX className="w-16 h-16 mx-auto mb-3 text-black" />
            <p className="font-sketch text-xl text-center">
              X (Twitter)
            </p>
            <p className="font-handwritten text-lg text-center mt-2">
              @Khushwant_248
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:khushwantzx@gmail.com"
            className="sketch-border bg-white p-6 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all cursor-pointer"
          >
            <FaEnvelope className="w-16 h-16 mx-auto mb-3 text-[#D84880]" />
            <p className="font-sketch text-xl text-center">
              Email
            </p>
            <p className="font-handwritten text-lg text-center mt-2">
              khushwantzx@gmail.com
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/khushwant1358/"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-border bg-white p-6 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-pointer"
          >
            <FaInstagram className="w-16 h-16 mx-auto mb-3 text-[#E4405F]" />
            <p className="font-sketch text-xl text-center">
              Instagram
            </p>
            <p className="font-handwritten text-lg text-center mt-2">
              @khushwant1358
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCqR_68OImLRhC_KpLh_AIGg"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-border bg-white p-6 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-pointer"
          >
            <FaYoutube className="w-16 h-16 mx-auto mb-3 text-[#FF0000]" />
            <p className="font-sketch text-xl text-center">
              YouTube
            </p>
            <p className="font-handwritten text-lg text-center mt-2">
              Khushwant Singh
            </p>
          </a>
        </nav>

        {/* Final doodle */}
        <div className="mt-16 text-center">
          <svg className="w-64 h-32 mx-auto" viewBox="0 0 300 100" aria-hidden="true">
            <path 
              d="M20,50 Q80,20 150,50 T280,50" 
              fill="none" 
              stroke="#000" 
              strokeWidth="2"
            />
            <text x="90" y="80" className="font-marker text-lg" fill="#D84880">
              Let&apos;s build something amazing!
            </text>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center pb-10">
        <p className="font-handwritten text-2xl mb-4">
          Made with ❤️ and lots of doodles
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="font-sketch">© 2025 Khush</span>
          <span>•</span>
          <span className="font-sketch">All rights reserved</span>
          <span>•</span>
          <span className="font-sketch sketch-underline">No AI was harmed in making this</span>
        </div>
      </footer>
    </section>
  );
}
