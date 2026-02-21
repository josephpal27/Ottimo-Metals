import '../css/QualityAssurance.css';

import qualityBanner from '/images/banners/quality-banner.avif';
import qualityControlImg from '../assets/images/quality-control.avif';
import microZinc from '../assets/images/micro.png';
import diagram from '../assets/images/diagram.png';

import { FaCheck } from "react-icons/fa6";

const QualityAssurance = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner quality-banner">
                <img src={qualityBanner} alt="Quality Assurance Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">QUALITY <br /> ASSURANCE</h1>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="quality-assurance">
                <h2 data-aos="fade-up">ZINC WIRES & <br /> ZINC ALLUMINIUM WIRES</h2>
                <div className="line" data-aos="fade"></div>
                <div className="quality-cards-row">
                    <div className="quality-box">
                        <div className="layer"></div>
                        <span data-aos="fade">01</span>
                        <h3 data-aos="fade-up">QUALITY</h3>
                        <p data-aos="fade">Experience superior performance with our zinc wires and zinc aluminium wires manufactured to the highest standards with quality testing machines:</p>
                        <div className="quality-list" data-aos="fade">
                            <p><FaCheck className="icon" /> German spectrometer to test chemical composition</p>
                            <p><FaCheck className="icon" /> European standard tensile testing machine</p>
                            <p><FaCheck className="icon" /> On site chemical laboratory</p>
                            <p><FaCheck className="icon" /> State of the art European plant</p>
                            <p><FaCheck className="icon" /> European standard UTM Machine, coupled with a Metallurgical microscope</p>
                        </div>
                    </div>
                    <div className="quality-box">
                        <div className="layer"></div>
                        <span data-aos="fade">02</span>
                        <h3 data-aos="fade-up">LARGE-SCALE AUTOMATED MANUFACTURING</h3>
                        <p data-aos="fade">From zinc ingots to drawing and packaging zinc wires and zinc aluminium wires, our manufacturing process is fully automated.</p>
                    </div>
                </div>
            </section>

            {/* Quality Control */}
            <section className="quality-control">
                <div className="quality-control-content">
                    <h4 data-aos="fade-up">QUALITY CONTROL</h4>
                    <p data-aos="fade">At Ottimo Metals, our unwavering commitment to quality is upheld through a rigorous and comprehensive Quality Control plan. This plan is overseen by a team of adept engineers with technical expertise, complemented by a highly trained and qualified staff.</p>
                    <ul>
                        <li data-aos="fade">ISO 9001:2015 Quality System and ISO 14001:2015 Environment Management System. SHG grade zinc (Zn 99.995%) adhering to DIN EN 14919 standards.</li>
                        <li data-aos="fade">Our modern in-house laboratory, outfitted with cutting-edge German technology, boasts a Photo Spectrometer that meticulously verifies chemical compositions.</li>
                        <li data-aos="fade">Additionally, we leverage a European standard UTM Machine, coupled with a Metallurgical microscope, to scrutinize the mechanical and physical attributes of our products.</li>
                    </ul>
                    <p data-aos="fade">This meticulous approach serves as a distinct advantage, ensuring that our offerings consistently meet and exceed the highest standards of excellence.</p>
                </div>
                <div className="quality-control-image">
                    <img src={qualityControlImg} alt="Quality Control" loading="lazy" />
                    <div className="quality-image-outer" data-aos="fade-right"></div>
                </div>
            </section>

            {/* Micro Zinc */}
            <section className="micro-zinc">
                <div className="micro-zinc-head">
                    <div className="micro-zinc-image">
                        <img src={microZinc} alt="Zinc Micro" loading="lazy" />
                    </div>
                    <div className="micro-zinc-head-content">
                        <h5>ZINC WIRE MICRO STRUCTURE AT 100X ZOOM</h5>
                    </div>
                </div>

                {/* Table */}
                <div className="micro-zinc-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Properties of Ottimo Zinc Wire</th>
                                <th>Benefits to Customer with Ottimo Zn Wire</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td rowSpan="4" className="left-cell">
                                    Refined Microstructure of Zinc Metal
                                    <br />
                                    Before Wire Production
                                </td>
                                <td>
                                    High adhesion property of zinc spray coating due to uniform molten
                                    zinc molecules.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Low porosity and high density of zinc surface coating. Due to this,
                                    less contact of oxygen to metal surface, which directly affects the
                                    life of coating surface and improves performance of pipe.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Improved scratch resistance properties of metal coating surface.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Uniform zinc metallization finish due to uniform zinc particle size.
                                </td>
                            </tr>

                            <tr>
                                <td className="left-cell">
                                    Homogeneous Universal Tensile Strength and Elongation in Each Type
                                    of Wire and Throughout the Length of Wire
                                </td>
                                <td>
                                    Less line stoppage due to zinc wire, Uniform surface finish and
                                    less zinc cut wire scrap generation.
                                </td>
                            </tr>

                            <tr>
                                <td className="left-cell">
                                    Uniform Zinc Wire Diameter for Thin Wire (Tolerance: -0.05 mm)
                                </td>
                                <td>
                                    Less consumption of metallizing machine spare parts like nozzle.
                                </td>
                            </tr>

                            <tr>
                                <td className="left-cell">
                                    High Efficiency of Metallizing Wire on Same Metallizing Machine
                                    Parameter
                                </td>
                                <td>
                                    Less zinc dust generation, Saving of minimum 4%.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="micro-zinc-diagram">
                    <img src={diagram} alt="Diagram" loading="lazy" />
                </div>
            </section>
        </>
    )
}

export default QualityAssurance
