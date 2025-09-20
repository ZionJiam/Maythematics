import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import ContactCard from '@/components/contactus/ContactCard'



export default function About() {
  return (
    <main className={`${styles.main} pageMarginTop`} >
      <SubPageHeader color="red" header="Contact Us" />
      <ContactCard />
    </main>
  )
}

