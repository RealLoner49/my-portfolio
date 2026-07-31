import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCode, FaLayerGroup, FaUsers } from "react-icons/fa";
import "./About.css";

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
      <div className="about-orb orb-one"></div>
      <div className="about-orb orb-two"></div>

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <span className="eyebrow">About me</span>
        <h2>Creative developer, practical builder.</h2>
        <p>
          I turn ideas into websites and apps that look sharp, feel smooth, and
          work reliably across devices.
        </p>
      </motion.div>

      <div className="about-layout">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -45, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="image-ring"></div>
          <img src="/VICTOR.png" alt="Developer avatar of Victor Ogbuefi" />

          <div className="about-badge badge-one">Full-stack</div>
          <div className="about-badge badge-two">Premium UI</div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p>
            I am Victor Ogbuefi, a full-stack developer based in Lagos, Nigeria,
            working with founders, small businesses, creators, and growing brands
            that need a reliable digital presence. I care about the full journey:
            the first impression, the message, the user flow, the build quality,
            and what happens after launch.
          </p>

          <p>
            My work sits between design and engineering. I plan clean page
            structures, write modern React and JavaScript, connect APIs and
            databases when needed, and make sure every project feels fast,
            responsive, and easy to trust on mobile and desktop.
          </p>

          <p>
            I am especially strong at building e-commerce experiences, business
            websites, landing pages, portfolios, dashboards, and brand-focused
            websites that communicate clearly to international audiences.
          </p>

          <div className="strength-grid">
            {strengths.map((item, index) => (
              <motion.article
                className="strength-card"
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="strength-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>

          <div className="tech-stack">
            <h3>Tools I use</h3>

            <div className="stack-grid">
              {stack.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.82 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
