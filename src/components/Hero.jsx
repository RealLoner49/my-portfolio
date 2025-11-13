import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header id="home" className="hero">
      {/* Background glow orbs */}
      <div className="floating-orbs">
        <span className="orb orb1"></span>
        <span className="orb orb2"></span>
        <span className="orb orb3"></span>
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hey, I'm <span>Victor Ogbuefi</span>
          </h1>
          <h3 className="tagline">Creative Web Developer & Designer</h3>

          <p className="subtitle">
            I build <strong>beautiful, high-performance websites</strong> that blend creativity and technology.  
            My goal is to design clean, modern user experiences that connect people with ideas.
          </p>

          <p className="extended-text">
            With experience in both frontend and backend, I transform concepts into 
            responsive, interactive digital products using tools like <b>React</b>, 
            <b> Node.js</b>, and <b>React Native</b>.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary glow">
              🚀 Hire Me
            </a>
            <a href="#about" className="btn secondary">
              Learn More
            </a>
            <a href="/CV.pdf" className="btn outline" download>
              Download CV
            </a>
          </div>

          <div className="mini-section">
            <h4>What I Do</h4>
            <ul>
              <li>💡 UI/UX Design focused on simplicity & user flow</li>
              <li>⚙️ Full Stack Development for modern web apps</li>
              <li>📱 Responsive Websites for every device</li>
              <li>📈 SEO Optimization to boost visibility</li>
            </ul>
          </div>

          <div className="social-icons">
            <a href="https://github.com/RealLoner49">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.tiktok.com/@mars_3232">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="whatsapp://send?phone=2348028084696&text=Hi%20Victor!%20I%20just%20visited%20your%20portfolio!">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/victormichael7851">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-img-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="hero-img-glow"></div>
          <img src="/Img2.jpg" alt="Victor Ogbuefi" className="hero-img" />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
