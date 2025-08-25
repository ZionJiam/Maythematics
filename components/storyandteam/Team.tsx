"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./Team.module.scss";
import TeamCard from "@/components/ui/TeamCard";




const Team = () => {

    return (
        <section className={styles.teamSection}>

            <div className={styles.teamContainer}>
                <h2 className={`${styles.sectionTitle} sectionTitle white-text-outline`}>Meet Our Team</h2>

                <TeamCard />



            </div>
        </section >
    );
};

export default Team;
