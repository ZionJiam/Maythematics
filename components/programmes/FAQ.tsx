'use client';

import { useState } from 'react';
import styles from './FAQ.module.scss';
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    title: string;
    content: string;
}

const data: AccordionItem[] = [
    { title: "How are your lessons different from school classes?", content: "To be filled" },
    { title: "Do you offer trial lessons?", content: "To be filled" },
    { title: "What if my child is very weak in Math?", content: "To be filled" },
    { title: "How do I know if online classes will be effective?", content: "To be filled" },
    { title: "How does the online class work?", content: "To be filled" },
    { title: "What is the rate?", content: "To be filled" },
    { title: "How long is one lesson?", content: "To be filled" },
    { title: "Are there classes during Public Holiday or School Holiday?", content: "To be filled" },
    { title: "What if my child is unable to turn up for class?", content: "To be filled" },
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
