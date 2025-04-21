// ProductsPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProductsPage.css';

// Import images
import headerBgImage from '../assets/hero-bg.jpeg';
import techBandImage from '../assets/band.webp'; // Make sure to add these images
import techTubeImage from '../assets/tube.png';
import miniLoopImage from '../assets/tube.png';
import anchorImage from '../assets/anchor.jpeg';
import silagelImage from '../assets/silagel.png';

const ProductsPage = () => {
    // State for active category
    const [activeCategory, setActiveCategory] = useState('all');

    // Product data - updated to match the provided images
    const products = [
        // Tech Bands
        {
            id: 1,
            name: "Tech Bands®",
            category: "tech-bands",
            image: techBandImage,
            description: "Latex Free Resistance Bands. Latex Free | Powder free | Odor Free",
            features: [
                "Premium latex free bands that perform like latex bands without a premium price",
                "Produced using Proprietary TPE Formulation",
                "Our TPE latex free formula has excellent strength characteristics similar to latex exercise bands",
                "Outstanding puncture resistance similar tear and burst strength compared to latex bands",
                "Force to stretch and contract compares well with latex bands",
                "Unique patterned surface provides excellent grip",
                "Do not produce any skin sensitization",
                "Available in 8 Resistance Levels"
            ],
            variants: [
                { id: "EM007-01", name: "Tech Band 6 Yard Rolls", color: "Tan", resistance: "xx-light" },
                { id: "EM007-02", name: "Tech Band 6 Yard Rolls", color: "Yellow", resistance: "x-light" },
                { id: "EM007-03", name: "Tech Band 6 Yard Rolls", color: "Red", resistance: "light" },
                { id: "EM007-04", name: "Tech Band 6 Yard Rolls", color: "Green", resistance: "medium" },
                { id: "EM007-05", name: "Tech Band 6 Yard Rolls", color: "Blue", resistance: "heavy" },
                { id: "EM007-06", name: "Tech Band 6 Yard Rolls", color: "Black", resistance: "x-heavy" },
                { id: "EM007-07", name: "Tech Band 6 Yard Rolls", color: "Silver", resistance: "xx-heavy" },
                { id: "EM007-08", name: "Tech Band 6 Yard Rolls", color: "Gold", resistance: "xxx-heavy" },
            ],
            longRolls: [
                { id: "EM009-01", name: "Tech Band 50 yard roll", color: "Tan", resistance: "xx-light" },
                { id: "EM009-02", name: "Tech Band 50 yard roll", color: "Yellow", resistance: "x-light" },
                { id: "EM009-03", name: "Tech Band 50 yard roll", color: "Red", resistance: "light" },
                { id: "EM009-04", name: "Tech Band 50 yard roll", color: "Green", resistance: "medium" },
                { id: "EM009-05", name: "Tech Band 50 yard roll", color: "Blue", resistance: "heavy" },
                { id: "EM009-06", name: "Tech Band 50 yard roll", color: "Black", resistance: "x-heavy" },
                { id: "EM009-07", name: "Tech Band 50 yard roll", color: "Silver", resistance: "xx-heavy" },
                { id: "EM009-08", name: "Tech Band 50 yard roll", color: "Gold", resistance: "xxx-heavy" },
            ],
            packs: [
                { id: "EM010-01", name: "TECH Packs 5 Feet", description: "Easy (1 each: yellow, red, green)" },
                { id: "EM010-02", name: "TECH Packs 5 Feet", description: "Moderate (1 each: green, blue, black)" },
                { id: "EM010-03", name: "TECH Packs 5 Feet", description: "Heavy (1 each: black, silver, gold)" },
            ],
            singles: [
                { id: "EM012-01", name: "TECH Band 5 Feet Singles", color: "Yellow", resistance: "x-light" },
                { id: "EM012-02", name: "TECH Band 5 Feet Singles", color: "Red", resistance: "light" },
                { id: "EM012-03", name: "TECH Band 5 Feet Singles", color: "Green", resistance: "medium" },
                { id: "EM012-04", name: "TECH Band 5 Feet Singles", color: "Blue", resistance: "heavy" },
                { id: "EM012-05", name: "TECH Band 5 Feet Singles", color: "Black", resistance: "x-heavy" },
                { id: "EM012-06", name: "TECH Band 5 Feet Singles", description: "5 - Piece set (1 each: yellow, red, green, blue, black)" },
            ],
            price: "Contact for pricing",
            isNew: true
        },

        // Tech Tubes - Updated with detailed information from images
        {
            id: 2,
            name: "Tech Tubes®",
            category: "tech-tubes",
            image: techTubeImage,
            description: "Latex Free Resistance Tubes. Latex Free | Powder free | Odor Free",
            features: [
                "Latex Free Tech Tubing is the ONLY tubed exercise tubing you'll ever need because it performs the best with non-allergenic properties.",
                "Available in 8 resistance levels.",
                "Advancing from the subtlest to the most formidable, the resistance progression unfolds as follows: tan, yellow, red, green, blue, black, silver, gold.",
                "Resistance exercise tubing has become a staple of many physical therapy and athletic training programs.",
                "It is an ergonomic solution for upper and lower body exercise.",
                "It is lightweight, portable and durable.",
                "Effective when used alone or with handles and anchors. Simply untie desired length of exercise tubing and cut with scissors.",
                "Lightweight, compact and portable, the tubing exercises/helps perform strengthening and conditioning workouts on-the-go, even in your hotel room!",
                "Two permanent foam covered rigid handles give the exerciser comfort and a firm grasp.",
                "The tubing with handles exerciser is available in 7 levels of resistance for progressive exercise and 3 lengths to accommodate different need.",
                "Levels range in order of strength from least to greatest resistance: tan, yellow, red, green, blue, black, silver."
            ],
            benefits: [
                "Latex Free - perfect for users with latex allergies or sensitivities",
                "Premium quality that performs like traditional latex bands",
                "Multiple resistance levels for progressive training",
                "Durable and long-lasting material",
                "Comfortable grip with foam-covered handles",
                "Versatile for various exercises and fitness levels"
            ],
            variants: [
                { id: "EM202-01", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Tan", resistance: "xx-light" },
                { id: "EM202-02", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Yellow", resistance: "x-light" },
                { id: "EM202-03", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Red", resistance: "light" },
                { id: "EM202-04", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Green", resistance: "medium" },
                { id: "EM202-05", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Blue", resistance: "heavy" },
                { id: "EM202-06", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Black", resistance: "x-heavy" },
                { id: "EM202-07", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Silver", resistance: "xx-heavy" },
                { id: "EM202-08", name: "TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL", color: "Gold", resistance: "xxx-heavy" },
            ],
            tubingWithHandles36: [
                { id: "EM206-01", name: "TECH TUBING 36\" WITH HANDLES", color: "Tan", resistance: "xx-light" },
                { id: "EM206-02", name: "TECH TUBING 36\" WITH HANDLES", color: "Yellow", resistance: "x-light" },
                { id: "EM206-03", name: "TECH TUBING 36\" WITH HANDLES", color: "Red", resistance: "light" },
                { id: "EM206-04", name: "TECH TUBING 36\" WITH HANDLES", color: "Green", resistance: "medium" },
                { id: "EM206-05", name: "TECH TUBING 36\" WITH HANDLES", color: "Blue", resistance: "heavy" },
                { id: "EM206-06", name: "TECH TUBING 36\" WITH HANDLES", color: "Black", resistance: "x-heavy" },
                { id: "EM206-07", name: "TECH TUBING 36\" WITH HANDLES", color: "Silver", resistance: "xx-heavy" },
            ],
            tubingRolls25Feet: [
                { id: "EM322-01", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Tan", resistance: "xx-light" },
                { id: "EM322-02", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Yellow", resistance: "x-light" },
                { id: "EM322-03", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Red", resistance: "light" },
                { id: "EM322-04", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Green", resistance: "medium" },
                { id: "EM322-05", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Blue", resistance: "heavy" },
                { id: "EM322-06", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Black", resistance: "x-heavy" },
                { id: "EM322-07", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Silver", resistance: "xx-heavy" },
                { id: "EM322-08", name: "TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS", color: "Gold", resistance: "xxx-heavy" },
            ],
            tubingWithHandles48: [
                { id: "EM208-01", name: "TECH TUBING 48\" WITH HANDLES", color: "Tan", resistance: "xx-light" },
                { id: "EM208-02", name: "TECH TUBING 48\" WITH HANDLES", color: "Yellow", resistance: "x-light" },
                { id: "EM208-03", name: "TECH TUBING 48\" WITH HANDLES", color: "Red", resistance: "light" },
                { id: "EM208-04", name: "TECH TUBING 48\" WITH HANDLES", color: "Green", resistance: "medium" },
                { id: "EM208-05", name: "TECH TUBING 48\" WITH HANDLES", color: "Blue", resistance: "heavy" },
                { id: "EM208-06", name: "TECH TUBING 48\" WITH HANDLES", color: "Black", resistance: "x-heavy" },
                { id: "EM208-07", name: "TECH TUBING 48\" WITH HANDLES", color: "Silver", resistance: "xx-heavy" },
            ],
            price: "Contact for pricing",
            isNew: true
        },


        // Anchor
        {
            id: 4,
            name: "Anchor®",
            category: "anchor",
            image: anchorImage,
            description: "Non Slip rolls, Sheets and Pads | Latex Free, Powder Free, Odor Free!",
            tagline: "Stick it, Grip it, Love it!",
            subtitle: "Turn any surface into a stronghold of frictional force. Anchor® Super Grip tape – your grip's best friend!",
            features: [
                "Effectively increase the friction of any surface with Anchor® self-adhesive Super Grip Tape",
                "Anchor® Super Grip tape offers comfort and stability wherever you need it",
                "Anchor® Super Grip tapes are totally flexible, and can be cut to size. They can be attached to wheelchair arms, walking frames, crutch handles, walking stick handles, pens and cutlery for added stability and comfort",
                "Great for creating a built-up non slip grip",
                "Specifically designed to address stabilization and gripping problems found around the home, in care homes and in hospitals",
                "Anchor® Non-Slip products are latex-free, powder-free and odor-free, and long-lasting"
            ],
            applications: [
                "In Care Homes & Hospitals - Elevate mobility and enhance balance effortlessly with our premium non-slip floor mat",
                "In the Kitchen - Utilize Anchor® non-slip mats to prevent crockery and appliances from sliding, secure chopping boards",
                "In your Office - Secure items on your desk such as cell phones, laptops, and desktops",
                "In the Gym - Stand on a non slip mat while exercising to improve stability or under exercise equipment to secure it",
                "In your Automobile - Use Anchor® non-slip mats or anti-slip pad for your car dashboard to stop gadgets from slipping off",
                "Around the House - Strategically placed to minimize fall risks, particularly effective on laminate or tiled floors which can be slipping hazards"
            ],
            sheets: [
                { id: "EM1070-1", name: "Anchor® Non-Slip Roll, 8\"x2 yard" },
                { id: "EM1070-10", name: "Anchor® Non-Slip Roll, 8\"x10 yard" },
                { id: "EM1071-1", name: "Anchor® Non-Slip Roll, 16\"x2 yard" },
                { id: "EM1071-10", name: "Anchor® Non-Slip Roll, 16\"x10 yard" }
            ],
            pads: [
                { id: "EM1080-1", name: "Anchor® Non-Slip Pad - 255 mm Dia - Round" },
                { id: "EM1080-2", name: "Anchor® Non-Slip Pad - 350 x 250 mm - Rectangle" },
                { id: "EM1080-3", name: "Anchor® Non-Slip Pad - 450 x 380 mm - Rectangle" }
            ],
            price: "Contact for pricing",
            isNew: true
        },

        // SilaGel
        {
            id: 5,
            name: "SilaGel®",
            category: "silagel",
            image: silagelImage,
            description: "Silicone Gel Sheets",
            tagline: "Will last for 6 weeks.",
            features: [
                "Sheet is a soft, flexible, self-adhesive dressing that is applied over scars.",
                "It contains silicone.",
                "Features one side with strong adhesive for good contact to the skin.",
                "This eliminates the need for tape, splints or bandages.",
                "The back side is coated so clothes or burn garments can be worn without sticking.",
                "Dressing is ideal for reducing the size of new or old scars due to burns, trauma and surgery.",
                "Silicone forms a protective barrier over the scar, fostering maturation while curbing excessive scar tissue production and promoting scar hydration."
            ],
            usage: [
                "Ensure that the affected area is clean and dry.",
                "Wipe off any excess cream if you have been using cream to massage.",
                "Remove the protective backing on the sheet and place the sticky side on your skin. Wear the sheet for 4 hours daily for two days. Then increase to time advised by your therapist.",
                "Wash the gel sheet daily using lukewarm soapy water, rinse well and dry by patting it with a non-fluffy towel.",
                "Wear the same piece of silicone until it starts to deteriorate, then replace it with a new piece."
            ],
            warnings: [
                "Do not use the gel sheet on open wounds.",
                "If you develop a wound in your scar, remove the gel sheet & keep it safe until the wound is healed.",
                "Don't forget to wash the gel sheet. A build up of dirt or bacteria may irritate the scar.",
                "Do not throw the gel sheet away if you develop any irritation or redness in response to using it. Remove the sheet for a few days until the symptoms subside. Leave the sheet off until the symptoms resolve, then try it again, building up the skin tolerance slowly."
            ],
            duration: "90 days is the recommended initial treatment period. However, you may be advised to continue to use it for longer than this by your therapist depending on the appearance and age of the scar.",
            products: [
                { id: "EM 1070", name: "2\" x 2-1/2\" (5.1 x 6.4cm)" },
                { id: "EM 1071", name: "4\" x 1-3/8\" (10 x 3.4cm)" },
                { id: "EM 1072", name: "12\" x 1-7/8\" (30 x 3.6cm)" },
                { id: "EM 1073", name: "5-5/8\" x 4-5/8\" (14 x 12cm)" },
                { id: "EM 1074", name: "5-5/8\" x 4-5/8\" (14 x 12cm)" },
                { id: "EM 1075", name: "11\" x 16\" (28 x 40cm)" }
            ],
            applications: [
                {
                    name: "Burn scar",
                    description: "Helps in the healing and reduction of scars from burns"
                },
                {
                    name: "Plastic surgery scar",
                    description: "Ideal for post-operative care after plastic surgery"
                },
                {
                    name: "Caesarean section scar",
                    description: "Reduces the appearance of C-section scars"
                },
                {
                    name: "Surgical scar",
                    description: "Effective for general surgical scars"
                }
            ],
            howItWorks: "Silicone forms a protective barrier over the scar, fostering maturation while curbing excessive scar tissue production and promoting scar hydration.",
            price: "Contact for pricing"
        }
    ];

    // Filter products based on active category
    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

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
        <div className="products-page">
            {/* Page Header */}
            <ParallaxBanner
                layers={[
                    {
                        image: headerBgImage,
                        speed: -20,
                    },
                    {
                        speed: -10,
                        children: (
                            <div className="page-header">
                                <div className="container">
                                    <h1 data-aos="fade-up">Our Products</h1>
                                    <div className="breadcrumbs" data-aos="fade-up" data-aos-delay="100">
                                        <Link to="/">Home</Link>
                                        <span className="separator">/</span>
                                        <span className="active">Products</span>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                ]}
                className="page-header-banner"
            />

            {/* Product Categories Filter */}
            <section className="section category-filter-section">
                <div className="container">
                    <div className="category-filters" data-aos="fade-up">
                        <button
                            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            All Products
                        </button>
                        <button
                            className={`filter-btn ${activeCategory === 'tech-bands' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('tech-bands')}
                        >
                            Tech Bands
                        </button>
                        <button
                            className={`filter-btn ${activeCategory === 'tech-tubes' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('tech-tubes')}
                        >
                            Tech Tubes
                        </button>

                        <button
                            className={`filter-btn ${activeCategory === 'anchor' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('anchor')}
                        >
                            Anchor
                        </button>
                        <button
                            className={`filter-btn ${activeCategory === 'silagel' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('silagel')}
                        >
                            SilaGel
                        </button>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section products-grid-section">
                <div className="container">
                    <div className="products-grid">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                className="product-card"
                                key={product.id}
                                data-aos="fade-up"
                                data-aos-delay={100 + (index % 4) * 100}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    {product.isNew && <div className="product-badge">New</div>}
                                </div>
                                <div className="product-details">
                                    <h3>{product.name}</h3>
                                    <p className="product-description">{product.description}</p>

                                    {product.category === 'tech-bands' && (
                                        <div className="tech-bands-details">
                                            <div className="features-section">
                                                {product.features.map((feature, i) => (
                                                    <p key={i} className="feature-item">{feature}</p>
                                                ))}
                                            </div>

                                            {/* 6 Yard Rolls Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH Band 6 Yard Rolls</h4>
                                                <div className="resistance-table">
                                                    {product.variants.map((variant) => (
                                                        <div className={`resistance-row color-${variant.color.toLowerCase()}`} key={variant.id}>
                                                            <div className="item-code">{variant.id}</div>
                                                            <div className="item-details">{variant.color} - {variant.resistance}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 50 Yard Rolls Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH Band 50 yard roll</h4>
                                                <div className="resistance-table">
                                                    {product.longRolls.map((variant) => (
                                                        <div className={`resistance-row color-${variant.color.toLowerCase()}`} key={variant.id}>
                                                            <div className="item-code">{variant.id}</div>
                                                            <div className="item-details">{variant.color} - {variant.resistance}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Packs Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH Packs 5 Feet</h4>
                                                <div className="resistance-table packs-table">
                                                    {product.packs.map((pack) => (
                                                        <div className="pack-row" key={pack.id}>
                                                            <div className="item-code">{pack.id}</div>
                                                            <div className="item-details">{pack.description}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Singles Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH Band 5 Feet Singles</h4>
                                                <div className="resistance-table">
                                                    {product.singles.map((single) => (
                                                        <div className={`resistance-row ${single.color ? `color-${single.color.toLowerCase()}` : 'set-row'}`} key={single.id}>
                                                            <div className="item-code">{single.id}</div>
                                                            <div className="item-details">
                                                                {single.color ? `${single.color} - ${single.resistance}` : single.description}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {product.category === 'tech-tubes' && (
                                        <div className="tech-tubes-details">
                                            <div className="features-section">
                                                {product.features.map((feature, i) => (
                                                    <p key={i} className="feature-item">{feature}</p>
                                                ))}
                                            </div>

                                            {/* 100 Feet Rolls Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH TUBING 100 FEET LATEX FREE EXERCISE TUBING ROLL</h4>
                                                <div className="resistance-table">
                                                    {product.variants.map((variant) => (
                                                        <div className={`resistance-row color-${variant.color.toLowerCase()}`} key={variant.id}>
                                                            <div className="item-code">{variant.id}</div>
                                                            <div className="item-details">{variant.color} - {variant.resistance}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 36" With Handles Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH TUBING 36" WITH HANDLES</h4>
                                                <div className="resistance-table">
                                                    {product.tubingWithHandles36.map((variant) => (
                                                        <div className={`resistance-row color-${variant.color.toLowerCase()}`} key={variant.id}>
                                                            <div className="item-code">{variant.id}</div>
                                                            <div className="item-details">{variant.color} - {variant.resistance}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 25 Feet Rolls Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH TUBING 25 FEET LATEX FREE EXERCISE TUBING ROLLS</h4>
                                                <div className="resistance-table">
                                                    {product.tubingRolls25Feet.map((variant) => (
                                                        <div className={`resistance-row color-${variant.color.toLowerCase()}`} key={variant.id}>
                                                            <div className="item-code">{variant.id}</div>
                                                            <div className="item-details">{variant.color} - {variant.resistance}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 48" With Handles Table */}
                                            <div className="product-table-section">
                                                <h4 className="table-title">TECH TUBING 48" WITH HANDLES</h4>
                                                <div className="resistance-table">
                                                    {product.tubingWithHandles48.map((variant) => (
                                                        <div className={`resistance-row color-${variant.color.toLowerCase()}`} key={variant.id}>
                                                            <div className="item-code">{variant.id}</div>
                                                            <div className="item-details">{variant.color} - {variant.resistance}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Product Benefits */}
                                            <div className="product-benefits">
                                                <h4>Benefits:</h4>
                                                <ul>
                                                    {product.benefits && product.benefits.map((benefit, i) => (
                                                        <li key={i}>{benefit}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                    {product.category === 'anchor' && (
                                        <div className="anchor-product-details">
                                            <div className="anchor-tagline">
                                                <h3>{product.tagline}</h3>
                                                <p>{product.subtitle}</p>
                                            </div>

                                            <div className="latex-free-banner anchor-banner">
                                                <h4>Latex Free, Powder Free, Odor Free!</h4>
                                            </div>

                                            <div className="anchor-features">
                                                <h4>Features:</h4>
                                                <ul>
                                                    {product.features.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="product-table-section">
                                                <h4 className="table-title">Anchor® Sheets</h4>
                                                <div className="resistance-table">
                                                    {product.sheets.map((sheet) => (
                                                        <div className="anchor-row" key={sheet.id}>
                                                            <div className="item-code">{sheet.id}</div>
                                                            <div className="item-details">{sheet.name}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="product-table-section">
                                                <h4 className="table-title">Anchor® Pads</h4>
                                                <div className="resistance-table">
                                                    {product.pads.map((pad) => (
                                                        <div className="anchor-row" key={pad.id}>
                                                            <div className="item-code">{pad.id}</div>
                                                            <div className="item-details">{pad.name}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="anchor-applications">
                                                <h4>Applications:</h4>
                                                <div className="applications-grid">
                                                    {product.applications.map((application, i) => (
                                                        <div className="application-item" key={i}>
                                                            <div className="application-icon application-icon-{i+1}"></div>
                                                            <p>{application}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {product.category === 'silagel' && (
                                        <div className="silagel-product-details">
                                            <div className="silagel-header">
                                                <h3>SilaGel® Silicone gel sheets:</h3>
                                                <p>{product.tagline}</p>
                                            </div>

                                            <div className="silagel-description">
                                                <p>Sheet is a soft, flexible, self-adhesive dressing that is applied over scars. It contains silicone.</p>
                                            </div>

                                            <div className="silagel-sections">
                                                <div className="silagel-section">
                                                    <h4>How does it work?</h4>
                                                    <p>{product.howItWorks}</p>
                                                </div>

                                                <div className="silagel-section">
                                                    <h4>Features:</h4>
                                                    <ul>
                                                        {product.features.map((feature, i) => (
                                                            <li key={i}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="silagel-section">
                                                    <h4>Available Sizes:</h4>
                                                    <div className="product-table-section">
                                                        <h4 className="table-title">Dimensions</h4>
                                                        <div className="resistance-table">
                                                            {product.products.map((item) => (
                                                                <div className="silagel-row" key={item.id}>
                                                                    <div className="item-code">{item.id}</div>
                                                                    <div className="item-details">{item.name}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="silagel-section">
                                                    <h4>How do I use a sheet?</h4>
                                                    <ul className="silagel-usage">
                                                        {product.usage.map((step, i) => (
                                                            <li key={i} className="usage-step">
                                                                <div className="step-number">{i + 1}</div>
                                                                <p>{step}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="silagel-section warnings-section">
                                                    <h4>Important Information:</h4>
                                                    <ul className="warnings-list">
                                                        {product.warnings.map((warning, i) => (
                                                            <li key={i}>{warning}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="silagel-section">
                                                    <h4>How long should I continue to use a SilaGel® gel sheet on my scar?</h4>
                                                    <p>{product.duration}</p>
                                                </div>

                                                <div className="silagel-section">
                                                    <h4>Applications:</h4>
                                                    <div className="applications-grid">
                                                        {product.applications.map((application, i) => (
                                                            <div className="application-card" key={i}>
                                                                <div className="application-image scar-type-{i+1}"></div>
                                                                <h5>{application.name}</h5>
                                                                <p>{application.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {product.category !== 'tech-bands' && product.category !== 'tech-tubes' && (
                                        <div className="product-features">
                                            <h4>Features:</h4>
                                            <ul>
                                                {product.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="product-price">
                                        <span>{product.price}</span>
                                    </div>
                                    <div className="product-actions">
                                        <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section (Based on Image 1) */}
            <section className="section why-choose-section">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Why Choose Us?</h2>
                        <p>Sensations of Strength, Without the Sensitivities!</p>
                    </div>

                    <div className="why-choose-content">
                        <div className="choose-text" data-aos="fade-up" data-aos-delay="100">
                            <p>Step into a world of latex-free, powder-free, odor-free fitness. Our bands redefine the workout experience where strength meets serenity.</p>
                            <p className="highlight">Dive in and feel the difference!</p>
                        </div>

                        <div className="latex-free-banner" data-aos="fade-up" data-aos-delay="200">
                            <h3>Latex Free, Powder Free, Odor Free!</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section benefits-section">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Why Choose Our Products?</h2>
                        <p>High-quality exercise equipment designed for professionals and fitness enthusiasts</p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="benefit-icon quality-icon"></div>
                            <h3>Premium Quality</h3>
                            <p>All our products are manufactured using the highest quality materials to ensure durability and effectiveness.</p>
                        </div>

                        <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="benefit-icon latex-free-icon"></div>
                            <h3>Latex-Free Options</h3>
                            <p>We offer latex-free alternatives for users with latex allergies or sensitivities.</p>
                        </div>

                        <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="benefit-icon variety-icon"></div>
                            <h3>Wide Variety</h3>
                            <p>Multiple resistance levels, colors, and types to suit different fitness levels and applications.</p>
                        </div>

                        <div className="benefit-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="benefit-icon wholesale-icon"></div>
                            <h3>Wholesale Pricing</h3>
                            <p>Competitive pricing for bulk orders, making us the preferred supplier for fitness centers and retailers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2>Ready to Place an Order?</h2>
                        <p>Contact us today to discuss wholesale prices and distribution opportunities</p>
                        <div className="cta-buttons">
                            <a href="tel:+914842412749" className="btn btn-primary">Call +91 484 241 27 49</a>
                            <Link to="/contact" className="btn btn-secondary">Send Email</Link>
                        </div>
                    </div>
                </div>
            </section>

           
         
        </div>
    );
};

export default ProductsPage;