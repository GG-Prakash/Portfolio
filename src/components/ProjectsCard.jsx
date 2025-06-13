import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src, projLink, gitLink, tools }) => {
  return (
    <div className="w-full p-4 xl:px-6 h-auto xl:py-8 rounded-xl flex flex-col bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-full md:h-[200px] h-[100px] overflow-hidden rounded-lg group">
        <img
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-4">
        <div className="flex  items-center justify-between">
          <h3 className="md:text-base text-sm xl:text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <div className="flex gap-3 max-md:-ml-3">
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
              >
                <span className="md:text-lg text-xs w-9 h-9 rounded-full inline-flex justify-center items-center hover:text-blue-400 transition-all duration-300 bg-gray-100 text-blue-800">
                  <BsGithub />
                </span>
              </a>
            )}
            {projLink && (
              <a
                href={projLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <span className="text-lg w-9 h-9 rounded-full inline-flex justify-center items-center hover:text-blue-400 transition-all duration-300 bg-gray-100 text-blue-800">
                  <FaGlobe />
                </span>
              </a>
            )}
          </div>
        </div>

        <p className="text-sm tracking-wide leading-relaxed text-gray-600 hover:text-gray-800 transition-colors duration-300">
          {des}
        </p>

        {tools && tools.length > 0 && (
          <div className="project-tech flex flex-wrap gap-2 mt-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
