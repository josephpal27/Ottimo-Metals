import './Footer.css';

import { Link } from 'react-router-dom';

import footLogo from '../../assets/images/logo/logo-white.png';

import { FaFacebookF, FaInstagram, FaLinkedinIn , FaLocationDot  } from "react-icons/fa6";
import { MdFactory, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="foot-box">
                        <img src={footLogo} alt="Logo" loading="lazy" />
                        <p>At Ottimo Metals, we thoroughly understand your specific requirements, ensuring that we meet industry standards and regulations.</p>
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
                        <a href="https://maps.app.goo.gl/okVjUpmNn3kWZHU79" target="_blank"> <FaLocationDot className="icon" /> Suite number 90, Stephen House 4, Binoy Badal Dinesh Bag E, Lal Bazar, Kolkata, West Bengal 700001</a>
                        <a href="https://www.google.com/maps/" target="_blank"> <MdFactory className="icon factory-icon" /> Works - Foundary Industrial Park, Jalabiswanathpur, Hauli Bagan, P.S: Panch, Howrah-711322, West Bengal</a>
                        <a href="tel: +91 92309 96974"> <IoCall className="phone-icon" /> +91 92309 96974</a>
                        <a href="tel: 033 2242 4278"> <IoCall className="phone-icon" /> (033) 2242-4278</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ottimometals.com" target="_blank"> <MdEmail className="email-icon"/> contact@ottimometals.com</a>
                    </div>
                    <div className="foot-box">
                        <span>GET IN TOUCH</span>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2025 <span>| Ottimo Metals Pvt. Ltd.</span> | All Rights Reserved</p>
                </div>  
            </footer>
        </>
    )
}

export default Footer
