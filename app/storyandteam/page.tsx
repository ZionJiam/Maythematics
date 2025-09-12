import styles from './page.module.css'
import StorySection from '@/components/storyandteam/Story'
import Slogan from '@/components/ui/Slogan'

import VisionSection from '@/components/storyandteam/Vision'
import TeamSection from '@/components/storyandteam/Team'

import SubPageHeader from '@/components/ui/SubpageHeader'


export default function About() {
  return (
    <main className={styles.main}>
      <SubPageHeader color="red" header="Story and Team" />
      <Slogan header="Our Mission" text="To foster a positive and safe environment for students to learn Math under the belt of the most positive, patient and passionate tutors with effective teaching methodologies." />

      <StorySection />
      <VisionSection />
      <TeamSection />

    </main>
  )
}

