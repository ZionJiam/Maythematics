
import SubPageHeader from '@/components/ui/SubpageHeader'
import FAQ from '@/components/programmes/FAQ'
import CTASection from '@/components/faq/CTASection'


export const metadata = {
    title: "FAQ | Maythematics (MTM)",
    description:
        "Find answers to common questions about our Math programmes, teaching methods, fees, trial lessons, and how Maythematics helps students excel.",
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

