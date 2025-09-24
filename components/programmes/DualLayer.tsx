'use client';

import { useState } from 'react';
import styles from './DualLayer.module.scss';
import { ChevronDown } from "lucide-react";



export default function ShineSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // S is open by default


    return (
        <section id="shine" className={`${styles.section} sectionYPadding`}>
            {/* <div data-aos="fade-up" className={styles.titleContainer}>
                <h4 className={styles.sectionTitle}>A unique balance of structure and personalisation</h4>
                <h3 className={`${styles.header} sectionTitle`}>Dual-Layered Support</h3>
            </div> */}

            <div className={styles.container}>

                <div className={`${styles.lessonContainer}`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/programmes/structured_question.webp"
                            alt="Structured Worksheet Image"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>

                            <h2 data-aos="fade-up" className="text-xl">
                                Structured Worksheets
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >
                                <p className={styles.description}>
                                    Every learning resource at Maythematics is thoughtfully designed to support your child’s journey in Mathematics.
                                </p>

                                <ul className={styles.descriptionList}>
                                    <li>MOE-aligned worksheets customised to match exam timelines (WA1, WA2, WA3, End-of-Year Exams, PSLE, O-Levels).</li>
                                    <li>Commonly tested questions arranged in progressive difficulty to build confidence step by step.</li>
                                    <li>At least 2 mock tests conducted before actual weighted assessments — ensuring ample practice and readiness.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.lessonContainer}`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/programmes/personalised_quiz.webp"
                            alt="Personalised Quiz Image"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                            <h2 data-aos="fade-up" className="text-xl">
                                Highly Effective Problem-Solving Strategies
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >


                                <p className={styles.description}>
                                    Your child will master the essential methods needed to tackle any Math exam with confidence.
                                </p>

                                <ul className={styles.descriptionList}>
                                    <li>Lower Primary: Listing, basic model drawing, gaps & intervals, guess & check/assumption, working backwards, before-and-after, fraction–remainder, stacking models, push in–out method and more</li>
                                    <li>Upper Primary: Gap & difference (excess & shortage), advanced model drawing, cut & paste (circles), number patterns (5 types), advanced fraction–remainder, quantity × value, constant total/difference/one item, units & parts, simultaneous, shifting methods, and more</li>
                                    <li>Secondary Math: Comprehensive coverage of all question types — from foundational to advanced — taught in progressive order to ensure complete exposure and exam readiness</li>
                                    <li>Junior College Math: Personalised support using students’ school-specific materials, reinforced with our in-house supplementary resources for stronger mastery and exam readiness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.lessonContainer}`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/programmes/dual3.webp"
                            alt="Personalised Quiz Image"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>

                            <h2 data-aos="fade-up" className="text-xl">
                                Personalised Quizzes
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >

                                <p className={styles.description}>
                                    Our tutors crafts quizzes designed to target each child’s weak spots.
                                </p>
                                <p className={styles.descriptionSub}>
                                    Whether a tricky topic is flagged by parents or students, our team curates or creates customised quizzes to close the gap. With over 500 tailored quizzes in our system, no child is ever limited by a one-size-fits-all approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
