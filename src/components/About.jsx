import React from 'react'

const About = () => {
  return (
    <section id="about" className="section pt-10">
      
      <div className="mb-14" >
        <h2 className="title">About</h2>
        <p className="text-xl text-black  w-full pr-5">
         I specialize in AWS DevOps, cloud computing, and automation, building reliable and scalable infrastructure with a focus on efficiency. As a fresher, I’m driven to deliver seamless CI/CD pipelines and cloud solutions.

In addition, I bring skills in web development to complement my DevOps expertise, enabling me to contribute end-to-end to projects. I’m passionate about continuous learning and tackling real-world challenges.</p>
      </div>

      <div className="bg-blue-100/50 rounded-xl p-6" >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-3/14">
            <img 
              src="/Profile.jpg" 
              className="rounded-xl shadow-5xl shadow-black  h-auto"
              alt="Profile"
            />
          </div>

          
          <div className="  mt-[-50px] ">
            <h2 className="text-2xl font-bold  text-gray-800  mb-4">
              AWS Cloud & DevOps Engineer | Web Developer
            </h2>
            <p className="italic text-gray-600 text-lg py-2 mb-6">
              "Designing the Future, One Cloud at a Time."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Degree:</strong>
                      <span className="text-gray-600  ml-2">Bachelor Of Engineering</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Residency:</strong>
                      <span className="text-gray-600 ml-2">Chennai, India</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Age:</strong>
                      <span className="text-gray-600  ml-2">21</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Email:</strong>
                      <span className="text-gray-600  ml-2">mailofggprakash@gmail.com</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Phone:</strong>
                      <span className="text-gray-600  ml-2">+91 93847 07189</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 ">Freelance:</strong>
                      <span className="text-gray-600  ml-2">Available</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
