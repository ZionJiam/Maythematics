import styles from './LessonVideo.module.scss';
import Link from 'next/link';
import SlideUpImage from '../ui/SlideUpImage';
import Programme from './Programme';



export default function SpaceVideoHighlights() {
    return (
        <section className={styles.videoSection}>
            <div className={styles.videoContainer}>
                <Programme />
            </div>
            <div className={styles.videoOverlay}>

            </div>
        </section>
    );
}
