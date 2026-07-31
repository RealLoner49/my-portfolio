import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import './Projects.css';

const projects = [
  {
    title: "Ama Store",
    category: "Ama Store Collection",
    desc: "A fully responsive online store developed with React, featuring an elegant product catalog, smooth navigation, and a user-friendly shopping experience.",    
    img: "/Ama-store.jpeg",
    imagePosition: "center center",
    live: "https://ama-store-psi.vercel.app/",
    github: "https://github.com/RealLoner49/AMA-STORE",
    tags: ["HTML", "JavaScript", "Responsive"],
    result: "Product browsing built for quick shopping decisions.",
    problem: "The store needed a clean way to present products and help visitors move quickly from interest to action.",
    solution: "I created a responsive storefront with clear categories, focused product visuals, and simple navigation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "Photography Website",
    category: "Photography Portfolio",
    desc: "A modern photography portfolio designed to showcase creative work through immersive galleries.",
    img: "/photography.jpeg",
    imagePosition: "center center",
    live: "https://photo-graphy-puce.vercel.app/",
    github: "https://github.com/RealLoner49/PhotoGraphy",
    tags: ["React", "Portfolio", "Gallery UI"],
    result: "Visual-first layout for showcasing creative work.",
    problem: "Creative work needed to feel premium without hiding the images behind heavy interface elements.",
    solution: "I built an immersive gallery layout with responsive sections and a polished portfolio flow.",
    techStack: ["React", "CSS", "Vercel"],
  },
  {
    title: "Dripova Wears",
    category: "Fashion e-commerce",
    desc: "A sleek fashion storefront with bold visuals, product-first sections, and a modern shopping feel.",
    img: "/Dripova-wears.jpeg",
    imagePosition: "left top",
    live: "https://dripova-wears.vercel.app/",
    github: "https://github.com/RealLoner49/Dripova-Wears",
    tags: ["React", "Fashion UI", "Vercel"],
    result: "Bold storefront experience for a fashion audience.",
    problem: "The fashion brand needed a stylish online presence that matched the energy of its products.",
    solution: "I designed a product-first shopping experience with bold visuals, mobile-friendly layout, and clear calls-to-action.",
    techStack: ["React", "CSS", "Vercel"],
  },
  {
    title: "Ome Electrical Company",
    category: "Electrical Supply & Services",
    desc: "A modern business website designed to showcase electrical products, and company expertise.",
    img: "/Ome-Electrical.jpeg",
    imagePosition: "center center",
    live: "https://ome-electrical-company.vercel.app/",
    github: "https://github.com/RealLoner49/Ome-Electrical-Company",
    tags: ["React", "Supabase", "Business Site"],
    result: "Company presence designed for credibility and discovery.",
    problem: "The company needed to communicate its products and services with more trust and clarity.",
    solution: "I built a professional company website with structured service sections, product visibility, and contact pathways.",
    techStack: ["React", "Supabase", "CSS"],
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
    result: "Marketplace flow for browsing gadget products.",
    problem: "Gadget buyers needed a faster way to browse categories and understand product options.",
    solution: "I created a marketplace-style interface with clean product sections and Firebase-backed app direction.",
    techStack: ["React", "Firebase", "CSS"],
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
    result: "Concept in progress for a polished assistant workflow.",
    problem: "AI tools can feel complex when prompts, previews, and actions are not organized clearly.",
    solution: "I am shaping a mobile-first assistant interface with simple prompts, useful previews, and clear action states.",
    techStack: ["React", "AI UX", "Product Design"],
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
              className={`project-card ${project.featured ? "featured" : ""} ${!isLive ? "disabled" : ""}`}
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
                  {project.featured && <span className="featured-badge">Featured</span>}
                </a>
              ) : (
                <div className="project-img">
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    style={{ objectPosition: project.imagePosition }}
                  />
                  <div className="project-category">{project.category}</div>
                  {project.featured && <span className="featured-badge">Featured</span>}
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
                        <FaExternalLinkAlt /> Live
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
                <div className="project-details">
                  <div>
                    <span>Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span>Solution</span>
                    <p>{project.solution}</p>
                  </div>
                </div>
                <div className="project-result">
                  <span>Outcome</span>
                  <strong>{project.result}</strong>
                </div>
                <div className="project-stack">
                  <span>Tech stack</span>
                  <div>
                    {project.techStack.map((tool) => (
                      <strong key={tool}>{tool}</strong>
                    ))}
                  </div>
                </div>
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

