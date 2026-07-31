import React, { useState, useEffect } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import './Navbar.css';

const navItems = ["home", "about", "skills", "services", "projects", "experience", "contact"];

const Navbar = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = document.querySelectorAll("header[id], section[id]");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.classList.toggle("nav-locked", isMenuOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="nav-container">
        <button className="nav-logo" onClick={() => handleNavClick("home")} aria-label="Go to home">
          Victor <span>Ogbuefi</span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={activeSection === item ? "active" : ""}
                onClick={() => handleNavClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

