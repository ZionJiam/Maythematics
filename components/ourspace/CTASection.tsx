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



            <div className={styles.ctaTextWrapper}>
                <p className={`${styles.ctaParagraph} text-lg`}>
                    Step into a place where curiosity thrives and confidence grows.
                </p>
            </div>

            <Link className={`${styles.ctaSectionButton} ctaButton buttonRed`} href="/">Book A Trial Class</Link>
            <div className={styles.mascotContainer}>

                <SlideUpImage
                    src="/assets/blue-mascot-4.png"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.redMascot}`}
                />

            </div>

        </section>
    );
}
