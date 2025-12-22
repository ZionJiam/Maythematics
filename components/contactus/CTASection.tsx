import styles from './CTASection.module.scss';
import { generalClassWhatsApp } from '@/app/(public)/data/WhatsAppData';
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";



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
                        Have a question or thinking of joining us? We’re here to help. Reach out to speak with our team, find the right class for your child, or arrange a trial class to one of our centres.
                    </p>
                <a className={`${styles.ctaSectionButton} ctaButton buttonRed`} href={whatsappLink} target="_blank" rel="noopener noreferrer">Get in Touch</a>
            </div>

              {/* Secondary contact methods */}
  <div className={styles.socialsWrapper}>
    <p className={styles.socialsLabel} data-aos="fade-up">Or connect with us on</p>

    <ul data-aos="fade-up" className={styles.socialList}>
      <li>
        <FaTiktok />
        <a
          href="https://www.tiktok.com/@maythematics_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok (Official)
        </a>
      </li>

      <li>
        <FaTiktok />
        <a
          href="https://www.tiktok.com/@maythematics"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok (Founder)
        </a>
      </li>

      <li>
        <FaInstagram />
        <a
          href="https://www.instagram.com/maythematics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>

      <li>
        <FaFacebook />
        <a
          href="https://www.facebook.com/Maythematics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </li>

      <li>
        <FaYoutube />
        <a
          href="https://www.youtube.com/@maythematics"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </li>

      <li>
        <FaTelegramPlane />
        <a
          href="https://t.me/maythematicstuition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram (Primary)
        </a>
      </li>

      <li>
        <FaTelegramPlane />
        <a
          href="https://t.me/maythematicsec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram (Secondary)
        </a>
      </li>
    </ul>
  </div>

            <div className={styles.mascotContainer}>

                <img
                    data-aos="fade-up"
                    src="/assets/contact-mascot.webp"
                    alt="Contact Yellow Mascot"
                    className={`${styles.reviewMascot} ${styles.yellowMascot}`}
                />

            </div>

        </section>
    );
}
