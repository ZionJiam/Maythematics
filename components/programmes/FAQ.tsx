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
    { title: "Do you offer trial lessons?", content: "We offer for a single paid trial lesson." },
    { title: "What if my child is very weak in Math?", content: "To be filled" },
    { title: "How do I know if online classes will be effective?", content: "To be filled" },
    { title: "How does the online class work?", content: "To be filled" },
    {
        title: "What is the rate?", content: "Our lessons are priced at an average rate of $40 / hour depending on the level. Kindly contact us for the more information."
    },
    { title: "How long is one lesson?", content: "1.5 hours for Primary 1 to 4 (inclusive of 5 minutes break) 2 hours for Primary 5 - Secondary 5(inclusive of 10 minutes break) " },
    { title: "Are there classes during Public Holiday or School Holiday?", content: "To be filled" },
    {
        title: "What if my child is unable to turn up for class?", content: "A make-up class can be arranged if possible. Alternatively, a video recording of that lesson will be sent to you for your child to catch up on his/ her own time. We apologise that we do not offer any refund for any missed lesson."
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
