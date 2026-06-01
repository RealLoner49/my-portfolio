import React from "react";
import { FaBullseye, FaComments, FaRocket, FaTools } from "react-icons/fa";
import './Process.css';

const steps = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Tell me the idea",
    text: "You share what you want to build, who it is for, the pages you need, and any examples you like.",
    details: ["Goal of the website", "Pages and features", "Style references"],
    output: "Clear project direction",
  },
  {
    number: "02",
    icon: <FaBullseye />,
    title: "We agree on the plan",
    text: "I turn the idea into a simple build plan so you know what will be made before coding starts.",
    details: ["Section structure", "Content flow", "Timeline and priorities"],
    output: "Build roadmap",
  },
  {
    number: "03",
    icon: <FaTools />,
    title: "I build and refine",
    text: "I create the site, make it responsive, add animations, and send you previews for feedback.",
    details: ["Desktop and mobile views", "Smooth interactions", "Feedback updates"],
    output: "Working preview",
  },
  {
    number: "04",
    icon: <FaRocket />,
    title: "Launch and handover",
    text: "I test the final site, deploy it, and give you the important links and notes you need.",
    details: ["Live deployment", "Basic SEO checks", "Handover support"],
    output: "Live website",
  },
];

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="section-heading">
        <span className="eyebrow">Process</span>
        <h2>How we turn your idea into a live website</h2>
        <p>
          No confusing tech talk. You bring the idea, I guide the build, and
          you always know what stage your project is in.
        </p>
      </div>

      <div className="process-summary">
        <div>
          <span>You bring</span>
          <strong>Your idea, content, brand details, and feedback.</strong>
        </div>
        <div>
          <span>I handle</span>
          <strong>Design, development, responsiveness, testing, and launch.</strong>
        </div>
        <div>
          <span>You get</span>
          <strong>A polished website that is ready to share with real users.</strong>
        </div>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-card" data-step={step.number} key={step.number}>
            <div className="process-card-top">
              <span className="process-number">{step.number}</span>
              <span className="process-icon">{step.icon}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <ul className="process-details">
              {step.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="process-output">
              <span>You get</span>
              <strong>{step.output}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Process;

