"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./Team.module.scss";
import TeamCard from "@/components/ui/TeamCard";
import TeamModal from "@/components/ui/TeamModal";


const teamMembers = [
    {
        name: "Amy",
        role: "Math Teacher (Primary 3-5)",
        startYear: 2016,
        imageUrl: "/images/team/Amy_1.webp",
        imageUrlHover: "/images/team/Amy_2.webp",
        degree: "B.Sc. in Mathematics, NUS",
        description: "I’m passionate and driven about teaching my students Physics in a simple, concise yet interesting way! I’m always ready to give my all for my kids! Which is why I make it a point to build an individual relationship with every student, no matter how big my classes are. I’m sure to always make myself available for my students, even if it’s in the middle of the night (even at 4am 😇) , to help with any panic Physics calls! ",
        studentReview: "Mr. Tyler makes math so fun and easy to understand! ingfoierwiowrgwirgw - Cheryl",
    },
    {
        name: "Eunice",
        startYear: 2024,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Eunice_1.webp",
        imageUrlHover: "/images/team/Eunice_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Joan",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Joan_1.webp",
        imageUrlHover: "/images/team/Joan_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Jovial",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Jovial_1.webp",
        imageUrlHover: "/images/team/Jovial_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Kelly",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Kelly_1.webp",
        imageUrlHover: "/images/team/Kelly_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Leanne",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Leanne_1.webp",
        imageUrlHover: "/images/team/Leanne_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Lucas",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Lucas_1.webp",
        imageUrlHover: "/images/team/Lucas_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },

    {
        name: "May",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/May_1.webp",
        imageUrlHover: "/images/team/May_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },

    {
        name: "Meisi",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Meisi_2.webp",
        imageUrlHover: "/images/team/Meisi_1.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Sammi",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Sammi_1.webp",
        imageUrlHover: "/images/team/Sammi_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Tyler",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Tyler_1.webp",
        imageUrlHover: "/images/team/Tyler_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Ven",
        startYear: 2016,
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/Ven_1.webp",
        imageUrlHover: "/images/team/Ven_2.webp",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },

    // Add more members here...
];


const Team = () => {
    const [selectedMember, setSelectedMember] = useState<any | null>(null);


    return (
        <section id="team" className={styles.teamSection}>
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
                        <img className={`${styles.cardMascot}`} src="/assets/red-mascot-teach.png" alt="Red Mascot Teaching" />


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
