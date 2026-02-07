"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageRevealProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt?: string;
    afterAlt?: string;
    className?: string;
}

export default function ImageReveal({
    beforeImage,
    afterImage,
    beforeAlt = "Before",
    afterAlt = "After",
    className,
}: ImageRevealProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current || !isDragging) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        const handleTouchEnd = () => setIsDragging(false);

        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full aspect-video overflow-hidden rounded-xl cursor-ew-resize select-none",
                className
            )}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (bottom layer) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt={afterAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Before Image (top layer with clip) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt={beforeAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Slider Handle */}
            <motion.div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%`, x: "-50%" }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                whileHover={{ scale: 1.1 }}
            >
                {/* Handle circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                        <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                    </div>
                </div>
            </motion.div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                Before
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                After
            </div>
        </div>
    );
}
