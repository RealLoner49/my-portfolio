import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCodeBranch, FaLaptopCode } from "react-icons/fa";
import "./Experience.css";

const experience = [
  {
    period: "2024 - Present",
    role: "Freelance Full-Stack Developer",
    company: "Remote clients and small businesses",
    icon: <FaBriefcase />,
    points: [
      "Build responsive business websites, e-commerce stores, and landing pages.",
      "Connect forms, APIs, authentication, dashboards, and database-backed features.",
      "Collaborate with clients from idea planning through launch and maintenance.",
    ],
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer",
    company: "Product and portfolio projects",
    icon: <FaLaptopCode />,
    points: [
      "Created React interfaces with polished layouts, reusable components, and animation.",
      "Improved mobile usability, page speed, and visual consistency across projects.",
      "Worked with Firebase, Supabase, and deployment workflows for live products.",
    ],
  },
  {
    period: "2021 - 2023",
    role: "Web Development Foundation",
    company: "Self-directed learning and client practice",
    icon: <FaCodeBranch />,
    points: [
      "Built a foundation in HTML, CSS, JavaScript, Git, responsive design, and UI principles.",
      "Practiced converting business ideas into clear page structures and user flows.",
      "Shipped early websites that shaped a practical, client-focused workflow.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section experience-section">
    <div className="section-heading">
      <span className="eyebrow">Experience</span>
      <h2>Work timeline and professional growth</h2>
      <p>
        My work combines practical development, product thinking, and clear
        communication from planning to launch.
      </p>
    </div>

    <div className="experience-timeline">
      {experience.map((item, index) => (
        <motion.article
          className="experience-item"
          key={item.role}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className="experience-icon">{item.icon}</div>
          <div className="experience-content">
            <span>{item.period}</span>
            <h3>{item.role}</h3>
            <strong>{item.company}</strong>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;
