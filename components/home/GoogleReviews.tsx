"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./GoogleReviews.module.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";


const reviews = [
    {
        id: 1,
        name: "Sharon Ang",
        profileImage: "/images/google-pfp/sharon-pfp.png",
        content:
            "My girl has been doing poorly for math PSLE last year until I got to know Teacher May and her team on TikTok. Now my girl is in Sec 1, she has improved tremendously with the help of her dedicated team. She was in G2 and now gotten good news to be in G3 in May 2025. My appreciation to Teacher Tyler for his guidance and patience.. and sincerely grateful",
    },
    {
        id: 2,
        name: "kellynn goh",
        profileImage: "/images/google-pfp/pfp-2.png",

        content:
            "The PSLE math formula has helped me with my math results significantly! After the huge jump from p4 to p5, my math results went from a 80+ to a 50+, when I first discovered teacher’s May PSLE math formula during my p6 year, I used her notes for revision during my exams by rewriting her notes in my notebook and referring to it when doing practice papers. This had helped me understand all the key formulas better and eventually gotten AL1 for my exams! Thank you teacher May :)",
    },
    {
        id: 3,
        name: "neo jinxia",
        profileImage: "/images/google-pfp/pfp-5.png",

        content:
            "Before joining Maythematics, my daughter Chloe got AL7 in PSLE and hated Math. After joining Maythematics Math Tuition, she gradually gained interest and started loving Math more. she eventually achieved A1 in G2 Maths consistently from weighted assessments to EOY. This allowed her to move up to G3 Maths in Secondary 2. She continued to score 85% for Sec 2 Emaths EOY and is currently taking both E and Amath classes with them now. Appreciate the help with all the teachers at Maythematics - Teacher May, Claire, Eunice, Lucas who helped my daughter ace Math - highly recommend anyone of you to give this tuition centre a try for your child to do well for Mathematics",
    },
    {
        id: 4,
        name: "Karen wee",
        profileImage: "/images/google-pfp/pfp-4.png",
        content:
            "Teacher Claire’s tutelage helped my daughter understand what she couldn’t before, and improved her math grades by a few levels. My daughter has become much more confident in the subject and enjoys her lessons. Thank you Maythematics ❤️",
    },
    {
        id: 5,
        name: "Bessy_LKY",
        profileImage: "/images/google-pfp/pfp-3.png",

        content:
            "I've been with maythematics for a year, during my O level year. the teachers there are really friendly and encouraging and they motivated me do want to try harder for maths. for both amath and emath, I had been consistently failing in sec 3. in sec 4, I slowly saw improvements from getting a pass to finally getting a2 (emath) and b3 (amath) in O levels! I'm super happy about my tremendous progress and I'm so grateful for teacher may and teacher claire for supporting me throughout this tough year!!",
    },
    {
        id: 6,
        name: "Siew Xavier",
        profileImage: "/images/google-pfp/pfp-6.png",

        content:
            "When i first failed math with a D7, for my EOY in 2023 i didn't know what to do. Not alot of people can help me and i had no tution. I didn't really trust tutions as i don't really inprove in them . So i wouldn't know what to do, thats when my friend recommended me maythematics. I was abit skeptical but I couldn't keep failing math so i gave it a try. During the trial lesson, when she first started teaching, I was actually able to understand. When teacher may teaches she individually helps students whenever they have questions. She will take the time to explain over and over again to make sure ur'e able to understand the material. After the trial i actl felt that i was starting to improve, so I signed up for it. Which was one of the best things I did. The next exam i scored A1. I was so happy I was able to make such a significant improvement in such a short time all thanks to teacher may. Without her i still be struggling with math but now i not. Within the years I was with them, I was also taught by other teachers, teacher eunice and teacher lucas. Their all excellent teachers all their lessons allow me understand math because of all of these i overall improve in math alot. The atmosphere of the classes are so lively and brightly and i made friends there. I never regret joining maythematics and hope to stay in that tution all the way to JC. I currently taking sec 3 A math and E math and I able to understand all the materials better then my own school teachers thank you to all teachers for helping me improve in math and allow me to understand and get better grades.❤️",
    },

    {
        id: 7,
        name: "Jeraldine Tan",
        profileImage: "/images/google-pfp/pfp-7.png",
        content:
            "Maythematics has been a game-changer for my daughter, who previously struggled with primary school maths and wasn’t doing well. We were worried about her transition to secondary school, so we enrolled her with Maythematics Secondary Maths. Under Teacher May and Teacher Claire’s guidance, my daughter gained confidence and achieved great results (A1 for all her papers!)  in her Secondary 1 G3 maths. We feel reassured knowing she’s building a strong foundation and are confident she’ll continue to excel with the right support. Highly recommend Maythematics for anyone seeking effective and compassionate maths tutoring!"
    },

    {
        id: 8,
        name: "claudia sng",
        profileImage: "/images/google-pfp/pfp-8.png",
        content:
            "Teacher May is a patient teacher with strong passion in teaching which really inspired students to push themselves to do well. She will take time off for students who have more doubts after lesson physically or even through texts. She’s fun and well liked by most of her students in class."
    },

    {
        id: 9,
        name: "Chloe Teo",
        profileImage: "/images/google-pfp/pfp-1.png",
        content:
            "I attended the sec4 amath lesson, and through the lessons i managed to improve from a F9 to B3 in olevels. Super thankful for Teacher May and Teacher Claire for guiding me through the olevel journey. They are very patient and would always be so willing to help me improve!"
    },

    {
        id: 10,
        name: "JIMIN CHOI",
        profileImage: "/images/google-pfp/pfp-10.png",
        content:
            "I have been sending my daughter, who is in Primary 6, to this place for six months, and her math score has improved significantly from AL4 to AL1. Teacher May is both professional and passionate, and thanks to her, math has now become my daughter’s favorite subject—something I never expected. I highly recommend this place for anyone looking to boost their child’s math skills!"
    },

];

