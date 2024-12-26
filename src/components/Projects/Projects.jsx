import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your project",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/yourusername/project1"
    },
    // Add more projects here
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
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
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn secondary">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
