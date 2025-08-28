"use client";

import styles from './Story.module.scss';
import React, { useEffect, useRef, useState } from "react";
import TimelineDot from '../ui/TimelineDot';
import SlideUpImage from "@/components/ui/SlideUpImage";
import { motion, Variants } from "framer-motion";


// const fadeInUp = {

// };

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

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
                <p className={`text-lg ${styles.slogan}`}>
                    It all started from the passion of sharing Math Knowledge to help as many students & parents as possible.
                </p>

                <div className={styles.videoContainer}>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/MBLKwxIfp1U"
                            title="YouTube video player"
                            width="560"
                            height="315"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>


                    <div className={styles.videoOverlay}>
                        {/* <SlideUpImage alt="Red Mascot Teaching" className={styles.videoMascot} src="/assets/red-mascot-teach.png" /> */}
                        <img alt="Red Mascot Teaching" className={styles.videoMascot2} src="/assets/red-mascot-teach.png" />
                        <img alt="Blue Mascot Waving" className={styles.videoMascot1} src="/assets/blue-mascot-3.png" />

                        {/* Content you want to show overlapping */}
                    </div>

                    <p className={`text-lg ${styles.content}`}>

                        From home-based to opening our first flagship centre opposite Kembangan MRT in 2023 to expanding to a bigger centre in 2025, it has been our greatest honour for being able to inspire children & parents from all over Singapore to gain more confidence in Math.
                    </p>
                </div>



            </div>

            <div className={styles.historyContainer}>
                <p className={`text-lg ${styles.timelineStart}`}>How it all started</p>

                <div className={styles.innerContainer}>
                    <div className={styles.timelineEndDot} />

                    <div className={styles.timelineStartDot} />
                    <div className={styles.timelineWrapper}>
                        <div className={styles.timeline} />

                    </div>
                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowOdd} ${styles.rowRed}`}>
                        <TimelineDot styleColor='yellow' extendLine='left' />
                        <div className={`${styles.textWrapper}`}>


                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>1</span>
                                </div>
                                <h2>Home-Based Setup</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/storyteam/image-1.png" alt="FLoating Design Element 3" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowEven} ${styles.rowRed}`}>
                        <TimelineDot styleColor='red' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>
                            <SlideUpImage alt="Story Mascot 1" className={`${styles.storyMascot} ${styles.storyMascot1} ${styles.left}`} src="/assets/blue-mascot-2.png" />
                            <div className={`${styles.textInnerWrapper} ${styles.red}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>2</span>
                                </div>
                                <h2>Early Small <br />Group Classes</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>                        </div>                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/storyteam/image-2.png" alt="FLoating Design Element 3" />

                        </div>

                    </div>
                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowOdd} ${styles.rowBlue}`}>
                        <TimelineDot styleColor='blue' extendLine='left' />

                        <div className={`${styles.textWrapper}`}>

                            <SlideUpImage alt="Story Mascot 2" className={`${styles.storyMascot} ${styles.right}`} src="/assets/yellow-mascot-2.png" />

                            <div className={`${styles.textInnerWrapper} ${styles.blue}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>3</span>
                                </div>
                                <h2>Flagship Centre <br />(Opened in 2023)</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/storyteam/image-3.png" alt="FLoating Design Element 3" />
                        </div>

                    </div>

                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowEven} ${styles.rowYellow}`}>
                        <TimelineDot styleColor='yellow' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>
                            <SlideUpImage alt="Story Mascot 3" className={`${styles.storyMascot} ${styles.left}`} src="/assets/red-mascot-2.png" />

                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>4</span>
                                </div>
                                <h2>New Bigger Centre <br />(2025 Expansion)</h2>
                                <p>Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!"</p>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={`${styles.image}`} src="/images/storyteam/image-4.png" alt="FLoating Design Element 3" />
                        </div>

                    </div>
                </div>

                <p className={`text-lg  ${styles.timelineEnd}`}>Continuously Helping <br />More Students</p>

            </div>


        </section>
    );
};

export default Story;
