import { useState } from 'react'
import './Projects.css'
import home from '../../assets/home.jpg'
import stm32 from '../../assets/stm32.jpg'
import dustbin from '../../assets/dust.jpg'
import pcb from '../../assets/pcb.jpg'
import gesture from '../../assets/gesture.jpg'

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

  const projects = [
    {
      title: "Home Automation System",
      description: "MAKING AN HOME AUTOMATION SYSTEM USING ESP32 AND FLUTTER",
      image: home,
      technologies: ["Flutter", "ESP32", "MQTT", "Relay", "Azure", "High-link", "IoT","Custom PCB"],
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
    {
      title: "STM32 Driver Development",
      description: "Developing drivers for STM32 microcontrollers.",
      image: stm32,
      technologies: ["C", "Embedded Systems", "STM32","Datasheet Understanding","GPIO"],
      githubLink: "https://github.com/your-repo",
      motivation: "To develop reliable and efficient drivers for STM32 microcontrollers.",
      keyFeatures: [
        "C programming language",
        "Embedded systems programming",
        "STM32 microcontroller",
        "Driver development"
      ],
      challengesAndSolutions: "Developing drivers for STM32 microcontrollers can be challenging due to the complexity of the hardware and the need for precise timing.",
      learningOutcomes: "Gained deep insights into C programming, embedded systems programming, and STM32 microcontroller development."
    },
    {
      title: "Smart Dustbin",
      description: "A smart dustbin that identifies and segregates dry and wet waste.",
      image: dustbin,
      technologies: ["IoT", "Sensors", "ESP32"],
      githubLink: "https://github.com/your-repo",
      motivation: "To create an efficient waste management system that automatically segregates waste.",
      keyFeatures: [
        "Automatic waste segregation",
        "IoT-enabled monitoring",
        "Machine learning for waste identification"
      ],
      challengesAndSolutions: "Integrating sensors and machine learning for accurate waste identification was challenging.",
      learningOutcomes: "Learned about IoT integration, sensor data processing, and machine learning applications."
    },
    {
      title: "Gesture Control Car",
      description: "A car controlled by hand gestures using sensors.",
      image: gesture,
      technologies: ["Arduino", "Sensors", "Wireless Communication"],
      githubLink: "https://github.com/your-repo",
      motivation: "To explore innovative control methods using gesture recognition.",
      keyFeatures: [
        "Gesture-based control",
        "Wireless communication",
        "Real-time response"
      ],
      challengesAndSolutions: "Ensuring accurate gesture recognition and response was challenging.",
      learningOutcomes: "Learned about gesture recognition, sensor integration, and wireless communication."
    },
    {
      title: "Custom PCB Making",
      description: "Designing and fabricating custom PCBs for various projects.",
      image: pcb,
      technologies: ["PCB Design", "Soldering", "Circuit Design"],
      githubLink: "https://github.com/your-repo",
      motivation: "To create custom PCBs for efficient and compact circuit designs.",
      keyFeatures: [
        "Custom PCB design",
        "Efficient circuit layout",
        "Prototyping and testing"
      ],
      challengesAndSolutions: "Designing compact and efficient PCBs required careful planning.",
      learningOutcomes: "Gained skills in PCB design, circuit layout, and prototyping."
    },
    // Add more projects here
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.slice(currentIndex, currentIndex + 2).map((project, index) => (
          <div className="project-card" key={index}>
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
      <div className="navigation-buttons">
        <button onClick={handlePrev} className="nav-button">←</button>
        <button onClick={handleNext} className="nav-button">→</button>
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
