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
            <Slogan
                header="A Space Designed for Learning"
                text="At Maythematics, we’ve designed a learning environment where students feel comfortable, focused, and inspired. From bright classrooms and cosy study corners to a supportive atmosphere created by our tutors, every detail is built to keep students engaged and confident in their learning journey."
            />
            <SpaceHighlights />
        </div>
            <SpaceVideoHighlights />


            <CTASection />
        </main>
    )
}

