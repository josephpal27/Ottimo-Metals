import './AboutWelcome.css';

import aboutWelcomeImg from '../../assets/images/about-welcome.avif';

import { FaCheck, FaTwitter } from "react-icons/fa6";

const AboutWelcome = () => {
    return (
        <>
            <section className="about-welcome">
                <div className="about-welcome-image">
                    <img src={aboutWelcomeImg} alt="Welcome Image" loading="lazy" />
                    <div className="exp-box" data-aos="fade-up">
                        <FaTwitter className="icon" />
                        <span>36 Years of <br /> Expericence</span>
                    </div>
                </div>
                <div className="about-welcome-content">
                    <h2 data-aos="fade-up">We’re Committed <br /> To quality</h2>
                    <p data-aos="fade">We are experts in providing superior products at a lower cost, and we have worked on Metal, Refinery, and Power projects. Our steel goods are of great quality, and we have a good reputation with our clients. I believe this is a nice start to a long-term relationship.</p>
                    <div className="features" data-aos="fade">
                        <div className="features-left">
                            <p><FaCheck className="icon" /> We provide 24/7 service</p>
                            <p><FaCheck className="icon" /> We strick to deadline</p>
                        </div>
                        <div className="features-right">
                            <p><FaCheck className="icon" /> We offer upfront pricing</p>
                            <p><FaCheck className="icon" /> We use latest technology</p>
                        </div>
                    </div>
                    <div className="prog" data-aos="fade">
                        <span>WELDING</span>
                        <progress value="90" max="100"></progress>
                        <span>METAL WORK</span>
                        <progress value="78" max="100"></progress>
                        <span>STEEL WELD</span>
                        <progress value="65" max="100"></progress>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutWelcome
