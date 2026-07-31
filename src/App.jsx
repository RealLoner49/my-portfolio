import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Stats from "./components/Stats/Stats";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";

import BackToTop from "./components/BacktoTop/BacktoTop";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Certifications />
      <CaseStudies />
      <Process />
      <Testimonials />
      <Contact />
      <CallToAction />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
