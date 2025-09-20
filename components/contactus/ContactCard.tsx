"use client";

import React from "react";
import styles from "./ContactCard.module.scss";
import Link from "next/link";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const StudentReview = () => {
    return (
        <section data-aos="fade-up" data-aos-offset="-200" className={`${styles.studentReview} sectionYPadding`}>
            <div className={styles.mapContainer}>
                {/* <img className={styles.video} src="/images/studentreview-thumbnail.png" /> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.760348692577!2d103.90973967674459!3d1.3194947986679955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3dbc275d3c4f%3A0xd8ad757897ca2aa8!2sMaythematics%20Math%20Tuition!5e0!3m2!1sen!2ssg!4v1757246942685!5m2!1sen!2ssg" className={styles.mapIframe}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className={styles.textContainer}>
                {/* <img alt="Contact Mascot" className={styles.contactMascot} src="/assets/contact-mascot.webp" /> */}
                <h2 className={`sectionTitle ${styles.sectionTitle}`}>Any Enquiries? <br />Get in Touch</h2>
                <div className={styles.cotactContainer}>
                    <h3>Contacts</h3>
                    <ul className={styles.contactList}>
                        <li className={styles.telephone}>
                            <FaPhoneAlt /> <a href="tel:+6589150859" target="_blank" rel="noopener noreferrer">+65 8915 0859</a>
                        </li>

                        <li>
                            <FaWhatsapp /> <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        </li>
                        <li>
                            <FaTelegramPlane /> <a href="https://t.me/yourhandle" target="_blank" rel="noopener noreferrer">Telegram(Primary)</a>
                        </li>
                        <li>
                            <FaTelegramPlane /> <a href="https://t.me/yourhandle" target="_blank" rel="noopener noreferrer">Telegram(Secondary)</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.socialsContainer}>

                    <h3>Social Media</h3>

                    <ul className={styles.socialList}>
                        <li className={styles.telephone}>
                            <FaTiktok /> <a href="https://www.tiktok.com/@maythematics_official" target="_blank" rel="noopener noreferrer">Tiktok</a>
                        </li>

                        <li>
                            <FaInstagram /> <a href="https://www.instagram.com/maythematics" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li>
                            <FaFacebook /> <a href="https://www.facebook.com/Maythematics/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </li>
                        <li>
                            <FaYoutube /> <a href="https://www.youtube.com/@maythematics" target="_blank" rel="noopener noreferrer">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    );
};

export default StudentReview;
