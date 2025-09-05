// pages/testimonials.tsx
import StudentReview from "@/components/testimonials/StudentReview";
import WhatsappWall from "@/components/testimonials/WhatsappWall";
import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from "./page.module.css";
import Slogan from "@/components/ui/Slogan";

export default function TestimonialsPage() {
    return (
        <main className={styles.main}>
            <SubPageHeader color="red" header="Testimonials" />
            <StudentReview />
            <WhatsappWall />
        </main>
    );
}
