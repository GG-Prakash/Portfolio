import React from 'react'

import { motion } from 'framer-motion'
import Left from './Left'

const Hero = () => {
  
  return (

    <section id="hero" className=" text-white    min-h-screen flex max-md:flex-col items-center justify-between relative">

      
      <div className=' max-md:bg-slate-400/10 max-md:w-screen w-[85%] md:py-10 pt-28 pb-6 md:my-44 '><Left /></div>
      <div ><motion.img 
              src="/profile normal.png"
              alt="Profile" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="right-5 md:w-180 w-80 h-fit object-cover z-40 md:-mt-40 "
            /></div>
    </section>
  )
}

export default Hero
