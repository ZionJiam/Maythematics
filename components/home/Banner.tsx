"use client";

import styles from './Banner.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg',
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);


  return (
    <section className={styles.banner}
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out'
      }}>
      <div className={styles.bannerContainer}>
        <h1 className={`${styles.slogan}`}>

          <span className={styles.red}>8</span> out of
          <span className={styles.yellow}> 10 </span> students from
          <span className={styles.blue}> different corners of Singapore</span> choose to travel
          <span className={styles.red}> weekly </span> for our
          <span className={styles.yellow}> Math tuition</span>.

          {/* <span className={styles.red}>3</span>
          <span className={styles.yellow}>5</span>
          <span className={styles.blue}>0</span>
          <span className={styles.blue}>+</span>
          {" "}Happy Students <br />Since{" "}
          <span className={styles.red}>2</span>
          <span className={styles.yellow}>0</span>
          <span className={styles.blue}>20</span> */}
        </h1>
        <Link href="/testimonials" className={`buttonYellow ctaButton`}>
          Discover Why
        </Link>
      </div>
      <div className={styles.bannerOverlay}></div>
    </section>
  );
};

export default Banner;
