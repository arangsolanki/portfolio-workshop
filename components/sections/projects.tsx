"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
        image: "/projects/ecommerce.jpg",
        tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com",
        featured: true,
    },
    {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
        image: "/projects/taskapp.jpg",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        github: "https://github.com",
        live: "https://example.com",
        featured: true,
    },
    {
        title: "AI Content Generator",
        description: "AI-powered content generation tool using OpenAI API for creating marketing copy, blog posts, and social media content.",
        image: "/projects/ai-tool.jpg",
        tags: ["Python", "FastAPI", "OpenAI", "React"],
        github: "https://github.com",
        live: "https://example.com",
        featured: false,
    },
    {
        title: "Portfolio Template",
        description: "Modern, customizable portfolio template with dark mode, animations, and CMS integration.",
        image: "/projects/portfolio.jpg",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        github: "https://github.com",
        live: "https://example.com",
        featured: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Projects() {
    return (
        <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and passion for building great products
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className="group relative bg-surface rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
                            variants={cardVariants}
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary-500/20">
                                    {project.title.charAt(0)}
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-primary-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {project.featured && (
                                    <Badge variant="primary" size="sm" className="mb-3">Featured</Badge>
                                )}
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Button variant="outline" className="group">
                        View All Projects
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
