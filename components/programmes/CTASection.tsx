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
                    Not sure which class fits best? Have a chat with us. Our team will guide you in finding the right starting point for your child.
                </p>
                <a className={`${styles.ctaSectionButton} ctaButton buttonRed`} href={whatsappLink} target="_blank" rel="noopener noreferrer">Get Started Today</a>
            </div>

            <div className={styles.mascotContainer}>

                <img
                    data-aos="fade-up"
                    src="/assets/red-mascot.jpg"
                    alt="Blue Teaching Mascot"
                    className={`${styles.reviewMascot} ${styles.blueMascot}`}
                />

            </div>

        </section>
    );
}
