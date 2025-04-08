
import { FcAbout, FcContacts, FcDocument, FcHome, FcManager, FcWorkflow } from 'react-icons/fc'
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <>
      <section className='bg-[#040b14] text-white flex flex-col h-screen w-1/5 fixed left-0 top-0 p-6 transition-all duration-300'>
        <div className='flex flex-col items-center mb-8'>
          <img
            className='rounded-full w-32 h-32 object-cover border-4 border-[#2c2f3f] mb-4 hover:border-[#149ddd] transition-all duration-300' 
            src='/Profile.jpg'
            alt='Profile'
          />
          <a href="#" className="text-center">
            <h1 className="font-bold text-2xl mb-1">GnanaPrakash</h1>
            <p className="text-gray-400 text-sm">Cloud Engineer</p>
          </a>

          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300">
              <FaFacebook className="text-xl" /> 
            </a>
            <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300">
              <FaSkype className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#149ddd] transition-colors duration-300">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a 
                href="#hero" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2c2f3f] hover:text-[#149ddd] transition-all duration-300 group"
              >
                <FcHome className='text-xl text-gray-400 group-hover:text-[#149ddd]'/>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2c2f3f] hover:text-[#149ddd] transition-all duration-300 group"
              >
                <FcAbout className='text-xl'/>
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2c2f3f] hover:text-[#149ddd] transition-all duration-300 group"
              >
                <FcDocument className='text-xl text-gray-400 group-hover:text-[#149ddd]'/>
                <span>Skills/Resume</span>
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2c2f3f] hover:text-[#149ddd] transition-all duration-300 group"
              >
                <FcWorkflow className='text-xl text-gray-400 group-hover:text-[#149ddd]'/>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2c2f3f] hover:text-[#149ddd] transition-all duration-300 group"
              >
                <FcManager className='text-xl text-gray-400 group-hover:text-[#149ddd]'/>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2c2f3f] hover:text-[#149ddd] transition-all duration-300 group"
              >
                <FcContacts className='text-xl'/>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Sidebar
