"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "primary" | "success" | "warning" | "danger";
    size?: "sm" | "md";
    pulse?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", size = "md", pulse = false, children, ...props }, ref) => {
        const variants = {
            default: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
            primary: "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400",
            success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
            danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        };

        const sizes = {
            sm: "px-2 py-0.5 text-xs",
            md: "px-3 py-1 text-sm",
        };

        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-1.5 font-medium rounded-full",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {pulse && (
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                    </span>
                )}
                {children}
            </span>
        );
    }
);

Badge.displayName = "Badge";

export default Badge;
