import styles from './page.module.css'
import SubPageHeader from '@/components/ui/SubpageHeader'
import Slogan from '@/components/ui/Slogan'
import SpaceHighlights from '@/components/ourspace/SpaceHighlights'
import CTASection from '@/components/ourspace/CTASection'
import SpaceVideoHighlights from '@/components/ourspace/SpaceVideoHighlight'


export const metadata = {
    title: "Our Space | Maythematics MTM",
    description:
        "Discover our inspiring spaces, comfort focus, and usage of modern tools designed to help students focus, feel comfortable, and build confidence in Math.",
};

export default function OurSpace() {
    return (
        <main className={`${styles.main} pageMarginTop`} >
            <SubPageHeader color="red" header="Our Space" />

            <div className='sectionYPadding'>
                <Slogan header="Our Mission" text="To foster a positive and safe environment for students to learn Math under the belt of the most positive, patient and passionate tutors with effective teaching methodologies." />

                <SpaceHighlights />
            </div>
            <SpaceVideoHighlights />


            <CTASection />
        </main>
    )
}

