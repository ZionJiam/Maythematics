"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsappButton.module.scss";
import { generalClassWhatsApp } from '@/app/(public)/data/WhatsAppData';
import { trackCTA } from '@/lib/gtag'


const whatsappLink = `https://wa.me/${generalClassWhatsApp.number}?text=${encodeURIComponent(generalClassWhatsApp.message)}`;

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
            href={whatsappLink} // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.floatingWhatsapp} ${visible ? styles.show : styles.hide}`}
            onClick={() => trackCTA('Floating WhatsApp')}
        >
            <FaWhatsapp />
        </a>
    );
}
