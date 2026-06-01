import React from "react";
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <div className="cta-content">
          <span className="eyebrow">Ready when you are</span>
          <h2>Have a project in mind?</h2>
          <p>
            Send the idea, goal, or rough description. I will help you shape it
            into a clear website plan and a polished digital experience.
          </p>

          <div className="cta-actions">
            <a href="#contact" className="btn primary">
              Start a project
            </a>
            <a
              href="whatsapp://send?phone=2348028084696&text=Hi%20Victor!%20I%20want%20to%20discuss%20a%20project."
              className="btn ghost"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="cta-next">
          <h3>What happens next?</h3>
          <ul>
            <li>You tell me what you want to build.</li>
            <li>I suggest the best structure and features.</li>
            <li>We agree on the direction, then I start building.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

