import styles from './CTASection.module.scss';
import Link from 'next/link';



export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaTextWrapper}>
                <h2 className={`${styles.sloganTitle} sectionTitle`}>
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

                <p className={`${styles.ctaParagraph}`}>Join hundreds of students who trust us weekly — whether it’s PSLE prep, building problem-solving skills, or just gaining back confidence.</p>
            </div>

            <Link className={`${styles.ctaSectionButton} ctaButton buttonRed`} href="/">Book A Trial Class</Link>
        </section>
    );
}
