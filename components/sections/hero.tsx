"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import TiltCard from "@/components/ui/tilt-card";
import KineticText from "@/components/ui/kinetic-text";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
            <div className="max-w-6xl w-full">
                <BentoGrid className="auto-rows-[180px] md:auto-rows-[200px]">
                    {/* Name & Title - Spans 2 columns */}
                    <BentoItem colSpan={2} rowSpan={2} className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-primary-500 to-primary-700">
                        <Badge variant="success" pulse className="mb-4 w-fit">
                            Available for work
                        </Badge>
                        <KineticText
                            text="Arang Solanki"
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
                        />
                        <motion.p
                            className="text-xl md:text-2xl text-primary-100 font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            Full Stack Developer & UI/UX Designer
                        </motion.p>
                    </BentoItem>

                    {/* Profile Card - 3D Tilt */}
                    <BentoItem className="p-0 overflow-hidden">
                        <TiltCard className="w-full h-full">
                            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-xl">
                                    AS
                                </div>
                            </div>
                        </TiltCard>
                    </BentoItem>

                    {/* Status Indicator */}
                    <BentoItem className="p-6 flex flex-col justify-center items-center text-center glass">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-primary-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">India</span>
                        </div>
                        <div className="text-3xl font-bold text-foreground">3+</div>
                        <div className="text-sm text-gray-500">Years Experience</div>
                    </BentoItem>

                    {/* Social Links */}
                    <BentoItem className="p-6 flex items-center justify-center gap-3">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <link.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </BentoItem>

                    {/* About/Tagline - Spans 3 columns */}
                    <BentoItem colSpan={3} className="p-8 flex flex-col justify-center">
                        <motion.p
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            Crafting beautiful, performant digital experiences with modern web technologies.
                            Passionate about clean code, intuitive design, and pushing the boundaries of what&apos;s possible on the web.
                        </motion.p>
                        <motion.div
                            className="flex gap-4 mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                        >
                            <Button variant="primary">View Projects</Button>
                            <Button variant="outline">Download CV</Button>
                        </motion.div>
                    </BentoItem>
                </BentoGrid>
            </div>
        </section>
    );
}
