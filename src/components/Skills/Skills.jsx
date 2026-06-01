import React from "react";
import { motion } from "framer-motion";
import './Skills.css';

const skills = [
  { name: "HTML", icon: "fab fa-html5", level: "95%", area: "Structure" },
  { name: "CSS", icon: "fab fa-css3-alt", level: "92%", area: "Visual UI" },
  { name: "JavaScript", icon: "fab fa-js", level: "88%", area: "Interaction" },
  { name: "React", icon: "fab fa-react", level: "86%", area: "Frontend" },
  { name: "Node.js", icon: "fab fa-node-js", level: "80%", area: "Backend" },
  { name: "Firebase", icon: "fas fa-fire", level: "78%", area: "Auth & data" },
  { name: "SQL", icon: "fas fa-database", level: "75%", area: "Database" },
  { name: "React Native", icon: "fab fa-react", level: "74%", area: "Mobile" },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2>Technology I use to bring ideas alive</h2>
        <p>
          A practical stack for building modern websites, apps, dashboards, and
          mobile-friendly experiences.
        </p>
      </div>

      <div className="skills-dashboard">
        <motion.div
          className="skills-panel"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="skills-panel-kicker">Core stack</span>
          <h3>Tools I use to design, build, and ship.</h3>
          <p>
            My stack covers the full path from interface design to real app
            functionality: responsive layouts, interactive flows, data, auth,
            and mobile-ready experiences.
          </p>

          <div className="skills-panel-stats">
            <div>
              <strong>8</strong>
              <span>Core tools</span>
            </div>
            <div>
              <strong>Full</strong>
              <span>Web workflow</span>
            </div>
          </div>

          <div className="skills-workflow">
            <span>How I use them</span>
            <ul>
              <li>Plan the page structure and user flow.</li>
              <li>Build responsive interfaces with clean components.</li>
              <li>Connect auth, data, APIs, and deployment when needed.</li>
            </ul>
          </div>
        </motion.div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              className="skill-row"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="skill-row-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-row-main">
                <div className="skill-row-title">
                  <h3>{skill.name}</h3>
                  <span>{skill.area}</span>
                </div>
                <div className="skill-bar">
                  <span style={{ width: skill.level }}></span>
                </div>
              </div>
              <strong>{skill.level}</strong>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

