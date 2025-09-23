"use client";

import Link from "next/link";
import styles from "./Services.module.scss";

const programmes = [
    { title: "Primary 1", duration: "1.5 hours", classSize: "4", image: "/images/workshop/workshop-1.webp" },
    { title: "Primary 2", duration: "1.5 hours", classSize: "4", image: "/images/workshop/workshop-1.webp" },
    { title: "Primary 3", duration: "1.5 hours", classSize: "6-8", image: "/images/workshop/workshop-10.webp" },
    { title: "Primary 4", duration: "1.5 hours", classSize: "6-8", image: "/images/workshop/workshop-10.webp" },
    { title: "Primary 5", duration: "2 hours", classSize: "6-10", image: "/images/workshop/workshop-9P.webp" },
    { title: "Primary 6", duration: "2 hours", classSize: "6-10", image: "/images/workshop/workshop-9P.webp" },
    { title: "Secondary 1", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 2", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 3", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 4", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "Secondary 5", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-11P.webp" },
    { title: "JC H1", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-12P.webp" },
    { title: "JC H2", duration: "2 hours", classSize: "8-14", image: "/images/workshop/workshop-12P.webp" },
];


export default function ProgrammesSection() {
    return (
        <section className={`${styles.programmesSection} sectionYPadding`}>
            <div className={styles.container}>
                <h2 className={` ${styles.title} sectionTitle`}>Math Tuition Programmes</h2>
                <p className={styles.description}>
                We offer Primary, Secondary, and Junior College Math Tuition to help students
                excel with confidence. Our programmes are tailored to each level, focusing on skills, understanding, and exam readiness.
                </p>
          <Link href="/programmes" className={` ${styles.button} buttonYellow ctaButton`}>
            Find out more
          </Link>
            </div>
            </section>

    );
}
