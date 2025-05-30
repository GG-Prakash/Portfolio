import React, { useState } from "react";
import Card from "./Card";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      logo: "/apollo.png",
      company: "APOLLO IT CORPORATE",
      role: "Intranet Application Developer",
      duration: "July 2024 – August 2024",
      points: [
        "Developed a dynamic admin panel with customizable URLs and unit management for over 13,000 users.",
        "Built secure backend services using Python Flask for authentication and data handling.",
        "Integrated Azure-based semantic search chatbot for enhanced internal accessibility.",
        "Streamlined internal operations through scalable Flask APIs and modular architecture.",
      ],
    },
    
    {
      logo: "/internpe.png",
      company: "InternPE (Remote)",
      role: "Client-Side Developer",
      duration: "February 2024 – March 2024",
      points: [
        "Designed and implemented responsive UI/UX with HTML5, CSS3, and JavaScript.",
        "Optimized cross-platform performance for web apps across varying screen dimensions.",
      ],
    },

    {
      logo: "/plus 91.jpeg",
      company: "PLUS 91 Ultimate Cinemas",
      role: "Digital Marketing",
      duration: "Augest 2023 - September 2023 ",
      points: [
        "Collaborated with clients and colleagues to develop and execute a social media campaign.",
        "Supported event planning and promotional activities.contributing to a 20% boost in attendance and sales inquiries.",
        "Conducted keyword analysis and SEO optimization, significantly improving organic search rankings.",
      ],
    },
    
    
  ];

  const toggleCard = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="section title  ">
      <div className="  py-5 px-5 rounded-xl">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold mb-2">Professional Experience</h2>
          <p className="text-lg text-gray-400">
            Engineering student with AWS DevOps focus and strong interest in cloud technologies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid xl:grid-cols-3 xl:gap-10 mt-5">
          <Card
            title="Intranet Application Developer"
            des="Developed a dynamic intranet website for Apollo Hospitals, implementing an advanced admin panel for unit management, editable URLs, and seamless data handling, enhancing operational efficiency. Technology used: Python (Flask), HTML, CSS, JavaScript"
            logo="/apollo.png"
          />
          <Card
            title="Client-Side Developer"
            des="Designed and implemented responsive UI/UX with HTML5, CSS3, and JavaScript. Optimized cross-platform performance for web apps across varying screen dimensions."
            logo="/internpe.png"
          />
          <Card
            title="Digital Marketing"
            des="Assisted in various digital marketing initiatives, gaining proficiency with tools and analytics to measure campaign effectiveness."
            logo="/plus 91.jpeg"
          />
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
