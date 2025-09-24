"use client";

import styles from "./TeamModal.module.scss";
import { useEffect, useState } from "react";
import { FaUserTie, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";


interface StudentReview {
    reviewer: string
    text: string
}

interface TeamModalProps {
    member: {
        name: string;
        role: string;
        imageUrl: string;
        degree: string;
        description: string;
        studentReviews?: StudentReview[] | null
        startYear: number; // 👈 allow null or omit entirely
        youtubeUrl?: string; // <-- new field
    };
    onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={`${styles.modalContent} ${open ? styles.open : ""}`}
                onClick={(e) => e.stopPropagation()}
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
                                    <FaUserTie size={20} className={styles.icon} /> {member.role}
                                </h4>

                                {member.degree && member.degree.trim() !== "" && (
                                    <p className={styles.degree}>
                                        <FaGraduationCap size={20} className={styles.icon} /> {member.degree}
                                    </p>
                                )}
                                {currentYear - member.startYear >= 3 && (
                                    <p className={styles.yoe}>
                                        <FaCalendarAlt size={20} className={styles.icon} />{" "}
                                        {currentYear - member.startYear} years of experience
                                    </p>
                                )}
                            </div>
                        </div>

                        <p className={styles.description}>{member.description}</p>
                        {member.studentReviews?.map((review, idx) => (
                            <blockquote key={idx}>
                                “{review.text}” — <span>{review.reviewer}</span>
                            </blockquote>
                        ))}
                        {member.youtubeUrl && (
                            <div className={styles.videoWrapper}>
                                <iframe
                                    className={styles.video}
                                    src={member.youtubeUrl}
                                    title="Teacher Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamModal;
