'use client'

// components/testimonials/WhatsappMasonry.tsx
import styles from "./WhatsappWall.module.scss";
import Masonry from "react-masonry-css";

const testimonials = [
    {
        image: "/images/testimonials/message1.webp",
    },
    {
        image: "/images/testimonials/message4.webp",
    }
    ,
    {
        image: "/images/testimonials/message5.webp",
    },
    {
        image: "/images/testimonials/message7.webp",
    },
    {
        image: "/images/testimonials/message8.webp",
    },
    {
        image: "/images/testimonials/message9.webp",
    },
    {
        image: "/images/testimonials/message3.webp",
    },
    {
        image: "/images/testimonials/message2.webp",
    },
    {
        image: "/images/testimonials/message6.webp",
    },
    {
        image: "/images/testimonials/message10.webp",
    },

];

const breakpointColumnsObj = {
    default: 4,
    1279: 3,
    1023: 2,
    767: 1,
};

export default function WhatsappMasonry() {
    return (
        <section className={`${styles.whatsappMasonry} sectionYPadding`}>
            <h2 className="sectionTitle">Heartfelt Messages</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {testimonials.map((item, index) => (
                    <div data-aos="fade-up" key={index} className={styles.gridItem}>
                        <img loading="lazy" src={item.image} alt={`Testimonial ${index + 1}`} />
                        {/* <div className={styles.caption}>
                            <p className={styles.student}>{item.student}</p>
                            <p className={styles.school}>{item.school}</p>
                            <p className={styles.achievement}>{item.achievement}</p>
                        </div> */}

                    </div>
                ))}
            </Masonry>
        </section>
    );
}
