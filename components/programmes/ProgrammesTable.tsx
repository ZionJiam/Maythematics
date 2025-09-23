"use client";

import React from "react";
import styles from "./ProgrammesTable.module.scss";

const programmes = [
    { title: "Primary 1-2", duration: "1.5 hours", tsRatio: 4, level: "Lower Primary" },
    { title: "Primary 3-4", duration: "1.5 hours", tsRatio: 8, level: "Middle Primary" },
    { title: "Primary 5-6", duration: "2 hours", tsRatio: 10, level: "Upper Primary" },
    { title: "Secondary 1-5", duration: "2 hours", tsRatio: 12, level: "Secondary" },
    { title: "Junior College", duration: "2 hours", tsRatio: 14, level: "Junior College" },
];

export default function ProgrammesTables() {
    return (
        <section className={`${styles.section} sectionYPadding`}>
            <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3 data-aos="fade-up" className={`text-xl`}>Our Programme Structure</h3>
            </div>
                            <table data-aos="fade-up" className={styles.table}>
                    <thead>
                        <tr>
                            <th>Programme</th>
                            <th>Duration</th>
                            <th>Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {programmes.map((p, idx) => (
                            <tr key={idx}>
                                <td>{p.title}</td>
                                <td>{p.duration}</td>
                                <td>1 : {p.tsRatio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p data-aos="fade-up">*Ratio : Teacher-to-Student</p>
            </div>
        </section>
    );
}
