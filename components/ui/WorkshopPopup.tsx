"use client";

import { useEffect, useState } from "react";
import styles from "./WorkshopPopup.module.scss";

export default function WorkshopPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // check if popup was already shown this session
        const seen = sessionStorage.getItem("workshopPopupSeen");
        if (seen) return; // already shown, do nothing

        const img = new Image();
        img.src = "/images/workshop-promo.webp";
        img.onload = () => {
            setTimeout(() => {
                setShow(true);
                sessionStorage.setItem("workshopPopupSeen", "true");
            }, 2000); // small delay if you want
        };
    }, []);

    if (!show) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={() => setShow(false)}>
                    ✕
                </button>
                <img
                    src="/images/workshop-promo.webp"
                    alt="Monthly Workshop Poster"
                    className={styles.poster}
                />
                <div className={styles.content}>
                    <a
                        href="https://tally.so/r/your-form-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ctaButton ${styles.signupBtn} buttonRed`}
                    >
                        Sign Up Now
                    </a>
                </div>
            </div>
        </div>
    );
}
