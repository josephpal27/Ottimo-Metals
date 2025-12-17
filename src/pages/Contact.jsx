import '../css/Contact.css';

import contactBanner from '/images/banners/contact-banner.avif';

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { Button } from '@mui/material';

const Contact = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner contact-banner">
                <img src={contactBanner} alt="Contact Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">CONTACT US</h1>
                </div>
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
                            <a href="tel:+91 92309 96974">+91 92309 96974</a>
                        </div>
                    </div>
                    <div className="get-in-touch-box">
                        <div className="box-icon">
                            <MdEmail className="icon" />
                        </div>
                        <div className="box-content">
                            <span>EMAIL US</span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ottimometals.com" target="_blank">contact@ottimometals.com</a>
                        </div>
                    </div>
                    <div className="get-in-touch-box">
                        <div className="box-icon">
                            <HiBuildingOffice2 className="icon" />
                        </div>
                        <div className="box-content">
                            <span>VISIT OFFICE</span>
                            <a href="https://maps.app.goo.gl/okVjUpmNn3kWZHU79" target="_blank">Suite number 90, Stephen House 4, Binoy Badal Dinesh Bag E, Lal Bazar, Kolkata, West Bengal 700001</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form">
                <h3>DROP A MESSAGE</h3>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="9ae99fce-f6f9-4a38-ab5b-7caafb88fce6" />
                    <input type="hidden" name="subject" value="New Contact Form Submission from ottimometals.com" />
                    <div className="input-row">
                        <input type="text" name="Name" placeholder="Full Name" required />
                        <input type="email" name="Email" placeholder="Email Address" required />
                    </div>
                    <div className="input-row">
                        <input type="number" name="Phone" placeholder="Phone No." required />
                        <input type="text" name="Subject" placeholder="Subject" required />
                    </div>
                    <div className="input-row">
                        <textarea name="Message" placeholder="Message"></textarea>
                    </div>
                    <Button type="submit">SEND MESSAGE</Button>
                </form>
            </section>
        </>
    )
}

export default Contact
