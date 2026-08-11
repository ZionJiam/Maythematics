"use client";

import React from "react";
import styles from "./WhichClassFits.module.scss";

const regularReasons = [
    "enjoys learning alongside classmates of the same academic level",
    "benefits from clear teacher-led explanations and a structured lesson flow",
    "likes progressing with the class and participating in classroom discussions",
    "needs broad exposure to a carefully planned range of concepts and question types",
];

const focusReasons = [
    "learns best at his or her own pace",
    "requires more personalised guidance in a small 1:4 setting",
    "needs help with schoolwork, homework, revision or specific weak areas",
    "is in a specialised stream such as P6 Foundation, IP or G1",
    "would benefit from additional support on top of a Regular Class",
];

export default function WhichClassFits() {
    return (
        <section className={`${styles.section} sectionYPadding`}>
            <div className={styles.container}>
                <div data-aos="fade-up" className={styles.titleContainer}>
                    <h3 className={`text-xl`}>Which Class Is Right for Your Child?</h3>
                    <p>
                        Both formats are designed to build confidence and strengthen mathematical thinking.
                        The best choice depends on how your child learns most effectively.
                    </p>
                </div>

                <div className={styles.cards}>
                    <div data-aos="fade-up" className={`${styles.card} ${styles.regular}`}>
                        <h4>Choose Regular Class when your child...</h4>
                        <ul>
                            {regularReasons.map((reason, idx) => (
                                <li key={idx}>{reason}</li>
                            ))}
                        </ul>
                    </div>

                    <div data-aos="fade-up" className={`${styles.card} ${styles.focus}`}>
                        <h4>Choose Focus Class when your child...</h4>
                        <ul>
                            {focusReasons.map((reason, idx) => (
                                <li key={idx}>{reason}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
