import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className=" bg-[#040b14]/30 text-white min-h-screen flex items-center relative">
      
      <motion.img 
        src="/banner.webp"
        alt="Profile" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-full h-full object-cover  -z-10"
      />

      
      <div className="bg-transparent ml-3 px-4" 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.5 }}>
        <h3 className='text-2xl md:text-3xl px-2'>Hi, i'm</h3>
        <h2 className="text-4xl md:text-6xl text-cyan-400 font-bold mb-4">Gnana Prakash G</h2>
        <p className="text-2xl md:text-3xl px-2 ">
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
       
    </section>
  )
}

export default Hero
