'use client'

// components/testimonials/WhatsappMasonry.tsx
import styles from "./WhatsappWall.module.scss";
import Masonry from "react-masonry-css";

const images = [
    "/images/testimonials/whatsapp-test.png",
    '/images/banner3.jpg',

    "/images/testimonials/whatsapp-test.png",
    '/images/banner1.jpg',

    "/images/testimonials/whatsapp-test.png",
    "/images/testimonials/whatsapp-test.png",
    '/images/banner3.jpg',
    "/images/testimonials/whatsapp-test.png",


];

const breakpointColumnsObj = {
    default: 4,
    1023: 3,
    767: 2,
};

export default function WhatsappMasonry() {
    return (
        <section className={styles.whatsappMasonry}>
            <h2 className={`sectionTitle`}>
                Heartfelt Messages</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {images.map((src, index) => (
                    <div data-aos="fade-up" key={index} className={styles.gridItem}>
                        <img src={src} alt={`Testimonial ${index + 1}`} />
                    </div>
                ))}
            </Masonry>
        </section>
    );
}
