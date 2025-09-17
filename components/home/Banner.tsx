"use client";

import styles from './Banner.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const images = [
  '/images/banner1.webp',
  // '/images/workshop/workshop-1.webp',
  // '/images/workshop/workshop-2.webp',
  // '/images/banner2.jpg',
  // '/images/banner3.jpg',
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
      <div data-aos="fade-up" className={styles.bannerContainer}>
        <h1 className={`${styles.slogan}`}>

          <span className={`${styles.textBigger} ${styles.red}`}>8 out of 10 </span> students from
          different parts of Singapore choose to travel weekly for our
          <span className={`${styles.textBigger} ${styles.blue}`}> Math tuition</span>.

        </h1>
        <Link data-aos="fade-in" data-aos-delay="600" href="/testimonials" className={`buttonYellow ctaButton`}>
          What Makes Us Different
        </Link>
      </div>
      <div className={styles.bannerOverlay}></div>
    </section >
  );
};

export default Banner;
