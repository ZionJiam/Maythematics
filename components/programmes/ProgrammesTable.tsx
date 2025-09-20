"use client";

import React from "react";
import styles from "./ProgrammesTable.module.scss";
import { section } from "framer-motion/client";

const programmes = [
    { title: "Primary 1", duration: "1.5 hours", classSize: "4", level: "Lower Primary" },
    { title: "Primary 2", duration: "1.5 hours", classSize: "4", level: "Lower Primary" },
    { title: "Primary 3", duration: "1.5 hours", classSize: "6-8", level: "Lower Primary" },
    { title: "Primary 4", duration: "1.5 hours", classSize: "6-8", level: "Lower Primary" },
    { title: "Primary 5", duration: "2 hours", classSize: "6-10", level: "Upper Primary" },
    { title: "Primary 6", duration: "2 hours", classSize: "6-10", level: "Upper Primary" },
    { title: "Secondary 1", duration: "2 hours", classSize: "8-14", level: "Secondary" },
    { title: "Secondary 2", duration: "2 hours", classSize: "8-14", level: "Secondary" },
    { title: "Secondary 3", duration: "2 hours", classSize: "8-14", level: "Secondary" },
    { title: "Secondary 4", duration: "2 hours", classSize: "8-14", level: "Secondary" },
    { title: "Secondary 5", duration: "2 hours", classSize: "8-14", level: "Secondary" },
    { title: "JC H1", duration: "2 hours", classSize: "8-14", level: "JC" },
    { title: "JC H2", duration: "2 hours", classSize: "8-14", level: "JC" },
];

// Filter by level
const filterByLevel = (level: string) => programmes.filter((p) => p.level === level);

export default function ProgrammesTables() {
    const lowerPrimary = filterByLevel("Lower Primary");
    const upperPrimary = filterByLevel("Upper Primary");
    const secondary = filterByLevel("Secondary");
    const jc = filterByLevel("JC");

    const renderTable = (data: typeof programmes, title: string) => (
        <div data-aos="fade-up" className={styles.tableWrapper}>
            <h3 className={styles.tableTitle}>{title}</h3>
            <table className={styles.programmeTable}>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Duration</th>
                        <th>Class Size</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((prog, idx) => (
                        <tr key={idx}>
                            <td>{prog.title}</td>
                            <td>{prog.duration}</td>
                            <td>{prog.classSize}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (

        <section className={`${styles.section} sectionYPadding`}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <h3 data-aos="fade-up" className={`${styles.header} sectionTitle`}>Duration and Class Size</h3>
                </div>
                <div className={styles.container}>
                    {renderTable(lowerPrimary, "Lower Primary (P1–P4)")}
                    {renderTable(upperPrimary, "Upper Primary (P5–P6)")}
                    {renderTable(secondary, "Secondary (S1–S5)")}
                    {renderTable(jc, "JC (H1–H2)")}
                </div>
            </div>

        </section>

    );
}
