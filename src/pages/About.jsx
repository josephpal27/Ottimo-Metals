import AboutWelcome from '../components/about-welcome/AboutWelcome';

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
        </>
    )
}

export default About
