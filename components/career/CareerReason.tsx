"use client";

import React from "react";
import styles from "./CareerReason.module.scss";

const careerSections = [
    {
        title: "Why Join Us?",
        points: [
            "Be part of a passionate, supportive teaching team at Maythematics MTM Math.",
            "Work in an environment that values patience, positivity, and growth.",
            "Access structured teaching methodologies proven to help students excel.",
        ],
        image: "/assets/yellow-mascot-2.webp",
    },
    {
        title: "Who Are We Looking For?",
        points: [
            "Math tutors who are positive, patient, and enthusiastic about teaching.",
            "Individuals who can adapt teaching methods to meet student needs.",
            "Team players who thrive in a collaborative and safe learning space.",
        ],
        image: "/assets/blue-mascot-2.png",
    },
    {
        title: "Open Positions",
        points: [
            "Full-Time Math Tutor",
            "Part-Time Math Tutor",
        ],
        image: "/assets/red-mascot-teach.webp",
    },
];

const CareerReason = () => {
    return (
        <section className={styles.career}>
            <div className={styles.careerWrapper}>
                {careerSections.map((section, index) => (
                    <div
                        className={`${styles.careerContainer} ${index % 2 === 1 ? styles.reverse : ""}`}
                        key={index}
                        data-aos="fade-up"
                    >
                        {/* Text Side */}
                        <div className={styles.textContainer}>
                            <h2 className="text-xl">{section.title}</h2>
                            <ul className={styles.pointList}>
                                {section.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Mascot Side */}
                        <div className={styles.imageContainer}>
                            <img src={section.image} alt={`${section.title} Mascot`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerReason;
