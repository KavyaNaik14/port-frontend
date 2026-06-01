import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, FileCheck } from "lucide-react";
import "./App.css";

const achievements = [
  {
    title: "L'Oréal Sustainability Challenge 2025",
    description:
      "Participated in L'Oréal Sustainability Challenge 2025, applying technical knowledge to real-world business problems.",
    icon: Trophy,
  },
  {
    title: "TVS Credit E.P.I.C 7.0 - IT Challenge",
    description:
      "Participated in TVS Credit E.P.I.C 7.0 - IT Challenge, solving programming and case study problems.",
    icon: Award,
  },
];

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Coursera",
    icon: FileCheck,
  },
  {
    title: "Postman API Fundamentals",
    issuer: "NITK, Surathkal",
    icon: FileCheck,
  },
];

const experience = [
  {
    role: "Frontend Development Intern",
    company: "Cognifyz Technologies",
    duration: "Aug 2025 – Sep 2025",
    description:
      "Developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. Implemented interactive frontend features and collaborated on web development projects.",
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Prinston Smart Engineers",
    duration: "Jan 2026 – May 2026",
    description:
      "Built responsive web applications by integrating frontend and backend components, improving functionality and user experience. Participated in the complete software development lifecycle including development, testing, debugging, and deployment.",
  },
];
function Achievements() {
  return (
//     <section className="achievements-section">
//       <div className="container">

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="section-title"
//         >
//           <h2>Achievements & Experience</h2>
//           <p>Competitions, certifications & professional experience</p>
//         </motion.div>

//         {/* EXPERIENCE */}
//         <h3 className="sub-heading">Experience</h3>
//         {experience.map((exp, index) => (
//           <motion.div
//             key={index}
//             className="card"
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="card-content">
//              <Award className="text-white" size={24} />
//               <div>
//                  <div>
//                     <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
//                     <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
//                     <p className="text-gray-600">{exp.description}</p>
//                   </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}

//         {/* ACHIEVEMENTS */}
//         <h3 className="sub-heading">Achievements</h3>
//         <div className="grid">
//           {achievements.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={index}
//                 className="card"
//                 whileHover={{ y: -8 }}
//               >
//                 <div className="card-content">
//                   <Icon size={30} className="icon gradient" />
//                   <div>
//                     <h4>{item.title}</h4>
//                     <p>{item.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CERTIFICATIONS */}
//         <h3 className="sub-heading">Certifications</h3>
//         <div className="grid">
//           {certifications.map((cert, index) => {
//             const Icon = cert.icon;
//             return (
//               <motion.div
//                 key={index}
//                 className="card"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="card-content">
//                   <Icon size={30} className="icon " />
//                   <div>
//                     <h4>{cert.title}</h4>
//                     <span className="badge">{cert.issuer}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }



<section className="achievements-section">
  <div className="container">
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Achievements & Experience</h2>
          <p>Competitions, certifications & professional experience</p>
        </motion.div>

    {/* ================= EXPERIENCE ================= */}
  <h2 className="main-heading">Experience</h2>

{experience.map((exp, index) => (
  <motion.div
    key={index}
    className="card large-card"
    whileHover={{ scale: 1.01 }}
  >
    <div className="card-content">
      <div className="icon-box gradient">
        <Award size={22} color="#fff" />
      </div>

      <div>
        <h3 className="card-title">{exp.role}</h3>

        <p className="company-name">
          {exp.company}
        </p>

        <p className="duration">
          {exp.duration}
        </p>

        <p className="card-description">
          {exp.description}
        </p>
  
      </div>
    </div>
  </motion.div>
))}

    {/* ================= ACHIEVEMENTS ================= */}
    <h2 className="main-heading">Achievements</h2>

    <div className="grid two-column">
      {achievements.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="card"
            whileHover={{ y: -5 }}
          >
            <div className="card-content">
              <div className="icon-box small gradient">
                <Icon size={20} color="#fff" />
              </div>

              <div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

        {/* CERTIFICATIONS */}
        <h3 className="sub-heading">Certifications</h3>
        <div className="grid">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                className="card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-content">
                  <Icon size={30} className="icon " />
                  <div>
                    <h4>{cert.title}</h4>
                    <span className="badge">{cert.issuer}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

  </div>
</section>
  );
}


export default Achievements;