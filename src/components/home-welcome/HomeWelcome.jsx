import './HomeWelcome.css';

import homeWelcomeImg1 from '../../assets/images/factory-gate.avif';
import homeWelcomeImg2 from '../../assets/images/factory-plant.avif';
import homeWelcomeImg3 from '../../assets/images/home-welcome-3.jpg';

import { FaCheck } from "react-icons/fa6";

const HomeWelcome = () => {
  return (
    <>
      <section className="home-welcome">
        <div className="home-welcome-image">
            <img src={homeWelcomeImg1} alt="Welcome Image" loading="lazy" />
            <img src={homeWelcomeImg2} alt="Welcome Image 2" loading="lazy" id="floating-img-1" />
        </div>
        <div className="home-welcome-content">
            <span data-aos="fade">Welcome to</span>
            <h2 data-aos="fade-up">Ottimo Metals Pvt. Ltd.</h2>
            <p data-aos="fade">Ottimo. In Italian, it means the best. And that's the promise we live by every single day.At Ottimo, excellence isn't just what we do... it's who we are. "With over 40 years of experience in the manufacturing industry, we expanded our portfolio in 2023 to include zinc manufacturing, leveraging our expertise to deliver high-quality products." With a world-class European set-up and state-of-the-art infrastructure, we redefine manufacturing standards in zinc wires, zinc-aluminium wires and fibre drums, ensuring world-class packaging and better value for our clients.</p>
            <div className="features" data-aos="fade">
                <div className="features-left">
                    <p><FaCheck className="icon" /> We provide 24/7 service</p>
                    <p><FaCheck className="icon" /> We strick to deadline</p>
                    <p><FaCheck className="icon" /> We offer upfront pricing</p>
                    <p><FaCheck className="icon" /> We use latest technology</p>
                </div>
                <div className="features-right">
                    <div className="feature-box">
                        <p>Welding joins together</p>
                    </div>
                    <div className="feature-box">
                        <p>Have all metal works tools</p>
                    </div>
                </div>
            </div>
            <div className="tagline" data-aos="fade">
                <p>Leading manufactures of zinc wires and zinc alluminium wires in india</p>
            </div>
        </div>
        <img src={homeWelcomeImg3} alt="Welcome Image 3" loading="lazy" id="floating-img-2" />
      </section>
    </>
  )
}

export default HomeWelcome
