"use client";

import React from "react";
import styles from "./NewLesson.module.scss";
import Link from "next/link";
import { FaRegClock, FaUsers } from "react-icons/fa";


const lessons = [
    {
        title: 'Primary 1–2',
        description:
            'Strong fundamentals and the right learning mindset are cultivated from the start. With a maximum of 4 students per class, every child receives close guidance and attention to nurture confidence and curiosity in mathematics.',
        duration: '1.5 hours',
        classSize: '4',
        image: '/images/elementaryschool.jpg',
    },
    {
        title: 'Primary 3–4',
        description:
            'Key mathematical concepts are strengthened and expanded, with an emphasis on problem-solving skills. Small groups of 6–8 students provide opportunities for interactive learning, peer support, and personalised feedback.',
        duration: '1.5 hours',
        classSize: '6-8',
        image: '/images/elementaryschool.jpg',
    },
    {
        title: 'Primary 5–6',
        description:
            'Challenging problem sums and higher-order thinking questions are introduced to build confidence and prepare students for the PSLE. Classes of 6–10 balance individual guidance with collaborative learning. ',
        duration: '2 hours',
        classSize: '6-10',
        image: '/images/elementary2.jpg',
    },
    {
        title: `Secondary Math 
        (Sec 1–5)`,
        description:
            'Algebra, geometry, graphs, and advanced problem-solving are taught with structured strategies to tackle exam-style questions effectively. Class sizes of 8–14 encourage discussion, exposure to varied question types, and development of analytical thinking. ',
        duration: '2 hours',
        classSize: '8-14',
        image: '/images/middleschool.jpg',
    },
    {
        title: 'JC Math (H1/H2)',
        description:
            'Rigorous training in H1 and H2 Mathematics ensures mastery of advanced topics such as calculus, statistics, and complex numbers. Classes are designed to sharpen conceptual understanding, problem-solving speed, and exam readiness in groups of 8–14 students.',
        duration: '2 hours',
        classSize: '8-14',
        image: '/images/highschol.jpg',
    },
];

const NewLesson = () => {
    return (
        <section className={styles.lesson}>
            <h2 className={`sectionTitle`}>
                Our{" "}
                <span className={styles.red}>
                    Specialized
                </span>{" "}
                Programme
            </h2>

            <div className={styles.lessonWrapper}>

                <div className={styles.elementContainer}>
                    <img className={`${styles.element} ${styles.element1}`} src="/assets/blue-mascot-2.png" alt="Minus Design Element" />
                    <img className={`${styles.element} ${styles.element2}`} src="/assets/elements/multiply.png" alt="Design Element 9" />
                    <img className={`${styles.element} ${styles.element3}`} src="/assets/red-mascot-3.png" alt="Design Element 9" />
                    <img className={`${styles.element} ${styles.element4}`} src="/assets/elements/design-element-9.png" alt="Design Element 9" />
                </div>

                {lessons.map((lesson, index) => (
                    <div className={`${styles.lessonContainer}`} key={index}>
                        <div data-aos="fade-up" className={styles.imageContainer}
                            style={{ backgroundImage: `url(${lesson.image})` }}>
                            {/* <img src={lesson.image} alt={`${lesson.title} Image`} /> */}
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textContent}>
                                <h2 data-aos="fade-up" className="text-xl">{lesson.title}</h2>
                                <div data-aos="fade-up" className={styles.descriptionContainer}>
                                    <p className={styles.description}>{lesson.description}</p>
                                    <p className={styles.classInfo}>
                                        <FaRegClock className={styles.icon} />
                                        <span className="bold">Duration: </span>{lesson.duration}
                                    </p>

                                    <p className={styles.classInfo}>
                                        <FaUsers className={styles.icon} />
                                        <span className="bold">Class size: </span>{lesson.classSize}
                                    </p>
                                </div>

                            </div>
                            <Link data-aos="fade-in" href="/about" className={`${styles.ctaButton} buttonYellow ctaButton`}>Read More</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </section >
    );
};

export default NewLesson;
