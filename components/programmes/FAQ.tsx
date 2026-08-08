'use client';

import { useState } from 'react';
import styles from './FAQ.module.scss';
import { ChevronDown } from "lucide-react";
import { trackCTA } from '@/lib/gtag';

interface AccordionItem {
    title: string;
    content: string;
}

const data: AccordionItem[] = [
    {
        title: "How much are the lessons?",
        content: `
<div style="border:1px solid #ddd;border-radius:12px;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:12px 0;">
  <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
    <thead class="faqTableHeader">
      <tr class="faqTableHeader">
        <th style="padding:8px 10px;border-bottom:1px solid #ddd;">Regular Class</th>
        <th style="padding:8px 10px;border-bottom:1px solid #ddd;border-left:1px solid #ddd;">Online</th>
        <th style="padding:8px 10px;border-bottom:1px solid #ddd;border-left:1px solid #ddd;">Physical</th>
        <th style="padding:8px 10px;border-bottom:1px solid #ddd;border-left:1px solid #ddd;">Duration of each lesson</th>
      </tr>
    </thead>
    <tbody style="background:#ffffff;">
      <tr>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;">Primary 1 / 2</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">Not applicable</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$260 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">1.5 hours</td>
      </tr>
      <tr>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;">Primary 3 / 4</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$310 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$330 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">2 hours</td>
      </tr>
      <tr>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;">Primary 5 / 6</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$330 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$350 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">2 hours</td>
      </tr>
      <tr>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;">Secondary 1 - 4</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$330 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$350 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">2 hours</td>
      </tr>
      <tr>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;">Focus Class</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">Not applicable</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">$420 / 4 lessons</td>
        <td style="padding:8px 10px;text-align:center;border-top:1px solid #ddd;border-left:1px solid #ddd;">2 hours</td>
      </tr>
    </tbody>
  </table>
</div>
<p style="font-size:0.8rem;color:#666;margin-top:8px;">These fees stated are excluding 9% GST.</p>`
    },
    { title: "Do you offer trial lesson?", content: "We offer for a single paid trial lesson" },

    { title: "How can I pay?", content: "We	accept payment through PayNow via our UEN 202239371C" },

    {
        title: "What If my child is unavailable to come for class?", content: "A video recording of the lesson will be uploaded to our portal after 3 days for your child to review at their own pace. We also understand that not every child learns best from recordings. That’s why we offer discretionary replacement classes — subject to availability of class slots and suitability of the content covered. \n\nPlease note that we are unable to provide refunds for missed lessons."
    },

    {
        title: "How do I arrange for a replacement class?", content: `All make-up lessons are arranged via our Whatsapp Customer Support Hotline <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer" data-track="WhatsApp - FAQ Answers">+65 8915 0859</a>`
    },

    {
        title: "When does your academic schedule start?", content: `We start the following year’s syllabus starting 1st November every year. For instance if your child is in Primary 4 in 2025, we will start Primary 5 syllabus on first week of November.

Feel free to <a href="https://wa.me/6589150859" target="_blank" rel="noopener noreferrer">contact us</a> for more details regarding the list of topics throughout the academic year.
    `},

    {
        title: "When are there no classes?", content: `We are closed on all Public Holidays and also the last 2 weeks of December from 16th December to 1st January.
\nRegular classes will continue as usual during School Holidays.
\nFor the latest list of Public Holidays, please refer to the Ministry of Manpower <a href="https://www.mom.gov.sg/employment-practices/public-holidays" target="_blank" rel="noopener noreferrer">website.</a>`
    },

    { title: "Does Maythematics Provide Physical and Online Math Tuitions?", content: "Yes. Students can choose between physical and online math tuitions." },
    { title: "Are Online Math Tuitions effective?", content: "Online Math tuitions are effective if students pay attention, actively engage during lessons, and proactively submit their work for our teachers to check and mark." },
    {
        title: "Where are the physical lessons conducted?",
        content: `
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-top:8px;">
  <div style="border:1px solid #eee;border-radius:8px;padding:16px;background-color:white;">
    <h4 style="font-weight:700;margin-bottom:8px;">Maythematics @ Kembangan</h4>
    <p>5 Jln Masjid, #01-07 Kembangan Court, Singapore 418924</p>
    <p style="margin-top:8px;"><strong>WhatsApp:</strong> <a class="faqWhatsappLink" style="color:inherit;text-decoration:underline;" href="https://api.whatsapp.com/send/?phone=6589150859&text=${encodeURIComponent('Hi, I would like to enquire about physical lessons at Kembangan branch.')}" target="_blank" rel="noopener noreferrer" data-track="WhatsApp - FAQ Answers">+65 8915 0859</a></p>
    <p style="margin-top:8px;"><strong>Opening Hours</strong></p>
    <ul style="padding-left:18px;margin-top:4px;">
      <li>Mon – Fri: 1:00 PM – 9:00 PM</li>
      <li>Sat - Sun: 9:00 AM – 6:00 PM</li>
      <li>Closed on Public Holiday</li>
    </ul>
    <p style="margin-top:8px;">(Right opposite Kembangan MRT)</p>
  </div>
  <div style="border:1px solid #eee;border-radius:8px;padding:16px;background-color:white;">
    <h4 style="font-weight:700;margin-bottom:8px;">Maythematics @ Beauty World</h4>
    <p>54A Jln Jurong Kechil, Singapore 598580</p>
    <p style="margin-top:8px;"><strong>WhatsApp:</strong> <a class="faqWhatsappLink" style="color:inherit;text-decoration:underline;" href="https://api.whatsapp.com/send/?phone=6589150859&text=${encodeURIComponent('Hi, I would like to enquire about physical lessons at Beauty World branch.')}" target="_blank" rel="noopener noreferrer" data-track="WhatsApp - FAQ Answers">+65 8915 0859</a></p>
    <p style="margin-top:8px;"><strong>Opening Hours</strong></p>
    <ul style="padding-left:18px;">
      <li>Mon – Fri: 1:00 PM – 9:00 PM</li>
      <li>Sat - Sun: 9:00 AM – 6:00 PM</li>
      <li>Closed on Public Holiday</li>
    </ul>
    <p style="margin-top:8px;">(3 minutes walk from Beauty World MRT)</p>
  </div>
</div>`,
    },

];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // S is open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const link = (e.target as HTMLElement).closest<HTMLElement>('a[data-track]');
        if (link) {
            trackCTA(link.dataset.track!);
        }
    };

    return (
        <section id="shine" className={`${styles.section} sectionYPadding`}>
            <div className={styles.titleContainer}>
                <h3 data-aos="fade-up" className={`text-xl`}>Frequently Asked Questions</h3>
            </div>

            <div data-aos="fade-up" className={styles.container}>

                {data.map((item, idx) => (
                    <div key={idx} className={styles.accordion}>
                        <button
                            className={`${styles.accordionButton} 
                  ${openIndex === idx ? styles.active : ''}
                  ${styles['color' + (idx + 1)]}
                `}
                            onClick={() => toggleAccordion(idx)}
                        >

                            <span>{item.title}</span>
                            <span
                                className={`${styles.icon} ${openIndex === idx ? styles.open : ""}`}
                            >
                                <ChevronDown size={20} />
                            </span>
                        </button>
                        <div
                            className={styles.accordionContent}
                            style={{ maxHeight: openIndex === idx ? '1000px' : '0px' }}
                        >
                            <div onClick={handleContentClick} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
