
import SubPageHeader from '@/components/ui/SubpageHeader'
import FAQ from '@/components/programmes/FAQ'
import CTASection from '@/components/faq/CTASection'


export const metadata = {
    title: "Programme - Primary Secondary & JC Math | Maythematics (MTM) ",
    description:
        "Whether in person or online, every Maythematics lesson follows a structured, engaging approach. Explore our Primary and Secondary Math programmes today.",
};

export default function Programmes() {

    return (
        <main className={`pageMarginTop`} >
            <SubPageHeader color="red" header="FAQs" />

            <FAQ />
            <CTASection />
        </main>
    )
}

