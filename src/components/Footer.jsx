import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Skills from './resume';
import { RxResume } from 'react-icons/rx';
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
    <footer className="relative pt-8  border-gray-200">
      
        <div className='bg-blue-100/30 py-5 px-40' >
        <div className='bg-blue-100 p-10 rounded-4xl backdrop-blur-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] '>
          <h2 className="text-3xl text-gray-900 pb-4">Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Degree:</strong>
                      <span className="text-gray-600  ml-2">Bachelor Of Engineering</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Residency:</strong>
                      <span className="text-gray-600 ml-2">Chennai, India</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Age:</strong>
                      <span className="text-gray-600  ml-2">21</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Email:</strong>
                      <span className="text-gray-600  ml-2">mailofggprakash@gmail.com</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Phone:</strong>
                      <span className="text-gray-600  ml-2">+91 93847 07189</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Freelance:</strong>
                      <span className="text-gray-600  ml-2">Available</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <div className='bg-indigo-400 py-5 text-center'>
              <p className="text-gray-600 text-sm">
                        © <span>{new Date().getFullYear()}</span>{' '}
                        <strong className="font-semibold">GnanaPrakash</strong> All Rights Reserved
                      </p>
          </div>
        
      {/* Resume Popup Button */}
      <button
        onClick={toggleResume}
        className="fixed bottom-20 right-6 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition mb-2"
        aria-label="Show Resume"
      >
        <FcDocument />
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>

      {/* Resume Modal */}
      {showResume && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={toggleResume}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close Resume"
            >
              &#x2715;
            </button>
            <div id="resume-title" className="text-xl font-bold mb-4">
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
