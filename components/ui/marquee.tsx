"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    children: ReactNode;
    className?: string;
    direction?: "left" | "right";
    speed?: "slow" | "normal" | "fast";
    pauseOnHover?: boolean;
}

export default function Marquee({
    children,
    className,
    direction = "left",
    speed = "normal",
    pauseOnHover = true,
}: MarqueeProps) {
    const speeds = {
        slow: "40s",
        normal: "30s",
        fast: "20s",
    };

    const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

    return (
        <div
            className={cn(
                "relative flex overflow-hidden",
                pauseOnHover && "[&:hover_.marquee-content]:pause",
                className
            )}
        >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Marquee content - duplicated for seamless loop */}
            <div
                className={cn("marquee-content flex shrink-0 gap-8 items-center", animationClass)}
                style={{ animationDuration: speeds[speed] }}
            >
                {children}
            </div>
            <div
                className={cn("marquee-content flex shrink-0 gap-8 items-center", animationClass)}
                style={{ animationDuration: speeds[speed] }}
                aria-hidden="true"
            >
                {children}
            </div>
        </div>
    );
}

// Tech icon component for use within marquee
interface TechIconProps {
    icon: ReactNode;
    name: string;
    className?: string;
}

export function TechIcon({ icon, name, className }: TechIconProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center gap-2 px-6 py-4 rounded-xl",
                "bg-surface border border-gray-200/50 dark:border-gray-700/50",
                "transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg",
                className
            )}
        >
            <div className="text-3xl text-gray-600 dark:text-gray-400">{icon}</div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{name}</span>
        </div>
    );
}
