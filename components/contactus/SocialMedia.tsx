"use client";

import React from "react";
import styles from "./SocialMedia.module.scss";
import Link from "next/link";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const StudentReview = () => {
    return (
        <section data-aos="fade-up" className={styles.socialMedia}>

            <div className={styles.socialsContainer}>
                <h3 className="sectionTitle">Join Our Community</h3>

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
        </section>
    );
};

export default StudentReview;
