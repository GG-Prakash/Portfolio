import React from 'react';
import ProjectsCard from './ProjectsCard';

const projects = [
  {
    title: 'Melody Photography',
    des: 'A realtime react project to show photography works and to book the service.',
    src: '/projects/melody.png',
    projLink: 'https://melodyphotographyps.netlify.app/'
  },
  {
    title: 'HR Desk',
    des: 'A Final Year project for automating the HR process in a company. The project is built using React, Node.js, Express.js, and MongoDB.',
    src: '/projects/finalyr.png',
    projLink: 'https://melodyphotographyps.netlify.app/'
  },
  {
    title: 'Ahmed Paint Traders Karaikudi',
    des: 'A realtime react project to show up the Landing page for that business.',
    src: '/projects/ahmed.png',
    projLink: 'https://ahmedpainttraders.in/'
  },
  {
    title: 'Natarajan and co - Ultratech Building solutions',
    des: 'A realtime react project to show up the Landing page for that business.',
    src: '/projects/nc.png',
    projLink: 'https://natarajanandco.com/'
  },
  {
    title: 'Shopping Site',
    des: 'A sample front end shopping site with the help of React, Tailwind CSS.',
    src: '/projects/shopsite.png',
    projLink: 'https://p15-ecommerce-site-react-tailwind.netlify.app/',
    gitLink: 'https://github.com/Kabileshwaran183/P15-Ecommerce-site'
  },
  {
    title: 'Recipe App',
    des: 'Get Recipes of your favourite food items by providing only the ingredients list. The Hugging Face API is used to get the recipes.',
    src: '/projects/Recipeapp.png',
    projLink: 'https://p5-recipe-app.netlify.app/',
    gitLink: 'https://github.com/Kabileshwaran183/P5-Recipe-App'
  }
];

const Projects = () => {
  return (
<<<<<<< HEAD
    <section id="projects" className="w-full py-20 border-b-[1px] border-gray-200 scroll-mt-[100px]">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-10">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            projLink={project.projLink}
            gitLink={project.gitLink}
          />
        ))}
=======
    <section id="Projects" className="w-full py-10 ">
      <div className=" mx-auto px-6 ">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Projects</h2>
          <p className="text-gray-500 mt-3 text-lg">A curated selection of recent work.</p>
        </div>

        <div className="grid grid-cols-1 h-150  sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 flex flex-col"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className=""
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-indigo-600 rounded-full mb-2 w-fit">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{proj.title}</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Lorem ipsum, dolor sit amet consectetur.
                </p>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={proj.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 rounded-lg transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
>>>>>>> 25b30de19970fc443adb8ed5c2e4abe6aad30264
      </div>
    </section>
  );
};

export default Projects;
