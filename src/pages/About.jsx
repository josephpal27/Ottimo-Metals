import AboutWelcome from '../components/about-welcome/AboutWelcome';
import MissionVision from '../components/mission-vision/MissionVision';
import ProductDetails from '../components/product-details/ProductDetails';

import '../css/About.css';

import homeBanner from '/images/banners/banner.avif';

const About = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>

            {/* About Welcome */}
            <AboutWelcome/>

            {/* Mission Vision */}
            <MissionVision/>

            {/* Product Details */}
            <ProductDetails/>
        </>
    )
}

export default About
