import '../css/Home.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import HomeWelcome from '../components/home-welcome/HomeWelcome';
import CTA from '../components/cta/CTA';

import ServiceImage1 from '../assets/images/services/1.avif';
import ServiceImage2 from '../assets/images/services/2.avif';
import ServiceImage3 from '../assets/images/services/3.avif';

import testimonialIcon1 from '../assets/images/icons/work.png';
import testimonialIcon2 from '../assets/images/icons/welding.png';
import testimonialIcon3 from '../assets/images/icons/globe.png';

const Home = () => {

  const serviceCardsData = [
    {
      image: ServiceImage1,
      title: "zinc wires",
      description: "Stainless steel is a popular building material that has long been praised for its strength and corrosion resistance",
      link: "/zinc-wires",
    },
    {
      image: ServiceImage2,
      title: "zinc aluminium wires",
      description: "Our process enhances construction speed and overall project success by utilizing skilled upfront planning",
      link: "/zinc-aluminium-wires",
    },
    {
      image: ServiceImage3,
      title: "drums",
      description: "Our core welding team is used to working in difficult and demanding situations, and they accomplish",
      link: "",
    },
  ]

  return (
    <>

      {/* Banner */}
      <section className="banner-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          speed={1200}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide id="swiper-slide-1">
            <div className="slide-image">
              <img src="/images/banners/home-banner-1.avif" alt="Banner Slide 1" loading="eager" />
            </div>
            <div className="slide-content">
              <div className="slide-content-inner">
                <h1 data-aos="fade-up">Redefining <span>Excellence</span> <br /> in <span>Zinc Wire</span> Manufacturing</h1>
                <p id="label" data-aos="fade">Discover Ottimo Metals Today</p>
                <ul data-aos="fade">
                  <li>German spectrometer to test chemical composition</li>
                  <li>European standard tensile testing machine</li>
                  <li>On-site chemical laboratory</li>
                  <li>European standard UTM (universal testing machine) and Metallurgical microscope to test the physical and mechanical properties</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swiper-slide-2">
            <div className="slide-image">
              <img src="/images/banners/home-banner-2.avif" alt="Banner Slide 2" loading="eager" />
            </div>
            <div className="slide-content">
              <div className="slide-content-inner">
                <h2><span>State</span> of <br /> the <span>art</span></h2>
                <p>European Plant</p>
                {/* <p><span>Ottimo Metals</span>, <br /> Your Trusted Manufacturer</p> */}
                <p>Engineered in <span>Purity</span>. Delivered with <span>Precision</span>. Trusted <span>Worldwide</span>.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swiper-slide-3">
            <div className="slide-image">
              <img src="/images/banners/home-banner-3.avif" alt="Banner Slide 3" loading="eager" />
            </div>
            <div className="slide-content">
              <div className="slide-content-inner">
                <h2><span>Reliable</span> Zinc <br /> Wire <span>Solutions</span></h2>
                <p>Ottimo Metals, Your Partner in Excellence</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swiper-slide-4">
            <div className="slide-image">
              <img src="/images/banners/home-banner-4.avif" alt="Banner Slide 4" loading="eager" />
            </div>
            <div className="slide-content">
              <div className="slide-content-inner">
                <h2>Discover the Power of <br /> <span>Dual Metal Defence</span> <br /> with Ottimo Metals Pvt Ltd <br /> <span>Zinc Aluminium Wires</span></h2>
                <Button component={Link} to="/zinc-aluminium-wires" className="button">Discover More</Button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>

      {/* Home Welcome */}
      <HomeWelcome />

      {/* CTA */}
      <CTA />

      {/* What We Offer */}
      <section className="what-we-offer">
        <div className="what-we-offer-head">
          <span data-aos="fade">Our Services</span>
          <h3 data-aos="fade-up">What we offer</h3>
        </div>
        <div className="what-we-offer-cards-row">
          {
            serviceCardsData.map((item, index) => {
              return (
                <div className="offer-card" key={index} data-aos="fade">
                  <div className="card-image">
                    <img src={item.image} alt="Card Image" loading="lazy" />
                  </div>
                  <div className="card-desc">
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                    {item.link && <Button component={Link} to={item.link} className="button">Read More</Button>}
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
          <span data-aos="fade">How Zinc Protects ?</span>
          <h4 data-aos="fade-up">WHEN PAINT FAILS, <br /> METAL PROTECTS</h4>
          <div className="testimonials-tabbing" data-aos="fade">
            <p>Thermal spray metallization using zinc and aluminium wires forms a long-lasting corrosion barrier, delivering up to 20 years of protection - significantly outperforming conventional paint coatings.</p>
          </div>
        </div>
        <div className="testimonials-right">
          <div className="testimonial-hightlight-box" data-aos="fade">
            <div className="hightlight-image">
              <img src={testimonialIcon1} alt="Icon" loading="lazy" />
            </div>
            <div className="hightlight-content">
              <p>Plant equipped with cutting edge continuous casting and rolling system (CCR Line)</p>
            </div>
          </div>
          <div className="testimonial-hightlight-box" data-aos="fade">
            <div className="hightlight-image">
              <img src={testimonialIcon2} alt="Icon" loading="lazy" />
            </div>
            <div className="hightlight-content">
              <p>SHG Grade Zinc: 99.995% pure zinc</p>
            </div>
          </div>
          <div className="testimonial-hightlight-box" data-aos="fade">
            <div className="hightlight-image">
              <img src={testimonialIcon3} alt="Icon" loading="lazy" />
            </div>
            <div className="hightlight-content">
              <p>Global presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Quality */}
      <section className="choose-quality">
        <p>Choose Quality, <br /> Choose <span>Ottimo</span></p>
      </section>

    </>
  )
}

export default Home