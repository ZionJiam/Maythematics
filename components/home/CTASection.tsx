import styles from './CTASection.module.scss';
import Link from 'next/link';
import SlideUpImage from '../ui/SlideUpImage';
import { trialClassWhatsApp } from '@/app/data/WhatsAppData';



const whatsappLink = `https://wa.me/${trialClassWhatsApp.number}?text=${encodeURIComponent(trialClassWhatsApp.message)}`;


export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.elementContainer}>
                <img className={`${styles.elements} ${styles.elementRight}`} src="/assets/elements/design-element-3.png" alt="FLoating Design Element 3" />
                <img className={`${styles.elements} ${styles.elementLeft}`} src="/assets/elements/design-element-6.png" alt="FLoating Design Element 6" />
            </div>


            <div data-aos="fade-up" className={styles.ctaTextWrapper}>
                <h2 className={`${styles.sloganTitle} sectionTitle`}>
                    <span className={styles.red}>Ready</span>

                    {" "}to{" "}
                    <span className={styles.yellow}>See</span>


                    {" "}a<br />
                    <span className={styles.blue}>Change</span>

                    {" "}in{" "}
                    <span className={styles.teal}>Math?</span>
                </h2>

                <p className={`${styles.ctaParagraph}`}>Every week, hundreds of students walk through our doors — some to prepare for examinations, others to rebuild confidence, all to discover that Math can be clear and enjoyable. We’d love for your child to be part of this journey too.</p>
                <a className={`${styles.ctaSectionButton} ctaButton buttonRed`} href={whatsappLink} target="_blank" rel="noopener noreferrer">Arrange a Trial Class</a>

            </div>

            <div className={styles.mascotContainer}>
                <img
                    src="/assets/blue-mascot.webp"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.blueMascot}`}
                />

                <img
                    src="/assets/red-mascot-teach.webp"
                    data-aos="fade-up"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.redMascot}`}
                />

                <img
                    src="/assets/yellow-mascot-2.webp"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.yellowMascot}`}
                />
            </div>

        </section>
    );
}
