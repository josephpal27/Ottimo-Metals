import '../css/Gallery.css';

import homeBanner from '/images/banners/gallery-banner.avif';

import { GoDotFill } from "react-icons/go";

const Gallery = () => {

    const galleryImages = [
        "1.avif",
        "2.avif",
        "3.avif",
        "4.avif",
        "5.avif",
        "6.avif",
        "7.avif",
        "8.avif",
        "9.avif",
        "10.avif",
        "11.avif",
        "12.avif",
        "13.avif",
        "14.avif",
        "15.avif",
        "16.avif",
        "17.avif",
        "18.avif",
        "19.avif",
        "20.avif",
        "21.avif",
        "22.avif",
        "23.avif",
        "24.avif",
        "25.avif",
        "26.avif",
        "27.avif",
        "28.avif",
        "29.avif",
        "30.avif",
        "31.avif",  
        "32.avif",
        "33.avif",
    ];


    return (
        <>
            {/* Banner */}
            <section className="banner gallery-banner">
                <img src={homeBanner} alt="Gallery Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">GALLERY</h1>
                    <p data-aos="fade"><b><GoDotFill className="dot-icon" /> Our Commitment to Quality, Captured.</b></p>
                    <p data-aos="fade">View the infrastructure, laboratory testing, and final product packaging that assure the superior performance and unwavering consistency of Ottimo Metals' top-tier products.</p>
                </div>
            </section>

            <div id="banner-moblile-text">
                <p data-aos="fade"><b>Our Commitment to Quality, Captured.</b></p>
                <p data-aos="fade">View the infrastructure, laboratory testing, and final product packaging that assure the superior performance and unwavering consistency of Ottimo Metals' top-tier products.</p>
            </div>

            {/* Gallery */}
            <section className="gallery">
                <div className="gallery-head">
                    <h2 data-aos="fade">From small-scale projects to large-scale infrastructure, our zinc wires are the right choice</h2>
                    <p data-aos="fade">Browse our gallery to see our products in action:</p>
                </div>
                <div className="gallery-card-row">
                    {
                        galleryImages.map((item, index) => {
                            return (
                                <div className="gallery-card" key={index} data-aos="fade">
                                    <img src={`/images/gallery/${item}`} alt="Gallery Image" loading="lazy" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Gallery
