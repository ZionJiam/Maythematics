// pages/testimonials.tsx
import StudentReview from "@/components/testimonials/StudentReview";
import WhatsappWall from "@/components/testimonials/WhatsappWall";
import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from "./page.module.css";

export default function TestimonialsPage() {
    return (
        <main className={styles.testimonialsPage}>
            <SubPageHeader color="red" header="Our Space" />
            <StudentReview />
            <WhatsappWall />
        </main>
    );
}
