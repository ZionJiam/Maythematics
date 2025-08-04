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

  const toggleAbout = () => setIsAboutOpen(prev => !prev);

  // Reset About dropdown when mobile navbar closes
  useEffect(() => {
    if (!isOpen) {
      setIsAboutOpen(false);
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
          <Link href="/lessons">Lessons</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/career">Career</Link>
          <Link href="/workshop">Workshop</Link>

          <div className={`${styles.ctaButton}`}  >
            <Link href="/about">WhatsApp Us</Link>
          </div>
        </div>

      </div>
    </div >
  );
};

export default MobileNavbar;
