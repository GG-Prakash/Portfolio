// Sidebar.jsx
import {
  FcAbout, FcContacts, FcDocument, FcHome, FcManager, FcWorkflow
} from 'react-icons/fc';
import {
  FaFacebook, FaInstagram, FaSkype, FaLinkedin
} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Sidebar = ({ isMobile = false, onCloseSidebar = () => {} }) => {
  const commonLinkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2c2f3f] hover:text-[#149ddd] transition-all duration-300 group";

  const navLinks = [
    { href: "#hero", icon: <FcHome className="text-xl text-gray-400 group-hover:text-[#149ddd]" />, text: "Home" },
    { href: "#about", icon: <FcAbout className="text-xl" />, text: "About" },
    { href: "#education", icon: <FcDocument className="text-xl text-gray-400 group-hover:text-[#149ddd]" />, text: "Education" },
    { href: "#experience", icon: <FcWorkflow className="text-xl text-gray-400 group-hover:text-[#149ddd]" />, text: "Experience" },
    { href: "#projects", icon: <FcManager className="text-xl text-gray-400 group-hover:text-[#149ddd]" />, text: "Projects" },
    { href: "#contact", icon: <FcContacts className="text-xl" />, text: "Contact" },
  ];

  return (
    <section
      className={`
        bg-[#040b14] z-50 text-white flex flex-col h-screen p-6 transition-all duration-300
        ${isMobile
          ? "fixed top-0 left-0 z-40 w-3/5"
          : "fixed top-0 left-0 w-1/5 max-lg:hidden"
        }
      `}
    >
      <div className="flex flex-col items-center mb-8">
        <img
          className="rounded-full w-32 h-32 object-cover border-4 border-[#2c2f3f] mb-4 hover:border-[#149ddd] transition-all duration-300"
          src="/Profile.jpg"
          alt="Profile"
        />
        <a href="#" className="text-center" onClick={isMobile ? onCloseSidebar : undefined}>
          <h1 className="font-bold text-2xl mb-1">Gnana Prakash G</h1>
          <p className="text-gray-400 text-sm">Code & Cloud</p>
        </a>

        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/GG-Prakash" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <BsGithub className="text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <FaSkype className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/gg-prakash" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navLinks.map(({ href, icon, text }) => (
            <li key={href}>
              <a
                href={href}
                className={commonLinkClass}
                onClick={isMobile ? onCloseSidebar : undefined}
              >
                {icon}
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
