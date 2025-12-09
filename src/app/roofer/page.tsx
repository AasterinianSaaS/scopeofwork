import type { Metadata } from 'next'
import { GeneratorCard } from '@/components/generator/GeneratorCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Scope of Work Generator for Roofers | scopeofwork.app',
  description: 'Create professional roofing scopes of work in seconds. Free template for roof replacements, repairs, and inspections. No signup required.',
  keywords: 'roofing scope of work, roof replacement scope, roofing contract template, roofer estimate template, roof repair scope',
  openGraph: {
    title: 'Free Scope of Work Generator for Roofers',
    description: 'Create professional roofing scopes of work in seconds. Roof replacements, repairs, and inspections.',
    url: 'https://scopeofwork.app/roofer',
    siteName: 'scopeofwork.app',
    type: 'website',
  },
}

export default function RooferPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Generator */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Roofer Scope of Work Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tear-off, underlayment, flashing, decking—roofing has too many variables for vague proposals. 
              Create professional scopes that protect your margins in under 60 seconds.
            </p>
          </div>
          
          <GeneratorCard defaultTrade="Roofer" />
        </div>
      </section>

      {/* Example Scopes Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Roofing Scope of Work Examples
          </h2>
          
          <div className="space-y-8">
            {/* Example 1: Full Roof Replacement */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Complete Roof Replacement (Shingle)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Remove existing roofing material (one layer asphalt shingles)</li>
                  <li>Inspect roof decking and replace damaged sections as needed (up to 2 sheets included)</li>
                  <li>Install ice and water shield at all eaves (3' minimum) and valleys</li>
                  <li>Install synthetic underlayment on all remaining areas</li>
                  <li>Install new drip edge at eaves and rakes</li>
                  <li>Install GAF Timberline HDZ architectural shingles (owner to select color)</li>
                  <li>Install step flashing and counter flashing at all wall intersections</li>
                  <li>Re-flash all pipe boots with new lead or neoprene boots</li>
                  <li>Install new ridge vent (50 linear feet) and ridge cap shingles</li>
                  <li>Install new chimney flashing and counter flashing</li>
                  <li>Clean gutters and all debris from roof and property</li>
                  <li>Magnetic sweep of yard and driveway for nails</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Decking replacement beyond 2 sheets (priced at $X per sheet)</li>
                  <li>Gutter replacement or repair</li>
                  <li>Fascia or soffit repair</li>
                  <li>Skylight replacement or repair</li>
                  <li>Interior damage from pre-existing leaks</li>
                </ul>
              </div>
            </div>

            {/* Example 2: Flat Roof */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Commercial Flat Roof (TPO)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Remove existing built-up roofing down to deck</li>
                  <li>Inspect and repair wood deck as needed (up to 4 sheets included)</li>
                  <li>Install 1/2" tapered ISO insulation for positive drainage</li>
                  <li>Install 60-mil TPO membrane, fully adhered</li>
                  <li>Install TPO-coated drip edge at all perimeter edges</li>
                  <li>Flash all penetrations (HVAC curbs, pipes, drains) with TPO</li>
                  <li>Install new 4" TPO drain boots at existing drain locations (4 total)</li>
                  <li>Install 12" TPO termination bar at all wall flashings</li>
                  <li>Seal all seams with hot-air weld per manufacturer specs</li>
                  <li>Final inspection and photo documentation</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>HVAC unit removal/reinstallation</li>
                  <li>Parapet cap replacement</li>
                  <li>Structural repairs</li>
                  <li>Interior ceiling repairs</li>
                  <li>Drain line repairs below roof level</li>
                </ul>
              </div>
            </div>

            {/* Example 3: Roof Repair */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Roof Leak Repair</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Identify and document leak source at chimney flashing</li>
                  <li>Remove existing chimney flashing and counter flashing</li>
                  <li>Install new step flashing along chimney sides</li>
                  <li>Install new counter flashing with reglet cut into mortar joint</li>
                  <li>Seal all flashing joints with polyurethane sealant</li>
                  <li>Replace damaged shingles in work area (up to 1 bundle)</li>
                  <li>Water test repair before leaving site</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Chimney masonry repair or tuckpointing</li>
                  <li>Interior drywall or ceiling repair</li>
                  <li>Mold remediation</li>
                  <li>Additional leak sources discovered during repair</li>
                  <li>Shingles beyond 1 bundle (priced separately)</li>
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
            What to Include in a Roofing Scope of Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">✅ Always Include</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Tear-off layers:</strong> How many layers removed, disposal included</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Decking allowance:</strong> How many sheets of plywood included</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Underlayment:</strong> Ice & water shield locations, synthetic felt areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Shingle specs:</strong> Brand, product line, weight, color</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Flashing:</strong> Step, counter, chimney, valleys, pipe boots</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Ventilation:</strong> Ridge vent, box vents, intake improvements</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">⚠️ Common Exclusions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Wood rot:</strong> Fascia, soffit, rafters beyond decking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Gutters:</strong> Replacement, repair, or cleaning beyond project</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Skylights:</strong> Replacement or repair (flash existing only)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Interior damage:</strong> Ceilings, insulation, drywall</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Chimney masonry:</strong> Tuckpointing, cap, crown repair</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Code upgrades:</strong> Adding vents if not currently present</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-background border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">💡 Pro Tips for Roofing Scopes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2"><strong>Always include a decking allowance:</strong></p>
                <p className="text-sm">"Includes replacement of up to 2 sheets of OSB/plywood. Additional sheets at $75 each." This prevents surprise costs and scope disputes.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Specify ice & water shield locations:</strong></p>
                <p className="text-sm">"Ice and water shield at all eaves (first 3'), valleys, and around penetrations." This is a major cost factor—be explicit.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Document shingle warranty:</strong></p>
                <p className="text-sm">"GAF Timberline HDZ with manufacturer's limited lifetime warranty. Contractor provides 5-year workmanship warranty." Warranty clarity prevents callbacks.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Address weather delays:</strong></p>
                <p className="text-sm">"Work schedule subject to weather conditions. Contractor will protect exposed areas if work cannot be completed same day." Roofing is weather-dependent.</p>
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
                What should be included in a roofing scope of work?
              </h3>
              <p className="text-muted-foreground">
                A complete roofing scope should include: tear-off details (layers, disposal), decking inspection and 
                replacement allowance, underlayment specifications (ice & water shield, synthetic felt), shingle brand 
                and product, all flashing work (step, counter, valleys, penetrations), ventilation modifications, 
                cleanup procedures, and warranty information. Clearly separate what's included from what's excluded.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Does a roofing scope include gutters, fascia, and soffit?
              </h3>
              <p className="text-muted-foreground">
                Typically no—these are usually quoted separately. Your scope should explicitly state: "Excludes gutter 
                replacement, fascia repair, and soffit work. These items can be quoted separately if needed." If you 
                ARE including them, list the specific work. Never leave it ambiguous.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I handle rotten decking in my roofing scope?
              </h3>
              <p className="text-muted-foreground">
                Include a reasonable allowance: "Price includes replacement of up to X sheets of plywood/OSB. Additional 
                decking replacement at $X per sheet, to be approved before installation." Document the condition before 
                tear-off and communicate immediately when you find damage. Get approval before installing extra sheets.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                What warranty language should be in my roofing scope?
              </h3>
              <p className="text-muted-foreground">
                Include both manufacturer and workmanship warranties: "Shingles include manufacturer's limited lifetime 
                warranty (see manufacturer documentation). Contractor provides X-year workmanship warranty covering 
                installation defects and leaks caused by installation errors." Be clear about what voids each warranty.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Should I include weather delays in my roofing scope?
              </h3>
              <p className="text-muted-foreground">
                Yes—roofing is highly weather-dependent. Include language like: "Start and completion dates subject to 
                weather conditions. Contractor will protect exposed areas with tarps if work cannot be completed same 
                day due to weather. Contractor not responsible for delays caused by weather or material availability."
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
              href="/painter" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">Painter Scopes →</h3>
              <p className="text-sm text-muted-foreground">Scope generator for painters</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

