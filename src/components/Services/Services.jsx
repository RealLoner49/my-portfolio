import React from "react";
import { FaMobileAlt, FaPalette, FaRocket, FaSearch, FaShoppingBag, FaTools } from "react-icons/fa";
import './Services.css';

const services = [
  {
    icon: <FaRocket />,
    title: "Landing Pages",
    text: "High-converting pages for products, creators, services, and launches.",
    bestFor: "Launches & campaigns",
    includes: ["Hero section", "Lead capture", "Fast mobile layout"],
  },
  {
    icon: <FaShoppingBag />,
    title: "E-commerce Stores",
    text: "Modern product catalogs, carts, checkout flows, and admin-friendly layouts.",
    bestFor: "Online stores",
    includes: ["Product pages", "Cart experience", "Checkout flow"],
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    text: "Clean interfaces, thoughtful user flows, and premium visual direction.",
    bestFor: "Better user trust",
    includes: ["Wireframes", "Visual system", "Responsive screens"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Experiences",
    text: "Responsive websites and React Native app screens that feel natural on phones.",
    bestFor: "Mobile-first products",
    includes: ["Phone layouts", "Touch-friendly UI", "App screens"],
  },
  {
    icon: <FaTools />,
    title: "Web App Builds",
    text: "Frontend and backend features with APIs, auth, dashboards, and databases.",
    bestFor: "Functional platforms",
    includes: ["Authentication", "Dashboards", "Database setup"],
  },
  {
    icon: <FaSearch />,
    title: "SEO & Optimization",
    text: "Speed, metadata, structure, and content improvements for better visibility.",
    bestFor: "Growth & visibility",
    includes: ["Page speed", "SEO structure", "Metadata cleanup"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="section-heading">
        <span className="eyebrow">Services</span>
        <h2>What I can build for you</h2>
        <p>
          From a clean brand website to a full web app, I help shape the idea,
          build the interface, and make it feel ready for real users.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-head">
              <div className="service-icon">{service.icon}</div>
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="service-chip">{service.bestFor}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul className="service-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

