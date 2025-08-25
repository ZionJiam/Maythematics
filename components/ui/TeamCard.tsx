"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./TeamCard.module.scss";


interface TeamCardProp {

}



const SubPageHeader: React.FC<TeamCardProp> = () => {

    return (
        <div className={`${styles.teamCard}`}>
            <img src="/images/team/tyler.png" alt="Tyler" className={styles.teamImage} />
            <div className={styles.descriptionContainer}>
                <h4 className={styles.cardTitle}>Tyler</h4>
                <p>Growth Architect</p>
            </div>
        </div>
    );
};

export default SubPageHeader;
