'use client';

import { useState } from 'react';
import styles from './WorkshopFAQ.module.scss';
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    title: string;
    content: string;
}
const data: AccordionItem[] = [
    {
        title: 'Who can attend the workshop?',
        content: 'Our workshops are open to students preparing for PSLE and other major exams.'
    },
    {
        title: 'Do I need prior knowledge to join?',
        content: 'No prior knowledge is needed. We provide worksheets and guidance suitable for all levels.'
    },
    {
        title: 'How do I register for a workshop?',
        content: 'Click on the "Sign Up" button on the top section to submit your details via our Tally form.'
    },
    {
        title: 'Are materials provided?',
        content: 'Yes, all students receive practice worksheets and reference materials during the workshop.'
    },
    {
        title: 'What is the duration of a workshop?',
        content: 'Each workshop typically lasts 3-4 hours, depending on the topic and activities planned.'
    },
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // S is open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section id="shine" className={`${styles.section} sectionYPadding`}>
            <div className={styles.titleContainer}>
                <h3 data-aos="fade-up" className={`${styles.header} sectionTitle`}>Frequently Asked Questions</h3>
            </div>

            <div className={styles.container}>

                {data.map((item, idx) => (
                    <div data-aos="fade-up" key={idx} className={styles.accordion}>
                        <button
                            className={`${styles.accordionButton} 
                  ${openIndex === idx ? styles.active : ''}
                  ${styles['color' + (idx + 1)]}
                `}
                            onClick={() => toggleAccordion(idx)}
                        >

                            <span>{item.title}</span>
                            <span
                                className={`${styles.icon} ${openIndex === idx ? styles.open : ""}`}
                            >
                                <ChevronDown size={20} />
                            </span>
                        </button>
                        <div
                            className={styles.accordionContent}
                            style={{ maxHeight: openIndex === idx ? '500px' : '0px' }}
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
