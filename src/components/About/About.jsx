import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCode, FaLayerGroup, FaUsers } from "react-icons/fa";
import './About.css';

const strengths = [
  {
    icon: <FaLayerGroup />,
    title: "Product-minded UI",
    text: "I design screens around clarity, flow, and the actions users need to take next.",
  },
  {
    icon: <FaCode />,
    title: "Clean implementation",
    text: "Reusable components, responsive layouts, and code that is easy to maintain.",
  },
  {
    icon: <FaBolt />,
    title: "Performance focus",
    text: "Fast-loading pages, smooth motion, and practical optimization from the start.",
  },
  {
    icon: <FaUsers />,
    title: "Client collaboration",
    text: "Clear communication, honest timelines, and thoughtful decisions at every stage.",
  },
];

const stack = [
  "React",
  "JavaScript",
  "Node.js",
  "Firebase",
  "Supabase",
  "MongoDB",
  "CSS",
  "SQL",
  "React Native",
  "Git",
  "Responsive Design",
  "SEO",
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <span className="eyebrow">About me</span>
        <h2>Creative developer, practical builder.</h2>
        <p>
          I turn ideas into websites and apps that look sharp, feel smooth, and
          work reliably across devices.
        </p>
      </div>

      <div className="about-layout">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/Img3.jpeg" alt="Victor Ogbuefi" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I am Victor Ogbuefi, a full-stack web developer who enjoys combining
            strong visuals with solid engineering. My goal is simple: make every
            project feel premium, load quickly, and help the owner get results.
          </p>
          <p>
            I work across frontend, backend, and mobile experiences, with a
            strong focus on React, modern JavaScript, clean component systems,
            and responsive design.
          </p>

          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="strength-card" key={item.title}>
                <div className="strength-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="tech-stack">
            <h3>Tools I use</h3>
            <div className="stack-grid">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

