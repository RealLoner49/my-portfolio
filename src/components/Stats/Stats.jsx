import React from "react";
import { FaCheckCircle, FaClock, FaHandshake, FaRocket } from "react-icons/fa";
import "./Stats.css";

const stats = [
  { icon: <FaRocket />, value: "40+", label: "Projects Completed" },
  { icon: <FaHandshake />, value: "20+", label: "Happy Clients" },
  { icon: <FaClock />, value: "3+", label: "Years Experience" },
  { icon: <FaCheckCircle />, value: "99%", label: "Client Satisfaction" },
];

const Stats = () => (
  <section id="stats" className="stats-section" aria-label="Portfolio statistics">
    <div className="stats-grid">
      {stats.map((item) => (
        <article className="stats-card" key={item.label}>
          <span className="stats-icon">{item.icon}</span>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  </section>
);

export default Stats;
