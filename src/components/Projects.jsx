import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'App 1',
    category: 'App',
    img: '/apollo.png',
    git: 'https://github.com/your-username/app1',
    live: 'https://your-app1-demo.com',
  },
  {
    title: 'Product 1',
    category: 'Product',
    img: '/Profile.jpg',
    git: 'https://github.com/your-username/product1',
    live: 'https://your-product1-demo.com',
  },
  {
    title: 'Branding 1',
    category: 'Branding',
    img: 'internpe.png',
    git: 'https://github.com/your-username/branding1',
    live: 'https://your-branding1-demo.com',
  },
  {
    title: 'Books 1',
    category: 'Books',
    img: '/internpe.png',
    git: 'https://github.com/your-username/books1',
    live: 'https://your-books1-demo.com',
  },
  {
    title: 'App 2',
    category: 'App',
    img: '/apollo.png',
    git: 'https://github.com/your-username/app2',
    live: 'https://your-app2-demo.com',
  },
  {
    title: 'Product 2',
    category: 'Product',
    img: '/Profile.jpg',
    git: 'https://github.com/your-username/product2',
    live: 'https://your-product2-demo.com',
  },

];

const Projects = () => {
  return (
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
      </div>
    </section>
  );
};

export default Projects;
