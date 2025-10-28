'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFAF0] border-b-4 border-black border-dashed py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-sketch-title text-3xl md:text-4xl transform -rotate-1">
            <span className="highlight-pink">Khush</span>
            <span className="ml-2 text-2xl">✏️</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="font-sketch-body text-lg hover:scale-110 transition-transform duration-200 transform rotate-1 cursor-pointer"
            >
              <span className="doodle-circle">👋 About</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-sketch-body text-lg hover:scale-110 transition-transform duration-200 transform -rotate-1 cursor-pointer"
            >
              <span className="doodle-circle">🔧 Services</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-sketch-body text-lg hover:scale-110 transition-transform duration-200 transform rotate-1 cursor-pointer"
            >
              <span className="doodle-circle">📸 Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-sketch-body text-lg hover:scale-110 transition-transform duration-200 transform -rotate-1 cursor-pointer"
            >
              <span className="doodle-circle">📝 Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden font-sketch-title text-2xl transform rotate-12 cursor-pointer"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Decorative lines */}
        <div className="mt-4 relative">
          <div className="h-1 bg-black transform -rotate-1 opacity-30"></div>
          <div className="h-1 bg-[#C4DB5D] transform rotate-1 opacity-60 -mt-1"></div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-sketch-body text-lg py-2 cursor-pointer"
            >
              👋 About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left font-sketch-body text-lg py-2 cursor-pointer"
            >
              🔧 Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left font-sketch-body text-lg py-2 cursor-pointer"
            >
              📸 Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left font-sketch-body text-lg py-2 cursor-pointer"
            >
              📝 Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
