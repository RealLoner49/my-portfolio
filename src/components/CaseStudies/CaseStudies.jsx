import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./CaseStudies.css";

const caseStudies = [
  {
    title: "How a business website builds trust before the first call",
    type: "Business Website",
    summary:
      "A practical breakdown of page structure, service clarity, credibility sections, and contact flow for service-based businesses.",
  },
  {
    title: "What makes an e-commerce homepage easier to shop",
    type: "E-commerce",
    summary:
      "A short case study on product discovery, visual hierarchy, responsive product grids, and buyer confidence.",
  },
  {
    title: "Turning a creative portfolio into a client acquisition tool",
    type: "Portfolio Strategy",
    summary:
      "How strong imagery, simple navigation, proof, and clear calls-to-action help creative professionals win better inquiries.",
  },
];

const CaseStudies = () => (
  <section id="case-studies" className="section case-studies-section">
    <div className="section-heading">
      <span className="eyebrow">Case studies</span>
      <h2>Writing about the thinking behind the work</h2>
      <p>
        A blog and case study area gives future clients a better sense of how I
        solve problems, not just what the finished pages look like.
      </p>
    </div>

    <div className="case-study-grid">
      {caseStudies.map((item) => (
        <article className="case-study-card" key={item.title}>
          <span>{item.type}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <a href="#contact">
            Discuss a similar project <FaArrowRight />
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default CaseStudies;
