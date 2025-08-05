import GoogleReviewSection from '@/components/home/GoogleReviews';
import LessonSection from '@/components/home/Lesson';
import CTASection from '@/components/home/CTASection';

import WhyUsSection from '@/components/home/WhyUs';
import TestimonialSection from '@/components/home/Testimonial';
import Banner from '../components/home/Banner';

import styles from './page.module.css';


export default function Home() {

  return (
    <main className={styles.main}>
      <Banner />
      <WhyUsSection />
      <TestimonialSection />
      <GoogleReviewSection />
      <LessonSection />
      <CTASection />

    </main>
  );
}