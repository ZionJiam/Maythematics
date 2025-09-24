import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import WorkshopDisplay from '@/components/workshop/WorkshopDisplay'
import WorkshopBenefits from '@/components/workshop/WorkshopBenefits'
import WorkshopGallery from '@/components/workshop/WorkshopGallery'
import WorkshopFAQ from '@/components/workshop/WorkshopFAQ'
import CTASection from '@/components/workshop/CTASection'

export const metadata = {
    title: "Holiday Programme | Maythematics (MTM) ",
    description:
        "Sign up for our Holiday Programme catered towards PSLE Students to achive stellar results",
    alternates: {
        canonical: 'https://maythematics.com/holiday-programme',
    },
};

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

