import './HomeWelcome.css';

import homeWelcomeImg1 from '../../assets/images/home-welcome-1.avif';
import homeWelcomeImg2 from '../../assets/images/home-welcome-2.avif';

const HomeWelcome = () => {
  return (
    <>
      <div className="home-welcome">
        <div className="home-welcome-image">
            <img src={homeWelcomeImg1} alt="Welcome Image" loading="lazy" />
        </div>
        <div className="home-welcome-content">
            <span>Welcome to Ottimo Metals Pvt. Ltd.</span>
            <h2>We’re Committed <br /> To quality</h2>
            <p>We are experts in providing superior products at a lower cost, and we have worked on Metal, Refinery, and Power projects. Our steel goods are of great quality, and we have a good reputation with our clients. I believe this is a nice start to a long-term relationship.</p>
        </div>
      </div>
    </>
  )
}

export default HomeWelcome
