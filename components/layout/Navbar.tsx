"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation"; // <-- Import hook
import styles from './Navbar.module.scss';

interface NavbarProps {
    onMobileNavOpen: () => void;
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onMobileNavOpen, className }) => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname(); // <-- Get current path

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (path: string) => pathname.startsWith(path); // Match route

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${className || ''}`}>
            <div className={styles.navbarContainer}>
                <div className={`${styles.logo} ${scrolled ? styles.logoSmall : ""}`}>
                    <Link href="/">
                        <img src="/logo.png" alt="Maythematics Logo" />
                    </Link>
                </div>

                <div className={styles.navbarNav}>
                    <div className={styles.dropdown}>
                        <div className={`${styles.navLink} ${styles.linkRed} ${isActive("/about") ? styles.active : ""}`}>
                            About Us
                        </div>
                        <div className={`${styles.dropdownContent} ${styles.dropdownContentRed}`}>
                            <Link href="/about" className={`${styles.dropdownLink} ${isActive("/about") ? styles.active : ""}`}>
                                Story and Team
                            </Link>
                            <Link href="/about/space" className={`${styles.dropdownLink} ${isActive("/about/space") ? styles.active : ""}`}>
                                Our Space
                            </Link>
                        </div>
                    </div>

                    <Link href="/testimonials" className={`${styles.navLink} ${styles.linkYellow} ${isActive("/testimonials") ? styles.active : ""}`}>
                        Testimonials
                    </Link>

                    <div className={styles.dropdown}>
                        <Link href="/lesson" className={`${styles.navLink} ${styles.linkBlue} ${isActive("/lesson") ? styles.active : ""}`}>
                            Lessons
                        </Link>
                        <div className={`${styles.dropdownContent} ${styles.dropdownContentBlue}`}>
                            <Link href="/lesson/primary3to4" className={`${styles.dropdownLink} ${isActive("/lesson/primary3to4") ? styles.active : ""}`}>
                                Primary 3-4
                            </Link>
                            <Link href="/lesson/primary5to6" className={`${styles.dropdownLink} ${isActive("/lesson/primary5to6") ? styles.active : ""}`}>
                                Primary 5-6
                            </Link>
                            <Link href="/lesson/secondary1to5" className={`${styles.dropdownLink} ${isActive("/lesson/secondary1to5") ? styles.active : ""}`}>
                                Secondary 1-5
                            </Link>
                            <Link href="/lesson/jc" className={`${styles.dropdownLink} ${isActive("/lesson/jc") ? styles.active : ""}`}>
                                JC H1/H2
                            </Link>
                        </div>
                    </div>

                    <Link href="/contactus" className={`${styles.navLink} ${styles.linkRed} ${isActive("/contactus") ? styles.active : ""}`}>
                        Contact Us
                    </Link>

                    <Link href="/career" className={`${styles.navLink} ${styles.linkYellow} ${isActive("/career") ? styles.active : ""}`}>
                        Career
                    </Link>

                    <Link href="/workshop" className={`${styles.navLink} ${styles.linkBlue} ${isActive("/workshop") ? styles.active : ""}`}>
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
