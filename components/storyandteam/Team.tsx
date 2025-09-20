"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./Team.module.scss";
import TeamCard from "@/components/ui/TeamCard";
import TeamModal from "@/components/ui/TeamModal";


const teamMembers = [
    {
        name: "May",
        startYear: 2016,
        role: "Math Specialist",
        imageUrl: "/images/team/May_1.webp",
        imageUrlHover: "/images/team/May_2.webp",
        degree: "Bachelor of Communications, NUS",
        description: "I’ve been teaching Math for over 14 years and have guided more than 700 students of all levels and abilities. I specialise in breaking down complex problems into clear, step-by-step methods — an approach that has helped many students achieve distinctions and gain confidence. Along the way, I’ve also built a strong following as one of Singapore’s rising Math influencer-tutors, where thousands of parents and students learn from my videos. Today, I lead and train our team of tutors at Maythematics to ensure every lesson is taught with the same clarity, consistency, and care.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Eunice",
        startYear: 2024,
        role: "Math Specialist",
        imageUrl: "/images/team/Eunice_1.webp",
        imageUrlHover: "/images/team/Eunice_2.webp",
        youtubeUrl: "https://youtube.com/embed/wHIbXQBQnK0?si=oIM8mjyONEbqj5D4",
        degree: "Bachelor of Engineering",
        description: "Math was difficult for me when I was younger, but over time I grew to love the subject — eventually achieving distinctions throughout my academic journey from school to polytechnic to university. Before discovering my passion for teaching, I worked as an engineer, which strengthened my problem-solving skills and precision. Today, I teach Primary Math as well as Secondary 1–5 Emath and Amath, focusing on making concepts simple, structured, and approachable. Outside the classroom, I enjoy collecting figurines from blind boxes and Pop Marts — a hobby that keeps me curious and creative.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Kelly",
        startYear: 2016,
        role: "Math Specialist",
        imageUrl: "/images/team/Kelly_1.webp",
        imageUrlHover: "/images/team/Kelly_2.webp",
        youtubeUrl: "https://youtube.com/embed/5VaWaRQR5ns?si=ddeqDl72IdgxoE-y",
        degree: "Bachelor of Science (Data Science and Analytics), NUS",
        description: "Having majored in Data Science and Analytics at NUS, I enjoy blending Math with technology to make concepts clearer and more engaging for students. Back in school, I graduated at the top of my cohort for Secondary 4 Additional Math — a subject I still love teaching today. Outside of lessons, you’ll probably find me at karaoke, where I bring the same joy and energy that I bring into the classroom.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Jezabel",
        role: "Math Specialist",
        startYear: 2016,
        imageUrl: "/images/team/Amy_1.webp",
        imageUrlHover: "/images/team/Amy_2.webp",
        degree: "B.Sc. in Mathematics, NUS",
        description: "I’m passionate and driven about teaching my students Physics in a simple, concise yet interesting way! I’m always ready to give my all for my kids! Which is why I make it a point to build an individual relationship with every student, no matter how big my classes are. I’m sure to always make myself available for my students, even if it’s in the middle of the night (even at 4am 😇) , to help with any panic Physics calls! ",
        studentReview: "Mr. Tyler makes math so fun and easy to understand! ingfoierwiowrgwirgw - Cheryl",
    },
    {
        name: "Amy",
        role: "Math Specialist",
        startYear: 2016,
        imageUrl: "/images/team/Amy_1.webp",
        youtubeUrl: "https://youtube.com/embed/HTLzY2lfTlU?si=AjZTgVfnHbNaoLpw",
        imageUrlHover: "/images/team/Amy_2.webp",
        degree: "Bachelor of Communications, NUS",
        description: "I’m a Primary Math Teaching Specialist with distinctions in Math from Primary through JC. After graduating from NUS, I found my true calling in teaching — guiding younger students to build strong foundations and confidence in Math. I currently teach Primary Math and up to Secondary 2 Emath, where I focus on making concepts clear and approachable. Before becoming a tutor, I was a journalist, but as a mother of one (and hoping for more!), working with children has become both my passion and joy.",
        studentReview: "Mr. Tyler makes math so fun and easy to understand! ingfoierwiowrgwirgw - Cheryl",
    },

    {
        name: "Joan",
        startYear: 2016,
        role: "Math Specialist",
        imageUrl: "/images/team/Joan_1.webp",
        imageUrlHover: "/images/team/Joan_2.webp",
        youtubeUrl: "https://youtube.com/embed/o5MWiIY-4ao?si=gHTIlnaJLdkr9r7z",
        degree: "B.Sc. in Science Education, NTU",
        description: "Back in school, I was part of the Gifted Education Programme and have carried that love for learning into my teaching today. Outside of lessons, I volunteer at a pet shelter and am a proud cat lover — something that helps me bring extra patience and care into the classroom.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Lucas",
        startYear: 2016,
        role: "Math Specialist",
        imageUrl: "/images/team/Lucas_1.webp",
        imageUrlHover: "/images/team/Lucas_2.webp",

        degree: "Undergraduate of Science (Mathematical Science), NTU",
        description: "I teach everything from Primary Math to Secondary 1–5 Emath and Amath, guiding students with clear, structured methods that build both skill and confidence. A bit of a perfectionist at heart, I put care into every explanation I give. Outside of teaching, I’m known for my big appetite despite my small frame — and for being a huge fan of Taylor Swift!",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Leanne",
        startYear: 2016,
        role: "Math Specialist",
        imageUrl: "/images/team/Leanne_1.webp",
        imageUrlHover: "/images/team/Leanne_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "As a mother of three energetic boys, I understand the importance of patience, encouragement, and structure in helping children learn effectively. Outside of teaching, I dedicate time to volunteering with a hamster welfare group — a role that reflects my nurturing nature both inside and outside the classroom.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },

    {
        name: "Meisi",
        startYear: 2016,
        role: "Math Specialist",
        imageUrl: "/images/team/Meisi_2.webp",
        imageUrlHover: "/images/team/Meisi_1.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "I love making Math fun and easy to understand, helping students build both confidence and strong foundations. Outside of lessons, I enjoy running — I’ve even completed a half marathon! — and I’m a big animal lover with a soft spot for both cats and dogs.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },

    {
        name: "Sammi",
        startYear: 2016,
        role: "Math Specialist",
        imageUrl: "/images/team/Sammi_1.webp",
        imageUrlHover: "/images/team/Sammi_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "From a young age, I worked many part-time jobs, which taught me resilience, responsibility, and the value of hard work — qualities I bring into my teaching every day. I love creating Math notes and worksheets to make learning clearer and more enjoyable for my students. Outside the classroom, I’m a dancer at heart and enjoy building Lego, crafting handmade things, and cooking, which keep me creative and full of energy.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Ven",
        startYear: 2016,
        role: "???",
        imageUrl: "/images/team/Ven_1.webp",
        imageUrlHover: "/images/team/Ven_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "With a degree in Communications and Sociology and a diploma in Applied Drama and Psychology, I bring both empathy and organisation to my role. Outside of work, I love dogs and volunteer regularly at a dog shelter. I also spent two years teaching singing and have performed at various events — music has always been a joyful part of my life.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Tyler",
        startYear: 2016,
        role: "Strategic Growth Architect",
        youtubeUrl: "https://youtube.com/embed/3lzs-mTaB4E?si=He288-szlUEnjr6s",
        imageUrl: "/images/team/Tyler_1.webp",
        imageUrlHover: "/images/team/Tyler_2.webp",

        degree: "Bachelor of Computer Science (Artificial Intelligence) & Bachelor of Business, (Analytics), NTU",
        description: "With a Double Degree in Computer Science and Data Analytics from NTU, I not only specialise in teaching Primary and Secondary Math but also support the centre’s operations, finance, marketing, and HR. I’m passionate about helping students succeed in Math while driving the continued growth of Maythematics. Outside of work, you’ll often find me on the basketball court.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Jovial",
        startYear: 2016,
        role: "???",
        imageUrl: "/images/team/Jovial_1.webp",
        imageUrlHover: "/images/team/Jovial_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "From managing systems to keeping everything on track, I’m also the tech guy behind our teaching equipment, student portal, and livestream setups. I enjoy using technology to make learning seamless for both our tutors and students.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },


    // Add more members here...
];


