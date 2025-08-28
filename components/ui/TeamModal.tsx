"use client";

import styles from "./TeamModal.module.scss";
import { useEffect, useState } from "react";

interface TeamModalProps {
    member: {
        name: string;
        role: string;
        imageUrl: string;
        degree: string;
        description: string;
        studentReview: string;
    };
    onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setOpen(true);
    }, []);

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
                                <h4 className={styles.role}>{member.role}</h4>
                                <p className={styles.degree}>{member.degree}</p>
                            </div>

                        </div>
                        <div className={styles.teaches}>
                            <h6>Teaches:</h6>
                            <div className={styles.teachLevel}>P1-P2</div>
                            <div className={styles.teachLevel}>P3-P4</div>
                            <div className={styles.teachLevel}>Lower Secondary</div>
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
