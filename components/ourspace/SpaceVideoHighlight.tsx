import styles from './SpaceVideoHighlight.module.scss';
import Link from 'next/link';
import SlideUpImage from '../ui/SlideUpImage';



export default function SpaceVideoHighlights() {
    return (
        <section className={styles.videoSection}>
            <div className={styles.videoContainer}>
                <div className={styles.videoWrapper} data-aos="fade-in">
                    <iframe
                        className={styles.video}
                        src="https://www.youtube.com/embed/MBLKwxIfp1U"
                        title="YouTube video player"
                        width="560"
                        height="315"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className={styles.videoOverlay}>

            </div>
        </section>
    );
}
