'use client'

import styles from './CTASection.module.scss';
import Link from 'next/link';
import SlideUpImage from '../ui/SlideUpImage';
import { trackCTA } from '@/lib/gtag';

import { generalClassWhatsApp } from '@/app/(public)/data/WhatsAppData';

const whatsappLink = `https://wa.me/${generalClassWhatsApp.number}?text=${encodeURIComponent(generalClassWhatsApp.message)}`;




export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.elementContainer}>
                <img className={`${styles.elements} ${styles.elementRight}`} src="/assets/elements/design-element-2.png" alt="FLoating Design Element 3" />
                <img className={`${styles.elements} ${styles.elementLeft}`} src="/assets/elements/design-element-5.png" alt="FLoating Design Element 6" />
            </div>


            <div data-aos="fade-up" className={styles.ctaTextWrapper}>
                <p className={`${styles.ctaParagraph}`}>
                    Join our community of parents who are celebrating their child’s math progress with us.
                </p>
                <a onClick={() => trackCTA(' WhatsApp - Testimonials')} className={`${styles.ctaSectionButton} ctaButton buttonRed`} href={whatsappLink} target="_blank" rel="noopener noreferrer">Book a Trial Class</a>

            </div>


            <div className={styles.mascotContainer}>

                <img
                    src="/assets/review-mascot.webp"
                    data-aos="fade-up"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.redMascot}`}
                />

            </div>

        </section>
    );
}
