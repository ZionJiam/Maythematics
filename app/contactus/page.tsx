import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import ContactUs from '@/components/contactus/contactus'



export default function About() {
  return (
    <main className={styles.main}>
      <SubPageHeader color="red" header="Contact Us" />
      <ContactUs />

    </main>
  )
}

