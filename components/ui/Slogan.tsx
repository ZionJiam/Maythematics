"use client";
import styles from "./Slogan.module.scss";

interface SloganProps {
    text: string;
}

export default function Slogan({ text }: SloganProps) {
    return (
        <section className={styles.ourSpace}>
            <p className={`text-lg ${styles.slogan}`}>
                {text}
            </p>
        </section>
    );
}
