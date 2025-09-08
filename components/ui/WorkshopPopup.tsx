"use client";

import { useEffect, useState } from "react";
import styles from "./WorkshopPopup.module.scss";

export default function WorkshopPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // prevent showing multiple times per session
        const seen = sessionStorage.getItem("workshopPopupSeen");
        if (seen) return;

        // preload the image
        const img = new Image();
        img.src = "/images/workshop-promo.webp";
        img.onload = () => {
            setTimeout(() => {
                setShow(true);
                sessionStorage.setItem("workshopPopupSeen", "true");
            }, 2500); // wait 2.5s after image loads
        };
    }, []);

    if (!show) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup} data-aos="zoom-in">
                <button className={styles.closeBtn} onClick={() => setShow(false)}>
                    ✕
                </button>
                <img
                    src="/images/workshop-promo.webp"
                    alt="Monthly Workshop Promo"
                    loading="lazy"
                />
                <div className={styles.content}>
                    <h2>Join Our Monthly Workshop!</h2>
                    <p>
                        Gain valuable strategies and practice for the upcoming exams. Seats
                        are limited — sign up today!
                    </p>
                    <a
                        href="https://tally.so/r/your-form-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.signupBtn}
                    >
                        Sign Up Now
                    </a>
                </div>
            </div>
        </div>
    );
}
