import SubPageHeader from '@/components/ui/SubpageHeader'
import WhichClassFits from '@/components/classtypes/WhichClassFits'
import ClassTypesComparison from '@/components/classtypes/ClassTypesComparison'
import CTASection from '@/components/classtypes/CTASection'
import styles from './page.module.css'

export const metadata = {
    title: "Regular Class vs Focus Class | Maythematics (MTM)",
    description:
        "Compare Maythematics' Regular Class and Focus Class formats to find out which learning style best fits your child's needs.",
    alternates: {
        canonical: 'https://maythematics.com/class-types',
    },
};

export default function ClassTypes() {
    return (
        <main className={`${styles.main} pageMarginTop`}>
            <SubPageHeader color="red" header="Type of Classes" />
            <WhichClassFits />
            <ClassTypesComparison />
            <CTASection />
        </main>
    );
}
