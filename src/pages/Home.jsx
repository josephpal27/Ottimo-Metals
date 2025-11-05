import '../css/Home.css';

import homeBanner from '../../public/images/banners/banner.avif';
import HomeWelcome from '../components/home-welcome/HomeWelcome';

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner">
        <img src={homeBanner} alt="Home Banner" loading="eager" />
      </div>

      {/* Home Welcome */}
      <HomeWelcome/>
    </>
  )
}

export default Home
