"use client";

import styles from './Story.module.scss';
import React, { useEffect, useRef, useState } from "react";
import TimelineDot from '../ui/TimelineDot';
import SlideUpImage from "@/components/ui/SlideUpImage";



const Story = () => {

    const subTimelineRef = useRef<HTMLDivElement | null>(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true);
                    } else {
                        setAnimate(false); // Remove if you want one-time animation
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of element is visible
        );

        if (subTimelineRef.current) {
            observer.observe(subTimelineRef.current);
        }

        return () => {
            if (subTimelineRef.current) observer.unobserve(subTimelineRef.current);
        };
    }, []);

    return (
        <section className={styles.story}>
            <div className={styles.storyContainer}>
                <h2 className={`sectionTitle`}>
                    Our Story
                </h2>
                <p className={styles.content}>
                    It all started from the passion of sharing Math Knowledge to help as many students & parents as possible.

                    Thank you for loving our regular Tiktok live teaching sessions and Math videos.

                    The beneficial Tiktok Live sessions as well as videos have propelled hundreds of students all over Singapore to take up online / physical lessons with us weekly.

                    From home-based to opening our first flagship centre opposite Kembangan MRT in 2023 to expanding to a bigger centre in 2025, it has been our greatest honour for being able to inspire children & parents from all over Singapore to gain more confidence in Math.

                    We promise to give our all to help each and every child to reach their best potential.
                </p>
            </div>

            <div className={styles.historyContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.timelineWrapper}>
                        <div className={styles.timeline}>
                            <div className={styles.subTimeline1}></div>
                            <div className={styles.subTimeline2}></div>
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.rowOdd} ${styles.rowRed}`}>

                        <TimelineDot styleColor='yellow' extendLine='left' />
                        <div className={`${styles.textWrapper}`}>
                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <h2>Home-Based Setup</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/banner1.jpg" alt="FLoating Design Element 3" />

                        </div>

                    </div>
                    <div className={`${styles.row} ${styles.rowEven}`}>
                        <TimelineDot styleColor='red' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>
                            <SlideUpImage alt="Story Mascot 1" className={`${styles.storyMascot} ${styles.storyMascot1} ${styles.left}`} src="/assets/blue-mascot-2.png" />
                            <div className={`${styles.textInnerWrapper} ${styles.red}`}>
                                <h2>Early Small <br />Group Classes</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>                        </div>                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/banner1.jpg" alt="FLoating Design Element 3" />

                        </div>

                    </div>
                    <div className={`${styles.row} ${styles.rowOdd}`}>
                        <TimelineDot styleColor='blue' extendLine='left' />

                        <div className={`${styles.textWrapper}`}>
                            <SlideUpImage alt="Story Mascot 2" className={`${styles.storyMascot} ${styles.right}`} src="/assets/yellow-mascot-2.png" />

                            <div className={`${styles.textInnerWrapper} ${styles.blue}`}>
                                <h2>Flagship Centre <br />(Opened in 2023)</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>                        </div>                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/banner1.jpg" alt="FLoating Design Element 3" />
                        </div>

                    </div>

                    <div className={`${styles.row} ${styles.rowEven}`}>
                        <TimelineDot styleColor='yellow' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>
                            <SlideUpImage alt="Story Mascot 3" className={`${styles.storyMascot} ${styles.left}`} src="/assets/red-mascot-2.png" />

                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <h2>New Bigger Centre <br />(2025 Expansion)</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>                        </div>                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/banner1.jpg" alt="FLoating Design Element 3" />
                        </div>

                    </div>



                </div>
            </div>


        </section>
    );
};

export default Story;
