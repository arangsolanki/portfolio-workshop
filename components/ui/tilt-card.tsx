"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltIntensity?: number;
    glare?: boolean;
}

export default function TiltCard({
    children,
    className,
    tiltIntensity = 15,
    glare = true
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative rounded-2xl overflow-hidden transition-shadow duration-300",
                isHovered && "shadow-2xl",
                className
            )}
        >
            {/* Content */}
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>

            {/* Glare overlay */}
            {glare && isHovered && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.25) 0%, transparent 50%)`,
                    }}
                />
            )}
        </motion.div>
    );
}
