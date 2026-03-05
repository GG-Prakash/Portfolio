import React, { useState } from 'react';
import { FaArrowUp, FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Skills from './resume';
import { FcDocument } from 'react-icons/fc';

const Footer = () => {
  const [showResume, setShowResume] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <footer className="relative bg-slate-900 border-t border-gray-800 text-gray-300 pt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Gnana Prakash <span className="text-cyan-400">G</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Building scalable cloud infrastructure and modern, high-performance web applications.
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Available for Work</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4 md:pl-8">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2 text-cyan-500">›</span> Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2 text-cyan-500">›</span> About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2 text-cyan-500">›</span> Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2 text-cyan-500">›</span> Experience</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Socials */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <div className="flex flex-col space-y-3">
              <a href="mailto:mailofggprakash@gmail.com" className="hover:text-cyan-400 transition-colors duration-300 flex items-center text-sm md:text-base">
                <FaEnvelope className="mr-3 text-cyan-500 flex-shrink-0" /> <span className="break-all">mailofggprakash@gmail.com</span>
              </a>
              <div className="flex items-center text-gray-400 text-sm md:text-base">
                <FaMapMarkerAlt className="mr-3 text-cyan-500 flex-shrink-0" /> Chennai, India
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/GG-Prakash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="GitHub">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/gg-prakash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="LinkedIn">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="Twitter">
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <strong className="font-semibold text-gray-300">Gnana Prakash G</strong>. All Rights Reserved.
        </p>
      </div>

      {/* Resume Popup Button */}
      <button
        onClick={toggleResume}
        className="fixed bottom-20 right-6 z-50 bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1"
        aria-label="Show Resume"
      >
        <div className="bg-white rounded overflow-hidden p-0.5">
          <FcDocument className="text-2xl" />
        </div>
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>

      {/* Resume Modal */}
      {showResume && (
        <div
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex justify-center items-center z-[100]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative m-4">
            <button
              onClick={toggleResume}
              className="absolute top-4 right-4 text-gray-400 hover:text-slate-900 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              aria-label="Close Resume"
            >
              &#x2715;
            </button>
            <div id="resume-title" className="text-2xl font-bold text-slate-800 mb-2 border-b pb-4">
              Resume
            </div>
            <Skills />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
