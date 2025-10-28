"use client";
import Image from 'next/image';
import { memo, useCallback } from 'react';

function Hero() {
  const scrollToAbout = useCallback(() => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section 
      className="py-20 px-4 text-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 
            id="hero-heading"
            className="font-sketch-title text-6xl md:text-8xl mb-6 transform -rotate-2"
          >
            Hey, I&apos;m <span className="highlight-pink">Khushwant Singh</span>!
          </h1>
          <p className="font-sketch-body text-2xl md:text-3xl leading-relaxed">
            Just a guy <span className="highlight-green">building cool stuffs</span>
            <br />
            <span className="highlight-pink">on the internet</span> ✨
          </p>
        </div>

        {/* Wizard illustration */}
        <div className="relative mb-12">
          <div className="sketch-border p-6 inline-flex items-center gap-6 bg-white scribble-animate">
                <Image
                  src="https://res.cloudinary.com/dj7ey49h9/image/upload/v1761658810/Gemini_Generated_Image_tyyst2tyyst2tyys_xhirj7.png"
                  alt="Khushwant Singh - Full-Stack Developer and AI Automation Specialist"
                  width={160}
                  height={160}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  priority
            />
            <div className="font-sketch-body">              
              <p className="text-xl">
                <span className="doodle-underline">Polymath</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <nav aria-label="Primary actions" className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToAbout}
            aria-controls="about"
            aria-label="Navigate to About section"
            className="sketch-button cursor-pointer text-xl px-8 py-4"
          >
            See My Superpowers! 🦸‍♂️
          </button>
          <a
            href="https://docs.google.com/document/d/1aTqzTNVxtQQMIfKAJZisPbOOHs9rXk-jm3fB9ZV6jRE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download or view my resume (opens in new tab)"
            className="sketch-button cursor-pointer bg-[#C4DB5D] text-xl px-8 py-4 inline-block"
          >
            View Resume 📄
          </a>
          <a
            href="https://wa.me/918630083188?text=Hi%20Khushwant!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me via WhatsApp (opens in new tab)"
            className="sketch-button cursor-pointer bg-white border-[#D84880] text-xl px-8 py-4 inline-block"
          >
            Let&apos;s Chat! 💬
          </a>
        </nav>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce" role="status" aria-live="polite">
          <p className="font-sketch-body text-lg transform rotate-2">
            Scroll down for the good stuff! ↓
          </p>
        </div>
      </div>

      {/* Decorative emojis */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 transform rotate-12" aria-hidden="true">⚡</div>
      <div className="absolute top-40 right-20 text-4xl opacity-20 transform -rotate-12" aria-hidden="true">🚀</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-20 transform rotate-45" aria-hidden="true">✨</div>
      <div className="absolute bottom-40 right-10 text-4xl opacity-20 transform -rotate-45" aria-hidden="true">🎯</div>
    </section>
  );
}

export default memo(Hero);
