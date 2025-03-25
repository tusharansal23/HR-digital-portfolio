import React from "react";
import "./services.css";

const projects = [
  {
    title: "Connet Technologies - CCTV Camera Solutions & Installation",
    image: "connet-demo.jpg",
    demoLink: "https://connettechnologies.com/",
  },
  {
    title: "PFIT Fitness Gym",
    image: "pfit-demo.jpg",
    demoLink: "https://www.pfitfitness.com/",
  },
  {
    title: "Pawan Meat Shop - Fresh Chicken & Mutton",
    image: "pawan-demo",
    demoLink: "https://pawanmeatshop.com/",
  },
  {
    title: "Tourist Hotel",
    image: "https://via.placeholder.com/300",
    demoLink: "https://example.com/project-four",
  },
  {
    title: "Project Five",
    image: "https://via.placeholder.com/300",
    demoLink: "https://example.com/project-five",
  },
  {
    title: "Project Six",
    image: "https://via.placeholder.com/300",
    demoLink: "https://example.com/project-six",
  },
  {
    title: "Project Seven",
    image: "https://via.placeholder.com/300",
    demoLink: "https://example.com/project-seven",
  },
  {
    title: "Project Eight",
    image: "https://via.placeholder.com/300",
    demoLink: "https://example.com/project-eight",
  },
  {
    title: "Project Nine",
    image: "https://via.placeholder.com/300",
    demoLink: "https://example.com/project-nine",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-button">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
