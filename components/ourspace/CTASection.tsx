import styles from './CTASection.module.scss';
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
                    Our classrooms are more than just spaces — they’re safe, inspiring places where students grow in focus, confidence, and results. The best way to experience it is to see it for yourself.                </p>
                <a className={`${styles.ctaSectionButton} ctaButton buttonRed`} href={whatsappLink} target="_blank" rel="noopener noreferrer">Chat with Us</a>
            </div>

            <div className={styles.mascotContainer}>

                <img
                    data-aos="fade-up"
                    src="/assets/blue-mascot-1.png"
                    alt="Blue Teaching Mascot"
                    className={`${styles.reviewMascot} ${styles.redMascot}`}
                />

            </div>

        </section>
    );
}
