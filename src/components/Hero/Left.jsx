import { FaAws, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcDocument } from 'react-icons/fc'
import { SiTerraform, SiKubernetes, SiTailwindcss, SiTypescript, SiJenkins, SiAnsible } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

const Left = () => {
    const skills = [
        { icon: <FaAws size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <FaReact size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <SiAnsible size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <FaDocker size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <SiTerraform size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <SiKubernetes size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <SiTailwindcss size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <SiTypescript size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <FaGitAlt size={32} className='group-hover:text-blue-400 text-indigo-600' />, },
        { icon: <SiJenkins size={32} className='group-hover:text-blue-400 text-indigo-600' />, }
    ]
    return (
        <div className='flex flex-col'>
            <div className="ml-3 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                <h3 className='text-2xl md:text-3xl px-2 text-black '>Hi, i'm</h3>
                <h2 className="text-4xl md:text-6xl text-cyan-400 font-bold mb-4">Gnana Prakash G</h2>
                <p className="text-2xl md:text-3xl px-2 text-black ">
                    a{' '}
                    <TypeAnimation
                        sequence={[
                            'AWS Cloud Enthusiast',
                            2000,
                            'CI/CD Pipeline Builder',
                            2000,
                            'DevOps Automation Specialist',
                            2000,
                            'Freelance Architectural Designer',
                            2000
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </p>
            </div>
            <div className='flex gap-6 p-8'>
                <div className="flex flex-col gap-8 ">
                    <div className="flex items-center justify-center py-3 bg-white backdrop-blur-md rounded-lg   shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-14 h-14 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 ">
                        <FaGithub className="text-2xl text-indigo-600 group-hover:text-blue-400" />
                    </div>
                    <div className="flex items-center justify-center py-3 bg-white  rounded-lg  backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-14 h-14 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 ">
                        <FaLinkedin className="text-2xl text-indigo-600 group-hover:text-blue-400" />
                    </div>
                </div>
                <div className="hidden md:block w-0.5 bg-gradient-to-b from-transparent via-gray-600/50 to-transparent mx-6 "></div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center py-3 bg-white rounded-lg 
               backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-14 h-14 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400"
                        >
                            <div className="mb-3">
                                {skill.icon}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Left;