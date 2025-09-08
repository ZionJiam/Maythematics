'use client';

import styles from './WorkshopGallery.module.scss';

const workshopImages = [
    { src: '/images/banner1.webp', alt: 'Workshop 1', type: 'landscape' },
    { src: '/images/banner1.webp', alt: 'Workshop 2', type: 'landscape' },
    { src: "/images/workshop-promo.webp", alt: 'Workshop 3', type: 'portrait' },
    { src: '/images/banner1.webp', alt: 'Workshop 4', type: 'landscape' },
    { src: '/images/workshop-promo.webp', alt: 'Workshop 5', type: 'portrait' },
    { src: '/images/banner1.webp', alt: 'Workshop 6', type: 'landscape' },
    { src: '/images/workshop-promo.webp', alt: 'Workshop 7', type: 'portrait' },
    { src: '/images/banner1.webp', alt: 'Workshop 8', type: 'landscape' },
    { src: '/images/banner1.webp', alt: 'Workshop 9', type: 'landscape' },
    { src: '/images/workshop-promo.webp', alt: 'Workshop 10', type: 'portrait' },
    { src: '/images/workshop-promo.webp', alt: 'Workshop 10', type: 'portrait' },

];

export default function WorkshopGallery() {
    return (
        <section className={styles.gallerySection}>
            <h2 className="sectionTitle">Workshop Gallery</h2>
            {/* <div className={styles.galleryGrid}>
                {workshopImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`${styles.gridItem} ${img.type === 'portrait' ? styles.portrait : styles.landscape}`}
                    >
                        <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
