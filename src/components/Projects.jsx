import React from 'react';
import ProjectsCard from './ProjectsCard';

const projects = [
  {
    title: 'Melody Photography',
    des: 'A realtime react project to show photography works and to book the service.',
    src: '/projects/melody.png',
    projLink: 'https://melodyphotographyps.netlify.app/',
    tools: ['React', 'Tailwind CSS', 'Netlify']
  },
  {
    title: 'HR Desk',
    des: 'A Final Year project for automating the HR process in a company. The project is built using React, Node.js, Express.js, and MongoDB.',
    src: '/projects/finalyr.png',
    projLink: 'https://melodyphotographyps.netlify.app/',
    tools: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Ahmed Paint Traders Karaikudi',
    des: 'A realtime react project to show up the Landing page for that business.',
    src: '/projects/ahmed.png',
    projLink: 'https://ahmedpainttraders.in/',
    tools: ['React', 'CSS', 'Responsive Design']
  },
  {
    title: 'Natarajan and co - Ultratech Building solutions',
    des: 'A realtime react project to show up the Landing page for that business.',
    src: '/projects/nc.png',
    projLink: 'https://natarajanandco.com/',
    tools: ['React', 'Tailwind CSS', 'SEO']
  },
  {
    title: 'Shopping Site',
    des: 'A sample front end shopping site with the help of React, Tailwind CSS.',
    src: '/projects/shopsite.png',
    projLink: 'https://p15-ecommerce-site-react-tailwind.netlify.app/',
    gitLink: 'https://github.com/Kabileshwaran183/P15-Ecommerce-site',
    tools: ['React', 'Tailwind CSS', 'E-commerce']
  },
  {
    title: 'Recipe App',
    des: 'Get Recipes of your favourite food items by providing only the ingredients list. The Hugging Face API is used to get the recipes.',
    src: '/projects/Recipeapp.png',
    projLink: 'https://p5-recipe-app.netlify.app/',
    gitLink: 'https://github.com/Kabileshwaran183/P5-Recipe-App',
    tools: ['React', 'API Integration', 'Food Recipes']
  }
];

const Projects = () => {
  return (

    <section id="projects" className="w-full py-20 px-5 border-b-[1px] border-gray-200 scroll-mt-[100px]">
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
            tools={project.tools}
          />
        ))}

      </div>
    </section>
  );
};

export default Projects;
