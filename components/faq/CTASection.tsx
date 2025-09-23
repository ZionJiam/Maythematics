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
                    Still have questions after reading our FAQs? Reach out to us directly — we’re here to help guide you further.
                </p>
                <a className={`${styles.ctaSectionButton} ctaButton buttonRed`} href={whatsappLink} target="_blank" rel="noopener noreferrer">Enquire Us Today</a>
            </div>

            <div className={styles.mascotContainer}>

                <img
                    data-aos="fade-up"
                    src="/assets/yellow-mascot.webp"
                    alt="Blue Teaching Mascot"
                    className={`${styles.reviewMascot} ${styles.yellowMascot}`}
                />

            </div>

        </section>
    );
}
