
import SubPageHeader from '@/components/ui/SubpageHeader'
import Methodologies from '@/components/programmes/Methodologies'
import DualLayer from '@/components/programmes/DualLayer'
import ProgrammesTable from '@/components/programmes/ProgrammesTable'
import LessonModes from '@/components/programmes/LessonModes'
import FAQ from '@/components/programmes/FAQ'
import CTASection from '@/components/programmes/CTASection'
import CTAVideo from '@/components/programmes/CTAVideo'
import Slogan from '@/components/ui/Slogan'


export const metadata = {
    title: "Our Programme - Primary, Secondary & JC Math | Maythematics (MTM)",
    description:
        "Whether in person or online, every Maythematics lesson follows a structured, engaging approach. Explore our Primary and Secondary Math programmes today.",
    alternates: {
        canonical: 'https://maythematics.com/programmes',
    },

};

export default function Programmes() {

    return (
        <main className={`pageMarginTop`} >
            <SubPageHeader color="red" header="Math Programme" />

            <Methodologies />

            <DualLayer />
            <LessonModes />
            <ProgrammesTable />

            {/* <FAQ /> */}
            <CTAVideo />
            <CTASection />
        </main>
    )
}

