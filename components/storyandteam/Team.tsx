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
        startYear: 2011,
        role: "Founder of Maythematics",
        imageUrl: "/images/team/May_1.webp",
        imageUrlHover: "/images/team/May_2.webp",
        degree: "Bachelor of Communications, NUS",
        description: "Many parents and students know me from TikTok, where I am recognised as a rising Math tutor-influencer for my clear, step-by-step explanations of even the toughest problems.\n\nBack in school, I achieved an A* for PSLE and Distinctions in both E-Math and A-Math not because I was the smartest, but because I worked the hardest — a value I now strive to instill in every student I teach.\n\nI am passionate about making education fun, simple, and results-driven.\n\nOver the years, I have had the privilege of guiding more than 1,000 students across different levels and abilities, with many students and parents attesting to real improvements through my teaching.\n\nToday I also mentor and train our tutors to ensure every lesson at Maythematics is delivered with clarity, quality, and consistency.\n\nPeople around me describe me as a bubbly and energetic person, while those who work closely with me also know that I am a perfectionist who sets very high standards for myself and my team.\n\nFun fact: Most of the Math cheatsheets at our centre are personally handwritten by me, and I often receive compliments on my handwriting — a small reflection of the care and attention I put into every detail to ensure our students receive the very best support.",
        studentReviews: null
    },
    {
        name: "Eunice",
        startYear: 3000,
        role: "Math Specialist",
        imageUrl: "/images/team/Eunice_1.webp",
        imageUrlHover: "/images/team/Eunice_2.webp",
        youtubeUrl: "https://youtube.com/embed/wHIbXQBQnK0?si=oIM8mjyONEbqj5D4",
        degree: "Bachelor of Engineering",
        description: `  Hi, I'm Eunice, a math tutor for primary and secondary students at Maythematics.

My own journey with math transformed because of a few patient and passionate teachers who took extra time to guide me when I was struggling. Their dedication not only helped me understand concepts more deeply but also ignited a lasting love for the subject.

This personal experience is why I firmly believe that passion and patience are foundational to creating a welcoming and effective learning environment. This approach aligns perfectly with the Maythematics philosophy of being Positive, Passionate, and Patient.

I find joy in breaking down complex concepts into simpler, more understandable parts. Nothing is more rewarding than witnessing a student grasps something they once found difficult. Seeing their progress, no matter how small, gives me a sense of achievement.

When I'm not teaching, I cherish quality time with my family and friends, and I have a fun fondness for the small thrill of opening blind boxes.
        
        `,
        studentReviews: [
            {
                reviewer: "Jamie",
                text: "Teacher Eunice has been such an great help to my son' s Maths tuition. My son works very well under her coaching. He is more motivated and confident for Maths now. Thank you teacher Eunice and Maythematics!! ",
            },
            {
                reviewer: "Jason",
                text: "Her lessons made Additional Math so much easier to understand!",
            },
        ],
    },
    {
        name: "Kelly",
        startYear: 3000,
        role: "Math Specialist",
        imageUrl: "/images/team/Kelly_1.webp",
        imageUrlHover: "/images/team/Kelly_2.webp",
        youtubeUrl: "https://youtube.com/embed/5VaWaRQR5ns?si=ddeqDl72IdgxoE-y",
        degree: "Bachelor of Science in Data Science & Analytics",
        description: `Hi, I’m Kelly, a Math tutor at Maythematics. I’m passionate about helping students see that Math can be clear, logical, and even enjoyable.

I believe in patience, perseverance, and creating a supportive space where students feel encouraged to keep trying.

In my classes, I focus on guiding students to understand the why behind each concept, so they build confidence instead of relying on memorisation.

What drives me is seeing my students grow, not just in their results, but also in their confidence and problem-solving mindset.

Outside of teaching, I enjoy going for long walks, which gives me time to reflect, and exploring new hobbies like crocheting!`,
        studentReviews: [
            {
                reviewer: "Yi Zheng",
                text: "My daughter has been attending classes here since the start of the year (Sec 1) and I'm glad to say Math is her best subject in school and she has been scoring A1 for the past 3 weighted assessments. Having a good tuition teacher really helps. I am confident that she will do well for her end of year exams too due to her teacher Ms Kelly. Thank you for all the guidance and explaining new concepts in a way that the kids understand.",
            },
        ],

    },
    // {
    //     name: "Jezabel",
    //     role: "Math Specialist",
    //     startYear: 2016,
    //     imageUrl: "/images/team/Amy_1.webp",
    //     imageUrlHover: "/images/team/Amy_2.webp",
    //     degree: "Bachelor of Science in Chemistry & Biological Chemistry, NTU",
    //     description: `I’m Jezebel, and I believe success in learning comes from effort, not “natural talent.” What often looks like talent is really hard work behind the scenes. That’s why I encourage students not to compare themselves with others, but to focus on steady, step-by-step improvement. As long as they are better today than yesterday, they’re on the right track. Parents value my patient and encouraging approach, knowing their child won’t feel pressured to compete but supported to grow. Outside of teaching, I enjoy reading, spending time with my family, and expressing myself through dance and singing. To my students: Math isn’t about being perfect—it’s about getting a little better every time.`,
    //     studentReview: "Mr. Tyler makes math so fun and easy to understand! ingfoierwiowrgwirgw - Cheryl",
    // },
    {
        name: "Amy",
        role: "Math Specialist",
        startYear: 3000,
        imageUrl: "/images/team/Amy_1.webp",
        youtubeUrl: "https://youtube.com/embed/HTLzY2lfTlU?si=AjZTgVfnHbNaoLpw",
        imageUrlHover: "/images/team/Amy_2.webp",
        degree: "Bachelor of Communication and New Media, NUS",
        description: "I’m Amy, passionate about helping young learners build a rock-solid foundation in Mathematics. I believe every child can thrive when given patience, encouragement, and the right guidance—and that learning should spark both confidence and curiosity.\n\nIn my classes, I use clear explanations and step-by-step problem solving to make even difficult concepts manageable. Over the years, I’ve seen many hesitant learners grow into confident problem-solvers who are no longer afraid of Math. Before teaching, I worked as a journalist, but I found my true calling in education.\n\nOutside the classroom, I’m a mother of one and hope to build a big family, which helps me relate to the concerns and hopes of every parent I meet.\n\nTo students: I’ll always celebrate your progress—no step is too small, and together we’ll turn Math into something you can feel proud of.",
        studentReviews: null

    },

    {
        name: "Joan",
        startYear: 3000,
        role: "Math Specialist",
        imageUrl: "/images/team/Joan_1.webp",
        imageUrlHover: "/images/team/Joan_2.webp",
        youtubeUrl: "https://youtube.com/embed/o5MWiIY-4ao?si=gHTIlnaJLdkr9r7z",
        degree: "B.Sc. in Science Education, NTU",
        description: `I’m Joan, a primary and secondary math tutor at Maythematics. As a tutor, I love teaching and guiding young minds, and viewing the world through their unique perspectives. I learn from my students, as they learn from me. 

When I was a student, I was deeply influenced by my teachers - and I still keep in contact with them now. Inspired by them, I started my tutoring journey in Secondary school, and have moved from tutoring community kids and peers, to tutoring my very own students.

In my classroom, I aim to create a friendly, welcoming atmosphere. I invite my students to “Always Ask Questions”, no matter how silly they think they may be - those questions may be more important than they think! For younger students, I also work closely with parents so as to better serve my students’ needs. In contrast, I encourage older students to take charge of their own learning as I continue to provide support.

I hope to continue inspiring students as I have been inspired myself; to develop in them the passion that spurs my own continued love for learning. Outside of class, this translates to a deep passion for reading, research and rumination.
        
        `,
        studentReviews: null

    },
    {
        name: "Lucas",
        startYear: 3000,
        role: "Math Specialist",
        imageUrl: "/images/team/Lucas_1.webp",
        imageUrlHover: "/images/team/Lucas_2.webp",
        youtubeUrl: "https://youtube.com/embed/jfP-Ly7IOXc?si=6tMppaeJfvg3UmAZ",
        degree: "Bachelor of Science in Mathematical Sciences, NTU (Current Student)",
        description: "I'm Lucas, and I teach Mathematics at the secondary and junior-college levels at Maythematics. I'm passionate not only about the subject itself but also about the pedagogy behind it.\n\nGrowing up, I struggled with Mathematics in primary school, so I understand how students might find it challenging. That's why I aim to empower them to enjoy the subject and build their confidence.\n\nMy students often describe me as patient, energetic and approachable. I strive to make my classes a safe space where students can make mistakes, learn from them and grow.\n\nThe legacy I hope to leave is for my students to one day look back on my lessons with fondness, wishing they could relive those classroom moments again. \n\nOutside of teaching, I'm a full-time Mathematics student. In my free time, I enjoy playing mahjong and tackling escape rooms with my friends.",
        studentReviews: null
    },
    {
        name: "Leanne",
        startYear: 3000,
        role: "Math Specialist",
        youtubeUrl: "https://youtube.com/embed/VbiRDw3LS_Y?si=gBeb2T2ZgqQGIhN4",
        imageUrl: "/images/team/Leanne_1.webp",
        imageUrlHover: "/images/team/Leanne_2.webp",
        degree: "",
        description: "I’m Leanne, passionate about helping students gain confidence in Mathematics. As a mom of three energetic boys, I know firsthand the importance of patience and encouragement in learning.\n\nI bring that same care into every class, ensuring that students feel supported as they try, learn, and improve. Parents often find comfort in knowing I balance both discipline and warmth in my approach.\n\nOutside of teaching, I’m a dedicated volunteer with a hamster welfare group. To students: I’ll always cheer you on—your effort matters more than getting it right the first time.",
        studentReviews: null
    },

    {
        name: "Mei Si",
        startYear: 3000,
        role: "Math Specialist",
        imageUrl: "/images/team/Meisi_2.webp",
        imageUrlHover: "/images/team/Meisi_1.webp",
        youtubeUrl: "https://youtube.com/embed/ePc-eYSXEIM?si=oYwECv31rN4Bfxrv",
        degree: "Bachelor of Business (Current Student)",
        description: `Hi, I'm Mei Si, and I teach Mathematics from Primary School to Lower Secondary level. I am passionate about making math simple, engaging and relatable for students by breaking down concepts into bite-sized content and connecting them to real-life applications.

I strongly believe that every child has the ability to excel in math when given the right support, encouragement and guidance. In my class, I aim to make tuition exciting and fun rather than dreadful, creating a friendly learning environment where students feel comfortable asking questions and exploring new ideas. 

What drives me is helping students build confidence in their abilities and showing them that math is not just numbers but also about problem-solving and thinking creatively. 

Outside of teaching, I enjoy listening to music and spending quality time with my family and friends.`,
        studentReviews: [
            {
                reviewer: "Ms Shel",
                text: "I am so happy with my daughter's exam results! Thank you so much Teacher Mei Si for helping her!",
            },
            {
                reviewer: "Ms Janelle",
                text: "Thank you so much, Teacher Mei Si! You tutored Raenie well. She passed her Math. I’m so surprised and happy for her!",
            },
            {
                reviewer: "Rui Yi",
                text: "Hi Teacher Mei Si!! Thank you so much for helping me! The paper was one of the best papers I have done.",
            },
        ],

    },

    {
        name: "Sammi",
        startYear: 3000,
        role: "Math Specialist",
        imageUrl: "/images/team/Sammi_1.webp",
        imageUrlHover: "/images/team/Sammi_2.webp",
        youtubeUrl: "https://youtube.com/embed/o8TkSMQN_9Q?si=WG_D5FS0-WOhbqOP",
        degree: "Bachelor of Computing in Computer Science, SIM (Current student)",
        description: "Hi, I’m Sammi, and I teach Mathematics from primary school to lower secondary levels. I’m passionate about helping students understand concepts in ways that make sense to them, rather than just following rules blindly. I believe Math can be interesting and enjoyable when it’s taught the right way, and I love seeing the moment when my students truly grasp a concept instead of disliking the topic. I always try different approaches and check in with my students—if one method doesn’t work, I’ll try another until they understand. My goal is to help students develop a love for Mathematics and to find it fun. Outside of teaching, I’m a dancer and I enjoy taking my dogs for walks whenever I’m free.",
        studentReviews: [
            {
                reviewer: "Cindy",
                text: "Teacher Sammi makes Math simple and interesting. My son looks forward to her lessons every week.",
            },
        ],
    },
    {
        name: "Venessa",
        startYear: 3000,
        role: "Admin",
        imageUrl: "/images/team/Ven_1.webp",
        imageUrlHover: "/images/team/Ven_2.webp",

        degree: "Bachelor of Communications & Sociology",
        description: `Hi, I’m Venessa, and I manage client relations here at Maythematics. I understand that finding the right academic support can be a stressful and emotional process for many parents. That’s why I believe in building strong, trustworthy relationships through clear communication and empathy. Just as our tutors are the go-to support for students, I strive to be that dependable point of contact for parents—helping them feel confident and reassured every step of the way.

Outside of work, I enjoy staying active and keeping up with my fitness. As a new mom, I’m also focused on spending meaningful time with my family and embracing all the special moments that come with this new chapter.`,
        studentReviews: null

    },
    {
        name: "Tyler",
        startYear: 3000,
        role: "Strategic Growth Architect",
        youtubeUrl: "https://youtube.com/embed/3lzs-mTaB4E?si=He288-szlUEnjr6s",
        imageUrl: "/images/team/Tyler_1.webp",
        imageUrlHover: "/images/team/Tyler_2.webp",

        degree: "Bachelor of Computing (Computer Science) & Bachelor of Business, NTU",
        description: `I’m Tyler, and I like to make things better for people. I believe in the kaizen spirit—the philosophy of continuous, incremental improvement that involves everyone, every day, everywhere. At Maythematics, I’m always looking for ways to improve how our tutors provide the best education for our students while giving their parents peace of mind.
\nMy goal is for every student at Maythematics to feel proud of their progress and confident that what they learn here will serve them well, even long after they’ve moved on.
Outside of work, I make it a point to not work, take care of my health, and spend time with the people I love.`,
        studentReviews: null
    },
    {
        name: "Jovial",
        startYear: 3000,
        role: "Operations Manager",
        imageUrl: "/images/team/Jovial_1.webp",
        imageUrlHover: "/images/team/Jovial_2.webp",

        degree: "",
        description: `Hi, I'm Jovial, and I'm the Operations Manager.

From fixing the printer to setting up livestreams, I’m the go-to person for keeping things running smoothly at Maythematics. I’m passionate about using technology to improve the way we work and teach, always looking for smarter ways to support the team and enhance the learning experience.

Outside of work, I am very committed to taking care of my family as I am very blessed to have a lovely wife and 3 daughters. I also love playing badminton!
        `,
        studentReviews: null

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
                                studentReviews={member.studentReviews} // 👈 updated here
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
