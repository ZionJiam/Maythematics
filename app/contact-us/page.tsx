import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import ContactCard from '@/components/contactus/ContactCard'


export const metadata = {
  title: "Contact Us | Maythematics (MTM)",
  description:
    "Enquire about Maythematics Math tuition classes today. Reach out to our friendly team for class schedules, free trial, holiday programme, and more.",
};

export default function About() {
  return (
    <main className={`${styles.main} pageMarginTop`} >
      <SubPageHeader color="red" header="Contact Us" />
      <ContactCard />
    </main>
  )
}

