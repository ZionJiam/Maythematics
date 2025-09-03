"use client";
import styles from "./Slogan.module.scss";


export default function Slogan() {
    return (
        <section className={styles.ourSpace}>
            <p className={`text-lg ${styles.slogan}`}>
                At our center, we believe that the right environment enhances learning.
                From cozy study corners to high-tech classrooms, our space is designed
                to help students stay focused and motivated.
            </p>
        </section>
    );
}
