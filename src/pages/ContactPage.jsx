// ContactPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactPage.css';

// Import images
import contactBgImage from '../assets/logo.jpeg';
import mapImage from '../assets/logo.jpeg';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or email service
    // For this example, we'll just simulate a successful submission
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      return;
    }
    
    // Reset error if previously shown
    setFormError(false);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      delay: 100,
    });
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="contact-page">
      {/* Page Header */}
      <ParallaxBanner
        layers={[
          {
            image: contactBgImage,
            speed: -20,
          },
          {
            speed: -10,
            children: (
              <div className="page-header">
                <div className="container">
                  <h1 data-aos="fade-up">Contact Us</h1>
                  <div className="breadcrumbs" data-aos="fade-up" data-aos-delay="100">
                    <Link to="/">Home</Link>
                    <span className="separator">/</span>
                    <span className="active">Contact</span>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
        className="page-header-banner"
      />
      
      {/* Contact Information Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Get In Touch</h2>
            <p>We're here to answer any questions you may have about our products and services</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-up" data-aos-delay="100">
              <div className="info-item">
                <div className="info-icon address-icon"></div>
                <div className="info-content">
                  <h3>Office Address</h3>
                  <p>Karippalam Road,Kakkanad,Kochi - 682001,Ernakulam,Kerala,India</p>
                  
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon phone-icon"></div>
                <div className="info-content">
                  <h3>Phone Number</h3>
                  <p><a href="tel:08047643206">08047643206</a></p>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon email-icon"></div>
                <div className="info-content">
                  <h3>Email Address</h3>
                  <p><a href="mailto:mkt@emmanuelcochin.com">mkt@emmanuelcochin.com</a></p>
                  <p>We'll respond as soon as possible</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon business-icon"></div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="contact-map" data-aos="fade-up" data-aos-delay="200">
              <div className="map-container">
                <img src={mapImage} alt="Office Location Map" />
                <a href="https://maps.app.goo.gl/BZp3Wvga1czn4yYS7" className="map-link" target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
     
      
      {/* Call To Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Place an Order?</h2>
            <p>We offer wholesale prices for bulk orders and competitive rates for fitness centers and retailers</p>
            <div className="cta-buttons">
              <a href="tel:08047643206" className="btn btn-primary">Call 08047643206</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;