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
}



const TeamCard: React.FC<TeamCardProp> = ({
    name,
    role,
    imageUrl,
    imageUrlHover,
    degree,
    description,
    studentReview,
}) => {

    const [bgImage, setBgImage] = useState(imageUrl);

    return (

        <div className={styles.teamCard}>
            <div className={styles.teamCardBorder}></div>
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
        // <div className={`${styles.teamCard}`}>
        //     <div className={styles.teamCardBorder}></div>

        //     {/* <img src="/assets/elements/design-element-3.png" alt="Card Design Element" className={styles.cardDesignElement} /> */}
        //     <div className={`${styles.teamCardWrapper}`}>
        //         <div className={styles.descriptionContainer}>
        //             <h4 className={styles.cardTitle}>Tyler</h4>
        //             <p className={styles.cardSubTitle}>Math Teacher (Primary 3-5)</p>
        //             {/* <div className={styles.subDescriptionContainer}>
        //                 <p>Growth Architect</p>
        //                 <p>Double Degree</p>
        //                 <p>Math Teacher</p>
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
    );
};

export default TeamCard;
