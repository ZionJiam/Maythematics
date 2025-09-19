"use client";

import Link from "next/link";
import styles from "./Programme.module.scss";

const programmes = [
    {
        title: "Primary 1–2",
        description:
            "Strong fundamentals and the right learning mindset are cultivated from the start. With a maximum of 4 students per class, every child receives close guidance and attention to nurture confidence and curiosity in mathematics.",
        duration: "1.5 hours",
        classSize: "4",
        image: "/images/workshop/workshop-1.webp",
    },
    {
        title: "Primary 3–4",
        description:
            "Key mathematical concepts are strengthened and expanded, with an emphasis on problem-solving skills. Small groups of 6–8 students provide opportunities for interactive learning, peer support, and personalised feedback.",
        duration: "1.5 hours",
        classSize: "6-8",
        image: "/images/workshop/workshop-10.webp",
    },
    {
        title: "Primary 5–6",
        description:
            "Challenging problem sums and higher-order thinking questions are introduced to build confidence and prepare students for the PSLE. Classes of 6–10 balance individual guidance with collaborative learning.",
        duration: "2 hours",
        classSize: "6-10",
        image: "/images/workshop/workshop-9P.webp",
    },
    {
        title: `Secondary Math (Sec 1–5)`,
        description:
            "Algebra, geometry, graphs, and advanced problem-solving are taught with structured strategies to tackle exam-style questions effectively. Class sizes of 8–14 encourage discussion, exposure to varied question types, and development of analytical thinking.",
        duration: "2 hours",
        classSize: "8-14",
        image: "/images/workshop/workshop-11P.webp",
    },
    {
        title: "JC Math (H1/H2)",
        description:
            "Rigorous training in H1 and H2 Mathematics ensures mastery of advanced topics such as calculus, statistics, and complex numbers. Classes are designed to sharpen conceptual understanding, problem-solving speed, and exam readiness in groups of 8–14 students.",
        duration: "2 hours",
        classSize: "8-14",
        image: "/images/workshop/workshop-12P.webp",
    },
];

export default function ProgrammesSection() {
    return (
        <section className={styles.programmesSection}>
            <div className={styles.programmesWrapper}>
                <div data-aos="fade-up" className={styles.textContainer}>
                    <h4 className={styles.sectionTitle}>OUR PROGRAMMES</h4>
                    <h3 className={`${styles.header} sectionTitle`}>A Lesson<br /> for All Grades</h3>
                </div>
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

        </section>
    );
}
