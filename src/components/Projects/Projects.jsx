import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import './Projects.css';

const projects = [
  {
    title: "Ama Store",
    category: "Ama Store Collection",
    desc: "A fully responsive online store developed with React, featuring an elegant product catalog, smooth navigation, and a user-friendly shopping experience."    img: "/Ama-Store.jpeg",
    imagePosition: "center center",
    live: "https://ama-store-psi.vercel.app/",
    github: "https://github.com/RealLoner49/AMA-STORE",
    tags: ["Html", "Javascript", "Responsive Design"],
  },
  {
    title: "Photography Website",
    category: "Photography Portfolio",
    desc: "A modern photography portfolio designed to showcase creative work through immersive galleries.",
    img: "/photography.jpeg",
    imagePosition: "center center",
    live: "https://photo-graphy-puce.vercel.app/",
    github: "https://github.com/RealLoner49/PhotoGraphy",
    tags: ["React", "Portfolio", "Responsive Design"],
  },
  {
    title: "Dripova Wears",
    category: "Fashion e-commerce",
    desc: "A sleek fashion storefront with bold visuals, product-first sections, and a modern shopping feel.",
    img: "/Dripova-wears.jpeg",
    imagePosition: "left top",
    live: "https://dripova-wears.vercel.app/",
    github: "https://github.com/RealLoner49/Dripova-Wears",
    tags: ["React", "Responsive UI", "Vercel"],
  },
  {
    title: "Ome Electrical Company",
    category: "Electrical Supply & Services",
    desc: "A modern business website designed to showcase electrical products, and company expertise.",
    img: "/Ome-Electrical.jpeg",
    imagePosition: "center center",
    live: "https://ome-electrical-company.vercel.app/",
    github: "https://github.com/RealLoner49/Ome-Electrical-Company",
    tags: ["React", "Supabase", "Responsive Design"]
  },
  {
    title: "Nova Gadget",
    category: "Marketplace for Gadgets",
    desc: "A responsive online marketplace for electronic gadgets, built to deliver a fast and engaging shopping experience.",
    img: "/nova-gadget.jpeg",
    imagePosition: "center center",
    live: "https://nova-gadget.vercel.app/",
    github: "https://github.com/RealLoner49/nova-gadget",
    tags: ["React", "Firebase", "UI/UX"],
  },
  {
    title: "AURA AI Assistant",
    category: "Product concept",
    desc: "An upcoming AI assistant interface focused on quick prompts, useful previews, and a polished mobile-first UX.",
    img: "/coming-soon.jpeg",
    imagePosition: "center center",
    live: "",
    github: "",
    tags: ["AI", "UX", "Coming Soon"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span className="eyebrow">Selected work</span>
        <h2>Projects with real product energy</h2>
        <p>
          A few builds that show my eye for layout, interaction, and practical
          user journeys.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isLive = Boolean(project.live);
          return (
            <motion.article
              key={project.title}
              className={`project-card ${!isLive ? "disabled" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {isLive ? (
                <a
                  className="project-img"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live site`}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    style={{ objectPosition: project.imagePosition }}
                  />
                  <div className="project-category">{project.category}</div>
                </a>
              ) : (
                <div className="project-img">
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    style={{ objectPosition: project.imagePosition }}
                  />
                  <div className="project-category">{project.category}</div>
                </div>
              )}

              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {isLive && (
                      <a
                        className="live-link"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live project`}
                      >
                        Open Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
                <p>{project.desc}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

