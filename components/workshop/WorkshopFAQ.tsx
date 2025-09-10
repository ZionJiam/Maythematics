'use client';

import { useState } from 'react';
import styles from './WorkshopFAQ.module.scss';
import Accordion from '../ui/Accordion';

const faqs = [
    {
        question: 'Who can attend the workshop?',
        answer: 'Our workshops are open to students preparing for PSLE and other major exams.'
    },
    {
        question: 'Do I need prior knowledge to join?',
        answer: 'No prior knowledge is needed. We provide worksheets and guidance suitable for all levels.'
    },
    {
        question: 'How do I register for a workshop?',
        answer: 'Click on the "Sign Up" button on the top section to submit your details via our Tally form.'
    },
    {
        question: 'Are materials provided?',
        answer: 'Yes, all students receive practice worksheets and reference materials during the workshop.'
    },
    {
        question: 'What is the duration of a workshop?',
        answer: 'Each workshop typically lasts 3-4 hours, depending on the topic and activities planned.'
    },
];

export default function WorkshopFAQ() {
    // Initialize with first FAQ open
    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleToggle = (index: number) => {
        // Only allow switching to another FAQ; cannot close all
        setOpenIndex(index);
    };

    return (
        <section className={styles.faqSection}>
            <h2 className="sectionTitle">Workshop Enquiries</h2>
            <div className={styles.accordionWrapper}>
                {faqs.map((faq, idx) => (
                    <Accordion
                        key={idx}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === idx}
                        onToggle={() => handleToggle(idx)}
                    />
                ))}
            </div>
        </section>
    );
}
