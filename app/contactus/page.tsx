import SubPageHeader from '@/components/ui/SubpageHeader'
import styles from './page.module.css'
import ContactDetail from '@/components/contactus/ContactDetail'
import SocialMedia from '@/components/contactus/SocialMedia'
import SocialMedia2 from '@/components/contactus/SocialMedia2'
import ContactCard from '@/components/contactus/ContactCard'



export default function About() {
  return (
    <main className={`${styles.main} pageMarginTop`} >
      <SubPageHeader color="red" header="Contact Us" />
      <ContactCard />
      {/* <SocialMedia2 /> */}

      {/* <SocialMedia /> */}
    </main>
  )
}

