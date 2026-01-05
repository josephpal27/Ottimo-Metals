import AboutWelcome from '../components/about-welcome/AboutWelcome';
import MissionVision from '../components/mission-vision/MissionVision';
import ProductDetails from '../components/product-details/ProductDetails';
import CTA from '../components/cta/CTA';

import '../css/About.css';

import aboutBanner from '/images/banners/about-banner.avif';
import teamImage1 from '../assets/images/our-team/1.avif';
import teamImage2 from '../assets/images/our-team/2.avif';
import teamImage3 from '../assets/images/our-team/3.avif';

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

            {/* Our Team */}
            <section className="our-team">
                <div className="our-team-head">
                    <h4 data-aos="fade-up">OUR TEAM</h4>
                    <p data-aos="fade">We have an experienced and skilled crew of industry professionals dedicated to providing exceptional service and support to our clients. With the right expertise and knowledge they ensure that the highest quality products that have undergone stringent quality check measures and approvals reach the customers on time. <br /> At Ottimo, we have established a safe working environment by installing high safety equipment and protocols to ensure that our entire team is protected across processes.</p>
                    <div className="line" data-aos="fade"></div>
                </div>
                <div className="our-team-boxes-row">
                    <div className="our-team-box" data-aos="fade">
                        <img src={teamImage1} alt="Team Image" loading="lazy" />
                    </div>
                    <div className="our-team-box" data-aos="fade">
                        <img src={teamImage2} alt="Team Image" loading="lazy" />
                    </div>
                    <div className="our-team-box" data-aos="fade">
                        <img src={teamImage3} alt="Team Image" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA />
        </>
    )
}

export default About
