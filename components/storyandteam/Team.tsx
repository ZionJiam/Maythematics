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
        description: "Specializes in foundational concepts and problem-solving techniques for young learners.",
        studentReview: "Mr. Tyler makes math so fun and easy to understand!",
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
    }
    // Add more members here...
];


const Team = () => {
    const [selectedMember, setSelectedMember] = useState<any | null>(null);


    return (
        <section className={styles.teamSection}>

            <div className={styles.teamContainer}>
                <h2 className={`${styles.sectionTitle} sectionTitle white-text-outline`}>Meet the
                    {" "}
                    <span className={styles.letterRainbow}>
                        <span className={`blue`}>T</span>
                        <span className={`red`}>u</span>
                        <span className={`yellow`}>t</span>
                        <span className={`teal`}>o</span>
                        <span className={`red`}>r</span>
                        <span className={`yellow`}>s</span>

                    </span>
                </h2>

                <div className={styles.teamCardContainer}>
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
