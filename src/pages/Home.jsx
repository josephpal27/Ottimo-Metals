import '../css/Home.css';

import homeBanner from '/images/banners/home-banner.avif';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { Tab, Nav } from "react-bootstrap";

import HomeWelcome from '../components/home-welcome/HomeWelcome';
import CTA from '../components/cta/CTA';

import ServiceImage1 from '../assets/images/services/1.avif';
import ServiceImage2 from '../assets/images/services/2.avif';
import ServiceImage3 from '../assets/images/services/3.avif';

import testimonialIcon1 from '../assets/images/icons/work.png';
import testimonialIcon2 from '../assets/images/icons/welding.png';
import testimonialIcon3 from '../assets/images/icons/welding-machine.png';

import testimonialUserM from '../assets/images/icons/user-m.png';
import testimonialUserF from '../assets/images/icons/user-f.png';

const Home = () => {

  const serviceCardsData = [
    {
      image: ServiceImage1,
      title: "zinc wires",
      description: "Stainless steel is a popular building material that has long been praised for its strength and corrosion resistance",
    },
    {
      image: ServiceImage2,
      title: "zinc alluminium wires",
      description: "Our process enhances construction speed and overall project success by utilizing skilled upfront planning",
    },
    {
      image: ServiceImage3,
      title: "drums",
      description: "Our core welding team is used to working in difficult and demanding situations, and they accomplish",
    },
  ]

  const testimonials = [
    {
      key: "tabOne",
      img: testimonialUserM,
      text: "I have just had two of the most productive work weeks I have had in years. Ben was perfectly matched to my temperament, and has been taking all the backlogged work off my plate and finishing it.",
      name: "Jessica Brown",
      designation: "Co-Founder",
    },
    {
      key: "tabTwo",
      img: testimonialUserM,
      text: "I have just had two of the most productive work weeks I have had in years. Ben was perfectly matched to my temperament all the backlogged work off my plate and finishing.",
      name: "Jessica Brown",
      designation: "Founder",
    },
    {
      key: "tabThree",
      img: testimonialUserF,
      text: "I have just had two of the most productive work weeks I have had in years. Ben was perfectly matched to my temperament, and has been taking all the backlogged work off my plate and finishing it.",
      name: "Jessica Brown",
      designation: "Co-Founder",
    },
    {
      key: "tabFour",
      img: testimonialUserM,
      text: "I have just had two of the most productive work weeks I have had in years. Ben was perfectly matched to my temperament all the backlogged work off my plate and finishing.",
      name: "Jessica Brown",
      designation: "Founder",
    },
    {
      key: "tabFive",
      img: testimonialUserF,
      text: "I have just had two of the most productive work weeks I have had in years. Ben was perfectly matched to my temperament, and has been taking all the backlogged work off my plate and finishing it.",
      name: "Jessica Brown",
      designation: "Co-Founder",
    },
  ];


  return (
    <>

      {/* Banner */}
      <section className="banner home-banner">
        <img src={homeBanner} alt="Banner" loading="eager" />
        <div className="banner-content">
          <h1 data-aos="fade-up">Leading Manufacturer of <br /> Zinc Wires In India</h1>
        </div>
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
                    <Button component={Link} to="/products" className="button">Read More</Button>
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
          <span data-aos="fade">Our Testimonials</span>
          <h4 data-aos="fade-up">WHAT THEY SAY</h4>
          <div className="testimonials-tabbing" data-aos="fade">
            <Tab.Container defaultActiveKey="tabOne">
              {/* Tabs Navigation */}
              <Nav variant="tabs" className="tab-head">
                {testimonials.map(item => (
                  <Nav.Item key={item.key}>
                    <Nav.Link eventKey={item.key}>
                      <img src={item.img} alt="Icon" loading="lazy" />
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              {/* Tabs Content */}
              <Tab.Content>
                {testimonials.map(item => (
                  <Tab.Pane eventKey={item.key} key={item.key} className="fade">
                    <p>{item.text}</p>
                    <span className="client-name">{item.name}</span>
                    <span className="client-designation">{item.designation}</span>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
        <div className="testimonials-right">
          <div className="testimonial-hightlight-box" data-aos="fade">
            <div className="hightlight-image">
              <img src={testimonialIcon1} alt="Icon" loading="lazy" />
            </div>
            <div className="hightlight-content">
              <p>We’re Good in All Metal Works</p>
            </div>
          </div>
          <div className="testimonial-hightlight-box" data-aos="fade">
            <div className="hightlight-image">
              <img src={testimonialIcon2} alt="Icon" loading="lazy" />
            </div>
            <div className="hightlight-content">
              <p>Expert & Professional Welder Workers</p>
            </div>
          </div>
          <div className="testimonial-hightlight-box" data-aos="fade">
            <div className="hightlight-image">
              <img src={testimonialIcon3} alt="Icon" loading="lazy" />
            </div>
            <div className="hightlight-content">
              <p>We’re Using Quality Welding Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Quality */}
      <section className="choose-quality">
        <p>Choose Quality, <br /> Choose Ottimo</p>
      </section>

    </>
  )
}

export default Home