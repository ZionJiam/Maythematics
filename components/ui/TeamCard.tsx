"use client";

import { useState } from "react";
import styles from "./TeamCard.module.scss";

type StudentReview = {
    reviewer: string;
    text: string;
};

interface TeamCardProp {
    name: string;
    role: string;
    imageUrl: string;
    imageUrlHover: string;
    degree: string;
    description: string;
    studentReviews?: StudentReview[] | null;// 👈 allow null or omit entirely
    onClick: () => void;
}

const TeamCard: React.FC<TeamCardProp> = ({
    name,
    role,
    imageUrl,
    imageUrlHover,
    degree,
    description,
    studentReviews,
    onClick,
    ...rest
}) => {
    const [currentImage, setCurrentImage] = useState(imageUrl);

    return (
        <div className={styles.teamCard} onClick={onClick} {...rest}>
            <div
                className={styles.teamCardWrapper}
                onMouseEnter={() => setCurrentImage(imageUrlHover)}
                onMouseLeave={() => setCurrentImage(imageUrl)}
            >
                {/* Replaced backgroundImage with <img> */}
                <img
                    src={currentImage}
                    alt={`${name} - ${role}`}
                    className={styles.teamImage}
                    loading="lazy"
                />

                <div className={styles.descriptionContainer}>
                    <h4 className={styles.cardTitle}>{name}</h4>
                    <p className={styles.cardSubTitle}>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
