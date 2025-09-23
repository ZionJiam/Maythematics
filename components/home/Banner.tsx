"use client";

import styles from './Banner.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SecondaryCtaButton from '../ui/SecondaryCTAButton';
import Image from 'next/image';


const images = [
  '/images/banner1.webp',
  // '/images/workshop/workshop-1.webp',
  // '/images/workshop/workshop-2.webp',
  // '/images/banner2.jpg',
  // '/images/banner3.jpg',
];

const Banner = () => {

  return (
    <section className={styles.banner}>
      <Image
        src="/images/banner1.webp"
        fetchPriority='high'
        alt="Main Banner Image"
        fill
        priority // <-- ensures fetchpriority=high
        style={{ objectFit: 'cover' }}
      />
      <div data-aos="fade-up" className={styles.bannerContainer}>
        <h1 className={`${styles.slogan} sectionTitle`}>

          {/* <span className={`${styles.textBigger} ${styles.red}`}>8 out of 10 </span> students from
          different <br className='d-none-768' />parts of Singapore choose to travel <br className='d-none-768' /> weekly for our
          <span className={`${styles.textBigger} ${styles.blue}`}> Math tuition</span>. */}
          Discover how we help students <span className={`${styles.textBigger} ${styles.red}`}>SHINE</span> <br className='d-none-768' />
          
          
          in <span className={`${styles.textBigger} ${styles.yellow}`}>Mathematics</span> with <span className={`${styles.textBigger} ${styles.blue}`}>Confidence</span>,<br className='d-none-768' /> 
          <span className={`${styles.textBigger} ${styles.teal}`}>Enjoyment</span> and <span className={`${styles.textBigger} ${styles.purple}`}>Real Results</span>
        </h1>
        <div data-aos="fade-in" data-aos-delay="400" >
          <Link href="/programmes" className={` ${styles.button} buttonYellow ctaButton`}>
            Discover our programmes
          </Link>
        </div>

      </div>
      <div className={styles.bannerOverlay}></div>
    </section >
  );
};

export default Banner;
