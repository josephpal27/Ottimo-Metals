import '../css/Gallery.css';

import homeBanner from '/images/banners/gallery-banner.avif';
import galleryImg1 from '../assets/images/gallery/1.avif';
import galleryImg2 from '../assets/images/gallery/2.avif';
import galleryImg3 from '../assets/images/gallery/3.avif';
import galleryImg4 from '../assets/images/gallery/4.avif';
import galleryImg5 from '../assets/images/gallery/5.avif';
import galleryImg6 from '../assets/images/gallery/6.avif';
import galleryImg7 from '../assets/images/gallery/7.avif';
import galleryImg8 from '../assets/images/gallery/8.avif';
import galleryImg9 from '../assets/images/gallery/9.avif';
import galleryImg10 from '../assets/images/gallery/10.avif';
import galleryImg11 from '../assets/images/gallery/11.avif';

const Gallery = () => {

    let gallertImages = [
        { id: 1, img: galleryImg1 },
        { id: 2, img: galleryImg2 },
        { id: 3, img: galleryImg3 },
        { id: 4, img: galleryImg4 },
        { id: 5, img: galleryImg5 },
        { id: 6, img: galleryImg6 },
        { id: 7, img: galleryImg7 },
        { id: 8, img: galleryImg8 },
        { id: 9, img: galleryImg9 },
        { id: 10, img: galleryImg10 },
        { id: 11, img: galleryImg11 },
    ]

    return (
        <>
            {/* Banner */}
            <section className="banner gallery-banner">
                <img src={homeBanner} alt="Gallery Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">GALLERY</h1>
                    <p data-aos="fade">Our Commitment to Quality, Captured.</p>
                    <p data-aos="fade">View the infrastructure, laboratory testing, and final product packaging that assure the superior performance and unwavering consistency of Ottimo Metals' top-tier products.</p>
                </div>
            </section>

            <div id="banner-moblile-text">
                <p data-aos="fade">Our Commitment to Quality, Captured.</p>
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
                        gallertImages.map((item, index) => {
                            return (
                                <div className="gallery-card" key={index} data-aos="fade">
                                    <img src={item.img} alt="Gallery Image" loading="lazy" />
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
