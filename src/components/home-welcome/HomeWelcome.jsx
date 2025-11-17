import './HomeWelcome.css';

import homeWelcomeImg1 from '../../assets/images/home-welcome-1.avif';
import homeWelcomeImg2 from '../../assets/images/home-welcome-2.avif';
import homeWelcomeImg3 from '../../assets/images/home-welcome-3.jpg';

import { FaCheck } from "react-icons/fa6";

const HomeWelcome = () => {
  return (
    <>
      <section className="home-welcome">
        <div className="home-welcome-image">
            <img src={homeWelcomeImg1} alt="Welcome Image" loading="lazy" />
            <img src={homeWelcomeImg2} alt="Welcome Image 2" loading="lazy" id="floating-img-1" data-aos="fade" />
        </div>
        <div className="home-welcome-content">
            <span data-aos="fade">Welcome to Ottimo Metals Pvt. Ltd.</span>
            <h2 data-aos="fade-up">We’re Committed <br /> To quality</h2>
            <p data-aos="fade">We are experts in providing superior products at a lower cost, and we have worked on Metal, Refinery, and Power projects. Our steel goods are of great quality, and we have a good reputation with our clients. I believe this is a nice start to a long-term relationship.</p>
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
                <p>WELDER PRO PROFESSIONAL WELDING COMPANY IN INDIA</p>
            </div>
        </div>
        <img src={homeWelcomeImg3} alt="Welcome Image 3" loading="lazy" id="floating-img-2" />
      </section>
    </>
  )
}

export default HomeWelcome
