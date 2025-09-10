'use client';

import styles from './WorkshopGallery.module.scss';

const workshopImages = [
    { src: "/images/workshop/workshop-8P.webp", alt: 'Workshop 1', className: 'oneByOne' },
    { src: '/images/workshop/workshop-3.webp', alt: 'Workshop 2', className: 'twoByOne' },
    { src: "/images/workshop/workshop-2.webp", alt: 'Workshop 3', className: 'twoByOne' },
    { src: '/images/workshop/workshop-9P.webp', alt: 'Workshop 5', className: 'oneByOne' },
    { src: '/images/workshop/workshop-11P.webp', alt: 'Workshop 5', className: 'oneByOne' },
    { src: "/images/workshop/workshop-1.webp", alt: 'Workshop 4', className: 'twoByOne' },
    { src: '/images/workshop/workshop-10.webp', alt: 'Workshop 7', className: 'twoByOne' },
    { src: '/images/workshop/workshop-12P.webp', alt: 'Workshop 6', className: 'oneByOne' },

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