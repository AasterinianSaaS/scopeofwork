import { GeneratorCard } from '@/components/generator/GeneratorCard'
import { HomepageContent } from '@/components/seo/HomepageContent'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Free Scope of Work Generator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Write professional, customer-ready job descriptions in seconds. 
            Perfect for electricians, plumbers, HVAC techs, and contractors.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <GeneratorCard />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          <HomepageContent />
        </div>
      </section>
    </div>
  )
}

