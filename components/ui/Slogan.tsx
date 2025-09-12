"use client";
import styles from "./Slogan.module.scss";

interface SloganProps {
    header: string;
    text: string;
}

export default function Slogan({ header, text }: SloganProps) {
    return (
        <section className={styles.ourSpace}>
            <div className={styles.sloganContainer}>
                <h3>{header}</h3>
                <p data-aos="fade-up" className={`${styles.slogan}`}>
                    {text}
                </p>
            </div>
        </section>
    );
}
