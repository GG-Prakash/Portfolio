import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="hero section bg-[#040b14]/30 text-white min-h-screen flex items-center relative">
      
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
           transition={{ delay: 0.2, duration: 0.8 }}>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">GnanaPrakash</h2>
        <p className="text-xl md:text-2xl">
          I'm{' '}
          <TypeAnimation
            sequence={[
              'Designer',
              2000,
              'Developer',
              2000, 
              'Freelancer',
              2000,
              'Photographer',
              2000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-[#149ddd]"
          />
        </p>
      </div>
    </section>
  )
}

export default Hero
