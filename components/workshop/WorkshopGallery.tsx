'use client';

import styles from './WorkshopGallery.module.scss';

const workshopImages = [
    { src: "/images/workshop-promo.webp", alt: 'Workshop 1', className: 'oneByOne' },
    { src: '/images/banner1.webp', alt: 'Workshop 2', className: 'twoByOne' },
    { src: "/images/workshop-promo.webp", alt: 'Workshop 3', className: 'twoByOne' },
    { src: '/images/banner1.webp', alt: 'Workshop 4', className: 'oneByOne' },
    { src: '/images/workshop-promo.webp', alt: 'Workshop 10', className: 'oneByOne' },
    { src: '/images/workshop-promo.webp', alt: 'Workshop 5', className: 'twoByOne' },
];

export default function WorkshopGallery() {
    return (
        <section className={styles.gallerySection}>
            <h2 className="sectionTitle">Past Workshop</h2>
            <div className={styles.galleryGrid}>
                {workshopImages.map((img, idx) => (
                    <div key={idx} className={`${styles.gridItem} ${styles[img.className]}`}>
                        <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}