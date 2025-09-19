"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation"; // <-- Import hook
import styles from './Navbar.module.scss';
import { generalClassWhatsApp } from '@/app/data/WhatsAppData';


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
                        <div className={`${styles.navLink} ${styles.linkRed} ${isActive("/ourspace") ? styles.active : ""} ${isActive("/storyandteam") ? styles.active : ""}`}>
                            About Us
                        </div>
                        <div className={`${styles.dropdownContent} ${styles.dropdownContent}`}>
                            <Link href="/storyandteam" className={`${styles.dropdownLink} ${isActive("/storyandteam") ? styles.active : ""}`}>
                                Story and Team
                            </Link>
                            <Link href="/ourspace" className={`${styles.dropdownLink} ${isActive("/ourspace") ? styles.active : ""}`}>
                                Our Space
                            </Link>
                        </div>
                    </div>


                    <div className={styles.dropdown}>
                        <div className={`${styles.navLink} ${styles.linkBlue} ${isActive("/lesson") ? styles.active : ""}`}>
                            Programmes
                        </div>
                        <div className={`${styles.dropdownContent} ${styles.dropdownContent}`}>
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

                    <Link href="/testimonials" className={`${styles.navLink} ${styles.linkYellow} ${isActive("/testimonials") ? styles.active : ""}`}>
                        Testimonials
                    </Link>


                    <Link href="/workshop" className={`${styles.navLink} ${styles.linkBlue} ${isActive("/workshop") ? styles.active : ""}`}>
                        Workshop
                    </Link>

                    <Link href="/contactus" className={`${styles.navLink} ${styles.linkRed} ${isActive("/contactus") ? styles.active : ""}`}>
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
