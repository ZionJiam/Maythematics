import GoogleReviewSection from '@/components/home/GoogleReviews';
import LessonSection from '@/components/home/NewLesson';

import CTASection from '@/components/home/CTASection';

import WhyUsSection from '@/components/home/WhyUs';
import StudentReview from '@/components/home/StudentReview';

import Banner from '../components/home/Banner';

import styles from './page.module.css';
import LessonVideo from '@/components/home/LessonVideo';


export default function Home() {

  return (
    <>

      <main className={styles.main}>
        <Banner />
        <WhyUsSection />
        <StudentReview />
        <GoogleReviewSection />
        <LessonSection />
        <LessonVideo />
        <CTASection />
      </main>
    </>
  );
}