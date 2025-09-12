"use client";

import React from "react";
import styles from "./JoinUsSection.module.scss";
import Link from "next/link";

const StudentReview = () => {
    return (
        <section className={styles.joinUs}>

            <div data-aos="fade-up" className={styles.imageContainer}>
                <img className={styles.image} src="/images/banner1.webp" alt="Maythematics MTM Team" />
            </div>

            <div data-aos="fade-up" className={styles.textContainer}>
                <h2 className="sectionTitle">Join the Team</h2>
                <p>

                    We’re always looking for passionate, driven, and creative individuals to be part of our growing family. At MTM Math, we believe in empowering people, building meaningful experiences, and making a positive impact in everything we do.
                </p>
                <a href="https://tally.so/embed/wARzD0" target="_blank" rel="noopener noreferrer" className={` ${styles.button} buttonYellow ctaButton`}>Join the MTM Team</a>
            </div>
        </section>
    );
};

export default StudentReview;
