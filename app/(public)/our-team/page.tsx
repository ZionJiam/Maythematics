import Slogan from '@/components/ui/Slogan'

import VisionSection from '@/components/storyandteam/Vision'
import TeamSection from '@/components/storyandteam/Team'

import SubPageHeader from '@/components/ui/SubpageHeader'

export const metadata = {
  title: "Story and Team | Maythematics (MTM)",
  description:
    "Learn more about our story, mission, and passionate team of tutors who guide students towards clarity, confidence, and consistent results in Math.",
};

export default function About() {
  return (
    <main className={`pageMarginTop`} >
            <SubPageHeader color="red" header="Our Team" />

      <div className='sectionYPadding'>
              {/* <VisionSection /> */}
      <Slogan header="Our Vision" text="To become Singapore’s leading math tuition centre — trusted by parents and loved by students. We aim to deliver the clearest explanations, the best learning materials, and engaging methods that bring out every child’s confidence and results." />
      <TeamSection />
      <Slogan header="Our Mission" text="To foster a positive and safe environment for students to learn Math under the belt of the most positive, patient and passionate tutors with effective teaching methodologies." />

      </div>


    </main>
  )
}
