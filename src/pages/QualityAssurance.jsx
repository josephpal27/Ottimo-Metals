import '../css/QualityAssurance.css';

import homeBanner from '/images/banners/banner.avif';
import qualityControlImg from '../assets/images/quality-control.avif';

import { FaCheck } from "react-icons/fa6";

const QualityAssurance = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>

            {/* Quality Assurance */}
            <section className="quality-assurance">
                <h2>ZINC WIRES</h2>
                <div className="line"></div>
                <div className="quality-cards-row">
                    <div className="quality-box">
                        <div className="layer"></div>
                        <span>01</span>
                        <h3>QUALITY</h3>
                        <p>Experience superior performance with our zinc wires manufactured to the highest standards with quality testing machines:</p>
                        <div className="quality-list">
                            <p><FaCheck className="icon" /> German spectrometer to test chemical composition</p>
                            <p><FaCheck className="icon" /> European standard tensile testing machine</p>
                            <p><FaCheck className="icon" /> On site chemical laboratory</p>
                            <p><FaCheck className="icon" /> State of the art European plant</p>
                        </div>
                    </div>
                    <div className="quality-box">
                        <div className="layer"></div>
                        <span>02</span>
                        <h3>LARGE-SCALE AUTOMATED MANUFACTURING</h3>
                        <p>From zinc ingots to drawing and packaging zinc wires, our manufacturing process is fully automated.</p>
                    </div>
                </div>
            </section>

            {/* Quality Control */}
            <section className="quality-control">
                <div className="quality-control-content">
                    <h4>QUALITY CONTROL</h4>
                    <p>At Ottimo Metals, our unwavering commitment to quality is upheld through a rigorous and comprehensive Quality Control plan. This plan is overseen by a team of adept engineers with technical expertise, complemented by a highly trained and qualified staff.</p>
                    <ul>
                        <li>ISO 9001:2015 Quality System and ISO 14001:2015 Environment Management System. SHG grade zinc (Zn 99.995%) adhering to DIN EN 14919 standards.</li>
                        <li>Our modern in-house laboratory, outfitted with cutting-edge German technology, boasts a Photo Spectrometer that meticulously verifies chemical compositions.</li>
                        <li>Additionally, we leverage a European standard UTM Machine, coupled with a Metallurgical microscope, to scrutinize the mechanical and physical attributes of our products.</li>
                    </ul>
                    <p>This meticulous approach serves as a distinct advantage, ensuring that our offerings consistently meet and exceed the highest standards of excellence.</p>
                </div>
                <div className="quality-control-image">
                    <img src={qualityControlImg} alt="Quality Control" loading="lazy" />
                    <div className="quality-image-outer"></div>
                </div>
            </section>
        </>
    )
}

export default QualityAssurance
