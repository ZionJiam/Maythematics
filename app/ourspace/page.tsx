import styles from './page.module.css'
// import OurSpaceSection from '@/components/ourspace/ourspace'
import SubPageHeader from '@/components/ui/SubpageHeader'

import MainImages from '@/components/ourspace/MainImages'

import SideImages from '@/components/ourspace/SideImages'
import CTASection from '@/components/ourspace/CTASection'


export default function OurSpace() {
    return (
        <main className={styles.main}>
            <SubPageHeader color="red" header="Our Space" />
            <MainImages />
            <CTASection />

            {/* <SideImages /> */}

        </main>
    )
}

