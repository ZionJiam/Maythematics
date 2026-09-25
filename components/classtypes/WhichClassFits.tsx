"use client";

import React from "react";
import styles from "./WhichClassFits.module.scss";

interface ClassRow {
    name: string;
    image: string;
    alt: string;
    reasons: string[];
}

const rows: ClassRow[] = [
    {
        name: "Choose Regular Class\nwhen your child...",
        image: "/images/classtypes/group_class.webp",
        alt: "Students learning together in a Regular Class",
        reasons: [
            "enjoys learning alongside classmates of the same academic level",
            "benefits from clear teacher-led explanations and a structured lesson flow",
            "likes progressing with the class and participating in classroom discussions",
            "needs broad exposure to a carefully planned range of concepts and question types",
        ],
    },
    {
        name: "Choose Focus Class\nwhen your child...",
        image: "/images/classtypes/focus_class.webp",
        alt: "Tutor guiding a small group of students in a Focus Class",
        reasons: [
            "learns best at his or her own pace",
            "requires more personalised guidance in a small 1:4 setting",
            "needs help with schoolwork, homework, revision or specific weak areas",
            "is in a specialised stream such as P6 Foundation, IP or G1",
            "would benefit from additional support on top of a Regular Class",
        ],
    },
];

export default function WhichClassFits() {
    return (
        <section className={`${styles.section} sectionYPadding`}>
            <div className={styles.titleContainer}>
                <h3 data-aos="fade-up" className={`text-xl`}>Which Class Is Right for Your Child?</h3>
            </div>

            <div className={styles.container}>
                {rows.map((row, idx) => (
                    <div key={idx} className={styles.row}>
                        <div data-aos="fade-up" className={styles.imageContainer}>
                            <img src={row.image} alt={row.alt} className={styles.image} loading="lazy" />
                        </div>

                        <div data-aos="fade-up" className={styles.textContainer}>
                            <h4 className={styles.title}>{row.name}</h4>
                            <ul>
                                {row.reasons.map((reason, reasonIdx) => (
                                    <li key={reasonIdx}>{reason}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
