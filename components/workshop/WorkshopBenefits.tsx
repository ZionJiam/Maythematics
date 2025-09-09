"use client";

import React from "react";
import styles from "./WorkshopBenefits.module.scss";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
    "Tackle exam-style questions.",
    "Learn common pitfalls & strategies.",
    "Boost confidence before exams.",
    "Materials & worksheets provided.",
];

export default function WorkshopBenefits() {
    return (

        <section className={styles.WorkshopBenefits}>
            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider top"
                className={styles.dividerTop}
            />
            <div className={styles.benefitsSection}>

                <div className={styles.container}>
                    <h2 className={styles.title}>Why Join This Workshop?</h2>
                    <ul className={styles.list}>
                        {benefits.map((item, index) => (
                            <li key={index}>
                                <FaCheckCircle className={styles.icon} /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider top"
                className={styles.dividerBottom}
            />
        </section>
    );
}
