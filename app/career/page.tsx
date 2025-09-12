import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import TallyForm from '@/components/career/TallyForm'
import JoinUsSection from '@/components/career/JoinUsSection'
import CareerReason from '@/components/career/CareerReason'



export default function Career() {
    return (
        <main className={styles.main}>
            <SubPageHeader color="red" header="Career" />
            {/* <TallyForm formId="wARzD0" layout="modal" width="600" /> */}
            <JoinUsSection />

            <CareerReason />
        </main>
    )
}

