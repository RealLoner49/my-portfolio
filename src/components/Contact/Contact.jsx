import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending your message...");

    try {
      const response = await fetch("https://formspree.io/f/xgvrvvob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Let us build something memorable</h2>
        <p>
          Tell me what you are creating, what stage you are in, and what kind of
          experience you want users to have.
        </p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a className="info-card" href="mailto:ogbuefivictor076@gmail.com">
            <FaEnvelope className="icon" />
            <span>
              <strong>Email</strong>
              ogbuefivictor076@gmail.com
            </span>
          </a>

          <a className="info-card" href="tel:+2348028084696">
            <FaPhoneAlt className="icon" />
            <span>
              <strong>Phone</strong>
              +234 802 808 4696
            </span>
          </a>

          <a
            className="info-card"
            href="whatsapp://send?phone=2348028084696&text=Hi%20Victor!%20I%20want%20to%20discuss%20a%20project."
          >
            <FaWhatsapp className="icon" />
            <span>
              <strong>WhatsApp</strong>
              Quick project chat
            </span>
          </a>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <span>
              <strong>Location</strong>
              Lagos, Nigeria
            </span>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Project details
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your idea, timeline, and goals."
              required
            ></textarea>
          </label>

          <button type="submit" className="btn primary">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

