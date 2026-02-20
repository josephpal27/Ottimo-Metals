import './AboutWelcome.css';
import aboutWelcomeImg from '../../assets/images/about-welcome.jpeg';

const AboutWelcome = () => {
    return (
        <>
            <section className="about-welcome">
                <div className="about-welcome-image">
                    <img src={aboutWelcomeImg} alt="Welcome Image" loading="lazy" />
                </div>
                <div className="about-welcome-content">
                    {/* <h2 data-aos="fade-up">We’re Committed <br /> To quality</h2> */}
                    <h2 data-aos="fade-up">Ottimo’s zinc shield,</h2>
                    <span>A trusted name in the Zinc Wire and Zinc Alluminium industry.</span>
                    <p data-aos="fade">Ottimo. In Italian, it means the best. And that's the promise we live by every single day.At Ottimo, excellence isn't just what we do... it's who we are. "With over 40 years of experience in the manufacturing industry, we expanded our portfolio in 2023 to include zinc manufacturing, leveraging our expertise to deliver high-quality products." With a world-class European set-up and state-of-the-art infrastructure, we redefine manufacturing standards in zinc wires, zinc-aluminium wires and fibre drums, ensuring world-class packaging and better value for our clients.</p>
                </div>
            </section>
        </>
    )
}

export default AboutWelcome
