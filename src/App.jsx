import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

import BackToTop from "./components/BacktoTop";

import "./style.css";

function App() {
  return (
  <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Services />
  <Projects />
  <Testimonials />
  <Contact />
  <CallToAction />
  <Footer />
  <BackToTop />
  </>
  );
}

export default App;
