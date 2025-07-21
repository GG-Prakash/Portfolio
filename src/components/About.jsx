import React from 'react'

const About = () => {
  return (
    <section id="about" className=" bg-blue-100/30 max-md:pt-10">
      <h2 className="title text-center">About</h2>
      <p className="italic text-center text-gray-600 md:text-lg text-base -mt-2  mb-6">
              "Designing the Future, One Cloud at a Time."
        </p> 

      <div className="bg-white rounded-4xl m-auto p-6 max-md:m-6 md:w-4xl mb-20" >
      <div className="   ">
        <h2 className="md:text-xl text-base font-bold md:text-center  text-gray-800  mb-4">
              AWS DevOps Enthusiast | Dedicated to Harnessing AWS Services |  CI/CD Practitioner
            </h2>
        <p className="md:text-lg text-sm  md:text-gray-800  text-gray-500  w-full pr-5">
         I specialize in AWS DevOps, cloud computing, and automation, building reliable and scalable infrastructure with a focus on efficiency. As a fresher, I’m driven to deliver seamless CI/CD pipelines and cloud solutions.

In addition, I bring skills in web development to complement my DevOps expertise, enabling me to contribute end-to-end to projects. I’m passionate about continuous learning and tackling real-world challenges.</p>

          </div>
          
       
      </div>
      <br />
    </section>
  )
}

export default About
