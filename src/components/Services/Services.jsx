import React from "react";
import {
  FaBuilding,
  FaCode,
  FaPlug,
  FaRocket,
  FaSearch,
  FaShoppingBag,
  FaTools,
} from "react-icons/fa";
import './Services.css';

const services = [
  {
    icon: <FaCode />,
    title: "Website Development",
    text: "Custom websites built with clean code, responsive layouts, and strong performance.",
    bestFor: "Professional web presence",
    includes: ["Custom sections", "Responsive build", "Launch support"],
  },
  {
    icon: <FaShoppingBag />,
    title: "E-commerce",
    text: "Product-focused storefronts with smooth browsing, clear product pages, and conversion-ready layouts.",
    bestFor: "Online stores",
    includes: ["Product catalog", "Cart flow", "Checkout-ready UI"],
  },
  {
    icon: <FaBuilding />,
    title: "Business Websites",
    text: "Credible company websites for service providers, suppliers, agencies, and local brands.",
    bestFor: "Trust and inquiries",
    includes: ["Service pages", "About and proof", "Contact flow"],
  },
  {
    icon: <FaRocket />,
    title: "Landing Pages",
    text: "High-converting pages for products, creators, services, and launches.",
    bestFor: "Launches & campaigns",
    includes: ["Hero section", "Lead capture", "Fast mobile layout"],
  },
  {
    icon: <FaPlug />,
    title: "API Integration",
    text: "Connect forms, payment tools, data services, authentication, dashboards, and third-party platforms.",
    bestFor: "Connected products",
    includes: ["REST APIs", "Auth and data", "Form handling"],
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    text: "Ongoing fixes, content updates, speed improvements, backups, and technical support.",
    bestFor: "Long-term stability",
    includes: ["Bug fixes", "Content updates", "Performance checks"],
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

