"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticTextProps {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.03,
        },
    },
};

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        rotateX: -90,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
};

export default function KineticText({ text, className, delay = 0 }: KineticTextProps) {
    const words = text.split(" ");

    return (
        <motion.div
            className={cn("flex flex-wrap", className)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: "1000px" }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="mr-[0.25em] flex">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            className="inline-block"
                            variants={charVariants}
                            custom={delay + (wordIndex * word.length + charIndex) * 0.03}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
}
