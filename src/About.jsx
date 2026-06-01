import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function About() {
  const stats = [
    { value: "3", label: "Projects Completed" },
    { value: "2", label: "Internship" },
    { value: "2", label: "Certifications" },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-title">About Me</h2>

            <p>
              I am a Computer Science and Design graduate with a strong foundation in software development, web technologies, and problem-solving. My expertise includes Full Stack Web Development using React.js, JavaScript, Python, MongoDB, and REST APIs. I am passionate about building scalable, user-centric applications that deliver meaningful solutions to real-world challenges.
            </p>

            <p>
              Through internships at Cognifyz Technologies and Prinston Smart Engineers, I have gained hands-on experience in frontend and full-stack development, working on responsive web applications, API integration, testing, debugging, and deployment. These experiences have strengthened my technical abilities, collaboration skills, and understanding of modern software development practices.
            </p>

            <p>
              I am a continuous learner who enjoys exploring emerging technologies, particularly in web development and artificial intelligence. My goal is to contribute to innovative projects, enhance user experiences through technology, and grow as a software professional in a dynamic and challenging environment.
            </p>

            <div className="stats">
              {/* Resume Section */}
              
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="stat-box"
                >
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="image-wrapper"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="my_pic_port.jpeg"
              alt="Workspace"
              className="about-image"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
export default About;