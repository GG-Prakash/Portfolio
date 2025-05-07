import React from 'react'
import { FaAws, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { FcDocument } from 'react-icons/fc'
import { SiTerraform, SiKubernetes, SiTailwindcss, SiTypescript, SiJenkins, SiAnsible } from 'react-icons/si'


const Skills = () => {
  const skills = [
    { icon: <FaAws size={35} className='group-hover:text-blue-400' />, },
    { icon: <FaReact size={35} className='group-hover:text-blue-400' />, },
    { icon: <SiAnsible size={35} className='group-hover:text-blue-400' />, },
    { icon: <FaDocker size={35} className='group-hover:text-blue-400' />, },
    { icon: <SiTerraform size={35} className='group-hover:text-blue-400' />, },
    { icon: <SiKubernetes size={35} className='group-hover:text-blue-400' />, },
    { icon: <SiTailwindcss size={35} className='group-hover:text-blue-400' />, },
    { icon: <SiTypescript size={35} className='group-hover:text-blue-400' />, },
    { icon: <FaGitAlt size={35} className='group-hover:text-blue-400' />, },
    { icon: <SiJenkins size={35} className='group-hover:text-blue-400' />, }
  ]

  return (
    <section id="skills" className="section mt-2 mb-15">

      <h2 className="title  ">Skills and Resume</h2>


      <div className="flex flex-col md:flex-row gap-10  max-w-6xl mx-auto  ">
        <div className=" md:w-3/7">
          <h3 className="text-2xl font-semibold text-blue-950 mb-8 pb-3 border-b border-gray-600/50">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center py-3 bg-gray-900/10 backdrop-blur-md rounded-lg border border-gray-600/30
                shadow-md hover:shadow-lg transition-all group duration-300 ease-in-out transform hover:-translate-y-1.5 hover:border-designColor/50"
              >
                <div className=" mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-base font-semibold opacity-40  tracking-wide">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-0.5 bg-gradient-to-b from-transparent via-gray-600/50 to-transparent mx-6"></div>

        <div className="w-full md:w-2/6 bg-amber-200 items-start gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-950 pb-3 border-b border-gray-600/50">Professional Profile</h3>
            <div className="flex gap-4">
            <div className="w-72 h-42 mt-7 bg-gray-900/20 rounded-xl border border-gray-600/30 shadow-md">
              <FcDocument className='w-72 h-42' />
            </div>

            <div className='bg-amber-800'>
              <span><a
                href="/Gnanaprakash_Resume.pdf"
                download="Gnanaprakash.pdf"
                className="px-3 py-3  text-black rounded-md hover:bg-blue-400 transition-colors duration-300"
              >
                Download Resume
              </a>
              </span>
              
              <span><a
                href="/Gnanaprakash_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-3  text-designColor rounded-md hover:bg-blue-400 transition-colors duration-300"
              >
                View Resume
              </a></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
