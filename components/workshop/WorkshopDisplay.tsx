"use client";

import React from "react";
import styles from "./WorkshopDisplay.module.scss";
import Link from "next/link";

const workshops = [
    {
        image: "/images/workshop-promo.webp",
        title: "PSLE September Boot Camp",
        description:
            "Join our intensive boot camp designed to prepare students for the PSLE with proven strategies, timed practice, and engaging sessions.",
        dateTime: "📅 10 – 12 September 2025, 9AM – 4PM",
        location: "📍 SMU Yong Pung How School Of Law",
        formUrl: "https://tally.so/r/yourformlink"
    },
    {
        image: "/images/workshop-promo.webp",
        title: "Math Mastery October Workshop",
        description:
            "Sharpen problem-solving skills with targeted drills and proven techniques for secondary school students.",
        dateTime: "📅 15 October 2025, 2PM – 6PM",
        location: "📍 Singapore Expo Hall 3",
        formUrl: "https://tally.so/r/octoberform"
    },
    {
        image: "/images/workshop-promo.webp",
        title: "November Revision Boot Camp",
        description:
            "A high-energy revision camp covering critical topics before year-end exams.",
        dateTime: "📅 5 – 7 November 2025, 10AM – 5PM",
        location: "📍 NUS Business School",
        formUrl: "https://tally.so/r/novemberform"
    },
    {
        image: "/images/workshop-promo.webp",
        title: "November Revision Boot Camp",
        description:
            "A high-energy revision camp covering critical topics before year-end exams.",
        dateTime: "📅 5 – 7 November 2025, 10AM – 5PM",
        location: "📍 NUS Business School",
        formUrl: "https://tally.so/r/novemberform"
    },
    {
        image: "/images/workshop-promo.webp",
        title: "November Revision Boot Camp",
        description:
            "A high-energy revision camp covering critical topics before year-end exams.",
        dateTime: "📅 5 – 7 November 2025, 10AM – 5PM",
        location: "📍 NUS Business School",
        formUrl: "https://tally.so/r/novemberform"
    }
];

const WorkshopSection = () => {
    const [mainWorkshop, ...otherWorkshops] = workshops;

    return (
        <section className={`${styles.workshopSection} sectionYPadding`}>

            <div className={styles.workshopContainer}>
                {/* Main Workshop */}
                <div className={styles.container}>
                    <div className={styles.poster}>
                        <img src={mainWorkshop.image} alt={mainWorkshop.title} />
                    </div>

                    <div className={styles.info}>
                        <h2 className={`sectionTitle ${styles.title}`}>{mainWorkshop.title}</h2>
                        <p className={styles.description}>{mainWorkshop.description}</p>

                        <div className={styles.details}>
                            <p><span className={styles.icon}></span>{mainWorkshop.dateTime}</p>
                            <p><span className={styles.icon}></span>{mainWorkshop.location}</p>
                            <p className={styles.note}>*Limited vacancies! Register early to secure your spot.</p>
                        </div>

                        <Link
                            className={styles.ctaLink}
                            href={mainWorkshop.formUrl}
                            target="_blank"
                        >
                            <button className={`${styles.ctaButton} ctaButton buttonRed`}>
                                Sign Up Now
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Other Workshops */}
                <div className={styles.otherWorkshops}>
                    {otherWorkshops.map((workshop, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardPoster}>
                                <img src={workshop.image} alt={workshop.title} />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>{workshop.title}</h3>
                                <Link
                                    href={workshop.formUrl}
                                    target="_blank"
                                    className={styles.ctaLink}
                                >
                                    <button className={`${styles.ctaButton} ctaButton buttonRed`}>
                                        Sign Up Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkshopSection;
