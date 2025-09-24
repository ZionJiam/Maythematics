'use client';

import { useState } from 'react';
import styles from './FAQ.module.scss';
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    title: string;
    content: string;
}

const data: AccordionItem[] = [
    { title: "Does Maythematics Provide Physical and Online Math Tuitions?", content: "Yes. Students can choose between physical and online math tuitions." },
    { title: "Are Online Math Tuitions effective?", content: "Online Math tuitions are effective if students pay attention, actively engage during lessons, and proactively submit their work for our teachers to check and mark." },
    {
        title: "When does your academic schedule start?", content: `We start the following year’s syllabus starting 1st November every year. For instance if your child is in Primary 4 in 2025, we will start Primary 5 syllabus on first week of November.

Feel free to <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer">contact us</a> for more details regarding the list of topics throughout the academic year.
    ` },



    { title: "Where	are	the	physical lessons conducted?", content: "Kembangan Court #01-13 and #01-02\n5 Jln Masjid, Singapore 418924 \n(Right opposite Kembangan MRT)" },
    {
        title: "How	much are the lessons?", content: "Our lessons are priced at an average rate of $40/hour depending on the level.\nKindly contact us for more information."
    },
    { title: "Do you offer trial lesson?", content: "We offer for a single paid trial lesson" },
    { title: "How can I pay?", content: "We	accept payment through PayNow via our UEN 202239371C" },
    {
        title: "What If my child is unavailable to come for class?", content: "A video recording of the lesson will be uploaded to our portal after 3 days for your child to review at their own pace. We also understand that not every child learns best from recordings. That’s why we offer discretionary replacement classes — subject to availability of class slots and suitability of the content covered. \n\nPlease note that we are unable to provide refunds for missed lessons."
    },

    {
        title: "How do I arrange for a replacement class?", content: `All make-up lessons are arranged via our Whatsapp Customer Support Hotline <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer">+65 8915 0859</a>`
    },
    {
        title: "When are there no classes?", content: `We are closed on all Public Holidays and also the last 2 weeks of December from 16th December to 1st January.
\nRegular classes will continue as usual during School Holidays.
\nFor the latest list of Public Holidays, please refer to the Ministry of Manpower <a href="https://www.mom.gov.sg/employment-practices/public-holidays" target="_blank" rel="noopener noreferrer">website.</a>`
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
                <h3 data-aos="fade-up" className={`text-xl`}>Frequently Asked Questions</h3>
            </div>

            <div data-aos="fade-up" className={styles.container}>

                {data.map((item, idx) => (
                    <div key={idx} className={styles.accordion}>
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
                            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
