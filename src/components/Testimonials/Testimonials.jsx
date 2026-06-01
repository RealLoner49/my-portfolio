import React from "react";
import './Testimonials.css';

const testimonials = [
  {
    initials: "IO",
    quote:
      "Victor transformed our website into something cleaner, faster, and much more professional.",
    name: "Ifeoma Ogbuefi",
    role: "Product Manager, Ome Electrical Company",
    project: "Company website redesign",
    result: "A modern, responsive website that effectively showcases our products and attracts new clients.",
  },
  {
    initials: "NO",
    quote:
      " I must say that Victor is highly talented, skilled, and delivers top-notch work. I highly recommend his services to anyone looking for quality web development solutions.",
    name: "Ngozi Okafor",
    role: "Business Owner, Dripova Wears",
    project: "E-commerce website",
    result: "Increased sales and customer engagement by creating a seamless online shopping experience.",
  },
  {
    initials: "WS",
    quote:
      "Victor created an amazing photography website for me that perfectly showcases my work and attracts potential clients. He is talented and professional.",
    name: "William Sandra",
    role: "Photographer",
    project: "Photography portfolio website",
    result: "A visually stunning portfolio that effectively showcases my work and attracts potential clients.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-heading">
        <span className="eyebrow">Testimonials</span>
        <h2>Proof from people I have built for</h2>
        <p>
          A good project is not only about how it looks. It should feel smooth,
          communicate clearly, and make the client confident to share it.
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
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
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

