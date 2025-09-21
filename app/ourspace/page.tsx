import styles from './page.module.css'
// import OurSpaceSection from '@/components/ourspace/ourspace'
import SubPageHeader from '@/components/ui/SubpageHeader'
import Slogan from '@/components/ui/Slogan'
import SpaceHighlights from '@/components/ourspace/SpaceHighlights'
import CTASection from '@/components/ourspace/CTASection'
import SpaceVideoHighlights from '@/components/ourspace/SpaceVideoHighlight'


export default function OurSpace() {
    return (
        <main className={`${styles.main} pageMarginTop`} >
            <SubPageHeader color="red" header="Our Space" />
            <Slogan
                header="A Learning Environment That Inspires"
                text="At Maythematics, we’ve designed a learning environment where students feel comfortable, focused, and inspired. From bright classrooms and cosy study corners to a supportive atmosphere created by our tutors, every detail is built to keep students engaged and confident in their learning journey."
            />
            <SpaceHighlights />
            <SpaceVideoHighlights />

            <CTASection />

        </main>
    )
}

