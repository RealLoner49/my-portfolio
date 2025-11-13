import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-container">
        {/* About Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/Img.jpg" alt="Victor Ogbuefi" />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>
          <p>
            I’m a <strong>passionate full-stack web developer</strong> who loves
            combining clean design with smooth functionality. My work revolves
            around turning creative ideas into interactive, user-focused
            digital experiences.
          </p>
          <p>
            I specialize in crafting dynamic and visually appealing web
            applications using modern technologies like{" "}
            <b>React</b>, <b>Node.js</b>, <b>MongoDB</b>, and <b>React Native</b>.
            I believe that every project deserves its own character, blending
            both aesthetics and performance.
          </p>
          <p>
            When I’m not coding, I explore <b>UI/UX design trends</b>, build fun
            mini-projects, or mentor beginners stepping into the world of web
            development.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <i className="fas fa-code"></i>
              <div>
                <h4>Clean Code & Architecture</h4>
                <p>
                  I write scalable, maintainable, and efficient code that ensures
                  long-term stability.
                </p>
              </div>
            </div>
            <div className="highlight">
              <i className="fas fa-paint-brush"></i>
              <div>
                <h4>Creative Design</h4>
                <p>
                  I bring ideas to life with sleek, modern layouts that captivate
                  users and enhance usability.
                </p>
              </div>
            </div>
            <div className="highlight">
              <i className="fas fa-users"></i>
              <div>
                <h4>Collaboration & Leadership</h4>
                <p>
                  I work well in teams, contributing to open-source projects and
                  leading small development groups.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h3>My Tech Stack</h3>
            <div className="stack-grid">
              <span>React</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>MongoDB</span>
              <span>React Native</span>
              <span>JavaScript</span>
              <span>HTML </span>
              <span>Css</span>
              <span>Git & Github</span>
              <span>Firebase</span>
            </div>
          </div>

          <div className="achievements">
            <h3>Achievements</h3>
            <ul>
              <li>🏆 Completed 20+ web projects for clients and startups</li>
              <li>💻 Contributed to 3 open-source projects on GitHub</li>
              <li>🌐 Improved site performance by up to 60% through optimization</li>
              <li>📚 Mentor for beginner developers at local workshops</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
