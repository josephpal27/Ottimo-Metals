import './AboutWelcome.css';

import aboutWelcomeImg from '../../assets/images/about-welcome.jpeg';

import { FaCheck } from "react-icons/fa6";

const AboutWelcome = () => {
    return (
        <>
            <section className="about-welcome">
                <div className="about-welcome-image">
                    <img src={aboutWelcomeImg} alt="Welcome Image" loading="lazy" />
                </div>
                <div className="about-welcome-content">
                    <h2 data-aos="fade-up">We’re Committed <br /> To quality</h2>
                    <p data-aos="fade">Ottimo. In Italian, it means the best. And that's the promise we live by every single day.At Ottimo, excellence isn't just what we do... it's who we are. "With over 40 years of experience in the manufacturing industry, we expanded our portfolio in 2023 to include zinc manufacturing, leveraging our expertise to deliver high-quality products." With a world-class European set-up and state-of-the-art infrastructure, we redefine manufacturing standards in zinc wires, zinc-aluminium wires and fibre drums, ensuring world-class packaging and better value for our clients.</p>
                    {/* <div className="features" data-aos="fade">
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
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default AboutWelcome
