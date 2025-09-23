"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MobileNavbar.module.scss';
import { generalClassWhatsApp } from '@/app/(public)/data/WhatsAppData';
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";


const whatsappLink = `https://wa.me/${generalClassWhatsApp.number}?text=${encodeURIComponent(generalClassWhatsApp.message)}`;


interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void; // <-- Add onClose prop

}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, onClose }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLessonsOpen, setIsLessonsOpen] = useState(false);
  const pathname = usePathname();

  const toggleAbout = () => setIsAboutOpen(prev => !prev);
  const toggleLessons = () => setIsLessonsOpen(prev => !prev);

  useEffect(() => {
    if (!isOpen) {
      setIsAboutOpen(false);
      setIsLessonsOpen(false);
    }
  }, [isOpen]);

  const isActive = (path: string) => pathname.startsWith(path);

  // Helper to close navbar on link click
  const handleLinkClick = () => {
    onClose(); // closes from RootLayout
  };

  return (
    <div className={`${styles.mobileNavbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileNavbarContainer}>

        <div className={styles.mobileNavLinks}>
          {/* About Us Dropdown */}
          <div className={styles.dropdown}>
            <button
              className={`${styles.dropdownToggle} ${isActive("/ourspace") ? styles.active : ""} ${isActive("/storyandteam") ? styles.active : ""} ${styles.linkRed}`}
              onClick={toggleAbout}
            >
              About Us
              {isAboutOpen ? (
                <BiSolidUpArrow className={styles.arrow} size={12} />
              ) : (
                <BiSolidDownArrow className={styles.arrow} size={12} />
              )}
            </button>
            <div className={`${styles.submenu} ${isAboutOpen ? styles.submenuOpen : ''}`}>
              <Link href="/our-story" className={`${isActive("/our-story") ? styles.active : ""}`} onClick={handleLinkClick}>Our Story</Link>
              <Link href="/our-team" className={`${isActive("/our-team") ? styles.active : ""}`} onClick={handleLinkClick}>Our Team</Link>
              <Link href="/our-space" className={`${isActive("/our-space") ? styles.active : ""}`} onClick={handleLinkClick}>Our Space</Link>
            </div>
          </div>

          <Link href="/programmes" className={`${isActive("/programmes") ? styles.active : ""}`} onClick={handleLinkClick}>Our Programme</Link>

          {/* <Link href="/holiday-programme" className={`${isActive("/holiday-programme") ? styles.active : ""}`} onClick={handleLinkClick}>Holiday Programme</Link> */}

          <Link href="/testimonials" className={`${isActive("/testimonials") ? styles.active : ""}`} onClick={handleLinkClick}>Testimonials</Link>

          <Link href="/faq" className={`${isActive("/faq") ? styles.active : ""}`} onClick={handleLinkClick}>FAQs</Link>

          <Link href="/contact-us" className={`${isActive("/contact-us") ? styles.active : ""}`} onClick={handleLinkClick}>Contact Us</Link>

          <div className={styles.ctaButton}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
