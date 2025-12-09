import type { Metadata } from 'next'
import { GeneratorCard } from '@/components/generator/GeneratorCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Scope of Work Generator for Painters | scopeofwork.app',
  description: 'Create professional painting scopes of work in seconds. Free template for interior, exterior, residential, and commercial painting. No signup required.',
  keywords: 'painting scope of work, painter scope of work template, interior painting scope, exterior painting contract, painting estimate template',
  openGraph: {
    title: 'Free Scope of Work Generator for Painters',
    description: 'Create professional painting scopes of work in seconds. Interior, exterior, residential, and commercial.',
    url: 'https://scopeofwork.app/painter',
    siteName: 'scopeofwork.app',
    type: 'website',
  },
}

export default function PainterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Generator */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Painter Scope of Work Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prep work, coats, and cleanup—every painting job needs clear boundaries. 
              Create professional painting scopes that protect your profit in under 60 seconds.
            </p>
          </div>
          
          <GeneratorCard defaultTrade="Painter" />
        </div>
      </section>

      {/* Example Scopes Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Painting Scope of Work Examples
          </h2>
          
          <div className="space-y-8">
            {/* Example 1: Interior Full Repaint */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Whole House Interior Repaint</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Paint all walls and ceilings in living room, dining room, kitchen, and 3 bedrooms</li>
                  <li>Paint all interior doors (12) and door frames—both sides</li>
                  <li>Paint all baseboards, window trim, and crown molding</li>
                  <li>Prep work: fill nail holes, caulk gaps, sand rough areas</li>
                  <li>Apply one coat primer on repairs and bare spots</li>
                  <li>Apply two coats finish paint on all surfaces</li>
                  <li>Products: Sherwin-Williams Duration (walls), ProClassic (trim)</li>
                  <li>Walls: Flat/Matte finish | Trim: Semi-gloss finish</li>
                  <li>Mask and protect all flooring, fixtures, and hardware</li>
                  <li>Final touch-up walk with owner before completion</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Closet interiors (add $X per closet if desired)</li>
                  <li>Garage, laundry room, or unfinished areas</li>
                  <li>Wallpaper removal</li>
                  <li>Drywall repair beyond minor nail holes</li>
                  <li>Furniture moving (owner to clear 24" from walls)</li>
                </ul>
              </div>
            </div>

            {/* Example 2: Exterior Repaint */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Exterior House Repaint (2-Story)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Pressure wash all exterior surfaces to be painted</li>
                  <li>Scrape and sand loose or peeling paint</li>
                  <li>Caulk all gaps around windows, doors, and trim joints</li>
                  <li>Prime bare wood and repairs with exterior primer</li>
                  <li>Apply two coats exterior paint to all siding (approx. 2,400 sq ft)</li>
                  <li>Paint all exterior trim, fascia, and soffits</li>
                  <li>Paint front door and garage door (2 coats)</li>
                  <li>Paint shutters (8 total) on-site</li>
                  <li>Products: Benjamin Moore Regal Select (body), Aura (trim)</li>
                  <li>Mask and protect windows, landscaping, concrete</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Wood rot repair or replacement</li>
                  <li>Gutter painting or replacement</li>
                  <li>Deck or fence painting</li>
                  <li>Foundation or masonry painting</li>
                  <li>Lead paint abatement (pre-1978 homes)</li>
                </ul>
              </div>
            </div>

            {/* Example 3: Cabinet Painting */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Kitchen Cabinet Refinishing</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Remove all cabinet doors, drawer fronts, and hardware</li>
                  <li>Label and organize all pieces for reinstallation</li>
                  <li>Clean and degrease all surfaces</li>
                  <li>Sand/scuff all surfaces for adhesion</li>
                  <li>Apply bonding primer to all surfaces</li>
                  <li>Apply two coats cabinet-grade enamel (spray finish)</li>
                  <li>Paint cabinet boxes in place (brush and roll)</li>
                  <li>Reinstall all doors with new soft-close hinges (owner-provided)</li>
                  <li>Adjust doors for proper alignment</li>
                  <li>Product: Benjamin Moore Advance or SW Emerald Urethane</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Cabinet repair or modification</li>
                  <li>Interior of cabinets</li>
                  <li>Hardware supply (owner to provide)</li>
                  <li>Countertop or backsplash work</li>
                  <li>Appliance removal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            What to Include in a Painting Scope of Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">✅ Always Include</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Surface list:</strong> Exactly which walls, ceilings, trim, doors are included</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Prep work:</strong> Scraping, sanding, caulking, patching—be specific</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Coats:</strong> Primer + how many finish coats (usually 2)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Products:</strong> Brand, product line, sheen for each surface type</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Protection:</strong> What gets masked, covered, protected</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Cleanup:</strong> Debris removal, touch-up walk, leftover paint</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">⚠️ Common Exclusions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Drywall repair:</strong> Beyond minor nail holes and hairline cracks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Wallpaper:</strong> Removal, skim coating over residue</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Furniture moving:</strong> Who clears the room</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Wood rot:</strong> Repair or replacement of rotted trim</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Lead paint:</strong> Testing, abatement, special procedures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Closet interiors:</strong> Usually priced separately</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-background border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">💡 Pro Tips for Painting Scopes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2"><strong>Specify the sheen for every surface:</strong></p>
                <p className="text-sm">"Walls: flat/matte. Trim: semi-gloss. Doors: semi-gloss. Ceilings: flat." Sheen disputes are common—eliminate them upfront.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Name the paint products:</strong></p>
                <p className="text-sm">"Sherwin-Williams Duration" is different from "contractor-grade paint." If you're using premium products, say so—it justifies your price.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Be clear about coats:</strong></p>
                <p className="text-sm">"Two finish coats over primer on repairs." One coat rarely covers, especially for color changes. Set expectations for the right coverage.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Document furniture responsibility:</strong></p>
                <p className="text-sm">"Owner to move furniture 24" from walls prior to start." Or include moving in your scope and price. Either way, make it clear.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                What should a painting scope of work include?
              </h3>
              <p className="text-muted-foreground">
                A complete painting scope should list: exactly which surfaces are being painted (rooms, walls, ceilings, 
                trim, doors), prep work included (scraping, sanding, caulking, patching), number of coats (primer + finish), 
                paint products and sheens, protection/masking details, and cleanup expectations. Being specific prevents 
                "I thought you were painting that too" conversations.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How many coats should be in my painting estimate?
              </h3>
              <p className="text-muted-foreground">
                Standard practice is one coat of primer on repairs/bare spots plus two finish coats. One finish coat 
                rarely provides acceptable coverage, especially for color changes or covering dark colors. Your scope 
                should specify "two coats finish paint" and note that additional coats for dramatic color changes may 
                be quoted separately.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Does a painting scope include prep and cleanup?
              </h3>
              <p className="text-muted-foreground">
                It should explicitly state what prep and cleanup is included. Prep might include "fill nail holes, 
                caulk gaps, sand rough areas" but exclude "drywall repair, skim coating, or wallpaper removal." 
                Cleanup typically includes "remove masking, debris removal, touch-up walk, leave labeled leftover paint." 
                Spell it out.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Should I include paint brand in my scope?
              </h3>
              <p className="text-muted-foreground">
                Yes—it justifies your price and sets quality expectations. "Sherwin-Williams Duration" or "Benjamin Moore 
                Regal Select" tells the customer they're getting premium products. If you're using contractor-grade paint, 
                that's fine too, but be upfront. Never leave paint quality ambiguous.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I handle color selections in my scope?
              </h3>
              <p className="text-muted-foreground">
                Your scope should note: "Colors to be selected by owner prior to start. One color per surface type 
                (one wall color, one trim color, one ceiling color). Additional colors or accent walls may affect pricing." 
                This prevents scope creep from "can we do this wall a different color?" requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/examples" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">Scope Examples →</h3>
              <p className="text-sm text-muted-foreground">Browse examples across all trades</p>
            </Link>
            
            <Link 
              href="/how-to-write-a-scope-of-work" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">Writing Guide →</h3>
              <p className="text-sm text-muted-foreground">Learn scope of work best practices</p>
            </Link>
            
            <Link 
              href="/electrician" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">Electrician Scopes →</h3>
              <p className="text-sm text-muted-foreground">Scope generator for electricians</p>
            </Link>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Link 
              href="/plumber" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">Plumber Scopes →</h3>
              <p className="text-sm text-muted-foreground">Scope generator for plumbers</p>
            </Link>
            
            <Link 
              href="/hvac" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">HVAC Scopes →</h3>
              <p className="text-sm text-muted-foreground">Scope generator for HVAC techs</p>
            </Link>
            
            <Link 
              href="/roofer" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">Roofer Scopes →</h3>
              <p className="text-sm text-muted-foreground">Scope generator for roofers</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

