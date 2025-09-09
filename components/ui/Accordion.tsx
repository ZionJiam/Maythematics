'use client';

import styles from './Accordion.module.scss';

interface AccordionProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

export default function Accordion({ question, answer, isOpen, onToggle }: AccordionProps) {
    return (
        <div className={styles.accordion}>
            <button
                className={`${styles.accordionButton} ${isOpen ? styles.active : ''}`}
                onClick={onToggle}
            >
                {question}
                <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                className={styles.accordionContent}
                style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
}
