import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const skills = [
  {
    title: "UI/UX Design",
    description:
      "Figma, Wireframing, Prototyping, User Flows, User-Centered Design",
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    ],
  },

  {
    title: "Frontend Development",
    description:
      "React.js, JavaScript, HTML5, CSS3, Responsive Web Design",
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    ],
  },

  {
    title: "Backend Development",
    description:
      "Node.js, Express.js, Flask, REST APIs",
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    ],
  },

  {
    title: "Programming Languages",
    description:
      "Java, Python, JavaScript",
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
  },

  {
    title: "Databases",
    description:
      "MongoDB, MySQL",
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    ],
  },

  {
    title: "Tools & Platforms",
    description:
      "Git, GitHub, VS Code, Postman",
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
            >
              <div className="skill-logos">
                {skill.logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="technology logo"
                    className="skill-logo"
                  />
                ))}
              </div>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;