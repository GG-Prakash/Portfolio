import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
      
      <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Passionate about building scalable cloud solutions, automation-driven workflows, and seamless user experiences. 
          With expertise in AWS, DevOps, and full-stack development, I create efficient, secure, and high-performing applications. 
          Always learning, innovating, and pushing boundaries in cloud technology.
        </p>
      </div>

      <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/3">
            <img 
              src="/Profile.jpg" 
              className="rounded-xl shadow-xl w-full h-auto max-w-md mx-auto"
              alt="Profile"
            />
          </div>

          
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              AWS Cloud & DevOps Engineer | Web Developer
            </h2>
            <p className="italic text-gray-600 dark:text-gray-300 text-lg py-3 mb-6">
              "Designing the Future, One Cloud at a Time."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 dark:text-gray-200">Degree:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Bachelor Of Engineering</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 dark:text-gray-200">Residency:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Chennai, India</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 dark:text-gray-200">Age:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">21</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 dark:text-gray-200">Email:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">mailofggprakash@gmail.com</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 dark:text-gray-200">Phone:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">+91 93847 07189</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <div>
                      <strong className="text-gray-700 dark:text-gray-200">Freelance:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Available</span>
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
