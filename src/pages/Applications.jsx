import '../css/Applications.css';

import homeBanner from '/images/banners/banner.avif';
import appsImg1 from '../assets/images/applications/1.avif';

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
            image: appsImg1,
            title: "Wind Power Plants",
            desc: "Zinc wiring empowers wind power plants by fortifying turbine structures, improving corrosion resistance, and maximizing energy production for sustainable, clean power generation.",
        },
        {
            id: 3,
            image: appsImg1,
            title: "Ductile Iron Pipes",
            desc: "Zinc wiring acts as a protective shield, safeguarding ductile iron pipes against rust, corrosion, and extending their lifespan in demanding environments.",
        },
        {
            id: 4,
            image: appsImg1,
            title: "Steel Fabrications",
            desc: "By integrating zinc wiring, steel fabrications achieve enhanced durability, anti-corrosion properties, and prolonged structural integrity, enabling versatile applications.",
        },
        {
            id: 5,
            image: appsImg1,
            title: "Steel Pipes",
            desc: "Zinc wiring forms robust barrier, shielding steel pipes from corrosion, rust, and harsh environmental conditions, ensuring long-lasting performance and reliability.",
        },
        {
            id: 6,
            image: appsImg1,
            title: "Rail & Road Bridges",
            desc: "Zinc wiring reinforces rail and road bridges, bolstering their load-bearing capacity, resilience against corrosion, and ensuring safe and reliable transportation infrastructure.",
        },
        {
            id: 7,
            image: appsImg1,
            title: "Tankers",
            desc: "Zinc wiring protects tankers against corrosion, extending their service life, and ensuring the safe transportation of valuable liquids and gases across vast distances.",
        },
        {
            id: 8,
            image: appsImg1,
            title: "Finned Tube",
            desc: "Zinc wire thermal metallization serves as a robust protective shield, effectively warding off rust and corrosion. This application significantly prolongs the lifespan of various materials, ensuring their durability even in the harshest weather conditions.",
        },
        {
            id: 9,
            image: appsImg1,
            title: "Ship Building & Repairing",
            desc: "Zinc wiring revolutionizes ship construction and repair processes, enabling corrosion-resistant vessels, enhanced structural integrity, and efficient maintenance in marine environments.",
        },
    ]

    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>

            {/* Applications */}
            <section className="applications">
                <div className="applications-head">
                    <h2>Discover the Versatile Applications of Ottimo zinc wires</h2>
                    <p>From durable corrosion protection to ship building, explore the wide-ranging uses of our high-quality zinc wires.</p>
                </div>
                <div className="applications-card-row">
                    <div className="applications-card">
                        <div className="card-image">
                            <img src={appsImg1} alt="Application Image" loading="lazy" />
                        </div>
                        <div className="card-desc">
                            <span>Efficient Capacitors</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quis reprehenderit eos tempore doloremque a at illum, aperiam ipsam possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius alias molestias dolores esse perferendis, ullam nobis. Assumenda, aperiam reprehenderit?</p>
                        </div>
                    </div>
                    <div className="applications-card">
                        <div className="card-image">
                            <img src={appsImg1} alt="Application Image" loading="lazy" />
                        </div>
                        <div className="card-desc">
                            <span>Efficient Capacitors</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quis reprehenderit eos tempore doloremque a at illum, aperiam ipsam possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius alias molestias dolores esse perferendis, ullam nobis. Assumenda, aperiam reprehenderit?</p>
                        </div>
                    </div>
                    <div className="applications-card">
                        <div className="card-image">
                            <img src={appsImg1} alt="Application Image" loading="lazy" />
                        </div>
                        <div className="card-desc">
                            <span>Efficient Capacitors</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quis reprehenderit eos tempore doloremque a at illum, aperiam ipsam possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius alias molestias dolores esse perferendis, ullam nobis. Assumenda, aperiam reprehenderit?</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Applications
