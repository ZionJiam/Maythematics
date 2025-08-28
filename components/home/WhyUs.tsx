import styles from './WhyUs.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const reasons = [
    {
        image: '/images/banner1.jpg',
        title: 'Experienced Tutors Who Care',
        description: 'Our dedicated team brings years of classroom and tutoring experience — plus the patience and strategies that make learning click.',
        cta: 'DISCOVER OUR TUTORS >',
        href: '/about#team',
    },
    {
        image: '/images/banner2.jpg',
        title: 'Mastery of Paper 2 Problem Sums',
        description: 'We place strong emphasis on Paper 2 questions, giving students the tools and techniques to tackle complex problem sums with confidence.',
        cta: 'LEARN ABOUT OUR LESSONS >',
        href: '/lessons',
    },
    {
        image: '/images/banner3.jpg',
        title: 'Proven Results in Just 6 Months',
        description: '9 in 10 students show measurable improvement within half a year — often with higher grades and renewed confidence in math.',
        cta: 'SEE MORE RESULTS >',
        href: '/results',
    }
];

const WhyUsSection = () => {
    return (
        <section className={styles.whyUs}>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <div key={index} className={styles.item}>
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
