'use client';

import { useState } from 'react';
import styles from './DualLayer.module.scss';
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    letter: string;
    title: string;
    content: string;
}

const data: AccordionItem[] = [
    { letter: 'S', title: 'Supportive Environment', content: 'Our teachers are equipped with modern teaching tools that let them annotate in real time, highlight key parts of the question in different colours, and use laser pointers to circle or underline important details. This ensures students can see clearly what is being explained and understand exactly what the question is asking.' },
    { letter: 'H', title: 'Hone Hard Questions', content: 'Our structured worksheets build the skills to handle challenging, higher-order questions. By asking probing questions, teachers guide thinking instead of spoon-feeding, helping students learn how to spot the right methods for every problem.' },
    { letter: 'I', title: 'Individualized Learning', content: 'We personalise quizzes to target each student’s learning gaps, because we know structured worksheets alone aren’t enough. Parents can send us questions their child is weak in, or students can simply tell us directly — and our teachers will dig out or even create the right quiz for them. With over 500 customised quizzes (and counting!) in our system, every student gets the focused practice they need to improve.' },
    { letter: 'N', title: 'Nurturing Results', content: 'We believe learning goes beyond the classroom. With lesson replays and colourful summary sheets, our students feel supported even after class. On top of that, they enjoy WhatsApp Maythematics Teachers support, where they can ask questions anytime outside lesson hours. Our teachers respond with detailed step-by-step solutions or even record personalised video explanations — ensuring no student is ever left stuck.' },
    { letter: 'E', title: 'Engaging Methods', content: 'We regularly update our worksheets with commonly tested exam questions and provide extra practice through mock Weighted Assessment papers and our extensive database of past-year exam papers — all with carefully vetted, full worked solutions. This consistent exposure ensures students are not only ready for familiar question types, but also confident in tackling unexpected challenges in the exam hall.' },
];

export default function ShineSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // S is open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section id="shine" className={`${styles.section} sectionYPadding`}>
            <div data-aos="fade-up" className={styles.titleContainer}>
                <h4 className={styles.sectionTitle}>A unique balance of structure and personalisation</h4>
                <h3 className={`${styles.header} sectionTitle`}>Dual-Layered Support</h3>
            </div>

            <div className={styles.container}>

                <div className={`${styles.lessonContainer}`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/programmes/structured_question.webp"
                            alt="Structured Worksheet Image"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                            <p data-aos="fade-up" className={styles.quote}>For Primary and Secondary</p>

                            <h2 data-aos="fade-up" className="text-xl">
                                Structured Worksheets
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >

                                <p className={styles.description}>
                                    Arranged by difficulty and aligned closely with MOE requirements, these worksheets give students the breadth of practice needed to tackle commonly-tested exam questions with confidence.                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.lessonContainer}`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/programmes/personalised_quiz.webp"
                            alt="Personalised Quiz Image"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                            <p data-aos="fade-up" className={styles.quote}>Primary only</p>

                            <h2 data-aos="fade-up" className="text-xl">
                                Personalised Quizzes
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >

                                <p className={styles.description}>
                                    Crafted by our tutors to target each child’s weak spots. Whether parents or students flag a tricky topic, our team curates or creates quizzes to close the gap. With over 500 custom quizzes in our system, no child is restricted by a one-size-fits-all approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
