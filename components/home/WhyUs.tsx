import styles from './WhyUs.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import SecondaryCtaButton from '../ui/SecondaryCTAButton';

const reasons = [
    {
        image: '/images/workshop/workshop-8P.webp',
        title: 'Positive, patient, and passionate',
        description: 'Our team of math tutors is approachable, relatable, and committed to making every lesson clear and enjoyable. With consistent teaching methods across the team, students always experience structured, easy-to-follow lessons.',
        cta: 'Meet our tutors',
        href: '/story-and-team"?#team',
    },
    {
        image: '/images/workshop/workshop-5.webp',
        title: 'Master challenging questions',
        description: 'We equip students with simple, effective strategies to solve even the toughest math problems. Our viral teaching videos, step-by-step methods, and structured worksheets are praised by parents, students, and even school teachers.',
        cta: 'Explore our approach',
        href: '/programmes#shine',
    },
    {
        image: '/images/workshop/workshop-2.webp',
        title: 'Visible improvement in just half a year',
        description: '9 in 10 students see measurable progress in their Math results within 6 months of joining us. For Secondary 1 students, 9 in 10 who start the year in G2 are promoted to G3 by year’s end.',
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
