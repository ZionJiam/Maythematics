"use client";

import Link from "next/link";
import styles from "./Programme.module.scss";

const programmes = [
    { title: "Primary 1", duration: "1.5 hours", classSize: "4", image: "/images/workshop/workshop-1.webp" },
    { title: "Primary 2", duration: "1.5 hours", classSize: "4", image: "/images/workshop/workshop-1.webp" },
    { title: "Primary 3", duration: "1.5 hours", classSize: "6-8", image: "/images/workshop/workshop-10.webp" },
    { title: "Primary 4", duration: "1.5 hours", classSize: "6-8", image: "/images/workshop/workshop-10.webp" },
    { title: "Primary 5", duration: "2 hours", classSize: "6-10", image: "/images/workshop/workshop-9P.webp" },
    { title: "Primary 6", duration: "2 hours", classSize: "6-10", image: "/images/workshop/workshop-9P.webp" },
    { title: "Secondary 1", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 2", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 3", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 4", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 5", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "JC H1", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-12P.webp" },
    { title: "JC H2", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-12P.webp" },
];


export default function ProgrammesSection() {
    return (
        <section className={`${styles.programmesSection} sectionYPadding`}>
            <div className={`${styles.programmesWrapper} sectionYPadding`}>
                <div data-aos="fade-up" className={styles.textContainer}>
                    <h4 className={styles.sectionTitle}>OUR PROGRAMMES</h4>
                    <h3 className={`${styles.header} sectionTitle`}>Lesson for <br />  all grades</h3>
                </div>
                <div className={styles.scrollWrapper}>

                    <div data-aos="fade-up" className={styles.scrollContainer}>
                        {programmes.map((programme, idx) => (
                            <Link href="/programmes" key={idx} className={styles.cardLink}>
                                <div key={idx} className={styles.card}>
                                    <img
                                        src={programme.image}
                                        alt={programme.title}
                                        className={styles.image}
                                        loading="lazy"
                                    />
                                    <div className={styles.content}>
                                        <h3>{programme.title}</h3>
                                        <p>
                                            <span className="bold">Duration:</span> {programme.duration}
                                        </p>
                                        <p>
                                            <span className="bold">Class Size:</span> {programme.classSize}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
}
