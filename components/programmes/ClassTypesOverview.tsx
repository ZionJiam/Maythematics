"use client";

import SecondaryCtaButton from "../ui/SecondaryCTAButton";
import styles from "./ClassTypesOverview.module.scss";
import Link from "next/link";

export default function ClassTypesOverview() {
    return (
        <section className={`${styles.section} sectionYPadding`}>
            <div className={styles.container}>
                <div data-aos="fade-up" className={styles.titleContainer}>
                    <h3 className={`text-xl`}>Two Types of Classes Available</h3>
                </div>

                <div className={styles.cards}>
                    <div data-aos="fade-up" className={`${styles.card} ${styles.regular}`}>
                        <img src="/assets/blue-mascot-5.webp" alt="Regular Class Mascot" className={styles.mascot} />
                        <h4>Regular Class</h4>
                        <p className={styles.cardSubtitle}>Structured, level-based learning - Students of the same academic level learn together through a planned Maythematics curriculum.</p>
                    </div>

                    <div data-aos="fade-up" className={`${styles.card} ${styles.focus}`}>
                        <img src="/assets/yellow-mascot-table.webp" alt="Focus Class Mascot" className={styles.mascot} />
                        <h4>Focus Class</h4>
                        <p className={styles.cardSubtitle}>Personalised, self-paced support - Up to four students may work on different levels or materials with targeted tutor guidance.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className={styles.classTypesPromoContainer}>
                    <p className={styles.classTypesPromo}>
                        Wondering if a Regular or Focus Class suits your child better?
                    </p>
                    <Link href="/class-types" className={` ${styles.button} buttonYellow ctaButton`}>Click here to learn more</Link>
                </div>

            </div>
        </section>
    );
}
