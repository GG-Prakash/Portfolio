import React from 'react'

import { motion } from 'framer-motion'
import Left from './Left'

const Hero = () => {
  
  return (
    <section id="hero" className="text-white  min-h-screen flex  items-center justify-between relative">
      
      <div> <Left /></div>
      <div><motion.img 
              src="/profile normal.png"
              alt="Profile" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="right-5 w-130 h-fit object-cover z-10"
            /></div>
    </section>
  )
}

export default Hero
