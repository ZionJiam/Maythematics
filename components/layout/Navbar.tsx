"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from './Navbar.module.scss';

interface NavbarProps {
    onMobileNavOpen: () => void;
    className?: string; // Add className to the interface
}

const Navbar: React.FC<NavbarProps> = ({ onMobileNavOpen, className }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${className || ''}`}>
            <div className={styles.navbarContainer}>
                {/* Logo */}
                <div className={`${styles.logo} ${scrolled ? styles.logoSmall : ""}`}>
                    <Link href="/">
                        <img src="/logo.png" alt="Maythematics Logo" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className={styles.navbarNav}>
                    <div className={styles.dropdown}>
                        <Link href="/about" className={`${styles.navLink} ${styles.linkRed}`}>
                            About Us
                        </Link>
                        <div className={styles.dropdownContent}>
                            <Link href="/about/story" className={styles.dropdownLink}>Story and Team</Link>
                            <Link href="/about/space" className={styles.dropdownLink}>Our Space</Link>
                        </div>
                    </div>
                    <Link href="/testimonials" className={`${styles.navLink} ${styles.linkYellow}`}>
                        Testimonials
                    </Link>
                    <Link href="/Lessons" className={`${styles.navLink} ${styles.linkBlue}`}>
                        Lessons
                    </Link>
                    <Link href="/contactus" className={`${styles.navLink} ${styles.linkRed}`}>
                        Contact Us
                    </Link>
                    <Link href="/career" className={`${styles.navLink} ${styles.linkYellow}`}>
                        Career
                    </Link>
                    <Link href="/workshop" className={`${styles.navLink} ${styles.linkBlue}`}>
                        Workshop
                    </Link>
                </div>

                <div>
                    <Link href="/enroll" className={styles.ctaButton}>
                        WhatsApp Us
                    </Link>
                </div>

                {/* Hamburger */}
                <div className={styles.mobileMenuButton}>
                    <button
                        type="button"
                        onClick={onMobileNavOpen}
                        className={styles.mobileMenuButton}
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <svg className={styles.mobileMenuButtonSvg} xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;