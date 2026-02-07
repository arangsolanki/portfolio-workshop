import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-gradient">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>
        ),
        p: ({ children }) => (
            <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">{children}</p>
        ),
        code: ({ children }) => (
            <code className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md text-sm font-mono">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="p-4 bg-gray-900 text-gray-100 rounded-xl overflow-x-auto mb-6 text-sm">
                {children}
            </pre>
        ),
        a: ({ children, href }) => (
            <a
                href={href}
                className="text-primary-500 hover:text-primary-600 underline underline-offset-4 transition-colors"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {children}
            </a>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-600 dark:text-gray-300">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-600 dark:text-gray-300">
                {children}
            </ol>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 italic text-gray-600 dark:text-gray-400 bg-primary-50/50 dark:bg-primary-900/20 rounded-r-lg">
                {children}
            </blockquote>
        ),
        ...components,
    }
}
