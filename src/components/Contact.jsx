import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");

    try {
      const response = await fetch("https://formspree.io/f/xgvrvvob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="contact-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Have a project in mind or just want to say hi? I’m always open to
        collaborations, freelance work, or creative discussions.
      </motion.p>

      <div className="contact-container">
        {/* LEFT SIDE - INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <a href="mailto:ogbuefivictor076@gmail.com">
                ogbuefivictor076@gmail.com
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+234 802 808 4696</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          className="contact-form enhanced"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="btn-glow">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
