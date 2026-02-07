"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
    intensity?: "light" | "medium" | "heavy";
    animated?: boolean;
    hoverEffect?: boolean;
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ className, intensity = "medium", animated = false, hoverEffect = false, children, ...props }, ref) => {
        const intensityStyles = {
            light: "glass-light",
            medium: "glass",
            heavy: "glass-heavy",
        };

        const baseStyles = "rounded-2xl p-6";

        const hoverStyles = hoverEffect
            ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary-500/30"
            : "";

        if (animated) {
            const variants: Variants = {
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                }
            };

            return (
                <motion.div
                    ref={ref}
                    className={cn(baseStyles, intensityStyles[intensity], hoverStyles, className)}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    {...(props as any)}
                >
                    {children}
                </motion.div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn(baseStyles, intensityStyles[intensity], hoverStyles, className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GlassPanel.displayName = "GlassPanel";

export default GlassPanel;
