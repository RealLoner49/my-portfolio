import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    initials: "IO",
    quote:
      "Victor transformed our website into something cleaner, faster, and much more professional.",
    name: "Ifeoma Ogbuefi",
    role: "Product Manager, Ome Electrical Company",
    project: "Company website redesign",
    result: "A modern, responsive website that showcases our products and attracts new clients.",
  },
  {
    initials: "NO",
    quote:
      "Victor is highly talented, skilled, and delivers top-notch work. I recommend his services to anyone looking for quality web development.",
    name: "Ngozi Okafor",
    role: "Business Owner, Dripova Wears",
    project: "E-commerce website",
    result: "A smoother online shopping experience with stronger product presentation.",
  },
  {
    initials: "WS",
    quote:
      "Victor created an amazing photography website that perfectly showcases my work and attracts potential clients.",
    name: "William Sandra",
    role: "Photographer",
    project: "Photography portfolio website",
    result: "A visually strong portfolio that makes the creative work easy to explore.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-heading">
        <span className="eyebrow">Testimonials</span>
        <h2>Reviews from people I have built for</h2>
        <p>
          Clients trust me to communicate clearly, ship carefully, and turn
          their ideas into polished digital experiences.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial" key={item.name}>
            <div className="testimonial-top">
              <div className="testimonial-avatar">{item.initials}</div>
              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>

            <div className="testimonial-rating" aria-label="Five star rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>"{item.quote}"</p>

            <div className="testimonial-meta">
              <div>
                <span>Project</span>
                <strong>{item.project}</strong>
              </div>
              <div>
                <span>Result</span>
                <strong>{item.result}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
