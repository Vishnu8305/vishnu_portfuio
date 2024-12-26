import './About.css'
import vishnuImage from '../../assets/vishnu.png'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Hello, I'm Vishnu</h3>
          <p className="tech-riddle">
            "I speak in ones and zeros, but breathe in voltage flows.
            In my world, both hardware dance and software grows."
          </p>
          <p>
            As a Hardware-Software Developer, I bridge the gap between 
            physical and digital realms. With expertise in both circuit design and 
            software development, I create comprehensive solutions that bring ideas to life.
          </p>
          <ul>
            <li>Hardware Design & PCB Development</li>
            <li>Embedded Systems Programming</li>
            <li>Full Stack Web Development</li>
            <li>IoT Solutions & Integration</li>
            <li>Circuit Analysis & Optimization</li>
          </ul>
          <div className="tech-quote">
            <span className="quote-mark">{">"}</span> Transforming ideas into reality, 
            one circuit and line of code at a time
          </div>
          <a href="/Vishnu_CV.pdf" className="btn primary" download>
            Download Resume
          </a>
        </div>
        <div className="about-image">
          <img src={vishnuImage} alt="Vishnu" />
        </div>
      </div>
    </section>
  )
}

export default About
