import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";

import BackToTop from "./components/BacktoTop/BacktoTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
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
