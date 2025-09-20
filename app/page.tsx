import GoogleReviewSection from '@/components/home/GoogleReviews';
import CTASection from '@/components/home/CTASection';
import WhyUsSection from '@/components/home/WhyUs';
import DayInThelife from '@/components/home/DayInTheLife';
import StudentReview from '@/components/home/StudentReview';
import Banner from '../components/home/Banner';
import Methodologies from '@/components/home/Methodologies';
import Programme from '@/components/home/Programme';
import styles from './page.module.css';



export default function Home() {

  return (
    <>

      <main className={`${styles.main} pageMarginTop`} >
        <Banner />
        <WhyUsSection />
        <Methodologies />
        <StudentReview />
        <DayInThelife />

        <GoogleReviewSection />
        <Programme />

        {/* <LessonSection /> */}
        {/* <LessonVideo /> */}
        <CTASection />
      </main>
    </>
  );
}