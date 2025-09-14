"use client";

import React from "react";
import styles from "./ContactDetail.module.scss";
import Link from "next/link";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const StudentReview = () => {
    return (
        <section data-aos="fade-up" data-aos-offset="-200" className={styles.contactDetail}>

            <div className={styles.textContainer}>
                {/* <img alt="Contact Mascot" className={styles.contactMascot} src="/assets/contact-mascot.webp" /> */}

                <div className={styles.cotactContainer}>
                    <h3 className="sectionTitle">Any Enquiries? <br />Get in Touch</h3>
                    <div className={styles.contactGrid}>
                        <a href="tel:+6589150859" className={styles.contactButton}>
                            <FaPhoneAlt className={styles.icon} /> +65 8915 0859
                        </a>

                        <a href="https://wa.me/6589150859" className={styles.contactButton}>
                            <FaWhatsapp className={styles.icon} /> WhatsApp
                        </a>

                        <a href="https://t.me/yourhandle" className={styles.contactButton}>
                            <FaTelegramPlane className={styles.icon} /> Telegram (Primary)
                        </a>

                        <a href="https://t.me/yourhandle" className={styles.contactButton}>
                            <FaTelegramPlane className={styles.icon} /> Telegram (Secondary)
                        </a>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    {/* <img className={styles.video} src="/images/studentreview-thumbnail.png" /> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.760348692577!2d103.90973967674459!3d1.3194947986679955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3dbc275d3c4f%3A0xd8ad757897ca2aa8!2sMaythematics%20Math%20Tuition!5e0!3m2!1sen!2ssg!4v1757246942685!5m2!1sen!2ssg"
                        className={styles.mapIframe}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>



        </section>
    );
};

export default StudentReview;
