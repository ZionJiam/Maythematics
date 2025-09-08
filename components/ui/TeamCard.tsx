"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./TeamCard.module.scss";


interface TeamCardProp {
    name: string;
    role: string;
    imageUrl: string;
    imageUrlHover: string;
    degree: string;
    description: string;
    studentReview: string;
    onClick: () => void;

}



const TeamCard: React.FC<TeamCardProp> = ({
    name,
    role,
    imageUrl,
    imageUrlHover,
    degree,
    description,
    studentReview,
    onClick,
    ...rest
}) => {

    const [bgImage, setBgImage] = useState(imageUrl);

    return (

        <div
            className={styles.teamCard}
            onClick={onClick}
            {...rest}
        >

            <div
                className={styles.teamCardWrapper}
                style={{ backgroundImage: `url(${bgImage})` }}
                onMouseEnter={() => setBgImage(imageUrlHover)}
                onMouseLeave={() => setBgImage(imageUrl)}
            >

                <div className={styles.descriptionContainer}>
                    <h4 className={styles.cardTitle}>{name}</h4>
                    <p className={styles.cardSubTitle}>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
