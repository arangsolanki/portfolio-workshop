"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            AS
                        </Link>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Full Stack Developer & UI/UX Designer crafting beautiful digital experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Connect</h3>
                        <div className="flex gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Arang Solanki. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        Built with <Heart className="w-4 h-4 text-red-500" /> using Next.js & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
