import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "fab fa-html5", level: "95%" },
  { name: "CSS", icon: "fab fa-css3-alt", level: "90%" },
  { name: "JavaScript", icon: "fab fa-js", level: "88%" },
  { name: "React", icon: "fab fa-react", level: "82%" },
  { name: "React Native", icon: "fab fa-react", level: "80%" },
  { name: "Node.js", icon: "fab fa-node-js", level: "80%" },
  { name: "SQL", icon: "fas fa-database", level: "75%" },
  { name: "Java", icon: "fab fa-java", level: "70%" },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="skills-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Over the years, I’ve mastered several technologies that allow me to build
        fast, scalable, and visually striking digital experiences.
      </motion.p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card enhanced"
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className={skill.icon}></i>
            <h4>{skill.name}</h4>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: skill.level }}></div>
            </div>
            <span className="skill-percent">{skill.level}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="quote-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          “Learning never stops. I constantly improve my skills and explore new
          technologies to stay ahead in this ever-evolving tech world.”
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
