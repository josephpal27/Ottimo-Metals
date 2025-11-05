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
    </>
  )
}

export default Home
