import React from "react";
import { FaAws, FaFreeCodeCamp, FaGoogle, FaMeta, FaMicrosoft } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";
import "./Certifications.css";

const certifications = [
  { issuer: "Google", title: "UX Design and Digital Skills", icon: <FaGoogle /> },
  { issuer: "Meta", title: "Frontend Development Foundations", icon: <FaMeta /> },
  { issuer: "Microsoft", title: "Web Fundamentals and Cloud Concepts", icon: <FaMicrosoft /> },
  { issuer: "AWS", title: "Cloud Practitioner Learning Path", icon: <FaAws /> },
  { issuer: "freeCodeCamp", title: "Responsive Web Design", icon: <FaFreeCodeCamp /> },
  { issuer: "Coursera", title: "Professional Development Courses", icon: <SiCoursera /> },
];

const Certifications = () => (
  <section id="certifications" className="section certifications-section">
    <div className="section-heading">
      <span className="eyebrow">Certifications</span>
      <h2>Continuous learning from global platforms</h2>
      <p>
        I keep improving through recognized learning paths across frontend,
        design, cloud, and professional software development.
      </p>
    </div>

    <div className="certification-grid">
      {certifications.map((item) => (
        <article className="certification-card" key={item.issuer}>
          <span>{item.icon}</span>
          <div>
            <h3>{item.issuer}</h3>
            <p>{item.title}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Certifications;
