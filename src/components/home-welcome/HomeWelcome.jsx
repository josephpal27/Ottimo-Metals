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
            <p data-aos="fade">Ottimo Metals is a trusted manufacturer of high-performance <b>zinc wires and zinc-aluminium wires</b>, built on decades of metallurgical expertise and a commitment to excellence. With a robust <b>manufacturing capacity of 1,200 MT per month</b> and state-of-the-art infrastructure, we use only SHG grade zinc (Zn 99.995%5) and deliver consistent quality and scale to meet global demand. Our products serve critical industries including construction, infrastructure, transportation, automobile, and marine, where reliability and performance are non-negotiable.</p>
            <div className="features" data-aos="fade">
                <div className="features-left">
                    <p><FaCheck className="icon" /> Latest infrastructure</p>
                    <p><FaCheck className="icon" /> In-house quality testing</p>
                    <p><FaCheck className="icon" /> Dedicated R&D team</p>
                    <p><FaCheck className="icon" /> Certified to global standards</p>
                    <p><FaCheck className="icon" /> Global presence and reliable delivery</p>
                </div>
            </div>
            <div className="tagline" data-aos="fade">
                <p>Leading manufactures of zinc wires and zinc aluminium wires in india</p>
            </div>
        </div>
        <img src={homeWelcomeImg3} alt="Welcome Image 3" loading="lazy" id="floating-img-2" />
      </section>
    </>
  )
}

export default HomeWelcome
