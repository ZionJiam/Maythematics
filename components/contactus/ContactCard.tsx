"use client";

import React from "react";
import styles from "./ContactCard.module.scss";
import Link from "next/link";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const StudentReview = () => {
    return (
        <section data-aos="fade-up" data-aos-offset="-200" className={`${styles.studentReview} sectionYPadding`}>
                <div className={styles.branchContainer}>
                    <div className={styles.branchesGrid}>
                    
                    {/* Branch Card 1 */}
                    <div className={styles.branchCard}>
                    <div className={styles.mapContainer}>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.760348692577!2d103.90973967674459!3d1.3194947986679955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3dbc275d3c4f%3A0xd8ad757897ca2aa8!2sMaythematics%20Math%20Tuition!5e0!3m2!1sen!2ssg!4v1757246942685!5m2!1sen!2ssg"
                        className={styles.mapIframe}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className={styles.branchInfo}>
                        <h3>Maythematics @ Kembangan</h3>

                        <p className={styles.address}>
                            5 Jln Masjid, #01-13#01-13 (& #01-02) <br />Kembangan Court, 418924
                        </p>

                        <div className={styles.meta}>
                             <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer"><strong>WhatsApp:</strong> +65 8915 0859</a>
                        </div>

                        <div className={styles.hours}>
                        <strong>Opening Hours</strong>
                        <ul>
                            <li>Mon – Fri: 1:00 PM – 9:00 PM</li>
                            <li>Sat - Sun: 9:00 AM – 6:00 PM</li>
                            <li>Closed on Public Holiday</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* Branch Card 2 */}
                    <div className={styles.branchCard}>
                    <div className={styles.mapContainer}>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1815882606709!2d103.77423220000001!3d1.3405277000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1144399af86b%3A0x134d6d269f712a18!2sMaythematics%20Math%20Tuition!5e0!3m2!1sen!2ssg!4v1766396434377!5m2!1sen!2ssg"
                        className={styles.mapIframe}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className={styles.branchInfo}>
                        <h3>Maythematics @ Beauty World</h3>

                        <p className={styles.address}>
                            54A Jln Jurong Kechil,<br /> Singapore 598580
                        </p>

                        <div className={styles.meta}>
                             <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer"><strong>WhatsApp:</strong> +65 8915 0859</a>

                        </div>

                        <div className={styles.hours}>
                        <strong>Opening Hours</strong>
                        <ul>
                            <li>Mon – Fri: 1:00 PM – 9:00 PM</li>
                            <li>Sat - Sun: 9:00 AM – 6:00 PM</li>
                            <li>Closed on Public Holiday</li>
                        </ul>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

                        <div className={styles.videoOverlay}>

            </div>
        </section >
    );
};

export default StudentReview;
