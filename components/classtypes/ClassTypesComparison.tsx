"use client";

import React from "react";
import styles from "./ClassTypesComparison.module.scss";

interface ComparisonRow {
    feature: string;
    regular: string;
    focus: string;
}

const rows: ComparisonRow[] = [
    {
        feature: "Class composition",
        regular: "Students are grouped by the same academic level. For example, a Primary 6 Regular Class consists of Primary 6 students.",
        focus: "Students from different academic levels may be grouped together. For example, a Secondary 1 student may be in the same class as a Secondary 3 student.",
    },
    {
        feature: "Teaching approach",
        regular: "The tutor teaches the class together using a structured Maythematics curriculum developed by our math experts.",
        focus: "Students work more independently while the tutor rotates among them to provide individual guidance and support.",
    },
    {
        feature: "Lesson format",
        regular: "The tutor teaches a question or concept, gives students a similar question to attempt, then provides further practice or homework for reinforcement.",
        focus: "Students mainly work on questions at their own pace and receive help whenever they need clarification, correction or deeper explanation.",
    },
    {
        feature: "Learning pace",
        regular: "The class progresses together according to a planned curriculum and lesson sequence.",
        focus: "Each student progresses according to his or her own pace, needs and selected materials.",
    },
    {
        feature: "Class size",
        regular: "Generally up to 10 students to 1 tutor.",
        focus: "Capped at 4 students to 1 tutor.",
    },
    {
        feature: "Learning materials",
        regular: "Maythematics curriculum and worksheets covering a wide range of concepts and question types.",
        focus: "Flexible materials, including Maythematics worksheets, schoolwork, homework, revision papers and targeted practice.",
    },
    {
        feature: "Best suited for",
        regular: "Students who enjoy the camaraderie of a class, like learning alongside peers and prefer following a structured lesson.",
        focus: "Students who learn best at their own pace, need more personalised guidance or require flexibility in what they work on.",
    },
    {
        feature: "Available streams",
        regular: "Mainstream levels where a Regular Class is available.",
        focus: "Suitable for streams where a Regular Class may not be available, such as P6 Foundation, Integrated Programme (IP) and G1.",
    },
    {
        feature: "Additional support",
        regular: "A complete standalone programme for students who thrive in a structured class setting.",
        focus: "May also be taken as an additional support class alongside a Regular Class for extra practice, schoolwork help or targeted revision.",
    },
];

export default function ClassTypesComparison() {
    return (
        <section className={`${styles.section} sectionYPadding`}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h3 data-aos="fade-up" className={`text-xl`}>At a Glance</h3>
                </div>

                <div className={styles.tableWrapper}>
                    <table data-aos="fade-up" className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.featureHeader}>Feature</th>
                                <th className={styles.regularHeader}>Regular Class</th>
                                <th className={styles.focusHeader}>Focus Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={idx}>
                                    <td className={styles.featureCell}>{row.feature}</td>
                                    <td>{row.regular}</td>
                                    <td>{row.focus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.mobileCards}>
                    {rows.map((row, idx) => (
                        <div data-aos="fade-up" key={idx} className={styles.mobileCard}>
                            <h4 className={styles.mobileFeature}>{row.feature}</h4>
                            <div className={styles.mobileBlock}>
                                <span className={`${styles.mobileLabel} ${styles.mobileLabelRegular}`}>Regular Class</span>
                                <p>{row.regular}</p>
                            </div>
                            <div className={styles.mobileBlock}>
                                <span className={`${styles.mobileLabel} ${styles.mobileLabelFocus}`}>Focus Class</span>
                                <p>{row.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.videoOverlay}></div>

        </section>
    );
}
