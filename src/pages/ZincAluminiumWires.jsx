import '../css/Products.css';

import Banner from '/images/banners/zinc-alluminium-wires-banner.avif';
import whatWeDoImage from '../assets/images/products/what-we-do.avif';
import zincWireImage from '../assets/images/products/zinc-al-wire.avif';
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
                    <h1 data-aos="fade-up">ZINC <br /> ALUMINIUM <br /> WIRES</h1>
                    <p data-aos="fade">Our <b>Zinc-Aluminium Wires</b> deliver <b>dual metal defense for dual protection</b>, combining the strength of zinc with the durability of aluminium. Engineered for <b>enhanced corrosion resistance, higher deposition efficiency, and consistent performance</b>, these wires meet the most demanding standards. Manufactured with precision and backed by <b>ISO 9001:2015</b> and <b>ISO 14001:2015 certified systems</b>, they offer reliability, uniformity, and long-lasting results in every application.</p>
                </div>
            </section>

            <div id="banner-moblile-text">
                <p data-aos="fade">Advanced Zinc Metallizing Wires for Every Application.</p>
                <p data-aos="fade">Our <b>Zinc-Aluminium Wires</b> deliver <b>dual metal defense for dual protection</b>, combining the strength of zinc with the durability of aluminium. Engineered for <b>enhanced corrosion resistance, higher deposition efficiency, and consistent performance</b>, these wires meet the most demanding standards. Manufactured with precision and backed by <b>ISO 9001:2015</b> and <b>ISO 14001:2015 certified systems</b>, they offer reliability, uniformity, and long-lasting results in every application.</p>
            </div>

            {/* What We Do */}
            <section className="what-we-do">
                <div className="what-we-do-content">
                    <h2 data-aos="fade-up">WHAT WE DO</h2>
                    <p data-aos="fade">Our Zinc-Aluminium Wires are designed to deliver enhanced safeguarding in the toughest environments, combining the protective qualities of both metals for unmatched durability. With precision manufacturing and advanced European CCR technology, these wires ensure uniform performance and reliable handling. Built for efficiency and longevity, they provide a dependable solution that stands up to extreme conditions while supporting sustainable production practices.</p>
                </div>
                <div className="what-we-do-image">
                    <img src={whatWeDoImage} alt="What we do" loading="lazy" />
                    <div className="layer" data-aos="fade-right"></div>
                </div>
            </section>

            {/* Product Details */}
            <section className="product-details">
                <h3 data-aos="fade-up">THE POWER OF DUAL METAL DEFENCE</h3>
                <div className="line" data-aos="fade"></div>
                <p data-aos="fade">Discover the power of Zinc-Aluminium Wires that delivers enhanced corrosion resistance, improved electrical conductivity, and greater mechanical strength compared to pure zinc alone.</p>
            </section>

            {/* Zinc Wires Content */}
            <section className="zinc-wires-content">
                <div className="zinc-wires-top">
                    <div className="zinc-top-image" data-aos="fade">
                        <img src={zincWireImage} alt="Zinc Wires" loading="lazy" />
                    </div>
                    <div className="zinc-top-content">
                        <h4 data-aos="fade-up">ZINC ALUMINIUM WIRES</h4>
                        <div className="zinc-wire-highlights">
                            <ul>
                                <li><b>Enhanced Corrosion Resistance</b> - Dual-metal protection for durability in harsh environments</li>
                                <li><b>Improved Electrical Conductivity</b> - Optimized for efficient metallization and performance</li>
                                <li><b>Greater Mechanical Strength</b> - Superior tensile and elongation properties compared to pure zinc</li>
                                <li><b>SHG Grade Zinc (Zn 99.995%)</b> - Ultra-pure zinc combined with aluminium for consistent quality</li>
                                <li><b>Precise Diameter & Uniformity</b> - Strict control ensures consistent wire size and handling</li>
                                <li><b>Homogeneous Properties</b> - Reliable physical, chemical, and mechanical characteristics across batches</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="zinc-wires-bottom">
                    <p data-aos="fade">Zinc-aluminium wires are composite materials that blend the beneficial properties of both zinc and aluminium. These slender, ductile filaments typically consist of zinc and aluminium, sometimes alloyed with additional elements to improve mechanical performance for specific applications. The result is a wire that offers enhanced corrosion resistance, better electrical conductivity, and greater mechanical strength than pure zinc alone. Zinc-aluminium wires are widely used in applications such as spray metallization.</p>
                    <p data-aos="fade"><b>Scope:</b> This specification covers Zn-Al wire majorly used for "Spray Metallization".</p>
                    <p data-aos="fade"><b>General:</b> Zn-Al wire manufactured from virgin quality "Special High-Grade Zinc-Al" through "Continues Casting and Rolling process".</p>
                    <p data-aos="fade"><b>Shelf-Life:</b> Zinc-Al Wire has infinite shelf life, if stored in control condition.</p>
                </div>
            </section>

            {/* Zinc Properties */}
            <section className="zinc-properties">
                {/* 1st Box */}
                <div className="zinc-properties-box" data-aos="fade">
                    <div className="zinc-properties-head">
                        <span>Chemical Composition - Material Purity is as per ISO 14919:2015</span>
                    </div>
                    <div className="zinc-properties-body">
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Element</th>
                                        <th>% of Element <br /> (for 85 Zinc /15 Al)</th>
                                        <th>% of Element <br /> (for 98 Zinc /2 Al)</th>
                                        <th>% of Element <br /> (for 96 Zinc /4 Al)</th>
                                        <th>% of Element <br /> (for 78 Zinc/22 Al)</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>Zinc (Zn)</td>
                                    <td>85+/ (- 1)%</td>
                                    <td>98+/ (- 0.5)%</td>
                                    <td>96+/ (- 0.5)%</td>
                                    <td>78+/ (- 1)%</td>
                                </tr>
                                <tr>
                                    <td>Aluminum (Al)</td>
                                    <td>15+/ (- 1)%</td>
                                    <td>2+/ (- 0.5)%</td>
                                    <td>4+/ (- 0.5)%</td>
                                    <td>22+/ (- 1)%</td>
                                </tr>
                                <tr>
                                    <td>Lead (Pb)</td>
                                    <td> &le; 0.007%</td>
                                    <td> &le; 0.007%</td>
                                    <td> &le; 0.007%</td>
                                    <td> &le; 0.007%</td>
                                </tr>
                                <tr>
                                    <td>Cadmium (Cd)</td>
                                    <td> &le; 0.004%</td>
                                    <td> &le; 0.004%</td>
                                    <td> &le; 0.004%</td>
                                    <td> &le; 0.004%</td>
                                </tr>
                                <tr>
                                    <td>Iron (Fe)</td>
                                    <td> &le; 0.02%</td>
                                    <td> &le; 0.02%</td>
                                    <td> &le; 0.02%</td>
                                    <td> &le; 0.05%</td>
                                </tr>
                                <tr>
                                    <td>Tin (Sn)</td>
                                    <td> &le; 0.05%</td>
                                    <td> &le; 0.05%</td>
                                    <td> &le; 0.05%</td>
                                    <td> &le; 0.05%</td>
                                </tr>
                                <tr>
                                    <td>Copper (Cu)</td>
                                    <td> &le; 0.01%</td>
                                    <td> &le; 0.01%</td>
                                    <td> &le; 0.01%</td>
                                    <td> &le; 0.01%</td>
                                </tr>
                                <tr>
                                    <td>Silicon (Si)</td>
                                    <td> &le; 0.12</td>
                                    <td> &le; 0.12</td>
                                    <td> &le; 0.12</td>
                                    <td> &le; 0.12</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                {/* 2nd Box */}
                <div className="zinc-properties-box" data-aos="fade">
                    <div className="zinc-properties-head">
                        <span>Size</span>
                    </div>
                    <div className="zinc-properties-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Size</th>
                                    <th>Acceptance Criteria</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>1.20 mm to 4.76 mm</td>
                                <td>+0.00 mm, -5.05 mm</td>
                            </tr>
                        </table>
                        <p>Note - Special sizes also depend on customer requirement.</p>
                    </div>
                </div>
                {/* 3rd Box */}
                <div className="zinc-properties-box" data-aos="fade">
                    <div className="zinc-properties-head">
                        <span>Mechanical Properties</span>
                    </div>
                    <div className="zinc-properties-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Type of Wire</th>
                                    <th>UTS (mPa-Min)</th>
                                    <th>EL% (Min)</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>Zinc-Al Wire</td>
                                <td>120 mPa</td>
                                <td>50%</td>
                            </tr>
                        </table>
                    </div>
                </div>
                {/* 4th Box */}
                <div className="zinc-properties-box" data-aos="fade">
                    <div className="zinc-properties-head">
                        <span>Sampling Plan - One Sample per 1 Ton lot</span>
                    </div>
                    <div className="zinc-properties-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Paper Drum</th>
                                    <th>Spool</th>
                                    <th>Loose Coil</th>
                                    <th>Metal Drum</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>40 kg</td>
                                <td>13 kg</td>
                                <td>25 kg</td>
                                <td>400 kg</td>
                            </tr>
                            <tr>
                                <td>80 kg</td>
                                <td>15 kg</td>
                                <td>35 kg</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>100 kg</td>
                                <td>20 kg</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>125 kg</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>200 kg</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>250 kg</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>300 kg</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </table>
                        <p>Note - Packaging standard also depend on customer requirement.</p>
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