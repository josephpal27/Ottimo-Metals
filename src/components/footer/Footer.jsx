import './Footer.css';

import { Link } from 'react-router-dom';

import footLogo from '../../assets/images/logo/logo-white.png';

import { FaFacebookF, FaInstagram, FaTwitter, FaLocationDot  } from "react-icons/fa6";
import { MdFactory, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="foot-box">
                        <img src={footLogo} alt="Logo" loading="lazy" />
                        <p>In the World, a major developer of A-grade commercial, industrial, and residential developments. The company has been around since its inception.</p>
                    </div>
                    <div className="foot-box">
                        <span>QUICK LINKS</span>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/quality-assurance">Quality Assurance</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/applications">Applications</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="foot-box">
                        <span>CONTACT</span>
                        <a href=""> <FaLocationDot className="icon" /> Suite number 90, Stephen House 4, Binoy Badal Dinesh Bag E, Lal Bazar, Kolkata, West Bengal 700001</a>
                        <a href=""> <MdFactory className="icon factory-icon" /> Works - Foundary Industrial Park, Jalabiswanathpur, Hauli Bagan, P.S: Panch ,Howrah-711322, West Bengal</a>
                        <a href=""> <IoCall className="phone-icon" /> +91 92309 96974</a>
                        <a href=""> <IoCall className="phone-icon" /> (033) 2242-4278</a>
                        <a href=""> <MdEmail className="email-icon"/> contact@ottimometals.com</a>
                    </div>
                    <div className="foot-box">
                        <span>GET IN TOUCH</span>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2025 | Ottimo Metals Pvt. Ltd. | All Rights Reserved</p>
                </div>  
            </footer>
        </>
    )
}

export default Footer
