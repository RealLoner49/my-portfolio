import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "./Hero.css";

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "3+", label: "Years building" },
  { value: "100%", label: "Responsive focus" },
];

const skills = ["Html", "React", "React Native", "Javascript"];

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
    
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <span className="eyebrow">Available for freelance projects</span>

          <h1>
            Building clean, fast & premium web experiences.
          </h1>

          <p className="subtitle">
            Hi, I am Victor Ogbuefi, a creative full-stack developer focused on
            responsive websites, smooth user experiences, and modern digital
            products for ambitious brands.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Hire Me</a>
            <a href="#projects" className="btn secondary">View Work</a>
            <a href="/CV.pdf" className="btn ghost" download>Download CV</a>
          </div>

          <div className="hero-stats">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="social-icons">
            <a href="https://github.com/RealLoner49" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.tiktok.com/@mars_3232" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="https://wa.me/2348028084696?text=Hi%20Victor!%20I%20just%20visited%20your%20portfolio!" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/victormichael7851" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual no-image"
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <div className="orbit-ring"></div>

          <div className="dev-card">
            <div className="card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-lines">
              <p><span>const</span> developer = "Victor";</p>
              <p><span>stack</span> = ["React", "Node", "UI"];</p>
              <p><span>goal</span> = "Build premium products";</p>
            </div>

            <div className="status-box">
              <div>
                <small>Status</small>
                <strong>Open to work</strong>
              </div>
              <span className="live-dot"></span>
            </div>
          </div>

          {skills.map((skill, index) => (
            <div className={`skill-chip chip-${index + 1}`} key={skill}>
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;