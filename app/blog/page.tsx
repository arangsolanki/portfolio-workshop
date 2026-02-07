import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
    title: "Blog | Arang Solanki",
    description: "Technical articles and insights on web development, design, and technology.",
};

// Sample blog posts - In production, these would come from MDX files or a CMS
const blogPosts = [
    {
        slug: "building-performant-react-apps",
        title: "Building Performant React Applications in 2026",
        excerpt: "Learn the latest techniques for optimizing React applications, from code splitting to server components.",
        date: "2026-02-01",
        readTime: "8 min read",
        tags: ["React", "Performance", "Next.js"],
    },
    {
        slug: "typescript-best-practices",
        title: "TypeScript Best Practices for Large Codebases",
        excerpt: "Essential patterns and practices for maintaining type safety in enterprise-scale TypeScript projects.",
        date: "2026-01-15",
        readTime: "12 min read",
        tags: ["TypeScript", "Best Practices"],
    },
    {
        slug: "modern-css-techniques",
        title: "Modern CSS Techniques You Should Know",
        excerpt: "Exploring container queries, cascade layers, and other cutting-edge CSS features for modern web development.",
        date: "2026-01-08",
        readTime: "6 min read",
        tags: ["CSS", "Web Design"],
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Blog
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Thoughts on web development, design patterns, and the technologies I work with.
                    </p>
                </div>

                {/* Blog Posts */}
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.slug}
                            className="group relative bg-surface rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:border-primary-500/30 transition-all duration-300"
                        >
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary-500 transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            {/* Excerpt */}
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read More Link */}
                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center text-primary-500 font-medium group/link"
                            >
                                Read Article
                                <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
