"use client";
import styles from "./Slogan.module.scss";

interface SloganProps {
    header: string;
    text: string;
}

export default function Slogan({ header, text }: SloganProps) {
    return (
        <section className={`${styles.ourSpace} sectionYPadding`}>
            <div data-aos-offset="-200" data-aos="fade-up" className={styles.sloganContainer}>
                <h3 className="sectionTitle">{header}</h3>
                <p className={`${styles.slogan}`}>
                    {text}
                </p>
            </div>
        </section>
    );
}
