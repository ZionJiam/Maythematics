"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MobileNavbar.module.scss';

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
    if (onClose) onClose();
  };

  return (
    <div className={`${styles.mobileNavbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileNavbarContainer}>
        <div className={styles.logoWrapper}>
          <img src="/logo.png" alt="Maythematics Logo" className={styles.mobileLogo} />
        </div>

        <div className={styles.mobileNavLinks}>
          {/* About Us Dropdown */}
          <div className={styles.dropdown}>
            <button
              className={`${styles.dropdownToggle} ${isActive("/ourspace") ? styles.active : ""} ${isActive("/storyandteam") ? styles.active : ""} ${styles.linkRed}`}
              onClick={toggleAbout}
            >
              About Us
              <span className={`${styles.arrow} ${isAboutOpen ? styles.up : styles.down}`}>▾</span>
            </button>
            <div className={`${styles.submenu} ${isAboutOpen ? styles.submenuOpen : ''}`}>
              <Link href="/storyandteam" className={`${isActive("/storyandteam") ? styles.active : ""}`} onClick={handleLinkClick}>Story and Team</Link>
              <Link href="/ourspace" className={`${isActive("/ourspace") ? styles.active : ""}`} onClick={handleLinkClick}>Our Space</Link>
            </div>
          </div>

          <Link href="/testimonials" className={`${isActive("/testimonials") ? styles.active : ""}`} onClick={handleLinkClick}>Testimonials</Link>

          {/* Lessons Dropdown */}
          <div className={styles.dropdown}>
            <button
              className={`${styles.dropdownToggle} ${isActive("/lesson") ? styles.active : ""}`}
              onClick={toggleLessons}
            >
              Lessons
              <span className={`${styles.arrow} ${isLessonsOpen ? styles.up : styles.down}`}>▾</span>
            </button>
            <div className={`${styles.submenu} ${isLessonsOpen ? styles.submenuOpen : ''}`}>
              <Link href="/lesson/primary3to4" className={isActive("/lesson/primary3to4") ? styles.active : ""} onClick={handleLinkClick}>Primary 3-4</Link>
              <Link href="/lesson/primary5to6" className={isActive("/lesson/primary5to6") ? styles.active : ""} onClick={handleLinkClick}>Primary 5-6</Link>
              <Link href="/lesson/secondary1to5" className={isActive("/lesson/secondary1to5") ? styles.active : ""} onClick={handleLinkClick}>Secondary 1-5</Link>
              <Link href="/lesson/jch1h2" className={isActive("/lesson/jch1h2") ? styles.active : ""} onClick={handleLinkClick}>JC H1/H2</Link>
            </div>
          </div>

          <Link href="/contact" className={`${isActive("/contactus") ? styles.active : ""} ${styles.linkRed}`} onClick={handleLinkClick}>Contact Us</Link>
          <Link href="/career" className={`${isActive("/career") ? styles.active : ""} ${styles.linkYellow}`} onClick={handleLinkClick}>Career</Link>
          <Link href="/workshop" className={`${isActive("/workshop") ? styles.active : ""} ${styles.linkBlue}`} onClick={handleLinkClick}>Workshop</Link>

          <div className={styles.ctaButton}>
            <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
