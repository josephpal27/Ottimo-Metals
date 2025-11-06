import './Footer.css';

import { Link } from 'react-router-dom';

import footLogo from '../../assets/images/logo/logo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
            <div className="foot-box">
                <img src={footLogo} alt="Logo"  loading="lazy" />
                <p>In the World, a major developer of A-grade commercial, industrial, and residential developments. The company has been around since its inception.</p>
            </div>
            <div className="foot-box">
                <span>Quick Links</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/quality-assurance">Quality Assurance</Link>
                <Link to="/services">Services</Link>
                <Link to="/applications">Applications</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="copyright">

        </div>
      </footer>
    </>
  )
}

export default Footer
