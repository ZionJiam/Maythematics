"use client";

import styles from "./contact.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function ContactUs() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                {/* Google Map */}
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.760348692577!2d103.90973967674459!3d1.3194947986679955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3dbc275d3c4f%3A0xd8ad757897ca2aa8!2sMaythematics%20Math%20Tuition!5e0!3m2!1sen!2ssg!4v1757246942685!5m2!1sen!2ssg" className={styles.mapIframe}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

                {/* Contact Info */}
                <div className={styles.infoContainer}>
                    <h3>Get in Touch</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <FaPhoneAlt /> <a href="tel:+6591234567">+65 9123 4567</a>
                        </li>
                        <li>
                            <FaTelegramPlane /> <a href="https://t.me/yourhandle">Telegram</a>
                        </li>
                        <li>
                            <FaWhatsapp /> <a href="https://wa.me/6591234567">WhatsApp</a>
                        </li>
                    </ul>

                    <h3>Follow Us</h3>
                    <div className={styles.socials}>
                        <a href="https://tiktok.com/@yourcenter" target="_blank" rel="noreferrer">
                            <FaTiktok />
                        </a>
                        <a href="https://instagram.com/yourcenter" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com/yourcenter" target="_blank" rel="noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://youtube.com/@yourcenter" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
