import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Button from "@/components/ui/button";

interface BlogPostParams {
    params: Promise<{ slug: string }>;
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
    const { slug } = await params;
    // In production, fetch the post title from MDX files or CMS
    const title = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        title: `${title} | Blog`,
        description: `Read about ${title} on Arang Solanki's blog.`,
    };
}

// In production, this would fetch from MDX files
async function getPost(slug: string) {
    // Sample post data - replace with actual MDX loading
    return {
        title: slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        date: "2026-02-01",
        readTime: "8 min read",
        content: `
# Introduction

This is a sample blog post. In a production environment, this content would be loaded from an MDX file.

## Key Points

Here are the main takeaways:

1. **First Point**: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. **Second Point**: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
3. **Third Point**: Ut enim ad minim veniam, quis nostrud exercitation.

## Code Example

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
\`\`\`

## Conclusion

Thank you for reading! If you found this helpful, feel free to share it with others.
    `,
    };
}

export default async function BlogPost({ params }: BlogPostParams) {
    const { slug } = await params;
    const post = await getPost(slug);

    return (
        <main className="min-h-screen py-20 px-4 md:px-8">
            <article className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
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
                </header>

                {/* Content (MDX would render here) */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        This is a sample blog post demonstrating the blog layout. In your actual implementation,
                        you would load the MDX content from the <code>content/blog</code> directory and render it here.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Getting Started</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Code Example</h2>
                    <pre className="p-4 bg-gray-900 text-gray-100 rounded-xl overflow-x-auto mb-6 text-sm">
                        <code>{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`}</code>
                    </pre>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Conclusion</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Thank you for reading! Feel free to reach out if you have any questions.
                    </p>
                </div>

                {/* Share */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                    <p className="text-gray-600 dark:text-gray-400">
                        Enjoyed this article?
                    </p>
                    <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                    </Button>
                </div>
            </article>
        </main>
    );
}
