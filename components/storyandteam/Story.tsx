"use client";

import styles from './Story.module.scss';
import stylesElements from './StoryDesign.module.scss';

import React, { useEffect, useRef, useState } from "react";
import TimelineDot from '../ui/TimelineDot';
import Polaroid from '../ui/Polaroid';
import Slogan from '../ui/Slogan';


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
        <section className={`${styles.story}`}>

            <div className={`${styles.storyContainer} sectionYPadding`}>
                <Slogan header="Our Mission" text="To foster a positive and safe environment for students to learn Math under the belt of the most positive, patient and passionate tutors with effective teaching methodologies." />


                <div className={styles.videoContainer}>
                    <div className={styles.videoWrapper} data-aos="fade-in">
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
                        <img data-aos="fade-right" alt="Red Mascot Teaching" className={styles.videoMascot2} src="/assets/red-mascot-teach.webp" />
                        <img data-aos="fade-left" alt="Blue Mascot Waving" className={styles.videoMascot1} src="/assets/blue-mascot-3.png" />

                        {/* Content you want to show overlapping */}
                    </div>
                </div>



            </div>

            <div className={`${styles.historyContainer} sectionYPadding`}>
                <p className={`text-lg ${styles.timelineStart}`}>How it all started</p>

                <div className={styles.innerContainer}>
                    <div className={styles.timelineEndDot} />

                    <div className={styles.timelineStartDot} />
                    <div className={styles.timelineWrapper}>
                        <div className={styles.timeline} />

                    </div>
                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowOdd} ${styles.rowRed}`}>
                        <TimelineDot data-aos="fade-up" styleColor='yellow' extendLine='left' />
                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>1</span>
                                </div>
                                <h4>Passion for Teaching</h4>
                                <p>From the beginning, May was deeply passionate about teaching. Helping students overcome their fear of Math and watching their confidence grow gave her purpose.</p>
                            </div>

                        </div>
                        <div data-aos="fade-right" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-1.webp"
                                caption="May posing with her Motorcycle"
                                shadowType="shadow3"
                            />

                            {/* <img className={`${styles.image}`} src="/images/storyteam/image-1.png" alt="FLoating Design Element 3" /> */}
                        </div>
                    </div>



                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowEven} ${styles.rowRed}`}>
                        <TimelineDot styleColor='red' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>
                            <div className={`${styles.textInnerWrapper} ${styles.red}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>2</span>
                                </div>
                                <h4>The COVID-19 <br />Crossroads (2021)</h4>
                                <p>When COVID-19 struck, May was pregnant. Vaccination had not yet been declared safe for expectant mothers. To continue teaching at her established centre, she would have needed to be vaccinated. Faced with the choice between her baby’s health and her career, she chose her baby — and resigned from teaching.</p>
                            </div>                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-2.webp"
                                caption="Image of Baby in MRI Scan"
                                shadowType="shadow1"
                            />

                        </div>

                    </div>
                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowOdd} ${styles.rowBlue}`}>
                        <TimelineDot styleColor='blue' extendLine='left' />

                        <div className={`${styles.textWrapper}`}>


                            <div className={`${styles.textInnerWrapper} ${styles.blue}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>3</span>
                                </div>
                                <h4>A Season of Struggle</h4>
                                <p>At the same time, her husband lost his job as a Pilates instructor. With no stable income, the couple survived by doing Grab deliveries — a period filled with humility, fear, and uncertainty.</p>
                            </div>
                        </div>
                        <div data-aos="fade-right" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-3.webp"
                                caption="Father and Daughter"
                                shadowType="shadow2"
                            />

                        </div>

                    </div>

                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowEven} ${styles.rowYellow}`}>
                        <TimelineDot styleColor='yellow' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>4</span>
                                </div>
                                <h4>Teaching From Home</h4>
                                <p>A few loyal students continued lessons at May’s tiny two-room HDB flat. Each time, her husband carried their baby, Novi, out of the house for hours so students could have a conducive space. May carried the guilt of sacrificing comfort for her child while still giving her best to her students.</p>
                            </div>
                            <img alt="Story Element 4" className={`${stylesElements.storyMascot} ${stylesElements.element4}`} src="/assets/red-mascot-teach.webp" />

                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-4.webp"
                                caption="I Miss London"
                                shadowType="shadow4"
                            />

                        </div>
                    </div>



                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowOdd} ${styles.rowRed}`}>
                        <TimelineDot styleColor='red' extendLine='left' />

                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.red}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>5</span>
                                </div>
                                <h4>The TikTok Experiment</h4>
                                <p>One day when a student mentioned learning math tricks on TikTok, May decided to try creating short educational videos. She recorded between breastfeeding breaks, sometimes with Novi right beside her. At first, fewer than five viewers tuned in to her live streams. But she held firm: “As long as there is even one student willing to learn, I will teach.”</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-5.webp"
                                caption="May teaching during Covid Period at her home"
                                shadowType="shadow3"
                            />


                        </div>
                    </div>

                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowEven} ${styles.rowYellow}`}>
                        <TimelineDot styleColor='blue' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.blue}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>6</span>
                                </div>
                                <h4>The Spark of Growth</h4>
                                <p>Unexpectedly, children began signing up for lessons after watching her TikTok videos. Parents noticed, and the little community started to grow.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-6.webp"
                                caption="Tiktok Live with her daughter"
                                shadowType="shadow1"
                            />

                        </div>
                    </div>

                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowOdd} ${styles.rowRed}`}>
                        <TimelineDot styleColor='yellow' extendLine='left' />

                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>7</span>
                                </div>
                                <h4>50 Students at Home<br /> (End of 2022)</h4>
                                <p>By the end of 2022, May was teaching 50 students weekly at her home. The demand proved it was time to take a bigger step.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-7.webp"
                                caption="More and More Students"
                                shadowType="shadow2"
                            />

                        </div>
                    </div>

                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowEven} ${styles.rowYellow}`}>
                        <TimelineDot styleColor='red' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.red}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>8</span>
                                </div>
                                <h4>The Leap of Faith (2023)</h4>
                                <p>
                                    With a hopeful heart, May poured her life savings into opening the first Maythematics centre, strategically located opposite Kembangan MRT. This marked the official birth of Maythematics.
                                </p>

                            </div>
                            <img alt="Story Element 8" className={`${stylesElements.storyMascot} ${stylesElements.element8}`} src="/assets/blue-mascot-1.png" />

                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-8.webp"
                                caption="Opening of Maythematics"
                                shadowType="shadow4"
                            />

                        </div>
                    </div>


                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowOdd} ${styles.rowRed}`}>
                        <TimelineDot styleColor='blue' extendLine='left' />

                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.blue}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>9</span>
                                </div>
                                <h4>Building Something Better</h4>
                                <p>Drawing from her past experience, May set out to enhance the student, parent, and tutor experience in ways she had always dreamed of. She built a team of passionate teachers aligned with this mission.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-9.webp"
                                caption="Maythematics Team Photo"
                                shadowType="shadow3"
                            />
                        </div>
                    </div>

                    <div data-aos="fade-up" className={`${styles.row} ${styles.rowEven} ${styles.rowRed}`}>
                        <TimelineDot styleColor='yellow' extendLine='right' />

                        <div className={`${styles.textWrapper}`}>

                            <div className={`${styles.textInnerWrapper} ${styles.yellow}`}>
                                <div className={`${styles.numbering}`}>
                                    <span>10</span>
                                </div>
                                <h4>Transforming Students’ Lives</h4>
                                <p>Since then, Maythematics has helped countless students improve — from failing to passing, from passes to distinctions. Parents shared how their children finally began to enjoy Math. What began in hardship grew into a community of resilience, love, and belief: with the right guidance, every child can shine in Math.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-10.webp"
                                caption="May teaching in workshop"
                                shadowType="shadow1"
                            />
                        </div>
                    </div>



                </div>

                <p className={`text-lg  ${styles.timelineEnd}`}>
                    What started as home-based lessons grew into our first flagship centre at Kembangan MRT in 2023, and by 2025, into a bigger space to welcome even more families. Along the way, the true reward has been seeing children and parents from all over Singapore gain confidence and joy in Math.
                </p>

            </div>


        </section>
    );
};

export default Story;
