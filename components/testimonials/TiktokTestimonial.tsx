// components/testimonials/TiktokTestimonial.tsx
import styles from "./TiktokTestimonial.module.scss";

export default function TiktokTestimonial() {
    return (
        <section className={styles.tiktokTestimonial}>
            <h2>Hear It from Our Students</h2>
            <div className={styles.videoWrapper}>
                <iframe
                    src="https://www.tiktok.com/embed/example"
                    title="Student Testimonial"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                ></iframe>
            </div>
        </section>
    );
}
