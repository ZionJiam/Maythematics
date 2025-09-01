"use client";
import styles from "./MainImages.module.scss";
import { motion } from "framer-motion";
import SpaceCarousel from "../ui/SpaceCarousel"

interface Section {
    title: string;
    description: string;
    imageUrl: string;
    bgColor: string;
}

const sections: Section[] = [
    {
        title: "Cozy Study Areas",
        description: "Quiet spaces for focused learning with comfortable seating and calming ambience.",
        imageUrl: "/images/banner3.jpg",
        bgColor: "red"

    },
    {
        title: "Interactive Whiteboards",
        description: "Modern tools to make learning engaging and collaborative.",
        imageUrl: "/images/banner3.jpg",
        bgColor: "yellow"

    },
    {
        title: "Relaxation Corners",
        description: "Take a break and recharge in our cozy rest areas.",
        imageUrl: "/images/banner3.jpg",
        bgColor: "blue"
    },
];


export default function MainImages() {
    return (
        <section className={styles.ourSpace}>
            <p className={`text-lg ${styles.slogan}`}>
                At our center, we believe that the right environment enhances learning.
                From cozy study corners to high-tech classrooms, our space is designed
                to help students stay focused and motivated.            </p>

            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`${styles.row} ${index % 2 === 1 ? styles.reverse : ""}`}
                >
                    <div className={`${styles.textContainer} ${styles[section.bgColor]}`}>
                        <div className={styles.textInnerContainer}>
                            <h3>{section.title}</h3>
                            <p>{section.description}</p>
                        </div>
                    </div>
                    <div className={styles.imageContainer}
                        style={{ backgroundImage: `url(${section.imageUrl})` }}

                    >
                        {/* <img src={section.imageUrl} alt={section.title} /> */}
                    </div>
                </div>
            ))}
        </section>
    );
}
