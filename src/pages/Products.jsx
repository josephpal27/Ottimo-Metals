import '../css/Products.css';

import homeBanner from '/images/banners/banner.avif';
import whatWeDoImage from '../assets/images/products/what-we-do.avif';

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
        </>
    )
}

export default Products
