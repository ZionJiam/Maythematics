"use client";

import React from "react";
import styles from "./Methodologies.module.scss";
import Link from "next/link";
import SecondaryCtaButton from "../ui/SecondaryCTAButton";

const StudentReview = () => {
    return (
        <section className={`${styles.studentReview} sectionYPadding`}>
            <div className={styles.studentContainer}>
                <div data-aos="fade-up" className={styles.videoContainer}>

                    <img
                        data-aos="fade-in"
                        className={styles.image}
                        src="/images/shine_approach.webp"
                        alt="Shine Approach illustration"
                    />

                </div>

                <div data-aos="fade-up" className={styles.textContainer}>
                    <h2 className="sectionTitle">Our Unique <br /> Approach</h2>
                    <p>
                        At Maythematics, every learning resource is thoughtfully designed to support your child’s journey in Math. Our worksheets are MOE-aligned and customised to match school exam timelines — from Weighted Assessments (WA1, WA2, WA3) to major exams like the End-of-Year, PSLE, and O-Levels. By weaving in commonly tested exam questions, we ensure students feel fully prepared and confident when it matters most.
                    </p>
                    {/* <Link href="/testimonials" className={` ${styles.button} buttonYellow ctaButton`}>See More Testimonials</Link> */}
                    <SecondaryCtaButton text="Learn More About SHINE" href="/programmes?goto=shine" />
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
