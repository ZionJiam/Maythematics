import styles from './WhyUs.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const reasons = [
    {
        image: '/images/banner1.webp',
        title: 'Tutors Who Truly Get Students',
        description: 'A dynamic team of tutors who make Math clear, relatable, and even enjoyable — because we’ve been in your shoes not too long ago.',
        cta: 'DISCOVER OUR TUTORS >',
        href: '/storyandteam#team',
    },
    {
        image: '/images/banner1.webp',
        title: 'Master the Heuristics ',
        description: 'We empower students to apply proven heuristics — powerful strategies that make even the toughest problem sums manageable.',
        cta: 'LEARN ABOUT OUR LESSONS >',
        href: '/lessons',
    },
    {
        image: '/images/banner1.webp',
        title: 'Visible Results in Just Half a Year',
        description: 'With the right strategies, 9 in 10 students achieve better results in 6 months or less.',
        cta: 'SEE MORE RESULTS >',
        href: '/testimonials#messages',
    }
];

const WhyUsSection = () => {
    return (
        <section className={styles.whyUs}>
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
