import '../css/Applications.css';

import applicationsBanner from '/images/banners/applications-banner.avif';
import appsImg1 from '../assets/images/applications/1.avif';
import appsImg2 from '../assets/images/applications/2.avif';
import appsImg3 from '../assets/images/applications/3.avif';
import appsImg4 from '../assets/images/applications/4.avif';
import appsImg5 from '../assets/images/applications/5.avif';
import appsImg6 from '../assets/images/applications/6.avif';
import appsImg7 from '../assets/images/applications/7.avif';
import appsImg8 from '../assets/images/applications/8.avif';
import appsImg9 from '../assets/images/applications/9.avif';

const Applications = () => {

    let applicationsContent = [
        {
            id: 1,
            image: appsImg1,
            title: "Efficient Capacitors",
            desc: "Zinc wiring is employed in capacitor technology, providing superior surface attachment and consistent results, delivering efficient energy storage and rapid discharge capabilities compared to non-ferrous wire coatings, enhancing the durability and performance of capacitors.",
        },
        {
            id: 2,
            image: appsImg2,
            title: "Wind Power Plants",
            desc: "Zinc wiring empowers wind power plants by fortifying turbine structures, improving corrosion resistance, and maximizing energy production for sustainable, clean power generation.",
        },
        {
            id: 3,
            image: appsImg3,
            title: "Ductile Iron Pipes",
            desc: "Zinc wiring acts as a protective shield, safeguarding ductile iron pipes against rust, corrosion, and extending their lifespan in demanding environments.",
        },
        {
            id: 4,
            image: appsImg4,
            title: "Steel Fabrications",
            desc: "By integrating zinc wiring, steel fabrications achieve enhanced durability, anti-corrosion properties, and prolonged structural integrity, enabling versatile applications.",
        },
        {
            id: 5,
            image: appsImg5,
            title: "Steel Pipes",
            desc: "Zinc wiring forms robust barrier, shielding steel pipes from corrosion, rust, and harsh environmental conditions, ensuring long-lasting performance and reliability.",
        },
        {
            id: 6,
            image: appsImg6,
            title: "Rail & Road Bridges",
            desc: "Zinc wiring reinforces rail and road bridges, bolstering their load-bearing capacity, resilience against corrosion, and ensuring safe and reliable transportation infrastructure.",
        },
        {
            id: 7,
            image: appsImg7,
            title: "Tankers",
            desc: "Zinc wiring protects tankers against corrosion, extending their service life, and ensuring the safe transportation of valuable liquids and gases across vast distances.",
        },
        {
            id: 8,
            image: appsImg8,
            title: "Finned Tube",
            desc: "Zinc wire thermal metallization serves as a robust protective shield, effectively warding off rust and corrosion. This application significantly prolongs the lifespan of various materials, ensuring their durability even in the harshest weather conditions.",
        },
        {
            id: 9,
            image: appsImg9,
            title: "Ship Building & Repairing",
            desc: "Zinc wiring revolutionizes ship construction and repair processes, enabling corrosion-resistant vessels, enhanced structural integrity, and efficient maintenance in marine environments.",
        },
    ]

    return (
        <>
            {/* Banner */}
            <section className="banner applications-banner">
                <img src={applicationsBanner} alt="Applications Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">APPLICATIONS</h1>
                </div>
            </section>

            {/* Applications */}
            <section className="applications">
                <div className="applications-head">
                    <h2 data-aos="fade">Discover the Versatile Applications of Ottimo zinc wires</h2>
                    <p data-aos="fade">From durable corrosion protection to ship building, explore the wide-ranging uses of our high-quality zinc wires.</p>
                </div>
                <div className="applications-card-row">
                    {
                        applicationsContent.map((item, index) => {
                            return (
                                <div className="applications-card" key={index} data-aos="fade">
                                    <div className="card-image">
                                        <img src={item.image} alt="Application Image" loading="lazy" />
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
                <div className="applications-foot-content">
                    <p data-aos="fade">At Ottimo Metals, we continually explore innovative uses for zinc wires, pushing the boundaries of what can be achieved with this versatile material across various industries.</p>
                </div>
            </section>
        </>
    )
}

export default Applications
