import '../css/Contact.css';

import homeBanner from '/images/banners/banner.avif';

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";

const Contact = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>

            {/* Get In Touch */}
            <section className="get-in-touch">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.212520629946!2d88.34797047507767!3d22.571153479492725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277d6e10e00e7%3A0x6f926093610bee3f!2sOttimo%20Metals%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763119567514!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="get-in-touch-content">
                    <span>Contact For Help</span>
                    <h2>GET IN TOUCH <br /> WITH US</h2>
                    <p>Have any query? Don't hesitate to communicate with us.</p>
                    <div className="get-in-touch-box">
                        <div className="box-icon">
                            <FaPhone className="icon" />
                        </div>
                        <div className="box-content">
                            <span>CALL US</span>
                            <a href="#">+91 98364 07777</a>
                        </div>
                    </div>
                    <div className="get-in-touch-box">
                        <div className="box-icon">
                            <MdEmail className="icon" />
                        </div>
                        <div className="box-content">
                            <span>EMAIL US</span>
                            <a href="#">contact@ottimometals.com</a>
                        </div>
                    </div>
                    <div className="get-in-touch-box">
                        <div className="box-icon">
                            <HiBuildingOffice2 className="icon" />
                        </div>
                        <div className="box-content">
                            <span>VISIT OFFICE</span>
                            <a href="#">Suite number 90, Stephen House 4, Binoy Badal Dinesh Bag E, Lal Bazar, Kolkata, West Bengal 700001</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
