import { FaAws, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcDocument } from 'react-icons/fc'
import { SiTerraform, SiKubernetes, SiTailwindcss, SiTypescript, SiJenkins, SiAnsible } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

const Left = () => {
    const skills = [
        { icon: <FaAws  className='logos' />, },
        { icon: <FaReact  className='logos' />, },
        { icon: <SiAnsible  className='logos' />, },
        { icon: <FaDocker  className='logos' />, },
        { icon: <SiTerraform  className='logos' />, },
        { icon: <SiKubernetes  className='logos' />, },
        { icon: <SiTailwindcss  className='logos' />, },
        { icon: <SiTypescript  className='logos' />, },
        { icon: <FaGitAlt  className='logos' />, },
        { icon: <SiJenkins  className='logos' />, }
    ]
    return (
        <div className='flex flex-col '>
            <div className="ml-3 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                <h3 className='text-2xl font-bold md:text-3xl px-2 text-black '>Hi, i'm</h3>
                <h2 className="text-4xl md:text-6xl text-cyan-400 font-bold m-1"> Gnana Prakash G</h2>
                <p className="text-xl md:text-3xl  text-black m-2 ">
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
            <div className='flex max-md:flex-col gap-4 p-8 '>
                <h5 className='text-gray-900  text-xl md:text-3xl md:hidden'>Links</h5>
                <div className="flex md:flex-col gap-6 md:gap-8 ">
                    <div className="flex flex-col items-center py-3 bg-white rounded-lg 
               backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] md:w-14 md:h-14 w-10 h-10 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400"
                        >
                            <FaGithub className="logos" />
                    </div>
                    <div className="flex flex-col items-center py-3 bg-white rounded-lg 
               backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] md:w-14 md:h-14 w-10 h-10 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400"
                        >
                            <FaLinkedin className="logos" />
                    </div>
                </div>
                <div className="hidden md:block w-0.5 bg-gradient-to-b from-transparent via-gray-600/50 to-transparent mx-6 "></div>
                <h5 className='text-gray-900  text-xl md:text-3xl md:hidden'>Skill</h5>
                <div className="grid grid-cols-5 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center py-3 bg-white rounded-lg 
               backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] md:w-14 md:h-14 w-10 h-10 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400"
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