import styles from './page.module.css'
// import OurSpaceSection from '@/components/ourspace/ourspace'
import SubPageHeader from '@/components/ui/SubpageHeader'
import Slogan from '@/components/ui/Slogan'
import SpaceHighlights from '@/components/ourspace/SpaceHighlights'
import CTASection from '@/components/ourspace/CTASection'
import SpaceVideoHighlights from '@/components/ourspace/SpaceVideoHighlight'


export default function OurSpace() {
    return (
        <main className={styles.main}>
            <SubPageHeader color="red" header="Our Space" />
            <Slogan text="At our center, we believe that the right environment enhances learning. With bright, well-designed classrooms, comfortable study corners, and a supportive atmosphere, every detail is to help students stay engaged and focused on their goals." />
            <SpaceHighlights />
            <SpaceVideoHighlights />

            <CTASection />

        </main>
    )
}

