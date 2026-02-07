"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

const experiences = [
    {
        date: "2024 - Present",
        title: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        description: "Leading the development of scalable web applications using Next.js, TypeScript, and cloud technologies. Mentoring junior developers and establishing best practices for the team.",
    },
    {
        date: "2022 - 2024",
        title: "Full Stack Developer",
        company: "Digital Solutions Ltd.",
        description: "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Improved application performance by 40% through optimization techniques.",
    },
    {
        date: "2021 - 2022",
        title: "Frontend Developer",
        company: "Creative Agency Co.",
        description: "Built responsive and accessible web interfaces for various clients. Collaborated closely with designers to ensure pixel-perfect implementations.",
    },
    {
        date: "2020 - 2021",
        title: "Junior Developer",
        company: "Startup Hub",
        description: "Started my professional journey building web applications and learning industry best practices. Gained experience in agile methodologies and version control.",
    },
];

export default function Experience() {
    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Experience
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My professional journey in the tech industry
                    </p>
                </motion.div>

                <Timeline>
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            date={exp.date}
                            title={exp.title}
                            subtitle={exp.company}
                            icon={<Briefcase className="w-4 h-4 text-white" />}
                            isLast={index === experiences.length - 1}
                        >
                            <p>{exp.description}</p>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
}
