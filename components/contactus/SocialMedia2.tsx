"use client";

import React from "react";
import styles from "./SocialMedia2.module.scss";
import Link from "next/link";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const StudentReview = () => {
    return (
        <section data-aos="fade-up" data-aos-offset="-200" className={styles.contactDetail}>

            <div className={styles.textContainer}>
                {/* <img alt="Contact Mascot" className={styles.contactMascot} src="/assets/contact-mascot.webp" /> */}

                <div className={styles.socialContainer}>
                    <h3 className="sectionTitle">Join Our <br />Community</h3>
                    <div className={styles.socialGrid}>

                        <a
                            href="https://www.tiktok.com/@maythematics_official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialButton} ${styles.tiktok}`}
                        >
                            <FaTiktok className={styles.icon} /> TikTok
                        </a>

                        <a
                            href="https://www.instagram.com/maythematics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialButton} ${styles.instagram}`}
                        >
                            <FaInstagram className={styles.icon} /> Instagram
                        </a>

                        <a
                            href="https://www.facebook.com/Maythematics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialButton} ${styles.facebook}`}
                        >
                            <FaFacebook className={styles.icon} /> Facebook
                        </a>

                        <a
                            href="https://www.youtube.com/@maythematics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialButton} ${styles.youtube}`}
                        >
                            <FaYoutube className={styles.icon} /> YouTube
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
