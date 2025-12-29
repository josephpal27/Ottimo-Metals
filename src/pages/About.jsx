import AboutWelcome from '../components/about-welcome/AboutWelcome';
import MissionVision from '../components/mission-vision/MissionVision';
import ProductDetails from '../components/product-details/ProductDetails';
import CTA from '../components/cta/CTA';

import '../css/About.css';

import aboutBanner from '/images/banners/about-banner.avif';
import ourProductImage1 from '../assets/images/products/1.avif';
import ourProductImage2 from '../assets/images/products/2.avif';
import ourProductImage3 from '../assets/images/products/3.avif';

const About = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner about-banner">
                <img src={aboutBanner} alt="About Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">ABOUT US</h1>
                    <p data-aos="fade">Ottimo Metals is a trusted manufacturer and exporter of premium zinc wires, driven by innovation, precision engineering, and continuous improvement across our production systems.</p>
                    <p data-aos="fade">Backed by advanced European technology, robust R&D, and a manufacturing unit in West Bengal, India, we ensure on-time delivery of certified, high-performance zinc wires that meet and exceed national and international standards, reinforcing our leadership in the zinc wire industry.</p>
                </div>
            </section>

            <div id="banner-moblile-text">
                <p data-aos="fade">Ottimo Metals is a trusted manufacturer and exporter of premium zinc wires, driven by innovation, precision engineering, and continuous improvement across our production systems.</p>
                <p data-aos="fade">Backed by advanced European technology, robust R&D, and a manufacturing unit in West Bengal, India, we ensure on-time delivery of certified, high-performance zinc wires that meet and exceed national and international standards, reinforcing our leadership in the zinc wire industry.</p>
            </div>

            {/* About Welcome */}
            <AboutWelcome />

            {/* Mission Vision */}
            <MissionVision />

            {/* Product Details */}
            <ProductDetails />

            {/* Our Products */}
            <section className="our-products">
                <div className="our-products-head">
                    <h4 data-aos="fade-up">OUR PRODUCTS</h4>
                    <div className="line" data-aos="fade"></div>
                </div>
                <div className="our-products-boxes-row">
                    <div className="our-products-box" data-aos="fade">
                        <img src={ourProductImage1} alt="Product Image" loading="lazy" />
                    </div>
                    <div className="our-products-box" data-aos="fade">
                        <img src={ourProductImage2} alt="Product Image" loading="lazy" />
                    </div>
                    <div className="our-products-box" data-aos="fade">
                        <img src={ourProductImage3} alt="Product Image" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA />
        </>
    )
}

export default About
