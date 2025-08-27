"use client";

import styles from "./TeamModal.module.scss";

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
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.modalBody}>
                    <div className={styles.imageContainer}>
                        <img src={member.imageUrl} alt={member.name} />
                    </div>
                    <div className={styles.textContainer}>
                        <h2>{member.name}</h2>
                        <h4>{member.role}</h4>
                        <p>{member.degree}</p>
                        <p>{member.description}</p>
                        <blockquote>“{member.studentReview}”</blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamModal;
