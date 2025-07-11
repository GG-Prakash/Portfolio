import React, { useState, useRef } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);

  const [from_name, setFromName] = useState('');
  const [from_email, setFromEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg('');
    setSuccessMsg('');

    if (from_name.trim() === '') {
      setErrMsg('Name is required!');
      return;
    }
    if (phone_number.trim() === '') {
      setErrMsg('Phone number is required!');
      return;
    }
    if (from_email.trim() === '') {
      setErrMsg('Email is required!');
      return;
    }
    if (!emailValidation(from_email)) {
      setErrMsg('Enter a valid email!');
      return;
    }
    if (subject.trim() === '') {
      setErrMsg('Subject is required!');
      return;
    }
    if (message.trim() === '') {
      setErrMsg('Message is required!');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccessMsg(`Thank you ${from_name}, your message has been sent successfully!`);
          setFromName('');
          setPhoneNumber('');
          setFromEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          setErrMsg('Failed to send message. Please try again!');
        }
      );
  };

  return (
    <section id="contact" className="bg-white md:py-20">
      <div className="max-w-6xl mx-auto md:px-6 px-4">
        {/* Section Title */}
        <div className="text-center md:mb-16">
          <h2 className=" text-gray-800 mb-4 title">Contact</h2>
          <p className="text-gray-500 md:text-lg text-base ">
            Get in Touch — I’m Just a Message Away
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Removed address, call us, email sections as per user request */}

            <div className="grid grid-cols-2 items-center justify-center pt-10 gap-8">
              <a
                href="https://github.com/GG-Prakash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                aria-label="GitHub"
              >
                <div className="flex items-center justify-center py-3 bg-white backdrop-blur-md rounded-lg  shadow-[0_4px_6px_rgba(0,0,0,0.3)] md:w-16 w-12 md:h-16 h-12 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 ">
                  <FaGithub className="text-3xl text-indigo-600 group-hover:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="md:text-base text-sm font-semibold  text-black">GitHub</span>
                  <span className="md:text-sm text-xs text-gray-500">Connect on GitHub</span>
                </div>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                aria-label="Twitter"
              >
                <div className="flex items-center justify-center py-3 bg-white backdrop-blur-md rounded-lg  shadow-[0_4px_6px_rgba(0,0,0,0.3)] md:w-16 w-12 md:h-16 h-12 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 ">
                  <FaTwitter className="text-3xl text-indigo-600 group-hover:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="md:text-base text-sm font-semibold text-black">Twitter</span>
                  <span className="md:text-sm text-xs text-gray-500">Follow on Twitter</span>
                </div>
              </a>
              <a
                href="www.linkedin.com/in/gg-prakash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                aria-label="LinkedIn"
              >
                <div className="flex items-center justify-center py-3 bg-white  rounded-lg  backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] md:w-16 w-12 md:h-16 h-12 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 ">
                  <FaLinkedin className="text-3xl text-indigo-600 group-hover:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="md:text-base text-sm font-semibold text-black">LinkedIn</span>
                  <span className="md:text-sm text-xs text-gray-500">Connect on LinkedIn</span>
                </div>
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                aria-label="Instagram"
              >
                <div className="flex items-center justify-center py-3 bg-white backdrop-blur-md rounded-lg  shadow-[0_4px_6px_rgba(0,0,0,0.3)] md:w-16 w-12 md:h-16 h-12 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 ">
                  <FaInstagram className="text-3xl text-indigo-600 group-hover:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="md:text-base text-sm font-semibold text-black">Instagram</span>
                  <span className="md:text-sm text-xs text-gray-500">Follow on Instagram</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Side - Form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSend}
              className="space-y-6 bg-white md:p-8 px-6 py-3 shadow-xl rounded-2xl"
            >
              {errMsg && (
                <p className="text-center text-red-600 font-semibold">{errMsg}</p>
              )}
              {successMsg && (
                <p className="text-center text-green-600 font-semibold">{successMsg}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={from_name}
                    onChange={(e) => setFromName(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={from_email}
                  onChange={(e) => setFromEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-indigo-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
