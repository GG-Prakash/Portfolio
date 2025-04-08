import React from 'react'
import { FaAws, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { FcDocument } from 'react-icons/fc'
import { SiTerraform, SiKubernetes, SiTailwindcss, SiTypescript, SiJenkins } from 'react-icons/si'

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-4">
      <h1 className="text-4xl md:text-5xl font-bold capitalize">
        {des}
      </h1>
      <h3 className="text-lg text-gray-400">
        {title}
      </h3>
      
    </div>
  )
}

const Skills = () => {
  const skills = [
    { icon: <FaAws size={40} />, name: 'AWS' },
    { icon: <FaReact size={40} />, name: 'React' },
    { icon: <FaNodeJs size={40} />, name: 'Node.js' },
    { icon: <FaDocker size={40} />, name: 'Docker' },
    { icon: <SiTerraform size={40} />, name: 'Terraform' },
    { icon: <SiKubernetes size={40} />, name: 'Kubernetes' },
    { icon: <SiTailwindcss size={40} />, name: 'Tailwind' },
    { icon: <SiTypescript size={40} />, name: 'TypeScript' },
    { icon: <FaGitAlt size={40} />, name: 'Git' },
    { icon: <SiJenkins size={40} />, name: 'Jenkins' }
  ]

  return (
    <section id="skills" className="w-full py-14 px-4 border-b-[1px] border-b-gray-800 scroll-mt-[100px]">
      <div className="flex justify-center items-center text-center mb-16">
        <Title title="TECHNICAL PROFICIENCY" des="Skills & Expertise" />
      </div>
      
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto px-6">
        <div className="w-full md:w-3/5">
          <h3 className="text-2xl font-semibold text-blue-950 mb-8 pb-3 border-b border-gray-600/50">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-5 bg-gray-900/10 backdrop-blur-md rounded-lg border border-gray-600/30
                shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:border-designColor/50"
              >
                <div className=" mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-base font-semibold opacity-40 tracking-wide">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-0.5 bg-gradient-to-b from-transparent via-gray-600/50 to-transparent mx-6"></div>

        <div className="w-full md:w-2/6 flex flex-col items-center gap-8">
          <h3 className="text-2xl font-semibold text-blue-950 pb-3 border-b border-gray-600/50">
            Professional Profile
          </h3>
          <div className="w-72 h-42 bg-gray-900/20 rounded-xl flex items-center justify-center border border-gray-600/30 shadow-md">
            <FcDocument className='w-72 h-42'/>
          </div>

          <div className="flex gap-4">
            <a 
              href="/resume.pdf" 
              download="Resume.pdf"
              className="px-2 py-3 bg-designColor text-black rounded-md hover:bg-gray-300 transition-colors duration-300"
            >
              Download Resume
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-2 py-3  text-designColor rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
