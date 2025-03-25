import React from "react";
import "../styles.css";
import "./services.css";

const projects = [
  { title: "Connet Technologies - CCTV", image: "connet-demo.jpg", demoLink: "https://connettechnologies.com/" },
  { title: "MW INTERNTIONAL", image: "mw-demo.jpg", demoLink: "https://mwinternationalacademy.com" },
  { title: "Pawan Meat Shop - Fresh Chicken & Mutton", image: "pawan-demo.jpg", demoLink: "https://pawanmeatshop.com" },
  { title: "PFIT Fitness Gym", image: "pfit-demo.jpg", demoLink: "https://www.pfitfitness.com/" },
  { title: "HR Digital Pvt Ltd", image: "hr-demo.jpg", demoLink: "https://hrdigitalmarketing.in" },
  { title: "MN Interior", image: "mn-demo.jpg", demoLink: "https://mn-interior-dwxvjak810u4rvpk.builder-preview.com" },
];

const tieUps = [
  { name: "MW International", image: "mw-demo.jpg", website: "https://mwinternationalacademy.com" },
  { name: "HD GLOW SPA", image: "hd-demo.jpg", website: "https://hdglowluxuryspa.website3.me/" },
];

const packages = [
  {
    id: 1,
    image: "p1.jpg",
  },
  {
    id: 2,
    image: "p2.jpg",
  },
  {
    id: 3,
    image: "p3.jpg",
  },
];

const OnePageApp = () => {
  return (
    <div className="one-page">
      {/* About Section */}
      <div className="page about">
      {/* Hero Section */}
      <section className="hero">
        <img src="about-hero.jpg" alt="HR Digital Team" className="hero-img" />
        <h1>About HR Digital Pvt. Ltd.</h1>
        <p>Empowering businesses with cutting-edge HR technology solutions.</p>
      </section>

      {/* Company Overview */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          HR Digital Pvt. Ltd. is a technology-driven company dedicated to transforming human resource processes 
          through digital innovation. Our mission is to create intelligent, user-friendly HR solutions that enhance 
          business efficiency and employee satisfaction.
        </p>

        <h2>Our Vision</h2>
        <p>
          We aim to redefine the future of HR management by integrating AI, automation, and cloud technology into 
          workforce solutions. Our commitment is to help businesses streamline their HR operations with smart digital tools.
        </p>

        <img src="hr-solutions.jpg" alt="HR solutions" className="about-image" />
      </section>
    </div>

      {/* Projects Section */}
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

      {/* Tie-Ups Section */}
      <section className="image-cards">
      <h2>Our Partners</h2>
      <div className="card-container">
        {tieUps.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </section>

      {/* Packages Section */}
      <section className="packages-section">
      <h2>Our Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="image-container">
              <img src={pkg.image} alt={pkg.name} className="package-image" />
            </div>
            <div className="package-content">

            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default OnePageApp;
