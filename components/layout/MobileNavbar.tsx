"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MobileNavbar.module.scss';

interface MobileNavbarProps {
  isOpen: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen }) => {
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
              className={`${styles.dropdownToggle} ${isActive("/about") ? styles.active : ""}`}
              onClick={toggleAbout}
            >
              About Us
              <span className={`${styles.arrow} ${isAboutOpen ? styles.up : styles.down}`}>▾</span>
            </button>
            <div className={`${styles.submenu} ${isAboutOpen ? styles.submenuOpen : ''}`}>
              <Link href="/about" className={isActive("/about") ? styles.active : ""}>Story and Team</Link>
              <Link href="/about/space" className={isActive("/about/space") ? styles.active : ""}>Our Space</Link>
            </div>
          </div>

          <Link href="/testimonials" className={isActive("/testimonials") ? styles.active : ""}>Testimonials</Link>

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
              <Link href="/lesson/primary3to4" className={isActive("/lesson/primary3to4") ? styles.active : ""}>Primary 3-4</Link>
              <Link href="/lesson/primary5to6" className={isActive("/lesson/primary5to6") ? styles.active : ""}>Primary 5-6</Link>
              <Link href="/lesson/secondary1to5" className={isActive("/lesson/secondary1to5") ? styles.active : ""}>Secondary 1-5</Link>
              <Link href="/lesson/jch1h2" className={isActive("/lesson/jch1h2") ? styles.active : ""}>JC H1/H2</Link>
            </div>
          </div>

          <Link href="/contact" className={isActive("/contact") ? styles.active : ""}>Contact Us</Link>
          <Link href="/career" className={isActive("/career") ? styles.active : ""}>Career</Link>
          <Link href="/workshop" className={isActive("/workshop") ? styles.active : ""}>Workshop</Link>

          <div className={styles.ctaButton}>
            <Link href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
