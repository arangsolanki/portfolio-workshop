"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineProps {
    children: ReactNode;
    className?: string;
}

interface TimelineItemProps {
    children: ReactNode;
    className?: string;
    date: string;
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    isLast?: boolean;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export function Timeline({ children, className }: TimelineProps) {
    return (
        <div className={cn("relative", className)}>
            {children}
        </div>
    );
}

export function TimelineItem({
    children,
    className,
    date,
    title,
    subtitle,
    icon,
    isLast = false
}: TimelineItemProps) {
    return (
        <motion.div
            className={cn("relative pl-10 pb-10", isLast && "pb-0", className)}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {/* Vertical line */}
            {!isLast && (
                <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300/50" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                {icon || (
                    <div className="w-3 h-3 rounded-full bg-white" />
                )}
            </div>

            {/* Content */}
            <div className="bg-surface rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Date badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-3">
                    {date}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{subtitle}</p>
                )}

                {/* Description */}
                <div className="text-gray-600 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </motion.div>
    );
}

export default Timeline;
