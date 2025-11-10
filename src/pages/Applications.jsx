import '../css/Applications.css';

import homeBanner from '/images/banners/banner.avif';
import appsImg1 from '../assets/images/applications/1.avif';

const Applications = () => {
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
