// pages/testimonials.tsx
import FamilyReviews from "@/components/testimonials/FamilyReviews";
import WhatsappWall from "@/components/testimonials/WhatsappWall";
import TiktokTestimonial from "@/components/testimonials/TiktokTestimonial";
import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from "./page.module.css";

export default function TestimonialsPage() {
    return (
        <main className={styles.testimonialsPage}>
            <SubPageHeader color="red" header="Our Space" />
            <FamilyReviews />
            <WhatsappWall />
            <TiktokTestimonial />
        </main>
    );
}
