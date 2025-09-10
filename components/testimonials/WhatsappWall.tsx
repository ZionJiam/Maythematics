'use client'

// components/testimonials/WhatsappMasonry.tsx
import styles from "./WhatsappWall.module.scss";
import Masonry from "react-masonry-css";

const testimonials = [
    {
        image: "/images/testimonials/whatsapp-test.png",
        student: "Darren",
        school: "River Valley High",
        achievement: "Jumped from 60% → 85% in Math"
    },
    {
        image: "/images/testimonials/whatsapp-test2.png",
        student: "Darren",
        school: "River Valley High",
        achievement: "Jumped from 60% → 85% in Math"
    },
    {
        image: "/images/testimonials/whatsapp-test.png",
        student: "Darren",
        school: "River Valley High",
        achievement: "Jumped from 60% → 85% in Math"
    },
    {
        image: "/images/testimonials/whatsapp-test2.png",
        student: "Darren",
        school: "River Valley High",
        achievement: "Jumped from 60% → 85% in Math"
    }
    ,
    {
        image: "/images/testimonials/whatsapp-test2.png",
        student: "Darren",
        school: "River Valley High",
        achievement: "Jumped from 60% → 85% in Math"
    }
];

const breakpointColumnsObj = {
    default: 3,
    1023: 2,
    767: 1,
};

export default function WhatsappMasonry() {
    return (
        <section id="messages" className={styles.whatsappMasonry}>
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
