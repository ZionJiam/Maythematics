import styles from './CTASection.module.scss';
import Link from 'next/link';
import SlideUpImage from '../ui/SlideUpImage';




export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.elementContainer}>
                <img className={`${styles.elements} ${styles.elementRight}`} src="/assets/elements/design-element-2.png" alt="FLoating Design Element 3" />
                <img className={`${styles.elements} ${styles.elementLeft}`} src="/assets/elements/design-element-5.png" alt="FLoating Design Element 6" />
            </div>


            <div data-aos="fade-up" className={styles.ctaTextWrapper}>
                <p className={`${styles.ctaParagraph}`}>
                    Spots are filling up fast — secure your place today and level up your Math!
                </p>
                <Link className={`${styles.ctaSectionButton} ctaButton buttonRed`} href="/">Sign Up Now</Link>

            </div>


            <div className={styles.mascotContainer}>
                <img
                    src="/assets/red-mascot-teach.webp"
                    data-aos="fade-up"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.redMascot}`}
                />
            </div>

        </section>
    );
}
