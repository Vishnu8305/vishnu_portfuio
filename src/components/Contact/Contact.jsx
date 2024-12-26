import { useState } from 'react';
import './Contact.css'
function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwjpIEkTMv-kdrFD1u-t-jjYI3jTeOLYkJUkOzIoXwFxyefCDQVQHUNL8iSy9V92KUyFg/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData),
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      setStatus('error');
      alert('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-text">
          <p>
            I'm a Hardware-Software Developer passionate about creating innovative solutions. 
            Feel free to reach out if you have any questions or would like to work together!
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div className="info">
                <h3>Email</h3>
                <a href="mailto:pedaballivishnuvardhanreddy@gmail.com">
                  pedaballivishnuvardhanreddy@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div className="info">
                <h3>Phone</h3>
                <a href="tel:+919550215402">+91 9550215402</a>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="info">
                <h3>Location</h3>
                <p>Mangalagiri, Vijayawada</p>
                <p>Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="6"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;