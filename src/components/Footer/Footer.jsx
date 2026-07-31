import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const links = ["home", "about", "skills", "services", "projects", "experience", "contact"];

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div>
        <h2>Victor Ogbuefi</h2>
        <p>
          Full-stack developer building professional websites, e-commerce
          stores, landing pages, and digital products for ambitious brands.
        </p>
        <div className="footer-socials">
          <a href="https://github.com/RealLoner49" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.tiktok.com/@mars_3232" target="_blank" rel="noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://www.instagram.com/victormichael7851" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/2348028084696" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div>
        <h3>Navigation</h3>
        <nav className="footer-links" aria-label="Footer navigation">
          {links.map((link) => (
            <a href={`#${link}`} key={link}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      <div>
        <h3>Contact</h3>
        <a href="mailto:ogbuefivictor076@gmail.com">ogbuefivictor076@gmail.com</a>
        <a href="tel:+2348028084696">+234 802 808 4696</a>
        <span>Lagos, Nigeria - Available globally</span>
      </div>
    </div>

    <div className="footer-bottom">
      <span>Copyright {new Date().getFullYear()} Victor Ogbuefi. All rights reserved.</span>
      <a href="/CV.pdf" download>Download CV</a>
    </div>
  </footer>
);

export default Footer;
