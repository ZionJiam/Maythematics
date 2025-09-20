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
        name: "Chloe’s Journey",
        description:
            "Chloe improved from AL6 to AL2 after receiving targeted extra worksheets on her weaker topics. The workshop was especially helpful, as many of the questions discussed appeared in her exam.",
        videoUrl: "https://youtube.com/embed/L7xRSzB7MQw?si=HhFNmiQ1zH_8lnLI",
    },
    {
        name: "Singh Family",
        description:
            "Ethan went from AL5 to AL1 through consistent practice and personalised coaching. The mock tests gave him the confidence to ace his exams.",
        videoUrl: "https://www.youtube.com/embed/6z3ETPvOhcE?si=vPPXCREVGhEUUOd4",
    },

    {
        name: "Amylia and Norrida",
        description:
            "Ethan went from AL5 to AL1 through consistent practice and personalised coaching. The mock tests gave him the confidence to ace his exams.",
        videoUrl: "https://www.youtube.com/embed/2ADfj6sBekg?si=QLPY9aUxj6eoagqv",
    },

];

const StudentReview = () => {
    return (
        <section className={`${styles.studentReview}`}>

            <div className={`${styles.container} sectionYPadding`}>
                {reviews.map((review, index) => (
                    <div key={index} className={`${styles.reviewItem}`}>
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
                            <h2 className="sectionTitle">{review.name}</h2>
                            <p>{review.description}</p>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default StudentReview;
