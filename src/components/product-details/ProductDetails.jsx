import './ProductDetails.css';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// import productCardImage1 from '../../assets/images/product-cards/1.avif';
// import productCardImage2 from '../../assets/images/product-cards/2.avif';
// import productCardImage3 from '../../assets/images/product-cards/3.avif';
// import productCardImage4 from '../../assets/images/product-cards/4.avif';

const ProductDetails = () => {

    let productCardsContent = [
        {
            id: 1,
            // image: productCardImage1,
            title: "SUSTAINABILITY",
            desc: "We strive for operational sustainability by continuously focusing on result-driven R&D to reduce our carbon footprint and promote sustainable practices. From responsible sourcing of materials to optimizing our production processes, we are committed to minimizing waste and ensuring a zero wastage production process.",
        },
        {
            id: 2,
            // image: productCardImage2,
            title: "CLIENT FOCUS",
            desc: "We believe that our clients are at the heart of everything we do, and we're committed to providing exceptional service and support to ensure that their needs are always met. We're dedicated to building long-term relationships with our clients.",
        },
        {
            id: 3,
            // image: productCardImage3,
            title: "QUALITY",
            desc: "At Ottimo Metals, our unwavering commitment to quality takes center stage. Our dedication to delivering excellence is manifested through continuous investments in research and development, as well as cutting-edge technology. This ensures the creation of top-tier products that adhere to a myriad of national and international standards.",
        },
        {
            id: 4,
            // image: productCardImage4,
            title: "INTEGRITY",
            desc: "We believe that honesty, transparency, and ethical behavior are essential to building trust with our clients and stakeholders. We're committed to upholding the highest standards of integrity in everything we do.",
        },
    ]


    return (
        <>
            <section className="product-details-row">

                {
                    productCardsContent.map((item, index) => {
                        return (
                            <div className="product-card" key={index} data-aos="fade">
                                {/* <div className="card-image">
                                    <img src={item.image} alt="Product Image" loading="lazy" />
                                </div> */}
                                <div className="card-desc">
                                    <span>{item.title}</span>
                                    <p>{item.desc}</p>
                                    {/* <Button component={Link} to="/products" className="button">READ MORE</Button> */}
                                </div>
                            </div>
                        )
                    })
                }

            </section>
        </>
    )
}

export default ProductDetails
