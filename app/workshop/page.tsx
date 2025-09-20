import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import WorkshopDisplay from '@/components/workshop/WorkshopDisplay'
import WorkshopBenefits from '@/components/workshop/WorkshopBenefits'
import WorkshopGallery from '@/components/workshop/WorkshopGallery'
import WorkshopFAQ from '@/components/workshop/WorkshopFAQ'
import CTASection from '@/components/workshop/CTASection'



export default function Workshop() {
    return (
        <main className={`${styles.main} pageMarginTop`} >
            <SubPageHeader color="red" header="Holiday Programme" />
            <WorkshopDisplay />
            <WorkshopBenefits />
            <WorkshopFAQ />
            <WorkshopGallery />
            <CTASection />
        </main>
    )
}

