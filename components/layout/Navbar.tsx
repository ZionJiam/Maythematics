"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation"; // <-- Import hook
import styles from './Navbar.module.scss';
import { generalClassWhatsApp } from '@/app/(public)/data/WhatsAppData';


const whatsappLink = `https://wa.me/${generalClassWhatsApp.number}?text=${encodeURIComponent(generalClassWhatsApp.message)}`;

interface NavbarProps {
    onMobileNavOpen: () => void;
    isMobileNavOpen: boolean;
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onMobileNavOpen, isMobileNavOpen, className }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // <-- state for hamburger
    const pathname = usePathname(); // <-- Get current path

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
        onMobileNavOpen(); // still call your existing function
    };

    const handleCloseMenu = () => {
        setMenuOpen(false); // close hamburger
    };

    const isActive = (path: string) => pathname.startsWith(path); // Match route

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${className || ''}`}>
            <div className={styles.navbarContainer}>
                <Link href="/" className={`${styles.logo} ${scrolled ? styles.logoSmall : ""}`}>
                    <img src="/logo.png" alt="Maythematics Logo" />
                </Link>

                <div className={styles.navbarNav}>
                    <div className={styles.dropdown}>
                        <div className={`${styles.navLink} ${styles.linkRed} ${isActive("/our-space") ? styles.active : ""} ${isActive("/story-and-team") ? styles.active : ""}`}>
                            About Us
                        </div>
                        <div className={`${styles.dropdownContent} ${styles.dropdownContent}`}>
                            <Link href="/story-and-team" className={`${styles.dropdownLink} ${isActive("/story-and-team") ? styles.active : ""}`}>
                                Story and Team
                            </Link>
                            <Link href="/our-space" className={`${styles.dropdownLink} ${isActive("/our-space") ? styles.active : ""}`}>
                                Our Space
                            </Link>
                        </div>
                    </div>


                    <Link href="/programmes" className={`${styles.navLink} ${isActive("/programmes") ? styles.active : ""}`}>
                        Our Programme
                    </Link>

                    <Link href="/holiday-programme" className={`${styles.navLink} ${styles.linkBlue} ${isActive("/holiday-programme") ? styles.active : ""}`}>
                        Holiday Programme
                    </Link>

                    <Link href="/testimonials" className={`${styles.navLink} ${isActive("/testimonials") ? styles.active : ""}`}>
                        Testimonials
                    </Link>




                    <Link href="/contact-us" className={`${styles.navLink} ${styles.linkRed} ${isActive("/contact-us") ? styles.active : ""}`}>
                        Contact Us
                    </Link>

                </div>

                <div>
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ctaButton ${styles.ctaButton}`}>
                        WhatsApp Us
                    </Link>
                </div>

                <div className={styles.mobileMenuButton}>
                    <button
                        type="button"
                        onClick={handleMenuClick}
                        className={styles.mobileMenuButton}
                        aria-controls="mobile-menu"
                        aria-label="Menu Button"
                        aria-expanded={isMobileNavOpen ? "true" : "false"}
                    >

                        <div className={`${styles.hamburgerIcon} ${isMobileNavOpen ? styles.open : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
