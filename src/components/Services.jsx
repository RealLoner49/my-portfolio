import React from "react";

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <h2>My Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-laptop-code"></i>
          <h4>Web Development</h4>
          <p>
            I build responsive and high-performing websites using modern tools like React, Node.js, and APIs.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-paint-brush"></i>
          <h4>UI/UX Design</h4>
          <p>
            I craft intuitive user interfaces with smooth user flows that make your website stand out beautifully.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-mobile-alt"></i>
          <h4>Mobile App Development</h4>
          <p>
            Using React Native, I design and develop mobile apps for both Android and iOS platforms.
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-search-dollar"></i>
          <h4>SEO Optimization</h4>
          <p>
            I optimize your site’s speed, content, and structure to rank better and load faster on search engines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
