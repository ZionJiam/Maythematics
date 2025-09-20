"use client";

import styles from "./TeamModal.module.scss";
import { useEffect, useState } from "react";
import { FaUserTie, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

interface TeamModalProps {
    member: {
        name: string;
        role: string;
        imageUrl: string;
        degree: string;
        description: string;
        studentReview: string;
        startYear: number;
    };
    onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setOpen(true);
    }, []);

    const currentYear = new Date().getFullYear();


    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={`${styles.modalContent} ${open ? styles.open : ""}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.modalBody}>
                    <div className={styles.imageContainer}>
                        <img src={member.imageUrl} alt={member.name} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.mainteamInfoWrapper}>
                            <div className={styles.teamImageWrapper}>
                                <img src={member.imageUrl} alt={member.name} />
                            </div>
                            <div className={styles.mainInfo}>
                                <h2 className={styles.name}>{member.name}</h2>
                                <h4 className={styles.role}>
                                    <FaUserTie className={styles.icon} /> {member.role}
                                </h4>

                                <p className={styles.degree}>
                                    <FaGraduationCap className={styles.icon} /> {member.degree}
                                </p>

                                {currentYear - member.startYear >= 3 && (
                                    <p className={styles.yoe}>
                                        <FaCalendarAlt className={styles.icon} />{" "}
                                        {currentYear - member.startYear} years of experience
                                    </p>
                                )}
                            </div>

                        </div>

                        <p className={styles.description}>{member.description}</p>
                        <blockquote>“{member.studentReview}”</blockquote>
                        <blockquote>“{member.studentReview}”</blockquote>

                        <blockquote>“{member.studentReview}”</blockquote>

                        <blockquote>“{member.studentReview}”</blockquote>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamModal;
