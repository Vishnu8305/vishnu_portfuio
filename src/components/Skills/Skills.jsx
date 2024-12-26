import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skill-items">
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend Development</h3>
          <div className="skill-items">
            <div className="skill-item">Node.js</div>
            <div className="skill-item">PostgreSQL</div>
            <div className="skill-item">Firebase</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Mobile Development</h3>
          <div className="skill-items">
            <div className="skill-item">Flutter</div>
            <div className="skill-item">Android Development</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Hardware & Embedded Systems</h3>
          <div className="skill-items">
            <div className="skill-item">PCB Design</div>
            <div className="skill-item">Soldering</div>
            <div className="skill-item">Embedded C</div>
            <div className="skill-item">Bare Metal Programming</div>
            <div className="skill-item">Driver Development</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Microcontrollers</h3>
          <div className="skill-items">
            <div className="skill-item">ESP32</div>
            <div className="skill-item">STM32</div>
            <div className="skill-item">NodeMCU</div>
            <div className="skill-item">Arduino</div>
            <div className="skill-item">ESP01</div>
            <div className="skill-item">Raspberry Pi</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Communication Protocols</h3>
          <div className="skill-items">
            <div className="skill-item">MQTT</div>
            <div className="skill-item">HTTP</div>
            <div className="skill-item">SPI</div>
            <div className="skill-item">UART</div>
            <div className="skill-item">I2C</div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skill-items">
            <div className="skill-item">Git</div>
            <div className="skill-item">GitHub</div>
            <div className="skill-item">VS Code</div>
            <div className="skill-item">STM32 CubeIDE</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
