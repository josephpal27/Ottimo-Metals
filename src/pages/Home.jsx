import '../css/Home.css';

import homeBanner from '/images/banners/banner.avif';

import HomeWelcome from '../components/home-welcome/HomeWelcome';
import CTA from '../components/cta/CTA';

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner">
        <img src={homeBanner} alt="Home Banner" loading="eager" />
      </div>

      {/* Home Welcome */}
      <HomeWelcome/>

      {/* CTA */}
      <CTA/>

      {/* What We Offer */}
      <section className="what-we-offer">
          <div className="what-we-offer-head">
            <span>Our Services</span>
            <h3>What we offer</h3>
          </div>
          <div className="what-we-offer-cards-row">
            
          </div>
      </section>
    </>
  )
}

export default Home
