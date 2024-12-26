import './Hero.css'

function Hero() {
  return (
    <section id="hero1" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Vishnu</h1>
        <h2>Hardware + Software Developer</h2>
        <p>
          {"< "}Bridging the gap between silicon and software{" />"}
          <br />
          <span className="code-comment">// Where bits meet bytes and circuits come alive</span>
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
