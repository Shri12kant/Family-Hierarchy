import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">Have questions or feedback? We'd love to hear from you!</p>
      
      <div className="contact-content">
        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          {submitStatus === 'success' && (
            <div className="alert success">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Our Location</h3>
              <p>123 Family Street, City, Country</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email Us</h3>
              <p>support@familytree.com</p>
              <p>info@familytree.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
              <p>+1 (123) 456-7891</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;