import styles from './WhyUs.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import SecondaryCtaButton from '../ui/SecondaryCTAButton';

const reasons = [
    {
        image: '/images/whyus1.webp',
        title: 'Positive, Patient, and Passionate',
        description: 'At MTM, our team goes beyond teaching to inspire confidence, spark enjoyment, and deliver real results. Because children learn best from tutors who truly care.',
        cta: 'Meet our tutors',
        href: '/our-team',
    },
    {
        image: '/images/shine_approach_small.webp',
        title: 'Our SHINE approach',
        description: 'At MTM, every child can SHINE. Our approach makes Math learning effective, enjoyable, and results-driven, helping students gain skills, confidence, and mindset to excel.',
        cta: 'Explore our approach',
        href: '#shine',
    },
    {
        image: '/images/whyus3.webp',
        title: 'At least 1 Grade Improvement in 6 months',
        description: '9 in 10 students see at least 1 grade improvement in their Math results within 6 months of joining us. For Secondary 1 students, 9 in 10 who start the year in G2 are promoted to G3 by year’s end.',
        cta: 'View our results',
        href: '/testimonials#messages',
    }
];

const WhyUsSection = () => {
    return (
        <section className={`${styles.whyUs} sectionYPadding`}>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <div data-aos="fade-up" data-aos-delay={index * 150}
                        key={index} className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <img src={reason.image} alt={reason.title} />
                        </div>
                        <h3>{reason.title}</h3>
                        <p>{reason.description}</p>
                        <div className={styles.ctaContainer}>
                            <SecondaryCtaButton text={reason.cta} href={reason.href} />

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUsSection;
