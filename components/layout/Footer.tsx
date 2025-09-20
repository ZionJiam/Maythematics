"use client";

import Link from 'next/link';
import styles from './Footer.module.scss';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>



            {/* <img
                src="/divider/footer-divider.png"
                alt="wave divider top"
                className={styles.footerDivider}
            /> */}

            <div className={styles.footerWrapper}>

                <div className={styles.footerInnerwrapper}>

                    {/* About Section */}
                    <div className={styles.column}>
                        <h4>About Us</h4>
                        <Link href="/story-and-team" className={styles.link}>Story and Team</Link>
                        <Link href="/ourspace" className={styles.link}>Our Space</Link>
                        <Link href="/career" className={styles.link}>Join Us</Link>
                    </div>

                    {/* Lessons Section */}
                    <div className={styles.column}>
                        <h4>Our Services</h4>
                        <Link href="/programmes" className={styles.link}>Our Programme</Link>
                        <Link href="/workshop" className={styles.link}>Holiday Programme</Link>
                    </div>

                    {/* Other Pages */}
                    <div className={styles.column}>
                        <h4>Explore</h4>

                        <Link href="/testimonials" className={styles.link}>Testimonials</Link>
                        <Link href="/contactus" className={styles.link}>Contact Us</Link>
                    </div>

                    {/* Branches + Social Media */}
                    <div className={`${styles.column} col-30`}>
                        <h4>Our Location</h4>
                        <p>5 Jalan Masjid, Kembangan Court #01-13 (& #01-02)</p>
                        <p>Phone: +65 8915 0859</p>
                        <p>Hours: Mon-Fri 1-9pm, Sat-Sun 9-6pm, Closed on PH</p>
                    </div>

                </div>


                <div className={styles.socialIcons}>
                    <a href="https://www.tiktok.com/@maythematics_official" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                    <a href="https://www.instagram.com/maythematics" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.facebook.com/Maythematics/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.youtube.com/@maythematics" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>

                {/* Bottom Line */}
                <div className={styles.bottomLine}>
                    {/* <Link href="/privacy">Privacy Policy</Link> */}
                    <span>© {new Date().getFullYear()} Maythematics. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
