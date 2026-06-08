import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";


function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return (

    <section className="hero-section">

      {/* Animated Background */}
      <motion.div
        className="bg-circle blue"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="bg-circle purple"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="hero-content">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge"
        >
          Welcome to my portfolio
        </motion.span>

        {/* Stylish Name */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span>Kavya J Naik</span>
        </motion.h1>

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="hero-subtitle"
>
  Computer Science & Design Student | UI/UX Designer | Frontend Developer
</motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={scrollToProjects} className="btn primary">
            View My Work
          </button>

          <a href="#contact" className="btn outline">
            Get In Touch
          </a>

          <a
            href="/Kavya_j_Naik_cg017.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn resume-btn"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          className="arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={34} />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;