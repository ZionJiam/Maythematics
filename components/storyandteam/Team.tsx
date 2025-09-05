"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./Team.module.scss";
import TeamCard from "@/components/ui/TeamCard";
import TeamModal from "@/components/ui/TeamModal";


const teamMembers = [
    {
        name: "Tyler",
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/tyler.png",
        imageUrlHover: "/images/team/tyler-2.png",
        degree: "B.Sc. in Mathematics, NUS",
        description: "I’m passionate and driven about teaching my students Physics in a simple, concise yet interesting way! I’m always ready to give my all for my kids! Which is why I make it a point to build an individual relationship with every student, no matter how big my classes are. I’m sure to always make myself available for my students, even if it’s in the middle of the night (even at 4am 😇) , to help with any panic Physics calls! ",
        studentReview: "Mr. Tyler makes math so fun and easy to understand! ingfoierwiowrgwirgw - Cheryl",
    },
    {
        name: "Sophia",
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/tyler.png",
        imageUrlHover: "/images/team/tyler-2.png",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Sophia",
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/tyler.png",
        imageUrlHover: "/images/team/tyler-2.png",

        degree: "B.Sc. in Science Education, NTU",
        description: "Brings science to life with hands-on experiments and engaging lessons.",
        studentReview: "Ms. Sophia helped me love science for the first time!",
    },
    {
        name: "Tyler",
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/tyler.png",
        imageUrlHover: "/images/team/tyler-2.png",
        degree: "B.Sc. in Mathematics, NUS",
        description: "Specializes in foundational concepts and problem-solving techniques for young learners.",
        studentReview: "Mr. Tyler makes math so fun and easy to understand!",
    },
    {
        name: "Tyler",
        role: "Math Teacher (Primary 3-5)",
        imageUrl: "/images/team/tyler.png",
        imageUrlHover: "/images/team/tyler-2.png",
        degree: "B.Sc. in Mathematics, NUS",
        description: "Specializes in foundational concepts and problem-solving techniques for young learners.",
        studentReview: "Mr. Tyler makes math so fun and easy to understand!",
    }
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
                            Passionate educators striving to inspire the next
                            generation.
                        </p>

                    </div>
                    {teamMembers.map((member, index) => (
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
                            data-aos-delay={index * 100}

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
