// import { Github, ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";
// import "./App.css";
// import React, { useState } from "react";



// const projects = [
//   {
//     title: "Smart Work Automation System",
//     description:
//       "An intelligent task assignment system using Python and Machine Learning.",
//     image:
//       "https://thumbs.dreamstime.com/b/automation-work-flow-business-process-optimisation-smart-industry-modern-manufacturing-concept-virtual-screen-195491378.jpg",
//     tags: ["Python", "Machine Learning", "MongoDB"],
//     github: "https://github.com/KavyaNaik14/Smart-Work-Automation-System",
//     details: (
//   <>
//     <h3>Overview</h3>
//     <p>
//       The Smart Work Automation System is an intelligent workforce
//       management platform developed to automate and optimize task
//       allocation within an organization. It uses Machine Learning
//       techniques to assign tasks based on employee skills,
//       availability, and workload.
//     </p>

//     <h3>How It Works</h3>
//     <p>
//       Employees upload resumes to the system. Skills are extracted
//       automatically and matched against task requirements. The ML
//       model recommends the most suitable employee for each task,
//       improving productivity and resource utilization.
//     </p>

//     <h3>Key Features</h3>
//     <ul>
//       <li>Resume-based skill extraction</li>
//       <li>Intelligent task allocation</li>
//       <li>Employee Dashboard</li>
//       <li>Admin Dashboard</li>
//       <li>Workload Monitoring</li>
//       <li>Real-time Task Tracking</li>
//     </ul>

//     <h3>Technologies Used</h3>
//     <p>
//       Python, Machine Learning, MongoDB, HTML, CSS,
//       JavaScript
//     </p>

//     <h3>Team & Role</h3>
//     <p>
//       Team Size: 4 Members<br />
//       Role: Machine Learning Model Development,
//       Backend Integration, and Full-Stack Development Support.
//     </p>
//   </>
// )
//   },
//   {
//     title: "Automatic Exam Paper Correction",
//     description:
//       "Automated exam correction system using NLP and Machine Learning.",
//     image:
//       "https://t3.ftcdn.net/jpg/02/59/07/38/360_F_259073887_cMbYCVVTYvT4bprH2g9hM45g2edwFqBi.jpg",
//     tags: ["NLP", "Machine Learning", "Python"],
//     github: "",
//     details: (
//   <>
//     <h3>Overview</h3>
//     <p>
//       Automatic Exam Paper Correction is an intelligent evaluation
//       system developed using Natural Language Processing (NLP) and
//       Machine Learning techniques. The system automates the process of
//       assessing descriptive answers, reducing manual effort and ensuring
//       consistent evaluation. It helps educational institutions save time
//       while improving accuracy and fairness in the grading process.
//     </p>

//     <h3>How It Works</h3>
//     <p>
//       Students submit their answers through the system, where the text
//       is preprocessed using NLP techniques such as tokenization,
//       stop-word removal, and text normalization. The Machine Learning
//       model compares student answers with predefined model answers,
//       analyzes semantic similarity, identifies key concepts, and
//       generates scores automatically. This enables objective and
//       efficient evaluation of descriptive responses.
//     </p>

//     <h3>Key Features</h3>
//     <ul>
//       <li>Automated descriptive answer evaluation</li>
//       <li>Natural Language Processing-based text analysis</li>
//       <li>Machine Learning-powered scoring mechanism</li>
//       <li>Semantic similarity detection</li>
//       <li>Consistent and unbiased assessment</li>
//       <li>Reduced manual correction effort</li>
//       <li>Fast result generation and performance tracking</li>
//     </ul>

//     <h3>Technologies Used</h3>
//     <p>
//       Python, Natural Language Processing (NLP), Machine Learning,
//       HTML, CSS, JavaScript
//     </p>

//     <h3>Team & Role</h3>
//     <p>
//       Team Size: 4 Members <br />
//       Role: NLP Model Development, Answer Evaluation Logic,
//       Data Processing, and Full-Stack Development Support.
//     </p>

