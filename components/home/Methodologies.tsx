'use client';

import { useState } from 'react';
import styles from './Methodologies.module.scss';

interface AccordionItem {
    letter: string;
    title: string;
    content: string;
}

const data: AccordionItem[] = [
    { letter: 'S', title: 'See Step-by-Step', content: 'Our teachers are equipped with modern teaching tools that let them annotate in real time, highlight key parts of the question in different colours, and use laser pointers to circle or underline important details. This ensures students can see clearly what is being explained and understand exactly what the question is asking.' },
    { letter: 'H', title: 'Hone Heuristics & Hard Questions', content: 'Our structured worksheets build the skills to handle challenging, higher-order questions. By asking probing questions, teachers guide thinking instead of spoon-feeding, helping students learn how to spot the right methods for every problem.' },
    { letter: 'I', title: 'Individualise', content: 'We personalise quizzes to target each student’s learning gaps, because we know structured worksheets alone aren’t enough. Parents can send us questions their child is weak in, or students can simply tell us directly — and our teachers will dig out or even create the right quiz for them. With over 500 customised quizzes (and counting!) in our system, every student gets the focused practice they need to improve.' },
    { letter: 'N', title: 'Nurture', content: 'We believe learning goes beyond the classroom. With lesson replays and colourful summary sheets, our students feel supported even after class. On top of that, they enjoy WhatsApp Maythematics Teachers support, where they can ask questions anytime outside lesson hours. Our teachers respond with detailed step-by-step solutions or even record personalised video explanations — ensuring no student is ever left stuck.' },
    { letter: 'E', title: 'Exposure', content: 'We regularly update our worksheets with commonly tested exam questions and provide extra practice through mock Weighted Assessment papers and our extensive database of past-year exam papers — all with carefully vetted, full worked solutions. This consistent exposure ensures students are not only ready for familiar question types, but also confident in tackling unexpected challenges in the exam hall.' },
];

export default function ShineSection() {
    const [openStates, setOpenStates] = useState(
        data.map((item, idx) => idx === 0) // S is open by default
    );

    const toggleAccordion = (index: number) => {
        setOpenStates(prev =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column */}
                <div className={styles.left}>
                    <h4 className={styles.sectionTitle}>Our Methodologies</h4>
                    <h3 className={`${styles.header} sectionTitle`}>How we help<br /> students SHINE</h3>
                    <p className={styles.subheader}>
                        Our approach empowers students to develop confidence and master PSLE Math through supportive, personalized strategies.
                    </p>
                </div>

                {/* Right Column */}
                <div className={styles.right}>
                    {data.map((item, idx) => (
                        <div data-aos="fade-up" key={item.letter} className={styles.accordion}>
                            <button
                                className={`${styles.accordionButton} 
                                ${openStates[idx] ? styles.active : ''}
                                    ${styles['color' + ((idx % 3) + 1)]} 

                                `}
                                onClick={() => toggleAccordion(idx)}
                            >
                                <span className={styles.letterContainer}>
                                    <div className={styles.letter}>
                                        {item.letter}
                                    </div>
                                </span>
                                <span>{item.title}</span>
                                <span className={styles.icon}>{openStates[idx] ? '-' : '+'}</span>
                            </button>
                            <div
                                className={styles.accordionContent}
                                style={{ maxHeight: openStates[idx] ? '500px' : '0px' }}
                            >
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
