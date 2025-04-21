// AboutPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPage.css';

// Import images
import aboutBgImage from '../assets/tube.png';
import teamImage from '../assets/logonew.jpg';
import officeImage from '../assets/hero-bg.jpeg';
import productImage1 from '../assets/exercise-tube.jpeg';
import productImage2 from '../assets/hero-bg.jpeg';

const AboutPage = () => {
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
    <div className="about-page">
      {/* Page Header */}
      <ParallaxBanner
        layers={[
          {
            image: aboutBgImage,
            speed: -20,
          },
          {
            speed: -10,
            children: (
              <div className="page-header">
                <div className="container">
                  <h1 data-aos="fade-up">About Us</h1>
                  <div className="breadcrumbs" data-aos="fade-up" data-aos-delay="100">
                    <Link to="/">Home</Link>
                    <span className="separator">/</span>
                    <span className="active">About Us</span>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
        className="page-header-banner"
      />

      {/* Company History Section */}
      <section className="section company-section">
        <div className="container">
          <div className="company-content">
            <div className="company-text" data-aos="fade-right">
              <div className="section-title text-left">
                <h2>Our History</h2>
              </div>
              <p>
                <strong>Emmanuel Marketing was established in 2014</strong>, with a vision to 
                provide high-quality elastic products to fitness enthusiasts and healthcare 
                professionals throughout India.
              </p>
              <p>
                Our registered office is located in Mattancherry, close to Cochin port in the 
                Arabian Sea and just 30km from Cochin International Airport. This strategic 
                location allows us to efficiently manage our distribution network across 
                South India and beyond.
              </p>
              <p>
                Emmanuel Marketing provides a variety of non-latex elastic products and development 
                services for several elastic applications. Our dedication to quality and 
                customer satisfaction has made us a trusted name in the industry.
              </p>
            </div>
            <div className="company-image" data-aos="fade-left">
              <img src={officeImage} alt="Emmanuel Marketing Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="section policy-section bg-light">
        <div className="container">
          <div className="policy-content">
            <div className="policy-image" data-aos="fade-right">
              <img src={teamImage} alt="Emmanuel Marketing Team" />
            </div>
            <div className="policy-text" data-aos="fade-left">
              <div className="section-title text-left">
                <h2>Our Quality Policy</h2>
              </div>
              <p>
                Emmanuel Marketing's quality policy is to achieve sustained, profitable growth 
                by providing products and services which consistently satisfy the needs and 
                expectations of its customers.
              </p>
              <p>
                We are committed to sourcing and distributing only the highest quality 
                fitness equipment that meets international standards. Every product in our 
                catalog undergoes rigorous quality checks before reaching our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Product Features</h2>
            <p>What makes our exercise bands and tubes unique</p>
          </div>

          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon physio-icon"></div>
              <h3>Physiotherapy</h3>
              <p>Used in physiotherapy for effective muscle strengthening and rehabilitation</p>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon exercise-icon"></div>
              <h3>Physical Exercise</h3>
              <p>Perfect for all types of physical exercise routines and fitness training</p>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon global-icon"></div>
              <h3>Global Standard</h3>
              <p>Popular in Western countries for physical exercise and fitness programs</p>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon latex-icon"></div>
              <h3>Latex Free</h3>
              <p>All products are latex free, odorless, and contain no powder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      {/* <section className="section products-overview-section bg-light">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Products</h2>
            <p>Discover our range of premium exercise equipment</p>
          </div>

          <div className="products-overview">
            <div className="product-category" data-aos="fade-up" data-aos-delay="100">
              <div className="category-image">
                <img src={productImage1} alt="Exercise Band" />
              </div>
              <div className="category-content">
                <h3>Exercise Bands</h3>
                <ul className="product-list">
                  <li>Resistance Loop Bands</li>
                  <li>Latex Free Exercise Band</li>
                  <li>Exercise Resistance Band</li>
                  <li>Latex Free Exercise Resistance Band</li>
                </ul>
                <Link to="/products" className="btn-text">View Products</Link>
              </div>
            </div>

            <div className="product-category" data-aos="fade-up" data-aos-delay="200">
              <div className="category-image">
                <img src={productImage2} alt="Double Toning Tubes" />
              </div>
              <div className="category-content">
                <h3>Double Toning Tubes</h3>
                <ul className="product-list">
                  <li>Red Toning Tube</li>
                  <li>Double Toning Tube</li>
                  <li>Fitness Toning Tube</li>
                  <li>Double Toning Tube</li>
                </ul>
                <Link to="/products" className="btn-text">View Products</Link>
              </div>
            </div>

            <div className="product-category" data-aos="fade-up" data-aos-delay="300">
              <div className="category-image">
                <img src={productImage1} alt="Exercise Tube" />
              </div>
              <div className="category-content">
                <h3>Exercise Tubes</h3>
                <ul className="product-list">
                  <li>Exercise Resistance Tube Black Colour</li>
                  <li>Exercise Resistance Tube Yellow Colour</li>
                  <li>Latex Free Exercise Resistance Tube Green</li>
                  <li>Exercise Resistance Tube</li>
                </ul>
                <Link to="/products" className="btn-text">View Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call To Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Order Quality Exercise Equipment?</h2>
            <p>Contact us today to discuss wholesale prices and distribution opportunities</p>
            <div className="cta-buttons">
              <a href="tel:08047643206" className="btn btn-primary">Call 08047643206</a>
              <Link to="/contact" className="btn btn-secondary">Send Email</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;