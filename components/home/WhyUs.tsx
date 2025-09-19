import styles from './WhyUs.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const reasons = [
    {
        image: '/images/workshop/workshop-8P.webp',
        title: 'Positive, Patient, and Passionate Tutors',
        description: 'Our team of math tutors is approachable, relatable, and committed to making every lesson clear and enjoyable. With consistent teaching methods across the team, students always experience structured, easy-to-follow lessons. This way, learning feels seamless and effective — no matter which tutor is taking the class.',
        cta: 'MEET OUR TUTORS >',
        href: '/storyandteam#team',
    },
    {
        image: '/images/workshop/workshop-5.webp',
        title: 'Master Challenging Questions',
        description: 'We equip students with simple, effective strategies to solve even the toughest math problems. Our viral teaching videos and step-by-step methods are praised by parents, students, and even school teachers. To reinforce this, our structured worksheets feature a wide range of challenging questions that sharpen thinking and build exam-ready confidence.',
        cta: 'EXPLORE OUR APPROACH >',
        href: '/lessons',
    },
    {
        image: '/images/workshop/workshop-2.webp',
        title: 'Visible Results in Just Half a Year',
        description: '9 in 10 students see measurable progress in their Math results within 6 months of joining us. For Secondary 1 students, 9 in 10 who start the year in G2 are promoted to G3 by year’s end. With a track record like this, parents can be assured their child is on the right path to success.',
        cta: 'VIEW OUR RESULTS >',
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
                        <Link href={reason.href} className={styles.ctaButton}>
                            {reason.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUsSection;
