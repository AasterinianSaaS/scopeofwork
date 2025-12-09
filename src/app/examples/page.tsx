import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamplesContent } from '@/components/seo/ExamplesContent'

export const metadata: Metadata = {
  title: 'Scope of Work Examples for Contractors | Electrician, Plumber, HVAC Templates',
  description: 'View real scope of work examples for electricians, plumbers, HVAC techs, and handymen. Copy and customize for your next job. Free templates and samples.',
  keywords: 'scope of work example, contractor scope template, plumbing scope example, electrician job description example, hvac scope of work sample',
}

export default function ExamplesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Scope of Work Examples
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples for common contractor jobs. 
            Use these as templates or create your own with our free generator.
          </p>
        </div>
      </section>

      {/* Examples Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <ExamplesContent />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Create Your Own Custom Scope
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our free generator creates professional scopes tailored to your specific job. 
            No signup required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Scope
          </Link>
        </div>
      </section>
    </div>
  )
}

