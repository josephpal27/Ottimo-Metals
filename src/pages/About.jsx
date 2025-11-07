import AboutWelcome from '../components/about-welcome/AboutWelcome';
import MissionVision from '../components/mission-vision/MissionVision';
import ProductDetails from '../components/product-details/ProductDetails';

import '../css/About.css';

import homeBanner from '/images/banners/banner.avif';
import ourProductImage1 from '../assets/images/products/1.avif';
import ourProductImage2 from '../assets/images/products/2.avif';
import ourProductImage3 from '../assets/images/products/3.avif';

const About = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
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
                    <h4>OUR PRODUCTS</h4>
                    <div className="line"></div>
                </div>
                <div className="our-products-boxes-row">
                    <div className="our-products-box">
                        <img src={ourProductImage1} alt="Product Image" loading="lazy" />
                    </div>
                    <div className="our-products-box">
                        <img src={ourProductImage2} alt="Product Image" loading="lazy" />
                    </div>
                    <div className="our-products-box">
                        <img src={ourProductImage3} alt="Product Image" loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
