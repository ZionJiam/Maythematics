import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import TallyForm from '@/components/career/TallyForm'
import JoinUsSection from '@/components/career/JoinUsSection'
import CareerReason from '@/components/career/CareerReason'

export const metadata = {
    title: "Join Us | Maythematics (MTM) ",
    description:
        "Passionate about teaching? Join the Maythematics (MTM) team as a dedicated tutor and inspire students to excel in Math through engaging lessons and a supportive environment.",
};

export default function Career() {
    return (
        <main className={`${styles.main} pageMarginTop`} >
            <SubPageHeader color="red" header="Career" />
            {/* <TallyForm formId="wARzD0" layout="modal" width="600" /> */}
            <JoinUsSection />

            <CareerReason />
        </main>
    )
}

