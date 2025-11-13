import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <p>
            “Victor is a top-notch developer. He transformed our website into something truly world-class.”
          </p>
          <h4>- Sarah Johnson</h4>
          <span>Product Manager, NexaTech</span>
        </div>
        <div className="testimonial">
          <p>
            “Fast, creative, and reliable. Victor’s attention to design detail and user experience is amazing.”
          </p>
          <h4>- Daniel Okafor</h4>
          <span>Founder, DEX Studio</span>
        </div>
        <div className="testimonial">
          <p>
            “He handled both frontend and backend of our app perfectly. Excellent communication and skills!”
          </p>
          <h4>- Lisa Chen</h4>
          <span>CEO, BrightWeb</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
