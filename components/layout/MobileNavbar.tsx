"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './MobileNavbar.module.scss';
import CTAButton from "@/components/ui/CTAButton";

interface MobileNavbarProps {
  isOpen: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLessonsOpen, setIsLessonsOpen] = useState(false);

  const toggleAbout = () => setIsAboutOpen(prev => !prev);
  const toggleLessons = () => setIsLessonsOpen(prev => !prev);

  // Reset dropdowns when mobile navbar closes
  useEffect(() => {
    if (!isOpen) {
      setIsAboutOpen(false);
      setIsLessonsOpen(false);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.mobileNavbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileNavbarContainer}>
        <div className={styles.logoWrapper}>
          <img src="/logo.png" alt="Maythematics Logo" className={styles.mobileLogo} />
        </div>

        <div className={styles.mobileNavLinks}>
          {/* About Us Dropdown */}
          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={toggleAbout}>
              About Us
              <span className={`${styles.arrow} ${isAboutOpen ? styles.up : styles.down}`}>▾</span>
            </button>
            <div className={`${styles.submenu} ${isAboutOpen ? styles.submenuOpen : ''}`}>
              <Link href="/about/story">Story and Team</Link>
              <Link href="/about/space">Our Space</Link>
            </div>
          </div>

          <Link href="/testimonials">Testimonials</Link>

          {/* Lessons Dropdown */}
          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={toggleLessons}>
              Lessons
              <span className={`${styles.arrow} ${isLessonsOpen ? styles.up : styles.down}`}>▾</span>
            </button>
            <div className={`${styles.submenu} ${isLessonsOpen ? styles.submenuOpen : ''}`}>
              <Link href="/lesson/primary3to4">Primary 3-4</Link>
              <Link href="/lesson/primary5to6">Primary 5-6</Link>
              <Link href="/lesson/secondary1to5">Secondary 1-5</Link>
              <Link href="/lesson/jch1h2">JC H1/H2</Link>
            </div>
          </div>
          <Link href="/contact">Contact Us</Link>
          <Link href="/career">Career</Link>
          <Link href="/workshop">Workshop</Link>

          <div className={`${styles.ctaButton}`}>
            <Link
              href="https://wa.me/6589150859"
              target="_blank"
              rel="noopener noreferrer">
              WhatsApp Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
