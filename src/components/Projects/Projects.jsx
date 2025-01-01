import { useState } from 'react'
import './Projects.css'
import home from '../../assets/home.jpg'

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-overlay">
      <div className="project-modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-content">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="modal-details">
            <h2>{project.title}</h2>
            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p className="modal-description">{project.description}</p>
            <div className="modal-project-details">
              <h3>Project Overview</h3>
              <div className="project-detail-section">
                <h4>Motivation</h4>
                <p>{project.motivation || 'No specific motivation details provided.'}</p>
              </div>
              <div className="project-detail-section">
                <h4>Key Features</h4>
                <ul>
                  {project.keyFeatures ? 
                    project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    )) : 
                    <li>No specific features listed.</li>
                  }
                </ul>
              </div>
              <div className="project-detail-section">
                <h4>Challenges & Solutions</h4>
                <p>{project.challengesAndSolutions || 'No specific challenges or solutions detailed.'}</p>
              </div>
              <div className="project-detail-section">
                <h4>Learning Outcomes</h4>
                <p>{project.learningOutcomes || 'No specific learning outcomes noted.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

  const projects = [
    {
      title: "Home Automation System",
      description: "MAKING AN HOME AUTOMATION SYSTEM USING ESP32 AND FLUTTER",
      image: home,
      technologies: ["Flutter", "ESP32", "MQTT"],
      githubLink: "https://github.com/Vishnu8305/FLutter_Automition_1",
      motivation: "To create a seamless and intuitive smart home control system that allows users to manage their home devices remotely with ease.",
      keyFeatures: [
        "Real-time device control via mobile app",
        "MQTT protocol for efficient communication",
        "Support for multiple IoT devices",
        "Intuitive user interface"
      ],
      challengesAndSolutions: "Implementing reliable communication between ESP32 and mobile app was challenging. Solved by using MQTT protocol which provides lightweight and efficient messaging.",
      learningOutcomes: "Gained deep insights into IoT communication protocols, mobile app development with Flutter, and embedded systems programming."
    },
    // Add more projects here
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn secondary"
                  >
                    GitHub
                  </a>
                )}
                <button 
                  className="btn primary"
                  onClick={() => setSelectedProjectDetails(project)}
                >
                  Project Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProjectDetails && (
        <ProjectModal 
          project={selectedProjectDetails} 
          onClose={() => setSelectedProjectDetails(null)} 
        />
      )}
    </section>
  )
}

export default Projects
