// pages/testimonials.tsx
import StudentReview from "@/components/testimonials/StudentReview";
import WhatsappWall from "@/components/testimonials/WhatsappWall";
import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from "./page.module.css";
import Slogan from "@/components/ui/Slogan";
import ResultsMasonry from "@/components/testimonials/ResultMasonry";
import CTASection from "@/components/testimonials/CTASection";

export const metadata = {
    title: "Testimonials | Maythematics (MTM)",
    description:
        "Hear from our students and parents about the impact of teaching at Maythematics MTM. Discover real success stories and heartfelt testimonials that show how our tutors inspire confidence in Math.",
};


export default function TestimonialsPage() {
    return (
        <main className={`${styles.main} pageMarginTop`} >
            <SubPageHeader color="red" header="Testimonials" />
            <StudentReview />
            <ResultsMasonry />
            <WhatsappWall />
            <CTASection />
        </main>
    );
}
