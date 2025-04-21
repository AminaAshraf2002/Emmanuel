// HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';

// Import your actual images
import heroImage from '../assets/hero-bg.jpeg';
import tubeImage from '../assets/tube.png';
import bandImage from '../assets/logonew.jpg';
import setImage from '../assets/gym.png';
import aboutImage from '../assets/exercise-tube.jpeg';

// Import product slider images
import product1 from '../assets/bands2.jpeg';
import product2 from '../assets/tech-tube.webp';
import product3 from '../assets/miniloop.jpg';
import product4 from '../assets/anchor.jpeg';
import product5 from '../assets/silagel.png';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start with middle slide active
  const [isHovering, setIsHovering] = useState(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  // Product slider data
  const sliderProducts = [
    { id: 1, image: product1, name: "Tech Bands" },
    { id: 2, image: product2, name: "Tech Tubes" },
    { id: 3, image: product3, name: "Mini Loop" },
    { id: 4, image: product4, name: "Anchor" },
    { id: 5, image: product5, name: "SilaGel" }
  ];

  const nextSlide = () => {
    setCurrentSlide(current => (current === sliderProducts.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? sliderProducts.length - 1 : current - 1));
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false, // Changed to false to allow animations to trigger again on scroll
      easing: 'ease-out',
      delay: 100,
      mirror: true, // Enable animations when scrolling back up
    });

    // Auto-rotate slider with cleanup
    let interval;
    if (autoplayEnabled) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplayEnabled]);

  // Pause autoplay when hovering over slider
  const handleSliderMouseEnter = () => {
    setAutoplayEnabled(false);
  };

  const handleSliderMouseLeave = () => {
    setAutoplayEnabled(true);
  };

  // Framer motion variants
  const heroContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <ParallaxProvider>
      <div className="home">
        {/* Hero Section with Parallax */}
        <ParallaxBanner
          layers={[
            { image: heroImage, speed: -20 },
            {
              speed: -10,
              children: (
                <div className="hero">
                  <div className="container">
                    <motion.div
                      className="hero-content"
                      initial="hidden"
                      animate="visible"
                      variants={heroContentVariants}
                    >
                      <motion.h1 variants={heroItemVariants}>Premium Exercise Equipment</motion.h1>
                      <motion.p variants={heroItemVariants}>Wholesale and Distribution Excellence Since 2014</motion.p>
                      <motion.div className="hero-buttons" variants={heroItemVariants}>
                        <Link to="/products" className="btn btn-hero-primary">
                          <span>Explore Products</span>
                        </Link>
                        <Link to="/contact" className="btn btn-hero-secondary">
                          <span>Contact Us</span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              ),
            },
          ]}
          className="hero-banner"
        />

        {/* Product Slider Section - Enhanced with animations */}
        <section
          className="product-slider-section"
          onMouseEnter={handleSliderMouseEnter}
          onMouseLeave={handleSliderMouseLeave}
        >
          <div className="product-slider">
            <div className="product-slider-container">
              <div className="slider-frame">
                {sliderProducts.map((product, index) => {
                  // Calculate position relative to current slide (for staggered effect)
                  const position = index - currentSlide;
                  const isActive = position === 0;
                  const isPrev = position === -1 || (currentSlide === 0 && index === sliderProducts.length - 1);
                  const isNext = position === 1 || (currentSlide === sliderProducts.length - 1 && index === 0);
                  const isPrev2 = position === -2 || (currentSlide <= 1 && index === sliderProducts.length - 1 + position);
                  const isNext2 = position === 2 || (currentSlide >= sliderProducts.length - 2 && index === position - sliderProducts.length);

                  let className = "slider-item";
                  if (isActive) className += " active";
                  if (isPrev) className += " prev";
                  if (isNext) className += " next";
                  if (isPrev2) className += " prev-2";
                  if (isNext2) className += " next-2";

                  return (
                    <motion.div
                      className={className}
                      key={product.id}
                      whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="product-frame">
                        <img src={product.image} alt={product.name} />
                        <motion.div
                          className="product-slider-overlay"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <Link to={`/products`} className="view-product-btn">
                            View Details
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.button
                className="slider-arrow prev-arrow"
                onClick={prevSlide}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>‹</span>
              </motion.button>
              <motion.button
                className="slider-arrow next-arrow"
                onClick={nextSlide}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>›</span>
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                className="product-slider-title"
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{sliderProducts[currentSlide].name}</h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Exercise Category Section */}
        <section className="exercise-category-section">
          <div className="container">
            <div className="category-header" data-aos="fade-down">
              <h2>Exercise Tube And Band</h2>
            </div>

            <div className="categories-grid">
              <motion.div
                className="category-item"
                data-aos="fade-right"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", x: 10 }}
              >
                <h3>Exercise Band</h3>
                <div className="category-icon"></div>
              </motion.div>

              <motion.div
                className="category-item"
                data-aos="fade-up"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", x: 10 }}
              >
                <h3>Double Toning Tubes</h3>
                <div className="category-icon"></div>
              </motion.div>

              <motion.div
                className="category-item"
                data-aos="fade-left"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", x: 10 }}
              >
                <h3>Exercise Tube</h3>
                <div className="category-icon"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section services-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Our Services</h2>
              <p>We provide top-quality exercise equipment to businesses across Kerala and beyond</p>
            </div>

            <div className="services-grid">
              <motion.div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay="100"
                whileHover={{ y: -15, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="service-icon">
                  <i className="wholesale-icon"></i>
                </div>
                <h3>Wholesale Supply</h3>
                <p>Bulk orders of exercise equipment at competitive prices for retailers and fitness centers.</p>
              </motion.div>

              <motion.div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay="200"
                whileHover={{ y: -15, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="service-icon">
                  <i className="distribution-icon"></i>
                </div>
                <h3>Distribution</h3>
                <p>Efficient distribution network ensuring timely delivery across Kerala and neighboring states.</p>
              </motion.div>

              <motion.div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay="300"
                whileHover={{ y: -15, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="service-icon">
                  <i className="customization-icon"></i>
                </div>
                <h3>Customization</h3>
                <p>Tailor-made solutions to meet specific requirements of gyms and fitness studios.</p>
              </motion.div>

              <motion.div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay="400"
                whileHover={{ y: -15, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="service-icon">
                  <i className="support-icon"></i>
                </div>
                <h3>Technical Support</h3>
                <p>Expert guidance on product selection and usage for optimal fitness results.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="section products-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Featured Products</h2>
              <p>Discover our premium range of exercise equipment</p>
            </div>

            <div className="product-showcase">
              <motion.div
                className="product"
                data-aos="fade-up"
                data-aos-delay="100"
                whileHover={{ y: -15, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
                onHoverStart={() => setIsHovering(1)}
                onHoverEnd={() => setIsHovering(null)}
              >
                <div className="product-image">
                  <motion.img
                    src={tubeImage}
                    alt="Exercise Tube"
                    animate={{ scale: isHovering === 1 ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="product-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering === 1 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/products" className="btn-text">View Details</Link>
                  </motion.div>
                </div>
                <div className="product-info">
                  <h3>Exercise Tubes</h3>
                  <p>Premium resistance tubes for effective strength training</p>
                  <div className="product-rating">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="product"
                data-aos="fade-up"
                data-aos-delay="200"
                whileHover={{ y: -15, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
                onHoverStart={() => setIsHovering(2)}
                onHoverEnd={() => setIsHovering(null)}
              >
                <div className="product-image">
                  <motion.img
                    src={bandImage}
                    alt="Exercise Band"
                    animate={{ scale: isHovering === 2 ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="product-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering === 2 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/products" className="btn-text">View Details</Link>
                  </motion.div>
                </div>
                <div className="product-info">
                  <h3>Exercise Bands</h3>
                  <p>Versatile resistance bands for full-body workouts</p>
                  <div className="product-rating">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star-half"></span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="product"
                data-aos="fade-up"
                data-aos-delay="300"
                whileHover={{ y: -15, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" }}
                onHoverStart={() => setIsHovering(3)}
                onHoverEnd={() => setIsHovering(null)}
              >
                <div className="product-image">
                  <motion.img
                    src={setImage}
                    alt="Fitness Set"
                    animate={{ scale: isHovering === 3 ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="product-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering === 3 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/products" className="btn-text">View Details</Link>
                  </motion.div>
                </div>
                <div className="product-info">
                  <h3>Fitness Sets</h3>
                  <p>Complete exercise equipment packages for home or gym</p>
                  <div className="product-rating">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-5" data-aos="fade-up">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/products" className="btn btn-primary">View All Products</Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section with Parallax */}
        {/* Enhanced About Section with Parallax */}
        {/* About Section without Parallax */}
        <section className="about-section">
          <div className="container">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2>About Emmanuel Marketing</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Since our founding in 2014 in Kochi, Kerala, Emmanuel Marketing has grown to become a trusted name in the exercise equipment industry. We specialize in premium quality exercise tools designed for both fitness enthusiasts and healthcare professionals.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our diverse product range includes latex-free resistance bands, tubes, and accessories that deliver superior performance while being gentle on skin. Today, we proudly serve fitness centers, sports retailers, and rehabilitation facilities across South India.
              </motion.p>

              <div className="about-features">
                <motion.div
                  className="feature"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon quality-icon"></div>
                  <h4>Premium Quality</h4>
                </motion.div>
                <motion.div
                  className="feature"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon delivery-icon"></div>
                  <h4>Reliable Service</h4>
                </motion.div>
                <motion.div
                  className="feature"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon support-icon"></div>
                  <h4>Expert Support</h4>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="btn btn-about mt-4">Discover Our Story</Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Call To Action */}
        <section className="section cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              data-aos="fade-up"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2>Ready to Order Quality Exercise Equipment?</h2>
              <p>Contact us today to discuss wholesale prices and distribution opportunities</p>
              <div className="cta-buttons">
                <motion.a
                  href="tel:08047643206"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call 08047643206
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn btn-secondary">Send Email</Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default HomePage;