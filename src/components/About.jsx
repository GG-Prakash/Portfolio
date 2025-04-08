import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-5  ">
      
      <div className="mb-14" >
        <h2 className="text-4xl font-bold text-gray-800 w-full mb-4">About</h2>
        <p className="text-lg text-black  w-full">
          Passionate about building scalable cloud solutions, automation-driven workflows, and seamless user experiences. 
          With expertise in AWS, DevOps, and full-stack development, I create efficient, secure, and high-performing applications. 
          Always learning, innovating, and pushing boundaries in cloud technology.
        </p>
      </div>

      <div className="bg-slate-100 p-6" >
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
