"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/button";
import GlassPanel from "@/components/ui/glass-panel";
import { submitContact } from "@/app/actions/contact";

interface FormState {
    status: "idle" | "loading" | "success" | "error";
    message: string;
}

export default function Contact() {
    const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });

    async function handleSubmit(formData: FormData) {
        setFormState({ status: "loading", message: "" });

        const result = await submitContact(formData);

        if (result.success) {
            setFormState({ status: "success", message: result.message });
        } else {
            setFormState({ status: "error", message: result.message });
        }
    }

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <GlassPanel intensity="light" className="p-8 md:p-10">
                        {formState.status === "success" ? (
                            <motion.div
                                className="text-center py-12"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                                <p className="text-gray-600 dark:text-gray-400">{formState.message}</p>
                                <Button
                                    variant="ghost"
                                    className="mt-6"
                                    onClick={() => setFormState({ status: "idle", message: "" })}
                                >
                                    Send Another Message
                                </Button>
                            </motion.div>
                        ) : (
                            <form action={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <User className="w-4 h-4 text-primary-500" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <Mail className="w-4 h-4 text-primary-500" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <MessageSquare className="w-4 h-4 text-primary-500" />
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                    />
                                </div>

                                {/* Error Message */}
                                {formState.status === "error" && (
                                    <motion.div
                                        className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        {formState.message}
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    isLoading={formState.status === "loading"}
                                >
                                    {formState.status === "loading" ? "Sending..." : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </GlassPanel>
                </motion.div>

                {/* Alternative Contact */}
                <motion.p
                    className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    Or reach out directly at{" "}
                    <a href="mailto:hello@example.com" className="text-primary-500 hover:text-primary-600 underline underline-offset-4">
                        hello@example.com
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
