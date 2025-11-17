import AboutWelcome from '../components/about-welcome/AboutWelcome';
import MissionVision from '../components/mission-vision/MissionVision';
import ProductDetails from '../components/product-details/ProductDetails';

import '../css/About.css';

import aboutBanner from '/images/banners/about-banner.avif';
import ourProductImage1 from '../assets/images/products/1.avif';
import ourProductImage2 from '../assets/images/products/2.avif';
import ourProductImage3 from '../assets/images/products/3.avif';
import CTA from '../components/cta/CTA';

const About = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner about-banner">
                <img src={aboutBanner} alt="Home Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">ABOUT US</h1>
                    <p data-aos="fade">Ottimo Metals is a leading manufacturer and exporter of zinc wires, committed to continually enhancing our production systems and upholding a zero-waste production cycle.</p>
                    <p data-aos="fade">With dedication focused on result-driven R&D and harnessing state-of-the-art technology, we ensure the "ON TIME" delivery of certified, superior-quality products that meet and surpass national and international standards, positioning us as a leader in delivering top-tier metal works excellence.</p>
                </div>
            </section>

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
