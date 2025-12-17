import '../css/Services.css';

import servicesBanner from '/images/banners/services-banner.avif';

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import serviceImage1 from '../assets/images/services/4.avif';
import serviceImage2 from '../assets/images/services/2.avif';
import serviceImage3 from '../assets/images/services/3.avif';

const Services = () => {

    let serviceCardsData = [
        {
            id: 1,
            image: serviceImage1,
            title: "Turnkey Projects",
            desc: "We undertake comprehensive corrosion protection projects for a wide range of applications, including structural steel, pipes, castings, steel fabrications, cylinders, and other cast/steel products. Our expertise ensures thorough protection and extended durability for your valuable assets.",
        },
        {
            id: 2,
            image: serviceImage2,
            title: "Consultancy",
            desc: "Our experienced team offers detailed studies and expert consultation to provide customized solutions tailored to your requirements. We analyze your products and provide professional recommendations to effectively build structures, prevent corrosion and extend the lifespan of various constructions.",
        },
        {
            id: 3,
            image: serviceImage3,
            title: "Technical Support",
            desc: "Our commitment to delivering utmost customer satisfaction drives us to provide comprehensive technical support for our manufactured products. Our proficient team is always prepared to address your inquiries, ensuring you receive unparalleled guidance and assistance for all your zinc wire requirements. We are dedicated to enhancing wire efficiency and are here to help you optimize your usage and experience.",
        },
    ]

    return (
        <>
            {/* Banner */}
            <section className="banner services-banner">
                <img src={servicesBanner} alt="Services Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">SERVICES</h1>
                </div>
            </section>

            {/* Services */}
            <section className="offered-services">
                <p data-aos="fade">At <span>Ottimo Metals</span>, we are proud to be experts in manufacturing high-quality zinc wires and providing specialized services such as consultancy and customized project development services. Our primary focus is on harnessing the potential of zinc wires to cater to various industries and projects.</p>
                <b data-aos="fade">Here are the services we offer:</b>
                <div className="offered-services-row">
                    {
                        serviceCardsData.map((item, index) => {
                            return (
                                <div className="offered-services-card" key={index} data-aos="fade-up">
                                    <div className="card-img">
                                        <img src={item.image} alt="Service Image" loading="lazy" />
                                    </div>
                                    <div className="card-desc">
                                        <span>{item.title}</span>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Services
