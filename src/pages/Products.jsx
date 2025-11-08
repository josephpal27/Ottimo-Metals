import '../css/Products.css';

import homeBanner from '/images/banners/banner.avif';
import whatWeDoImage from '../assets/images/products/what-we-do.avif';
import zincWireImage from '../assets/images/products/zinc-wire.avif';

import { FaCheck } from "react-icons/fa6";

const Products = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>

            {/* What We Do */}
            <section className="what-we-do">
                <div className="what-we-do-content">
                    <h2>WHAT WE DO</h2>
                    <p>Ottimo Metals takes pride in its expertise in manufacturing high purity zinc wires drawn from high grade zinc ingots(Zn: 99.995%) that have earned a reputation for exceptional quality and unwavering consistency. Made from 99.995% pure Zinc, our wires are meticulously crafted to cater to a wide range of applications, guaranteeing superior performance and uniformity in every product.</p>
                </div>
                <div className="what-we-do-image">
                    <img src={whatWeDoImage} alt="What we do" loading="lazy" />
                    <div className="layer"></div>
                </div>
            </section>

            {/* Product Details */}
            <section className="product-details">
                <h3>PRODUCT DETAILS</h3>
                <div className="line"></div>
                <p>Discover the superior strength, durability, and versatility of our high-quality zinc wires, designed to meet the diverse needs of various industries.</p>
            </section>

            {/* Zinc Wires Content */}
            <section className="zinc-wires-content">
                <div className="zinc-wires-top">
                    <div className="zinc-top-image">
                        <img src={zincWireImage} alt="Zinc Wires" loading="lazy" />
                    </div>
                    <div className="zinc-top-content">
                        <h4>ZINC WIRES</h4>
                        <div className="zinc-wire-highlights">
                            <div className="highlight-box">
                                <span><FaCheck className="icon" /> High-purity Zinc wire 99.995% purity</span>
                            </div>
                            <div className="highlight-box">
                                <span><FaCheck className="icon" /> Exceptional anti-corrosion performance</span>
                            </div>
                            <div className="highlight-box">
                                <span><FaCheck className="icon" /> Wide range of sizes available</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zinc-wires-bottom">

                </div>
            </section>
        </>
    )
}

export default Products
