import '../css/Products.css';

import homeBanner from '/images/banners/banner.avif';

const Products = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>
        </>
    )
}

export default Products
