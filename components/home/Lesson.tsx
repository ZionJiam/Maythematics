import styles from './/Lesson.module.scss';
import Link from 'next/link';


const lessons = [
    {
        title: 'Primary 3–4',
        description:
            'Foundational concepts, Paper 1 & Paper 2 mastery, heuristic problem-solving techniques, and timed practice to prepare for PSLE.',
        duration: '1.5 hours',
        classSize: '6-8',
        image: '/images/elementaryschool.jpg',
    },
    {
        title: 'Primary 5–6',
        description:
            'Foundational concepts, Paper 1 & Paper 2 mastery, heuristic problem-solving techniques, and timed practice to prepare for PSLE.',
        duration: '2 hours',
        classSize: '6-10',
        image: '/images/elementary2.jpg',
    },
    {
        title: 'Secondary Math (Sec 1–5)',
        description:
            'Algebra, Geometry, Graphs, and application-based problem-solving tailored to your child’s stream and school pace.',
        duration: '2 hours',
        classSize: '8-12',
        image: '/images/middleschool.jpg',
    },
    {
        title: 'JC Math (H1/H2)',
        description:
            'Concepts from Functions to Vectors, our JC lessons help students handle the rigor of H1/H2 Math with clarity and structure.',
        duration: '2 hours',
        classSize: '8-12',
        image: '/images/highschol.jpg',
    },
];

export default function LessonsSection() {
    return (
        <section className={styles.lessonsSection}>
            <div className={styles.lessonInnerWrapper}>
                <h2 className={`sectionTitle`}>
                    Our{" "}
                    <span className={styles.letterRainbow}>
                        <span className={`blue`}>S</span>
                        <span className={`red`}>p</span>
                        <span className={`yellow`}>e</span>
                        <span className={`teal`}>c</span>
                        <span className={`red`}>i</span>
                        <span className={`blue`}>a</span>
                        <span className={`yellow`}>l</span>
                        <span className={`teal`}>i</span>
                        <span className={`red`}>z</span>
                        <span className={`blue`}>e</span>
                        <span className={`yellow`}>d</span>
                    </span>{" "}
                    Programme
                </h2>

                <div className={styles.lessonList}>
                    {lessons.map((lesson, index) => (
                        <div className={`shadow-box ${styles.lessonCard}`} key={index}>
                            <div className={styles.imageWrapper}>
                                <img src={lesson.image} alt="" />
                            </div>
                            <div className={styles.textContentWrapper}>
                                <div className={styles.textContent}>
                                    <h3>{lesson.title}</h3>
                                    <p>{lesson.description}</p>
                                    <p><span className='bold'>Duration: </span>{lesson.duration}</p>
                                    <p><span className='bold'>Class size: </span> {lesson.classSize}</p>
                                </div>
                                <Link href="/about" className={`${styles.ctaButton} buttonYellow ctaButton`}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                    <iframe
                        src="https://www.youtube.com/embed/MBLKwxIfp1U"
                        title="YouTube video player"
                        width="560"
                        height="315"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className={styles.videoOverlay}>
                    {/* Content you want to show overlapping */}
                </div>
            </div>

        </section>
    );
}
