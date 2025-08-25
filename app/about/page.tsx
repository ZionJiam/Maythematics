import styles from './page.module.css'
import StorySection from '@/components/storyandteam/Story'
import VisionSection from '@/components/storyandteam/Vision'
import TeamSection from '@/components/storyandteam/Team'

import SubPageHeader from '@/components/ui/SubpageHeader'


export default function About() {
  return (
    <main className={styles.main}>
      {/* <SubPageHeader color="red" header="Story and Team" /> */}
      <StorySection />
      <VisionSection />
      <TeamSection />

    </main>
  )
}

