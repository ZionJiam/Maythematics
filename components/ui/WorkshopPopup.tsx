"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import styles from "./WorkshopPopup.module.scss";

type WorkshopPopupData = {
    image_url: string;
    link_url: string;
    buttonname: string;
    Title: string;
};

export default function WorkshopPopup() {
    const [show, setShow] = useState(false);
    const [popupData, setPopupData] = useState<WorkshopPopupData | null>(null);

    useEffect(() => {
        const fetchPopup = async () => {
            const seen = sessionStorage.getItem("workshopPopupSeen");
            if (seen) return;

            const { data, error } = await supabase
                .from("popups")
                .select("image_url, link_url, buttonname, Title")
                .eq("is_active", true)
                .single();

            // Log both error and data to see exactly what Supabase returns
            console.log("Supabase data:", data);
            console.log("Supabase error:", error);

            if (error || !data) return;

            const img = new Image();
            img.src = data.image_url;
            img.onload = () => {
                setTimeout(() => {
                    setPopupData(data);
                    setShow(true);
                    sessionStorage.setItem("workshopPopupSeen", "true");
                }, 2000);
            };
        };

        fetchPopup();
    }, []);

    if (!show || !popupData) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={() => setShow(false)}>
                    ✕
                </button>
                <img
                    src={popupData.image_url}
                    alt={popupData.Title}
                    className={styles.poster}
                />
                <div className={styles.content}>
                    <a
                        href={popupData.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ctaButton ${styles.signupBtn} buttonRed`}
                    >
                        {popupData.buttonname}
                    </a>
                </div>
            </div>
        </div>
    );
}