//     <h3>Outcome</h3>
//     <p>
//       The system significantly reduces the time required for exam paper
//       evaluation while maintaining consistency and accuracy. It provides
//       educators with an efficient solution for assessing large volumes
//       of descriptive answers and demonstrates the practical application
//       of Artificial Intelligence in the education sector.
//     </p>
//   </>
// )
//   },
// ];

// export default function Projects() {

//   const [selectedProject, setSelectedProject] = useState(null);


//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-container">
//         <h2>Featured Projects</h2>
//         <p className="projects-subtitle">
//           Here are some of my recent works
//         </p>

//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.03 }}
//               className="project-card"
//               onClick={() => setSelectedProject(project)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//               />

//               <div className="project-content">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>

//                 <div className="project-tags">
//                   {project.tags.map((tag) => (
//                     <span key={tag}>{tag}</span>
//                   ))}
//                 </div>

//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="project-link"
//                   >
//                     <Github size={18} />
//                     View Code
//                     <ExternalLink size={16} />
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {selectedProject && (
//           <div
//             className="modal-overlay"
//             onClick={() => setSelectedProject(null)}
//           >
//             <div
//               className="modal-content"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="close-btn"
//                 onClick={() => setSelectedProject(null)}
//               >
//                 ✕
//               </button>

//               <h2>{selectedProject.title}</h2>

//               <img
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 className="modal-image"
//               />

//               <p>{selectedProject.details}</p>

//               {selectedProject.github && (
//                 <a
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="project-link"
//                 >
//                   <Github size={18} />
//                   View Source Code
//                 </a>
//               )}
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }





import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
  title: "Online Items Buy and Sell Portal",
  description:
    "A full-stack marketplace platform for buying and selling used items online.",
  image:
    "Bold and Trustworthy ResellerBazaar Logo1.png",
  tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/KavyaNaik14/Resellbaazar",

  details: (
    <>
      <h3>Overview</h3>
      <p>
        Online Items Buy and Sell Portal is a full-stack web application
        developed using the MERN stack. The platform enables users to
        register, log in, list products for sale, browse available items,
        and purchase products through a user-friendly interface.
      </p>

      <h3>How It Works</h3>
      <p>
        Users can create accounts, upload product details with images,
        search and filter products, add items to their wishlist or cart,
        communicate with sellers, and place orders. Sellers can manage
        their listings while buyers can track their purchases.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>User Registration and Login Authentication</li>
        <li>Product Listing with Image Upload</li>
        <li>Product Search and Category Filtering</li>
        <li>Wishlist and Shopping Cart</li>
        <li>Buyer-Seller Chat System</li>
        <li>Order Management and Notifications</li>
        <li>Responsive User Interface</li>
      </ul>

      <h3>Technologies Used</h3>
      <p>
        React.js, Node.js, Express.js, MongoDB,
        HTML, CSS, JavaScript, Axios
      </p>

      <h3>Role & Responsibilities</h3>
      <p>
        Designed and developed the complete MERN stack application,
        implemented authentication, product management, wishlist,
        cart functionality, chat system, and order processing modules.
      </p>

      <h3>Outcome</h3>
      <p>
        Successfully developed a scalable online marketplace platform
        that provides a seamless experience for buyers and sellers,
        demonstrating full-stack web development skills and database
        management capabilities.
      </p>
    </>
  ),
},

  {
    title: "Smart Work Automation System",
    description:
      "An intelligent task assignment system using Python and Machine Learning.",
    image:
      "https://thumbs.dreamstime.com/b/automation-work-flow-business-process-optimisation-smart-industry-modern-manufacturing-concept-virtual-screen-195491378.jpg",
    tags: ["Python", "Machine Learning", "MongoDB"],
    github:
      "https://github.com/KavyaNaik14/Smart-Work-Automation-System",
   details: (
  <>
    <h3>Overview</h3>
    <p>
      The Smart Work Automation System is an intelligent workforce
      management platform developed to automate and optimize task
      allocation within an organization. It uses Machine Learning
      techniques to assign tasks based on employee skills,
      availability, and workload.
    </p>

    <h3>How It Works</h3>
    <p>
      Employees upload resumes to the system. Skills are extracted
      automatically and matched against task requirements. The ML
      model recommends the most suitable employee for each task,
      improving productivity and resource utilization.
    </p>

    <h3>Key Features</h3>
    <ul>
      <li>Resume-based skill extraction</li>
      <li>Intelligent task allocation</li>
      <li>Employee Dashboard</li>
      <li>Admin Dashboard</li>
      <li>Workload Monitoring</li>
      <li>Real-time Task Tracking</li>
    </ul>

    <h3>Technologies Used</h3>
    <p>
      Python, Machine Learning, MongoDB, HTML, CSS,
      JavaScript
    </p>

    <h3>Team & Role</h3>
    <p>
      Team Size: 4 Members<br />
      Role: Machine Learning Model Development,
      Backend Integration, and Full-Stack Development Support.
    </p>
  </>
)
  },

  {
    title: "Automatic Exam Paper Correction",
    description:
      "Automated exam correction system using NLP and Machine Learning.",
    image:
      "https://t3.ftcdn.net/jpg/02/59/07/38/360_F_259073887_cMbYCVVTYvT4bprH2g9hM45g2edwFqBi.jpg",
    tags: ["Python", "NLP", "Machine Learning"],
    github: "",
    details: (
  <>
    <h3>Overview</h3>
    <p>
      Automatic Exam Paper Correction is an intelligent evaluation
      system developed using Natural Language Processing (NLP) and
      Machine Learning techniques. The system automates the process of
      assessing descriptive answers, reducing manual effort and ensuring
      consistent evaluation. It helps educational institutions save time
      while improving accuracy and fairness in the grading process.
    </p>

    <h3>How It Works</h3>
    <p>
      Students submit their answers through the system, where the text
      is preprocessed using NLP techniques such as tokenization,
      stop-word removal, and text normalization. The Machine Learning
      model compares student answers with predefined model answers,
      analyzes semantic similarity, identifies key concepts, and
      generates scores automatically. This enables objective and
      efficient evaluation of descriptive responses.
    </p>

    <h3>Key Features</h3>
    <ul>
      <li>Automated descriptive answer evaluation</li>
      <li>Natural Language Processing-based text analysis</li>
      <li>Machine Learning-powered scoring mechanism</li>
      <li>Semantic similarity detection</li>
      <li>Consistent and unbiased assessment</li>
      <li>Reduced manual correction effort</li>
      <li>Fast result generation and performance tracking</li>
    </ul>

    <h3>Technologies Used</h3>
    <p>
      Python, Natural Language Processing (NLP), Machine Learning,
      HTML, CSS, JavaScript
    </p>

    <h3>Team & Role</h3>
    <p>
      Team Size: 4 Members <br />
      Role: NLP Model Development, Answer Evaluation Logic,
      Data Processing, and Full-Stack Development Support.
    </p>

    <h3>Outcome</h3>
    <p>
      The system significantly reduces the time required for exam paper
      evaluation while maintaining consistency and accuracy. It provides
      educators with an efficient solution for assessing large volumes
      of descriptive answers and demonstrates the practical application
      of Artificial Intelligence in the education sector.
    </p>
  </>
),
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2>Featured Projects</h2>
        <p className="projects-subtitle">
          Some of my recent works and research projects
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="project-image-container">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <button
                    className="details-btn"
                    onClick={() =>
                      setSelectedProject(project)
                    }
                  >
                    View Details
                  </button>

                </div>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={18} />
                    View Code
                    <ExternalLink size={16} />
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </div>

        {/* Modal */}

        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() =>
              setSelectedProject(null)
            }
          >
            <motion.div
              className="modal-content"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <button
                className="close-btn"
                onClick={() =>
                  setSelectedProject(null)
                }
              >
                ✕
              </button>

              <h2>{selectedProject.title}</h2>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />

              {selectedProject.details}

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;