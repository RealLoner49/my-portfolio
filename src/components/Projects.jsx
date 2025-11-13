import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Food Delivery App",
    desc: "A responsive web app for food ordering, built with React, Node.js, and MongoDB.",
    img: "/Hero.png",
    live: "https://your-foodapp-demo.vercel.app",
    github: "https://github.com/yourusername",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio with smooth animations and a clean UI showcasing my work.",
    img: "/Hero.png",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername",
  },
  {
    title: "E-Commerce Store",
    desc: "An online store with cart and checkout, powered by React and Firebase.",
    img: "/Hero.png",
    live: "https://your-ecommerce-demo.vercel.app",
    github: "https://github.com/yourusername",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="projects-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Here are some of the projects I’ve built using modern web technologies.
        Click on a project to explore more.
      </motion.p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="project-img">
              <img src={proj.img} alt={proj.title} />
              <div className="project-overlay">
                <a href={proj.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
                <a href={proj.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
