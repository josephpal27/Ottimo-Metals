import '../css/Products.css';

import homeBanner from '/images/banners/banner.avif';
import whatWeDoImage from '../assets/images/products/what-we-do.avif';
import zincWireImage from '../assets/images/products/zinc-wire.avif';

import { FaCheck, FaCircleDot } from "react-icons/fa6";

import { Tab, Nav } from "react-bootstrap";
import { Button } from '@mui/material';

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
                    <p>Ottimo Metals stands as a pivotal force in the realm of manufacturing and exporting an expansive array of Zinc Metallizing Wire. These versatile products play a crucial role in Spray Metallization for Capacitors, Anti-Corrosion Protection, Cathodic Corrosion Protection of Steel Structures, Capacitor Film Coating, and Heat Exchanger Finned Tube Coating across industries like automobiles and air conditioning.</p>
                    <p>Within the realm of Zinc Wires, our infrastructure boasts a cutting-edge European fully automatic Continuous Casting and Rolling (CCR LINE) system, optimizing our zinc wire manufacturing capacity. This innovation yields three distinct mechanical property variants tailored to diverse zinc metallization applications:</p>
                    <div className="zinc-options">
                        <div className="opt-box"><FaCircleDot className="icon" /><span>Soft Zinc Wire</span></div>
                        <div className="opt-box"><FaCircleDot className="icon" /><span>Medium-Hard Zinc Wire</span></div>
                        <div className="opt-box"><FaCircleDot className="icon" /><span>Hard Zinc Wire</span></div>
                    </div>
                    <p>Supporting our manufacturing process is a robust Zinc Wire plant, boasting an impressive production capacity of 1200 MT per month. This enables us to adeptly address the diverse needs of our esteemed customers. Additionally, we are equipped to produce special alloys and dimensions tailored to precise customer specifications.</p>
                    <p>What sets Ottimo zinc wires apart is their exceptional purity, a hallmark achieved through our dedication to high-grade materials. These wires are crafted from special, SHG grade zinc (Zn 99.995%) adhering to DIN EN 14919 standards. Our commitment to quality is further underscored by our state-of-the-art German laboratory equipment, including a Photo Spectrometer for accurate chemical composition analysis and European standard UTM machine and metallurgical microscope for rigorous testing.</p>
                    <p>In essence, Ottimo Metals stands as a beacon of innovation, delivering zinc wire solutions that not only meet industry demands but also push the boundaries of quality and performance.</p>
                </div>
            </section>

            {/* Zinc Tabbing */}
            <section className="zinc-tabbing-container">
                <div className="zinc-tabbing">
                    <Tab.Container defaultActiveKey="tabOne">
                        {/* Tabs Navigation */}
                        <Nav variant="tabs" className="tab-head">
                            <Nav.Item>
                                <Nav.Link eventKey="tabOne">
                                    <Button className="button">Physical Properties</Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabTwo">
                                    <Button className="button">Mechanical Properties</Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabThree">
                                    <Button className="button">Chemical Composition (According to ISO 14919:2001)</Button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {/* Tabs Content */}
                        <Tab.Content>
                            <Tab.Pane eventKey="tabOne" className="fade show">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabTwo" className="fade">
                                Content 2
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabThree" className="fade">
                                Content 3
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default Products
