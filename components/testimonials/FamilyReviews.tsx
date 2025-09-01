// components/testimonials/FamilyReviews.tsx
import styles from "./FamilyReviews.module.scss";

const reviews = [
    { family: "Wong Family", quote: "Teacher May helped my daughter excel!" },
    { family: "Tan Family", quote: "We saw amazing progress in 3 months!" },
];

export default function FamilyReviews() {
    return (
        <section className={styles.familyReviews}>
            <h2>What Families Say</h2>
            <div className={styles.quotes}>
                {reviews.map((r, i) => (
                    <blockquote key={i} className={styles.quote}>
                        <p>{r.quote}</p>
                        <cite>— {r.family}</cite>
                    </blockquote>
                ))}
            </div>
        </section>
    );
}
