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
                        <div className={`${styles.dropdownContent} ${styles.dropdownContentRed}`}>
                            <Link href="/about/story" className={styles.dropdownLink}>Story and Team</Link>
                            <Link href="/about/space" className={styles.dropdownLink}>Our Space</Link>
                        </div>
                    </div>
                    <Link href="/testimonials" className={`${styles.navLink} ${styles.linkYellow}`}>
                        Testimonials
                    </Link>
                    <div className={styles.dropdown}>
                        <Link href="/about" className={`${styles.navLink} ${styles.linkBlue}`}>
                            Lessons
                        </Link>
                        <div className={`${styles.dropdownContent} ${styles.dropdownContentBlue}`}>
                            <Link href="/lesson/primary3to4" className={styles.dropdownLink}>Primary 3-4</Link>
                            <Link href="/lesson/primary5to6" className={styles.dropdownLink}>Primary 5-6</Link>
                            <Link href="/lesson/primary5to6" className={styles.dropdownLink}>Secondary 1-5</Link>
                            <Link href="/lesson/primary5to6" className={styles.dropdownLink}>JC H1/H2</Link>

                        </div>
                    </div>
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
                    <Link
                        href="https://wa.me/6589150859"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ctaButton ${styles.ctaButton}`}>
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