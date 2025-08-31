"use client";
import styles from "./SideImages.module.scss";
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


export default function SideImages() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageRow}>
                    <div className={styles.imageWrapper}>
                        <img src="/images/space/test.png" alt="Image 1" />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src="/images/space/test.png" alt="Image 1" />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src="/images/space/test.png" alt="Image 1" />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src="/images/space/test.png" alt="Image 1" />
                    </div>
                </div>
            </div>
        </section>
    );
}
