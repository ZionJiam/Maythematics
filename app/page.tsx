import GoogleReviewSection from '@/components/home/GoogleReviews';
import LessonSection from '@/components/home/NewLesson';

import CTASection from '@/components/home/CTASection';

import WhyUsSection from '@/components/home/WhyUs';
import DayInThelife from '@/components/home/DayInTheLife';

import StudentReview from '@/components/home/StudentReview';

import Banner from '../components/home/Banner';

import styles from './page.module.css';
import LessonVideo from '@/components/home/LessonVideo';
import Methodologies from '@/components/home/Methodologies';
import Programme from '@/components/home/Programme';


export default function Home() {

  return (
    <>

      <main className={`${styles.main} pageMarginTop`} >
        <Banner />
        <WhyUsSection />
        <Methodologies />
        <StudentReview />

        <GoogleReviewSection />
        <DayInThelife />
        <Programme />

        {/* <LessonSection /> */}
        {/* <LessonVideo /> */}
        <CTASection />
      </main>
    </>
  );
}