const GoogleReviews = () => {
    const [selectedReview, setSelectedReview] = useState<null | typeof reviews[0]>(null);

    return (
        <section className={`${styles.googleReviews} sectionYPadding`}>
            <img data-aos="fade-up" alt="Review Mascot thumbs up" className={styles.reviewMascot} src="/assets/review-mascot.webp" />

            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider top"
                className={styles.dividerTop}
            />

            {/* <div className="custom-shape-divider-top-1757190219">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div> */}

            <div className={`${styles.reviewContainer}`}>
                <h2 className={`sectionTitle white-text-outline`}>Google Reviews</h2>

                <div data-aos="fade-in" className={styles.marqueeWrapper}>
                    <div className={styles.marquee}>
                        {[...reviews, ...reviews].map((review, index) => (
                            <div
                                key={index}
                                className={styles.card}
                                onClick={() => setSelectedReview(review)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && setSelectedReview(review)}
                            >
                                <div className={styles.header}>


                                    <div className={styles.profileWrapper}>
                                        <img
                                            src={review.profileImage}
                                            alt={`${review.name} profile`}
                                            className={styles.profileImage}
                                        />
                                        <img
                                            src="/images/google-logo.svg"
                                            alt="Google Verified"
                                            className={styles.googleBadge}
                                        />
                                    </div>
                                    <div className={styles.info}>
                                        <p className={styles.name}>{review.name}</p>
                                        <div className={styles.stars}>
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} aria-hidden="true" className={styles.star}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.snippet}>{review.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/search?sca_esv=63ad467223b51100&sxsrf=AE3TifOpsTdfoMI-1PN4HwIa9AbKt1PdWg:1755628692846&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8TbVFSNsxIX4BKvto6miI3zK3MzrbgAjcuQyeWEbIbhH5hddhSRR3JsN3vbbobbFBySMy56msroU-pHa-Ru_3c7fmksWdUtRTNRmakmOrQrRkk0HA%3D%3D&q=Maythematics+Math+Tuition+Reviews&sa=X&ved=2ahUKEwiA0ODEwpePAxXZzjgGHQtpAFQQ0bkNegQIPRAE&biw=1720&bih=652&dpr=2"
                    className={`buttonYellow ctaButton`}
                >
                    What Parents Say
                </Link>

            </div>

            {selectedReview && (
                <div className={styles.modal} onClick={() => setSelectedReview(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>

                            <div className={styles.profileWrapper}>
                                <img
                                    src={`${selectedReview.profileImage}`}
                                    alt={`${selectedReview.name} profile`}
                                    className={styles.profileImage}
                                />
                                <img
                                    src="/images/google-logo.svg"
                                    alt="Google Verified"
                                    className={styles.googleBadge}
                                />
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.name}>{selectedReview.name}</h3>
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={styles.star}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className={styles.fullReview}>{selectedReview.content}</p>
                        <button onClick={() => setSelectedReview(null)}>Close</button>
                    </div>
                </div>
            )}


            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider bottom"
                className={styles.dividerBottom}
            />
        </section>
    );
};

export default GoogleReviews;
