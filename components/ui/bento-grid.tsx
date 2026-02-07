"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2;
    index?: number;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <motion.div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
                className
            )}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
}

export function BentoItem({ children, className, colSpan = 1, rowSpan = 1, index = 0 }: BentoItemProps) {
    const colSpanClasses = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-2 lg:col-span-3",
        4: "md:col-span-2 lg:col-span-4",
    };

    const rowSpanClasses = {
        1: "row-span-1",
        2: "row-span-2",
    };

    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-2xl bg-surface border border-gray-200/50 dark:border-gray-700/50",
                "transition-all duration-300 hover:shadow-xl hover:border-primary-500/30",
                colSpanClasses[colSpan],
                rowSpanClasses[rowSpan],
                className
            )}
            variants={itemVariants}
        >
            {children}
        </motion.div>
    );
}

export default BentoGrid;
