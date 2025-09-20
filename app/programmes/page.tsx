'use client'

import SubPageHeader from '@/components/ui/SubpageHeader'
import Methodologies from '@/components/programmes/Methodologies'
import DualLayer from '@/components/programmes/DualLayer'
import ProgrammesTable from '@/components/programmes/ProgrammesTable'
import LessonModes from '@/components/programmes/LessonModes'
import FAQ from '@/components/programmes/FAQ'
import CTASection from '@/components/programmes/CTASection'
import CTAVideo from '@/components/programmes/CTAVideo'


export default function Programmes() {

    return (
        <main className={`pageMarginTop`} >
            <SubPageHeader color="red" header="Our Programmes" />

            <Methodologies />

            <DualLayer />
            <LessonModes />
            <ProgrammesTable />

            <FAQ />
            <CTAVideo />
            <CTASection />
        </main>
    )
}

