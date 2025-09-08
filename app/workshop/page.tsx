import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import WorkshopDisplay from '@/components/workshop/WorkshopDisplay'
import WorkshopBenefits from '@/components/workshop/WorkshopBenefits'
import WorkshopGallery from '@/components/workshop/WorkshopGallery'



export default function Workshop() {
    return (
        <main className={styles.main}>
            <SubPageHeader color="red" header="Workshop" />
            <WorkshopDisplay />
            <WorkshopBenefits />
            <WorkshopGallery />
        </main>
    )
}

