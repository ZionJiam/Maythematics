import styles from './CTASection.module.scss';
import Link from 'next/link';
import SlideUpImage from '../ui/SlideUpImage';



export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.elementContainer}>
                <img className={`${styles.elements} ${styles.elementRight}`} src="/assets/elements/design-element-3.png" alt="FLoating Design Element 3" />
                <img className={`${styles.elements} ${styles.elementLeft}`} src="/assets/elements/design-element-6.png" alt="FLoating Design Element 6" />
            </div>


            <div className={styles.ctaTextWrapper}>
                <h2 data-aos="fade-up" className={`${styles.sloganTitle} sectionTitle`}>
                    <span className={styles.red}>Ready</span>

                    {" "}to{" "}
                    <span className={styles.yellow}>See</span>


                    {" "}the<br />
                    <span className={styles.blue}>Difference</span>

                    {" "}in{" "}

                    <span className={styles.teal}>M</span>
                    <span className={styles.teal}>a</span>
                    <span className={styles.teal}>t</span>
                    <span className={styles.teal}>h</span>
                    <span className={styles.teal}>?</span>
                </h2>

                <p data-aos="fade-up" className={`${styles.ctaParagraph} text-lg`}>Join hundreds of students who trust us weekly — whether it’s PSLE prep, building problem-solving skills, or just gaining back confidence.</p>
            </div>

            <Link data-aos="fade-in" className={`${styles.ctaSectionButton} ctaButton buttonRed`} href="/">Book A Trial Class</Link>
            <div className={styles.mascotContainer}>
                <img
                    src="/assets/blue-mascot.jpg"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.blueMascot}`}
                />

                <img
                    src="/assets/red-mascot.jpg"
                    data-aos="fade-up"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.redMascot}`}
                />

                <img
                    src="/assets/yellow-mascot.jpg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    alt="Review Mascot"
                    className={`${styles.reviewMascot} ${styles.yellowMascot}`}
                />
            </div>

        </section>
    );
}
