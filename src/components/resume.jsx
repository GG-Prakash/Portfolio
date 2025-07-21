
import { FcDocument } from 'react-icons/fc'


const Skills = () => {
  
  return (
    <section  className="section mt-2 mb-15">

      <h2 className="title  ">Resume</h2>

<div className="w-full md:w-2/6  items-start gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-950 pb-3 border-b border-gray-600/50">Professional Profile</h3>
            <div className="flex gap-4">

              <div className="w-72 h-42 mt-7 bg-gray-900/20 rounded-xl border border-gray-600/30 shadow-md">
                <FcDocument className='w-72 h-42' />
              </div>


              <div className='flex flex-col justify-center'>
                <div className="mt-7 flex flex-col items-center space-y-6 ">
                <a
                  href="/Gnanaprakash_Resume.pdf"
                  download="Gnanaprakash.pdf"
                  className="whitespace-nowrap px-2 py-3 text-l  text-indigo-600 rounded-md text-center backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-full h-min transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 hover:text-blue-400"
                >
                  Download Resume
                </a>

                <a
                  href="/Gnanaprakash_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-2 py-3 text-l text-indigo-600 text-center rounded-md backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-full h-min transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 hover:text-blue-400"
                >
                  View Resume
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
