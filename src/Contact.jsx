import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Phone,
} from "lucide-react";

import "./App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hideNotification = () => {
    setTimeout(() => {
      setStatus({
        show: false,
        message: "",
        type: "",
      });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://port-backend-rho.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          show: true,
          message:
            "✅ Message sent successfully! I'll get back to you soon.",
          type: "success",
        });

        hideNotification();

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          show: true,
          message: data.message,
          type: "error",
        });

        hideNotification();
      }
    } catch (error) {
      console.error(error);

      setStatus({
        show: true,
        message:
          "❌ Something went wrong. Please try again.",
        type: "error",
      });

      hideNotification();
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? I'd love to hear from you!
          </p>
        </motion.div>

        {status.show && (
          <div
            className={`notification ${
              status.type === "success"
                ? "success-notification"
                : "error-notification"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="contact-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h3>Send Me a Message</h3>

            <form
              onSubmit={handleSubmit}
              className="form"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="info-section"
          >

            <div className="card">
              <h3>Contact Information</h3>

              <div className="info-item">
                <Mail size={20} />
                <span>
                  kavyajnaik8050@gmail.com
                </span>
              </div>

              <div className="info-item">
                <Phone size={20} />
                <span>
                  +91 8050491857
                </span>
              </div>

              <div className="info-item">
                <MapPin size={20} />
                <span>
                  Bangaluru, Karnataka
                </span>
              </div>
            </div>

            <div className="card">
              <h3>Connect With Me</h3>

              <div className="socials">

                <a
                  href="https://github.com/KavyaNaik14"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/kavya-naik-031b37262262"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={22} />
                </a>

                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter size={22} />
                </a> */}

              </div>
            </div>

            <div className="card gradient-card">
              <h3>
                Available for Opportunities
              </h3>

              <p>
                I'm currently looking for
                internships and full-time
                opportunities. Let's create
                something amazing together!
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;