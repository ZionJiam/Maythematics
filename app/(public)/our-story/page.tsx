import styles from './page.module.css'
import StorySection from '@/components/storyandteam/Story'
import Slogan from '@/components/ui/Slogan'

import VisionSection from '@/components/storyandteam/Vision'
import TeamSection from '@/components/storyandteam/Team'

import SubPageHeader from '@/components/ui/SubpageHeader'

export const metadata = {
  title: "Our Story | Maythematics (MTM)",
  description:
    "From home lessons to a flagship centre, Maythematics grew through passion and resilience to help students across Singapore shine in Math.",
};


export default function About() {
  return (
    <main className={`${styles.main} pageMarginTop`} >
      <SubPageHeader color="red" header="Our Story" />
      <StorySection />

    </main>
  )
}

