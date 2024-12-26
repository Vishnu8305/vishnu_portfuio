import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-overlay"></div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Vishnu</h3>
            <p className="designation">Hardware-Software Developer</p>
            <p className="description">
              Bridging the gap between hardware and software, creating innovative solutions.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-items">
              <a href="mailto:pedaballivishnuvardhanreddy@gmail.com">
                <i className="far fa-envelope"></i>
                Email Me
              </a>
              <a href="tel:+919550215402">
                <i className="fas fa-phone"></i>
                +91 9550215402
              </a>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Mangalagiri, Vijayawada
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 - Designed & Built by Vishnu</p>
          <div className="social-links">
            <a href="https://github.com/Vishnu8305" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/pvishnuvardhan" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 