"use client";

import Marquee, { TechIcon } from "@/components/ui/marquee";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiPython,
    SiTailwindcss,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiFigma,
    SiMongodb,
    SiGraphql
} from "@icons-pack/react-simple-icons";

const techStack = [
    { icon: <SiReact size={28} />, name: "React" },
    { icon: <SiNextdotjs size={28} />, name: "Next.js" },
    { icon: <SiTypescript size={28} />, name: "TypeScript" },
    { icon: <SiNodedotjs size={28} />, name: "Node.js" },
    { icon: <SiPython size={28} />, name: "Python" },
    { icon: <SiTailwindcss size={28} />, name: "Tailwind" },
    { icon: <SiPostgresql size={28} />, name: "PostgreSQL" },
    { icon: <SiMongodb size={28} />, name: "MongoDB" },
    { icon: <SiDocker size={28} />, name: "Docker" },
    { icon: <SiGit size={28} />, name: "Git" },
    { icon: <SiFigma size={28} />, name: "Figma" },
    { icon: <SiGraphql size={28} />, name: "GraphQL" },
];

export default function TechStack() {
    return (
        <section className="py-20 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Tech Stack
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Technologies and tools I use to bring ideas to life
                </p>
            </div>

            {/* First marquee - left direction */}
            <Marquee direction="left" speed="normal" className="mb-6">
                {techStack.slice(0, 6).map((tech) => (
                    <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
            </Marquee>

            {/* Second marquee - right direction */}
            <Marquee direction="right" speed="slow">
                {techStack.slice(6).map((tech) => (
                    <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
            </Marquee>
        </section>
    );
}
