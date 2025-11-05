import '../css/Home.css';

import homeBanner from '../../public/images/banners/banner.avif';

const Home = () => {
  return (
    <>
      <div className="banner">
        <img src={homeBanner} alt="Home Banner" loading="lazy" />
      </div>
    </>
  )
}

export default Home
