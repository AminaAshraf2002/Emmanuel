import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Emmanuel Marketing" />
              <div className="footer-logo-text">
                <span className="footer-logo-emmanuel">EMMANUEL</span>
                <span className="footer-logo-marketing">MARKETING COMPANY</span>
              </div>
            </div>
            <p className="footer-description">
              Leading wholesaler and distributor of premium quality exercise equipment since 2014.
            </p>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }}>
                <a href="/">Home</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/about">About Us</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/products">Products</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/services">Services</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/contact">Contact</a>
              </motion.li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Products</h3>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }}>
                <a href="/products">Exercise Tubes</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/products">Exercise Bands</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/products">Fitness Sets</a>
              </motion.li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <p>
                <span className="contact-label">Address:</span>
                <span className="contact-value">Kakkanad, Kochi, Ernakulam, Kerala</span>
              </p>
              <p>
                <span className="contact-label">Email:</span>
                <a href="mailto:mkt@emmanuelcochin.com" className="contact-link">
                  mkt@emmanuelcochin.com
                </a>
              </p>
              <p>
                <span className="contact-label">Phone:</span>
                <span className="phone-numbers">
                  <a href="tel:+914842412749">
                    <i className="phone-icon"></i>
                    <span>+91 484 241 2749</span>
                  </a>
                  <a href="tel:+917736631749">
                    <i className="phone-icon"></i>
                    <span>+91 7736 631 749</span>
                  </a>
                  <a href="tel:+919539732905">
                    <i className="phone-icon"></i>
                    <span>+91 9539 732 905</span>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="copyright">
            &copy; {currentYear} <strong>EMMANUEL MARKETING COMPANY</strong>. All Rights Reserved |
            <a href="https://www.inspitetech.com/index.html#" target="_blank" rel="noopener noreferrer"> Powered by Inspite Technologies</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;