import Slogan from '@/components/ui/Slogan'

import VisionSection from '@/components/storyandteam/Vision'
import TeamSection from '@/components/storyandteam/Team'

import SubPageHeader from '@/components/ui/SubpageHeader'

export const metadata = {
  title: "Our Team | Maythematics (MTM)",
  description:
    "Meet the passionate Maythematics team — dedicated Math specialists who inspire confidence, spark curiosity, and guide every student to excel.",
  alternates: {
    canonical: 'https://maythematics.com/our-team',
  },
};


export default function About() {
  return (
    <main className={`pageMarginTop`} >
      <SubPageHeader color="red" header="Our Team" />

      <div className='sectionYPadding'>
        {/* <VisionSection /> */}
        <Slogan header="Our Vision" text="To become Singapore’s leading math tuition centre — trusted by parents and loved by students. We aim to deliver the clearest explanations, the best learning materials, and engaging methods that bring out every child’s confidence and results." />
        <TeamSection />
      </div>


    </main>
  )
}
