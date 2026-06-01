import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import "./App.css";

const education = [
  {
    degree: "B.E in Computer Science and Design",
    institution: "Canara Engineering College, Bantwal, India",
    period: "2022 - 2026",
    cgpa: "8.54",
  },
  {
    degree: "PUC (12th) - PCMCS",
    institution:
      "Dr. A.V. Baliga P U College of Arts and Science, Kumta, India",
    period: "2020 - 2022",
    percentage: "85%",
  },
  {
    degree: "10th Standard",
    institution: "Gibb English Medium High School, Kumta, India",
    period: "2019 - 2020",
    percentage: "80.8%",
  },
];

 function Education() {
  return (
    <section className="education-section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Education</h2>
          <p>My academic journey and qualifications</p>
        </motion.div>

        <div className="education-list">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="edu-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="edu-content">

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="edu-icon"
                >
                  <GraduationCap size={30} />
                </motion.div>

                <div className="edu-text">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>

                  <div className="edu-meta">
                    <span>
                      <Calendar size={16} /> {edu.period}
                    </span>

                    <span className="score">
                      <Award size={16} />
                      {edu.cgpa
                        ? ` CGPA: ${edu.cgpa}`
                        : ` Percentage: ${edu.percentage}`}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default Education;