"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./SubpageHeader.module.scss";


interface SubPageHeaderProp {
    color: string;
    header: string;
}



const SubPageHeader: React.FC<SubPageHeaderProp> = ({ color, header }) => {

    return (
        <section className={`${styles[color]} ${styles.headerContainer}`}>
            <div className={styles.headerWrapper}>
                <h2 className={`${styles.sectionTitle} sectionTitle white-text-outline`}>{header}</h2>
            </div>
            <img src="/images/subpage-header-wave.png" alt="subpageWave" className={styles.subpageWave} />
        </section>
    );
};

export default SubPageHeader;
