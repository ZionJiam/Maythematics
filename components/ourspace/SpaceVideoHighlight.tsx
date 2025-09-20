import styles from './SpaceVideoHighlight.module.scss';
import Link from 'next/link';
import SlideUpImage from '../ui/SlideUpImage';



export default function SpaceVideoHighlights() {
    return (
        <section className={`${styles.videoSection}`}>
            <div className={styles.videoWrapper}>

                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/eZazHiKX2n8?si=mZVGCY6F1ZGgsa0F"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                {/* <div className={styles.videoWrapper} data-aos="fade-in">

                </div> */}
            </div>
            <div className={styles.videoOverlay}>

            </div>
        </section>
    );
}
