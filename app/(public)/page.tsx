import GoogleReviewSection from '@/components/home/GoogleReviews';
import CTASection from '@/components/home/CTASection';
import WhyUsSection from '@/components/home/WhyUs';
import DayInThelife from '@/components/home/DayInTheLife';
import StudentReview from '@/components/home/StudentReview';
import Banner from '@/components/home/Banner';
import Methodologies from '@/components/home/Methodologies';
import Programme from '@/components/home/Programme';
import styles from './page.module.css';
import Services from '@/components/home/Services';


export const metadata = {
  title: "Maythematics MTM | Quality Primary, Secondary and JC Math Tuition in Singapore",
  description:
    "At Maythematics, we help students excel in Math with structured worksheets, engaging lessons, and supportive tutors. Trusted by parents across Singapore.",
  alternates: {
    canonical: 'https://maythematics.com',
  },
  authors: [{ name: "Maythematics" }],
  metadataBase: new URL("https://maythematics.com"), // ensures absolute URLs

  openGraph: {
    title: "Maythematics | Quality Primary, Secondary and JC Math Tuition in Singapore",
    description: "Helping students build clarity, confidence, and results in Math.",
    url: "https://maythematics.com",
    siteName: "Maythematics",
    images: [
      {
        url: "https://maythematics.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Maythematics Logo",
      },
    ],
    locale: "en_SG",
    type: "website",
  }
};


export default function Home() {

  return (
    <>

      <main className={`${styles.main} pageMarginTop`} >
        <Banner />
        <WhyUsSection />
        <Services />

        <Methodologies />
        <StudentReview />
        <DayInThelife />
        <GoogleReviewSection />
        {/* <Programme /> */}

        {/* <LessonSection /> */}
        {/* <LessonVideo /> */}
        <CTASection />
      </main>
    </>
  );
}