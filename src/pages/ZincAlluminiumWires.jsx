import '../css/Products.css';

import Banner from '/images/banners/products-banner.avif';
import whatWeDoImage from '../assets/images/products/what-we-do.avif';
import zincWireImage from '../assets/images/products/zinc-wire.avif';
import productRange from '../assets/images/icons/product-range.png';
import packaging from '../assets/images/icons/packaging.png';

import { FaCheck, FaCircleDot } from "react-icons/fa6";

const ZincAlluminiumWires = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner products-banner">
                <img src={Banner} alt="Products Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">PRODUCTS</h1>
                    <p data-aos="fade">Advanced Zinc Metallizing Wires for Every Application.</p>
                    <p data-aos="fade">Leveraging our robust 1200 MT per month production capacity and state-of-the-art laboratory equipment, Ottimo Metals provides a full spectrum of high-quality zinc wires-Soft, Medium-Hard, and Hard-all meticulously produced to adhere to DIN EN 14919 and ISO 14818:2001 standards, ensuring superior performance and optimal packaging for diverse industrial needs.</p>
                </div>
            </section>

            <div id="banner-moblile-text">
                <p data-aos="fade">Advanced Zinc Metallizing Wires for Every Application.</p>
                <p data-aos="fade">Leveraging our robust 1200 MT per month production capacity and state-of-the-art laboratory equipment, Ottimo Metals provides a full spectrum of high-quality zinc wires-Soft, Medium-Hard, and Hard-all meticulously produced to adhere to DIN EN 14919 and ISO 14818:2001 standards, ensuring superior performance and optimal packaging for diverse industrial needs.</p>
            </div>

            {/* What We Do */}
            <section className="what-we-do">
                <div className="what-we-do-content">
                    <h2 data-aos="fade-up">WHAT WE DO</h2>
                    <p data-aos="fade">Ottimo Metals takes pride in its expertise in manufacturing high purity zinc wires drawn from high grade zinc ingots(Zn: 99.995%) that have earned a reputation for exceptional quality and unwavering consistency. Made from 99.995% pure Zinc, our wires are meticulously crafted to cater to a wide range of applications, guaranteeing superior performance and uniformity in every product.</p>
                </div>
                <div className="what-we-do-image">
                    <img src={whatWeDoImage} alt="What we do" loading="lazy" />
                    <div className="layer" data-aos="fade-right"></div>
                </div>
            </section>

            {/* Product Details */}
            <section className="product-details">
                <h3 data-aos="fade-up">PRODUCT DETAILS</h3>
                <div className="line" data-aos="fade"></div>
                <p data-aos="fade">Discover the superior strength, durability, and versatility of our high-quality zinc wires, designed to meet the diverse needs of various industries.</p>
            </section>

            {/* Zinc Wires Content */}
            <section className="zinc-wires-content">
                <div className="zinc-wires-top">
                    <div className="zinc-top-image" data-aos="fade">
                        <img src={zincWireImage} alt="Zinc Wires" loading="lazy" />
                    </div>
                    <div className="zinc-top-content">
                        <h4 data-aos="fade-up">ZINC WIRES</h4>
                        <div className="zinc-wire-highlights">
                            <div className="highlight-box" data-aos="fade">
                                <span><FaCheck className="icon" /> High-purity Zinc wire 99.995% purity</span>
                            </div>
                            <div className="highlight-box" data-aos="fade">
                                <span><FaCheck className="icon" /> Exceptional anti-corrosion performance</span>
                            </div>
                            <div className="highlight-box" data-aos="fade">
                                <span><FaCheck className="icon" /> Wide range of sizes available</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zinc-wires-bottom">
                    <p data-aos="fade">Ottimo Metals stands as a pivotal force in the realm of manufacturing and exporting an expansive array of Zinc Metallizing Wire. These versatile products play a crucial role in Spray Metallization for Capacitors, Anti-Corrosion Protection, Cathodic Corrosion Protection of Steel Structures, Capacitor Film Coating, and Heat Exchanger Finned Tube Coating across industries like automobiles and air conditioning.</p>
                    <p data-aos="fade">Within the realm of Zinc Wires, our infrastructure boasts a cutting-edge European fully automatic Continuous Casting and Rolling (CCR LINE) system, optimizing our zinc wire manufacturing capacity. This innovation yields three distinct mechanical property variants tailored to diverse zinc metallization applications:</p>
                    <div className="zinc-options">
                        <div className="opt-box" data-aos="fade"><FaCircleDot className="icon" /><span>Soft Zinc Wire</span></div>
                        <div className="opt-box" data-aos="fade"><FaCircleDot className="icon" /><span>Medium-Hard Zinc Wire</span></div>
                        <div className="opt-box" data-aos="fade"><FaCircleDot className="icon" /><span>Hard Zinc Wire</span></div>
                    </div>
                    <p data-aos="fade">Supporting our manufacturing process is a robust Zinc Wire plant, boasting an impressive production capacity of 1200 MT per month. This enables us to adeptly address the diverse needs of our esteemed customers. Additionally, we are equipped to produce special alloys and dimensions tailored to precise customer specifications.</p>
                    <p data-aos="fade">What sets Ottimo zinc wires apart is their exceptional purity, a hallmark achieved through our dedication to high-grade materials. These wires are crafted from special, SHG grade zinc (Zn 99.995%) adhering to DIN EN 14919 standards. Our commitment to quality is further underscored by our state-of-the-art German laboratory equipment, including a Photo Spectrometer for accurate chemical composition analysis and European standard UTM machine and metallurgical microscope for rigorous testing.</p>
                    <p data-aos="fade">In essence, Ottimo Metals stands as a beacon of innovation, delivering zinc wire solutions that not only meet industry demands but also push the boundaries of quality and performance.</p>
                </div>
            </section>

            {/* Zinc Properties */}
            <section className="zinc-properties">
                {/* 1st Box */}
                <div className="zinc-properties-box" data-aos="fade"> 
                    <div className="zinc-properties-head">
                        <span>Physical Properties</span>
                    </div>
                    <div className="zinc-properties-body">
                        <table>
                            <tr>
                                <td>Melting Point</td>
                                <td>420°C (788°F)</td>
                            </tr>
                            <tr>
                                <td>Boiling Point</td>
                                <td>907°C (1665°F)</td>
                            </tr>
                            <tr>
                                <td>Density</td>
                                <td>7.14 g/cm³</td>
                            </tr>
                        </table>
                    </div>
                </div>
                {/* 2nd Box */}
                <div className="zinc-properties-box" data-aos="fade">
                    <div className="zinc-properties-head">
                        <span>Mechanical Properties</span>
                    </div>
                    <div className="zinc-properties-body">
                        <table>
                            <tr>
                                <td><b>Sl No.</b></td>
                                <td><b>Product</b></td>
                                <td><b>Tensile Strength</b></td>
                                <td><b>Elongation</b></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Soft Zinc Wire</td>
                                <td>90-110 Mpa</td>
                                <td>40% Min.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Medium Hard Zinc Wire</td>
                                <td>110-130 Mpa</td>
                                <td>40% Min.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Hard Zinc Wire</td>
                                <td>130-160 Mpa</td>
                                <td>40% Min.</td>
                            </tr>
                        </table>
                    </div>
                </div>
                {/* 3rd Box */}
                <div className="zinc-properties-box" data-aos="fade">
                    <div className="zinc-properties-head">
                        <span>Chemical Composition (According to ISO 14919:2001)</span>
                    </div>
                    <div className="zinc-properties-body">
                        <div className="table-scroll">
                            <table>
                                <tr>
                                    <td><b>Pb</b></td>
                                    <td><b>Cd</b></td>
                                    <td><b>Sn</b></td>
                                    <td><b>Cu</b></td>
                                    <td><b>Fe</b></td>
                                    <td><b>Al</b></td>
                                    <td><b>Zn</b></td>
                                    <td><b>Others</b></td>
                                </tr>
                                <tr>
                                    <td>max. 0.003%</td>
                                    <td>max. 0.003%</td>
                                    <td>max. 0.001%</td>
                                    <td>max. 0.001%</td>
                                    <td>max. 0.002%</td>
                                    <td>max. 0.001%</td>
                                    <td>min. 99.995%</td>
                                    <td>max. 0.005%</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Range */}
            <section className="product-range">
                <div className="product-range-card">
                    <span data-aos="fade-up">Product Range</span>
                    <b data-aos="fade">Diameter:</b>
                    <p data-aos="fade">Available in standard diameters: 1.00mm,1.20mm,1,60mm,2.00 mm,2.50mm,3.175 mm,3.48mm,4.00mm,4.58mm, 4.76mm or other diameters as per request according to EN ISO 14919:2001 having tolerance of +0.00 mm & -0.05 mm</p>
                    <b data-aos="fade">Weight:</b>
                    <p data-aos="fade">350 to 500 kg Metal Drum</p>
                    <p data-aos="fade">40 to 300 Kg Paper fibre Drum</p>
                    <p data-aos="fade">30-35 kg Loose Coil</p>
                    <p data-aos="fade">15 kg Spools (DIN 300)</p>
                    <p data-aos="fade">20 Kg Spool (DIN270)</p>
                    <img src={productRange} alt="Icon" loading="lazy" data-aos="fade-left" />
                </div>
                <div className="product-range-card">
                    <span data-aos="fade-up">Packaging</span>
                    <p data-aos="fade">European plant which consists of a completely automated manufacturing unit. From the process of drawing zinc wires from zinc ingots and packaging them in various units, our process is completely automated.</p>
                    <img src={packaging} alt="Icon" loading="lazy" data-aos="fade-left" />
                </div>
            </section>

            {/* Packaging Units */}
            <section className="packaging-unit">
                <div className="packaging-unit-layer"></div>
                <span data-aos="fade-up">Packaging Units</span>
                <div className="packaging-unit-cards-row">
                    <div className="packaging-unit-card" data-aos="fade">
                        <p>Endless wire in metal drums <br /> (with inner cylinder)</p>
                        <div className="layer"></div>
                    </div>
                    <div className="packaging-unit-card" data-aos="fade">
                        <p>Endless wire in fiber drums <br /> (with inner cylinder)</p>
                        <div className="layer"></div>
                    </div>
                    <div className="packaging-unit-card" data-aos="fade">
                        <p>Spools <br /> (SD 300 or SH 390)</p>
                        <div className="layer"></div>
                    </div>
                    <div className="packaging-unit-card" data-aos="fade">
                        <p>Coils in PE foils</p>
                        <div className="layer"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ZincAlluminiumWires;