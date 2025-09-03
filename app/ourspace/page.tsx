import styles from './page.module.css'
// import OurSpaceSection from '@/components/ourspace/ourspace'
import SubPageHeader from '@/components/ui/SubpageHeader'
import Slogan from '@/components/ui/Slogan'

import SpaceHighlights from '@/components/ourspace/SpaceHighlights'


import SideImages from '@/components/ourspace/SideImages'
import CTASection from '@/components/ourspace/CTASection'


export default function OurSpace() {
    return (
        <main className={styles.main}>
            <SubPageHeader color="red" header="Our Space" />

            <Slogan />
            <SpaceHighlights />

            {/* <SideImages /> */}

        </main>
    )
}

