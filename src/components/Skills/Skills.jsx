import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaMobileAlt,
  FaReact,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import { SiFirebase, SiJavascript, SiSupabase } from "react-icons/si";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact />, level: "88%" },
      { name: "JavaScript", icon: <SiJavascript />, level: "88%" },
      { name: "HTML & CSS", icon: <FaCode />, level: "94%" },
      { name: "Responsive UI", icon: <FaMobileAlt />, level: "92%" },
    ],
  },
  {
    title: "Backend & Data",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaServer />, level: "80%" },
      { name: "Firebase", icon: <SiFirebase />, level: "78%" },
      { name: "Supabase", icon: <SiSupabase />, level: "78%" },
      { name: "SQL & Databases", icon: <FaDatabase />, level: "75%" },
    ],
  },
  {
    title: "Product & Delivery",
    icon: <FaFigma />,
    skills: [
      { name: "UI/UX Planning", icon: <FaFigma />, level: "86%" },
      { name: "SEO Structure", icon: <FaSearch />, level: "82%" },
      { name: "Git Workflow", icon: <FaGitAlt />, level: "84%" },
      { name: "React Native", icon: <FaMobileAlt />, level: "74%" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2>Skills grouped by how they help your project</h2>
        <p>
          A practical stack for planning, building, integrating, optimizing, and
          maintaining modern websites and applications.
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
          <h3>From interface to launch-ready functionality.</h3>
          <p>
            I use these tools to create responsive layouts, product flows,
            authentication, database features, API integrations, SEO structure,
            and clean deployment handovers.
          </p>

          <div className="skills-panel-stats">
            <div>
              <strong>12+</strong>
              <span>Practical tools</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Skill categories</span>
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

        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              className="skill-group"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
            >
              <div className="skill-group-title">
                <span>{group.icon}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skills-list">
                {group.skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-row-icon">{skill.icon}</div>
                    <div className="skill-row-main">
                      <div className="skill-row-title">
                        <h4>{skill.name}</h4>
                        <span>{skill.level}</span>
                      </div>
                      <div className="skill-bar">
                        <span style={{ width: skill.level }}></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
