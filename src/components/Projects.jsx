import React from 'react';
import ProjectsCard from './ProjectsCard';

const projects = [
  {
    title: 'AWS 3-tier Webpplication Architecture',
    des: 'Deployed secure 3-tier AWS app using VPCs, ALBs, RDS, and ACM for scalable and isolated routing.',
    src: '/projects/shopsite.png',
    projLink: 'https://natarajanandco.com/',
    tools: ['EC2',' RDS', 'ALB',' VPC', 'R53', 'ACM']
  },
  {
    title: 'CI/CD Pipeline Automation using Jenkins & Kubernetes',
    des: 'Automated CI/CD pipeline with Jenkins, Docker, and K8s, integrating code to deployment seamlessly.',
    src: '/projects/shopsite.png',
    projLink: 'https://p15-ecommerce-site-react-tailwind.netlify.app/',
    gitLink: 'https://github.com/Kabileshwaran183/P15-Ecommerce-site',
    tools: ['Jenkins',' GitHub',' Docker', 'SonarQube', 'Trivy', 'EC2', 'ECR', 'Kops', 'Kubernetes']
  },
  {
    title: 'Multi-Branch DevOps Infrastructure with Terraform & Jenkins',
    des: 'Built multi-branch AWS infra using Terraform and Jenkins with GitHub webhooks and IAM access control.',
    src: '/projects/Recipeapp.png',
    projLink: 'https://p5-recipe-app.netlify.app/',
    gitLink: 'https://github.com/Kabileshwaran183/P5-Recipe-App',
    tools: ['VPC','EC2','Terraform','IAM','GitHub']
  }
];

const Projects = () => {
  return (

    <section id="projects" className="w-full py-20 px-5 border-b-[1px] border-gray-200 scroll-mt-[100px]">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 title">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-14 mt-10">
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
