import '../css/About.css';

import homeBanner from '/images/banners/banner.avif';

const About = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>
        </>
    )
}

export default About
