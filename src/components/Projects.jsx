import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "PhotoGraphy Website",
    desc: "A modern photography website showcasing curated galleries, lazy-loaded images, and smooth animations — built with React and deployed on Vercel.",
    img: "/Hero.png",
    live: "https://photo-graphy-puce.vercel.app/",
    github: "https://github.com/RealLoner49/PhotoGraphy",
  },
  {
    title: "My-AI App",
    desc: "My-AI App — lightweight React-Native with local state-based prompt handling, result previews, and polished UX.",
    img: "/Hero.png",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Store",
    desc: "Full-featured e-commerce demo with product catalog, shopping cart, and Firebase-authenticated checkout.",
    img: "/Hero.png",
    live: "#",
    github: "#",
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
        {projects.map((proj, index) => {
          const isAvailable = proj.live && proj.live !== "#" && proj.live.trim() !== "";
          const hasGithub = proj.github && proj.github !== "#" && proj.github.trim() !== "";
          const Card = isAvailable ? motion.a : motion.div;
          const cardProps = isAvailable
            ? { href: proj.live, target: "_blank", rel: "noreferrer" }
            : { role: "button", "aria-disabled": "true" };

          return (
            <Card
              key={index}
              {...cardProps}
              className={`project-card ${!isAvailable ? "disabled" : ""}`}
              whileHover={isAvailable ? { scale: 1.05 } : {}}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="project-img">
                <img src={proj.img} alt={proj.title} />
                <div className="project-overlay">
                  {isAvailable && (
                    <a href={proj.live} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}

                  {hasGithub && (
                    <a href={proj.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  )}

                  {!isAvailable && !hasGithub && (
                    <span className="coming-soon">Coming soon</span>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
