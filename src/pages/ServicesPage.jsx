import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesPage.css';

// Import images
import servicesBgImage from '../assets/hero-bg.jpeg';
import wholesaleImage from '../assets/exercise-tube.jpeg';
import distributionImage from '../assets/hero-bg.jpeg';
import customizationImage from '../assets/exercise-tube.jpeg';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      delay: 100,
    });
    
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="services-page">
      {/* Page Header */}
      <ParallaxBanner
        layers={[
          { image: servicesBgImage, speed: -20 },
          {
            speed: -10,
            children: (
              <div className="page-header">
                <div className="container">
                  <h1 data-aos="fade-up">Our Services</h1>
                  <div className="breadcrumbs" data-aos="fade-up" data-aos-delay="100">
                    <Link to="/">Home</Link>
                    <span className="separator">/</span>
                    <span className="active">Services</span>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
        className="page-header-banner"
      />
      
      {/* Services Overview Section */}
      <section className="section overview-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>What We Offer</h2>
            <p>Comprehensive wholesale and distribution services for premium exercise equipment</p>
          </div>
          
          <div className="overview-content" data-aos="fade-up" data-aos-delay="100">
            <p>
              At Emmanuel Marketing, we provide end-to-end solutions for fitness centers, sports retailers, 
              and physiotherapy clinics. Our services are tailored to meet your specific requirements, 
              ensuring you receive high-quality products at competitive prices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="section main-services-section">
        <div className="container">
          <div className="service-item" data-aos="fade-up">
            <div className="service-image">
              <img src={wholesaleImage} alt="Wholesale Supply" />
            </div>
            <div className="service-content">
              <h3>Wholesale Supply</h3>
              <p>
                We offer bulk orders of premium exercise tubes, bands, and fitness sets at competitive wholesale prices.
              </p>
              <ul className="service-features">
                <li>Competitive pricing for bulk orders</li>
                <li>Volume discounts</li>
                <li>Quality assurance</li>
              </ul>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Get Wholesale Quote
              </motion.button>
            </div>
          </div>
          
          <div className="service-item reverse" data-aos="fade-up">
            <div className="service-image">
              <img src={distributionImage} alt="Distribution Network" />
            </div>
            <div className="service-content">
              <h3>Distribution Network</h3>
              <p>
                Our efficient distribution ensures timely delivery across Kerala and neighboring states.
              </p>
              <ul className="service-features">
                <li>Fast delivery throughout South India</li>
                <li>Reliable tracking</li>
                <li>Secure packaging</li>
              </ul>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Learn About Distribution
              </motion.button>
            </div>
          </div>
          
          <div className="service-item" data-aos="fade-up">
            <div className="service-image">
              <img src={customizationImage} alt="Product Customization" />
            </div>
            <div className="service-content">
              <h3>Product Customization</h3>
              <p>
                We offer customization options for businesses looking for branded or specialized exercise equipment.
              </p>
              <ul className="service-features">
                <li>Custom packaging</li>
                <li>Brand labeling</li>
                <li>Special resistance levels</li>
              </ul>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Discuss Customization
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Discuss Your Requirements?</h2>
            <p>Contact us today to learn more about our wholesale and distribution services</p>
            <div className="cta-buttons">
              <a href="tel:08047643206" className="btn btn-primary">Call 08047643206</a>
              <Link to="/contact" className="btn btn-secondary">Send Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;