const Team = () => {
    const [selectedMember, setSelectedMember] = useState<any | null>(null);


    return (
        <section id="team" className={`${styles.teamSection} sectionYPadding`}>
            {/* <img className={`${styles.element} ${styles.element1}`} src="/assets/elements/design-element-7.png" alt="Minus Design Element" />
            <img className={`${styles.element} ${styles.element2}`} src="/assets/elements/design-element-3.png" alt="Design Element 9" /> */}

            <div className={styles.teamContainer}>

                <div className={styles.teamCardContainer}>
                    <div data-aos="fade-in" className={styles.CtaCard}>
                        <h2 className={styles.title}>
                            Meet the Team
                        </h2>
                        <p className={styles.slogan}>
                            Click on each profile to know how we support every students's learning journey
                        </p>
                        <img className={`${styles.cardMascot}`} src="/assets/red-mascot-teach.webp" alt="Red Mascot Teaching" />


                    </div>
                    {teamMembers
                        .map((member, index) => (
                            <TeamCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                imageUrl={member.imageUrl}
                                imageUrlHover={member.imageUrlHover}
                                degree={member.degree}
                                description={member.description}
                                studentReview={member.studentReview}
                                onClick={() => setSelectedMember(member)}
                                data-aos="fade-up"
                            />
                        ))}
                </div>

                {selectedMember && (
                    <TeamModal
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </div>

        </section >
    );
};

export default Team;
