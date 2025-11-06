import '../css/Home.css';

import homeBanner from '/images/banners/banner.avif';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import HomeWelcome from '../components/home-welcome/HomeWelcome';
import CTA from '../components/cta/CTA';

import ServiceImage1 from '../assets/images/services/1.avif';
import ServiceImage2 from '../assets/images/services/2.avif';
import ServiceImage3 from '../assets/images/services/3.avif';

import testimonialIcon1 from '../assets/images/icons/work.png';
import testimonialIcon2 from '../assets/images/icons/welding.png';
import testimonialIcon3 from '../assets/images/icons/welding-machine.png';

const Home = () => {

  let serviceCardsData = [
    {
      image: ServiceImage1,
      title: "STEEL WELDING",
      description: "Stainless steel is a popular building material that has long been praised for its strength and corrosion resistance",
    },
    {
      image: ServiceImage2,
      title: "Metal Works",
      description: "Our process enhances construction speed and overall project success by utilizing skilled upfront planning",
    },
    {
      image: ServiceImage3,
      title: "Pipe Welding",
      description: "Our core welding team is used to working in difficult and demanding situations, and they accomplish",
    },
  ]



  return (
    <>

      {/* Banner */}
      <div className="banner">
        <img src={homeBanner} alt="Home Banner" loading="eager" />
      </div>

      {/* Home Welcome */}
      <HomeWelcome />

      {/* CTA */}
      <CTA />

      {/* What We Offer */}
      <section className="what-we-offer">
        <div className="what-we-offer-head">
          <span>Our Services</span>
          <h3>What we offer</h3>
        </div>
        <div className="what-we-offer-cards-row">
          {
            serviceCardsData.map((item, index) => {
              return (
                <div className="offer-card" key={index}>
                  <div className="card-image">
                    <img src={item.image} alt="Card Image" loading="lazy" />
                  </div>
                  <div className="card-desc">
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                    <Button component={Link} to="/services" className="button">Read More</Button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
          <div className="testimonials-left">
            <span>Our Testimonials</span>
            <h4>WHAT THEY SAY</h4>
          </div>
          <div className="testimonials-right">
            <div className="testimonial-hightlight-box">
              <div className="hightlight-image">
                <img src={testimonialIcon1} alt="Icon" loading="lazy" />
              </div>
              <div className="hightlight-content">
                <p>We’re Good in All Metal Works</p>
              </div>
            </div>
            <div className="testimonial-hightlight-box">
              <div className="hightlight-image">
                <img src={testimonialIcon2} alt="Icon" loading="lazy" />
              </div>
              <div className="hightlight-content">
                <p>Expert & Professional Welder Workers</p>
              </div>
            </div>
            <div className="testimonial-hightlight-box">
              <div className="hightlight-image">
                <img src={testimonialIcon3} alt="Icon" loading="lazy" />
              </div>
              <div className="hightlight-content">
                <p>We’re Using Quality Welding Tools</p>
              </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default Home
