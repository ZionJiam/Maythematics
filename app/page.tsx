import GoogleReviewSection from '@/components/home/GoogleReviews';
import LessonSection from '@/components/home/NewLesson';

import CTASection from '@/components/home/CTASection';

import WhyUsSection from '@/components/home/WhyUs';
import TestimonialSection from '@/components/home/Testimonial';
import StudentReview from '@/components/home/StudentReview';

import Banner from '../components/home/Banner';

import styles from './page.module.css';


export default function Home() {

  return (
    <main className={styles.main}>
      <Banner />
      <WhyUsSection />
      <StudentReview />
      <GoogleReviewSection />
      <LessonSection />
      <CTASection />

    </main>
  );
}