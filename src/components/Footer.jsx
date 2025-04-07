import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-center py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-sm">
          © <span>{new Date().getFullYear()}</span>{' '}
          <strong className="font-semibold">iPortfolio</strong> All Rights Reserved
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Designed by{' '}
          <a
            href="https://bootstrapmade.com/"
            className="text-indigo-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            BootstrapMade
          </a>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
