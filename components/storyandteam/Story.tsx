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
        <section className={`${styles.story} sectionYPadding`}>

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
                                <h4>Where It All Began — Teaching from the Heart</h4>
                                <p>Teaching has always been my passion. Helping students overcome their fear of Math and watching their confidence grow gave me a deep sense of purpose. <br/><br/>My journey began at home, teaching my younger siblings. After junior college, I started part-time tutoring. What began as just a way to earn extra money soon became my calling.</p>
                            </div>

                        </div>
                        <div data-aos="fade-right" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-7.webp"
                                caption="May teaching her younger siblings"
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
                                <h4>Riding Across Singapore</h4>
                                <p>During my university years, I went the extra mile — literally. I got my motorcycle license so I could travel across Singapore, rain or shine, to teach. <br/><br/>I often spent more time teaching than studying, but every moment was worth it. Those years shaped me as a teacher and deepened my love for this work.</p>
                            </div>                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-1.webp"
                                caption="May posing with her Motorcycle"
                                shadowType="shadow4"
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
                                <h4>Gaining Experience</h4>
                                <p>After graduation, I joined an established Math tuition centre. There, I spent years refining my teaching methods, building experience, and learning what truly helps students thrive.</p>
                            </div>
                                                        <img alt="Story Element 4" className={`${stylesElements.storyMascot} ${stylesElements.element4}`} src="/assets/red-mascot-teach.webp" />

                        </div>
                        <div data-aos="fade-right" className={styles.imageContainer}>

                                                        <Polaroid
                                src="/images/storyteam/story-4.webp"
                                caption="May teaching at her home"
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
                                <h4>The Crossroads of 2021</h4>
                                <p>Then COVID-19 struck. At that time, I was pregnant, and vaccines for expectant mothers were not yet declared safe. To continue at my workplace, I would have needed to be vaccinated.
<br/><br/>
I faced a heartbreaking choice: continue my career and risk my baby’s health, or step away from the job I loved.
<br/><br/>
I chose my baby. I quit.
<br/><br/>
My husband also lost his job as a Pilates instructor. Overnight, we had no stable income and survived by doing Grab deliveries. It was a season of humility, fear, and uncertainty.</p>
                            </div>

                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-2.webp"
                                caption="May, Husband and Baby Novi"
                                shadowType="shadow1"
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
                                <h4>Teaching from a Tiny Home</h4>
                                <p>Amidst the struggle, a small lifeline appeared: a few loyal students continued coming to my tiny two-room HDB for lessons.
<br/><br/>
Each time, my husband would carry baby Novi out of the house for hours, just so students could learn in a “conducive” space. I felt torn between wanting the best for my students and the guilt of sacrificing my own child’s comfort.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>

                            <Polaroid
                                src="/images/storyteam/story-3.webp"
                                caption="Father and Daughter"
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
                                <h4>Discovering TikTok</h4>
                                <p>One day, a student mentioned learning math tricks from TikTok. That sparked an idea: if I wanted to reach more students again, I had to go where they already were.
<br/><br/>
So, between breastfeeding breaks, I started creating short educational videos. I even went live on TikTok — at first, fewer than five people tuned in.
<br/><br/>
But I held onto one belief: as long as there was even one student willing to learn, I would teach.
<br/><br/>
Slowly, children began signing up for lessons after discovering my videos. To my surprise, TikTok became the bridge to my students.</p>
                            </div>
                            <img alt="Story Element 6" className={`${stylesElements.storyMascot} ${stylesElements.element6}`} src="/assets/yellow-mascot-2.webp" />

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
                                <h4>Outgrowing My Home</h4>
                                <p>By the end of 2022, I was teaching 50 students at home every week.
<br/><br/>
That was when I knew it was time to take a leap of faith.
<br/><br/>
In 2023, I poured out my life savings and opened my first tuition centre — right opposite Kembangan MRT. That single step marked the official beginning of Maythematics.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-8.webp"
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
                                <h4>Growing into a Team</h4>
                                <p>
                                    From there, Maythematics grew into a team of passionate teachers. Together, we’ve helped students transform — from failing to passing, from passes to distinctions.

Parents told us their children finally enjoyed Math, and word of mouth spread quickly.

Maythematics was born out of hardship, but it has grown through love, resilience, and an unshakable belief: with the right guidance, every child can shine in Math.
                                </p>

                            </div>
                            <img alt="Story Element 8" className={`${stylesElements.storyMascot} ${stylesElements.element8}`} src="/assets/blue-mascot-1.png" />

                        </div>
                        <div data-aos="fade-left" className={styles.imageContainer}>
                            <Polaroid
                                src="/images/storyteam/story-9.webp"
                                caption="Maythematics Team"
                                shadowType="shadow4"
                            />

                        </div>
                    </div>


                </div>

                <p className={`text-lg  ${styles.timelineEnd}`}>
                    What started as home-based lessons grew into our first flagship centre at Kembangan MRT in 2023, and by 2025, into a bigger space to welcome even more families. Along the way, the true reward has been seeing children and parents from all over Singapore gain confidence and joy in Math.
                </p>

            </div>


                        {/* <div className={`${styles.storyContainer} sectionYPadding`}>

                <div className={styles.videoContainer}>
                    <div className={styles.videoWrapper} data-aos="fade-in">
                        <iframe
                            className={styles.video}
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
                        <img data-aos="fade-right" alt="Red Mascot Teaching" className={styles.videoMascot2} src="/assets/red-mascot-teach.webp" />
                        <img data-aos="fade-left" alt="Blue Mascot Waving" className={styles.videoMascot1} src="/assets/blue-mascot-3.png" />

                    </div>
                </div>
            </div> */}



        </section>
    );
};

export default Story;
