"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsappButton.module.scss";

export default function FloatingWhatsApp() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let idleTimer: NodeJS.Timeout;

        const resetTimer = () => {
            setVisible(true); // show button on activity
            clearTimeout(idleTimer);
            idleTimer = setTimeout(() => setVisible(false), 3000); // 3s idle → hide
        };

        // Activity listeners
        window.addEventListener("scroll", resetTimer);
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);

        resetTimer(); // init

        return () => {
            window.removeEventListener("scroll", resetTimer);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
            clearTimeout(idleTimer);
        };
    }, []);

    return (
        <a
            href="https://wa.me/6589150859" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.floatingWhatsapp} ${visible ? styles.show : styles.hide}`}
        >
            <FaWhatsapp />
        </a>
    );
}
