"use client";

import React from "react";
import styles from "./StudentReview.module.scss";

interface Review {
    name: string;
    description: string;
    videoUrl: string;
}

const reviews: Review[] = [
    {
        name: "What Our\nStudents Say",
        description:
            "Discover firsthand experiences from our Maythematics students as they share their learning journey, progress, and how our programmes have helped them achieve their academic goals with confidence.",
        videoUrl: "https://youtube.com/embed/E2A8CtSdjAk?si=VKYh5qEHoSgsvJU_",
    },
    {
        name: "Chloe’s story - \nAL6 to AL2 (PSLE)",
        description:
            "Watch how Chloe credits her improvement from AL6 to AL2 after receiving targeted help in her weaker topics, as well as how our PSLE workshops helped her spot the right questions to prepare better for PSLE.",
        videoUrl: "https://youtube.com/embed/L7xRSzB7MQw?si=HhFNmiQ1zH_8lnLI",
    },
    {
        name: "Singh Family",
        description:
            "Watch how the Singh Family testifies how we build confidence and mastery in their child’s Math, and how their child is always so happy attending tuitions!",
        videoUrl: "https://www.youtube.com/embed/6z3ETPvOhcE?si=vPPXCREVGhEUUOd4",
    },

    {
        name: "Amylia and Norrida",
        description:
            "Watch how Norrida shares about the commitment, dedication and sincerity of our tutor — qualities that truly make learning a positive experience. \n\nListen to Amylia, who explains how our tutor relates questions to real-life examples, making abstract concepts easier to grasp. Thanks to this approach, Amylia not only improved her confidence but also attained Top in her level!",
        videoUrl: "https://www.youtube.com/embed/2ADfj6sBekg?si=QLPY9aUxj6eoagqv",
    },

];

const StudentReview = () => {
    return (
        <section className={`${styles.studentReview}`}>

            <div className={`${styles.container}`}>
                {reviews.map((review, index) => (
                    <div key={index} className={`${styles.reviewItem} sectionYPadding`}>
                        <h2 className={`sectionTitle d-block-768 ${styles.title}`}>{review.name}</h2>
                        <div className={styles.videoContainer}>
                            <iframe
                                loading="lazy"
                                className={styles.video}
                                src={review.videoUrl}
                                title={`${review.name} Video`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className={styles.textContainer}>
                            <h2 className={`sectionTitle d-none-768 ${styles.title}`}>{review.name}</h2>
                            <p>{review.description}</p>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default StudentReview;
