"use client";

import React from "react";
import styles from "./Methodologies.module.scss";
import Link from "next/link";
import SecondaryCtaButton from "../ui/SecondaryCTAButton";

const StudentReview = () => {
    return (
        <section id="shine" className={`${styles.studentReview} sectionYPadding`}>
            <div className={styles.studentContainer}>
                <div data-aos="fade-up" className={styles.imageContainer}>

                    <img
                        data-aos="fade-in"
                        className={styles.image}
                        src="/images/shine_approach.webp"
                        alt="Shine Approach illustration"
                    />

                </div>

                <div data-aos="fade-up" className={styles.textContainer}>
                    <h2 className="sectionTitle">Our SHINE Approach</h2>
                    <p>
                        At MTM, we believe every child has the potential to SHINE.
                        Our SHINE Approach is what makes learning effective, enjoyable, and resultsdriven.
                        We don’t just teach Math — we care about the entire learning experience. We want
                        our students to shine by                    
                    </p>
                    {/* <Link href="/testimonials" className={` ${styles.button} buttonYellow ctaButton`}>See More Testimonials</Link> */}
                    <SecondaryCtaButton text="Learn more about Our SHINE Approach" href="/programmes?#shine" />
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
