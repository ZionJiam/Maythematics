'use client';

import { useState } from 'react';
import styles from './Methodologies.module.scss';
import { ChevronDown } from "lucide-react";
import Slogan from '../ui/Slogan';

interface AccordionItem {
    letter: string;
    title: string;
    content: string;
}

const data: AccordionItem[] = [
    { letter: 'S', title: 'Supportive Environment', content: `We believe students learn best when they feel safe, understood, and encouraged. Our tutors are patient, approachable, and always ready to lend a listening ear.\n\nOur space is purposefully designed with soft pastel tones to create a vibrant, welcoming environment that makes students want to learn.` },
    { letter: 'H', title: 'Hone Hard Questions', content: 'We equip students with simple, step-by-step strategies that turn even the toughest math problems into manageable challenges.\n\nOur carefully structured worksheets expose students to a wide range of higher-order questions, helping them build confidence and achieve true mastery.\n\nOur teachers are trained to guide with probing questions instead of spoon-feeding, helping students learn how to spot the right methods and solve effectively for every problem.' },
    { letter: 'I', title: 'Individualized Learning', content: 'Every student is unique. That’s why we adapt our methods to suit different learning paces and styles.\n\nWe also personalise quizzes to target students’ learning gaps on top of structured worksheets. We believe in working alongside with parent or student hand in hand where the other party can send us questions their child or he or she is weak in, then our teachers will retrieve or recreate a new quiz for them.\n\nWith more than 500 customised quizzes (and counting) in our system, every student gets the focused practice they need to improve.' },
    { letter: 'N', title: 'Nurturing Results', content: 'We celebrate small wins and guide students step-by-step towards bigger breakthroughs by rewarding them with our card and reward system.\n\nWe believe learning goes beyond the classroom. With lesson replays in our portal and colourful summary sheets for different levels, we continue nurturing results beyond the classroom, ensuring our students always feel supported.\n\nOutside of class, our students also enjoy Maythematics Whatsapp Teachers Support Hotline where they can ask questions anytime outside lesson hours. Our teachers will respond with detailed step-by-step solutions or even record personalised video explanations — ensuring no student is ever left stuck.' },
    { letter: 'E', title: 'Engaging Methods', content: 'We make Math clear, relatable, and enjoyable through step-by-step explanations, real-life examples, and interactive teaching. Instead of rote memorisation or repetitive drilling, our lessons keep students actively engaged so they experience the joy of truly understanding concepts.\n\nOur teachers are also equipped with modern teaching tools that bring learning to life — from real-time annotations and colour-coded highlights to laser pointers that emphasise key parts of each question. These visual aids ensure that students not only hear the explanation but also see exactly how each solution unfolds, making learning both impactful and memorable' },];

export default function ShineSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // S is open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section id="shine" className={`${styles.section} sectionYPadding`}>

            <div data-aos="fade-up" className={styles.titleContainer}>
                <h3 className={`${styles.title} text-xl`}>How We Help <br />Students SHINE</h3>
            </div>

            <div className={styles.container}>
                {/* Left Column */}
                <div className={styles.left}>
                    <img
                        data-aos="fade-in"
                        className={styles.image}
                        src="/images/shine_approach.webp"
                        alt="Shine Approach illustration"
                    />
                </div>

                {/* Right Column */}
                <div className={styles.right}>
                    {data.map((item, idx) => (
                        <div data-aos="fade-up" key={item.letter} className={styles.accordion}>
                            <button
                                className={`${styles.accordionButton} 
                  ${openIndex === idx ? styles.active : ''}
                  ${styles['color' + (idx + 1)]}
                `}
                                onClick={() => toggleAccordion(idx)}
                            >
                                <span className={styles.letterContainer}>
                                    <div className={styles.letter}>{item.letter}</div>
                                </span>
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
            </div>
        </section>
    );
}
