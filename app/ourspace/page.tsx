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
            <SpaceHighlights />
            <SpaceVideoHighlights />

            <CTASection />

        </main>
    )
}

