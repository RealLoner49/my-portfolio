import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import './Hero.css';

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "3+", label: "Years building" },
  { value: "100%", label: "Responsive focus" },
];

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Available for freelance projects</span>
          <h1>
            I build polished web experiences for ambitious brands.
          </h1>
          <p className="subtitle">
            Hi, I am Victor Ogbuefi, a creative full-stack developer focused on
            fast, responsive, and conversion-ready websites with clean UI and
            memorable interactions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Hire Me
            </a>
            <a href="#projects" className="btn secondary">
              View Work
            </a>
            <a href="/CV.pdf" className="btn ghost" download>
              Download CV
            </a>
          </div>

          <div className="hero-stats" aria-label="Portfolio highlights">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="social-icons" aria-label="Social links">
            <a href="https://github.com/RealLoner49" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.tiktok.com/@mars_3232" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="whatsapp://send?phone=2348028084696&text=Hi%20Victor!%20I%20just%20visited%20your%20portfolio!" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/victormichael7851" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="portrait-card">
            <img src="/Img2.jpg" alt="Victor Ogbuefi" />
            <div className="availability-pill">
              <span></span>
              Open to work
            </div>
          </div>
          <div className="floating-note note-top">React</div>
          <div className="floating-note note-bottom">UI/UX</div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

