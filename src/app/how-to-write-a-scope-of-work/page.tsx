import type { Metadata } from 'next'
import Link from 'next/link'
import { HowToContent } from '@/components/seo/HowToContent'

export const metadata: Metadata = {
  title: 'How to Write a Scope of Work | Contractor\'s Complete Guide (2024)',
  description: 'Learn how to write clear scopes of work that win jobs and prevent scope creep. Includes templates, examples, and a free generator tool for contractors.',
  keywords: 'how to write a scope of work, scope of work template, contractor scope, SOW guide, prevent scope creep, construction scope of work',
}

export default function HowToPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Contractor&apos;s Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How to Write a Scope of Work
            </h1>
            <p className="text-lg text-muted-foreground">
              A clear scope of work is the difference between a profitable job and a nightmare. 
              Learn how to write scopes that protect your business and keep customers happy.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <HowToContent />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Scope?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Use everything you&apos;ve learned with our free generator. 
            Create professional scopes in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
            >
              Generate Your Scope
            </Link>
            <Link
              href="/examples"
              className="inline-flex items-center justify-center h-12 px-8 font-medium border border-border rounded-lg hover:bg-muted transition-colors"
            >
              View Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

