import type { Metadata } from 'next'
import { GeneratorCard } from '@/components/generator/GeneratorCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Scope of Work Generator for Plumbers | scopeofwork.app',
  description: 'Create professional plumbing scopes of work in seconds. Free template for water heaters, repiping, bathroom rough-ins, and more. No signup required.',
  keywords: 'plumber scope of work, plumbing scope of work template, plumbing contract template, plumber estimate template',
  openGraph: {
    title: 'Free Scope of Work Generator for Plumbers',
    description: 'Create professional plumbing scopes of work in seconds. Water heaters, repiping, bathroom rough-ins, and more.',
    url: 'https://scopeofwork.app/plumber',
    siteName: 'scopeofwork.app',
    type: 'website',
  },
}

export default function PlumberPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Generator */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Plumber Scope of Work Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avoid disputes over water damage, wall repairs, and "while you're here" requests. 
              Create clear, professional plumbing scopes in under 60 seconds.
            </p>
          </div>
          
          <GeneratorCard defaultTrade="Plumber" />
        </div>
      </section>

      {/* Example Scopes Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Plumbing Scope of Work Examples
          </h2>
          
          <div className="space-y-8">
            {/* Example 1: Water Heater Replacement */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 50-Gallon Gas Water Heater Replacement</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Disconnect and drain existing 40-gallon gas water heater</li>
                  <li>Remove and dispose of old unit at approved facility</li>
                  <li>Furnish and install new 50-gallon gas water heater (Rheem/AO Smith or equivalent)</li>
                  <li>Install new flexible water supply lines (hot and cold)</li>
                  <li>Install new gas flex connector with shutoff valve</li>
                  <li>Install new T&P relief valve and discharge pipe to within 6" of floor</li>
                  <li>Install 18" stand if in garage per code</li>
                  <li>Test for gas leaks and proper operation</li>
                  <li>Set temperature to 120°F and verify pilot/ignition</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Expansion tank installation (quoted separately if required)</li>
                  <li>Gas line upgrades or extensions</li>
                  <li>Venting modifications beyond basic reconnection</li>
                  <li>Water damage repair from previous leaks</li>
                  <li>Permit fees (passed through at cost)</li>
                </ul>
              </div>
            </div>

            {/* Example 2: Bathroom Rough-In */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Full Bathroom Rough-In (New Construction)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Install 3" PVC drain for toilet with closet flange</li>
                  <li>Install 2" PVC drain for shower/tub with P-trap</li>
                  <li>Install 1-1/2" PVC drain for lavatory with P-trap</li>
                  <li>Install 2" vent stack tied to existing vent system</li>
                  <li>Run 1/2" PEX hot and cold supply lines to all fixtures</li>
                  <li>Install quarter-turn shutoff valves at each fixture location</li>
                  <li>Install shower valve rough-in (Moen/Delta or owner-provided)</li>
                  <li>Pressure test all supply lines at 80 PSI for 30 minutes</li>
                  <li>DWV test per local code requirements</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Fixture installation (quoted as separate trim-out phase)</li>
                  <li>Drywall, tile, or flooring work</li>
                  <li>Electrical for vent fans or heated floors</li>
                  <li>Sewer line upgrades if undersized</li>
                </ul>
              </div>
            </div>

            {/* Example 3: Whole House Repipe */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Whole House Repipe (Copper to PEX)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Remove and dispose of existing copper/galvanized supply piping</li>
                  <li>Install new PEX-A supply system with manifold in garage</li>
                  <li>Run dedicated home-run lines to each fixture</li>
                  <li>Replace all angle stops with quarter-turn valves</li>
                  <li>Install new main shutoff valve at meter</li>
                  <li>Install new hose bibs (2) with vacuum breakers</li>
                  <li>Reconnect water heater, dishwasher, refrigerator ice maker</li>
                  <li>Pressure test entire system at 80 PSI</li>
                  <li>Obtain permit and schedule inspections</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Drywall repair and painting (contractor makes access holes only)</li>
                  <li>Fixture upgrades or replacement</li>
                  <li>Drain/waste/vent work</li>
                  <li>Slab penetrations (slab leak repair quoted separately)</li>
                  <li>Landscaping repair for underground work</li>
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
            What to Include in a Plumbing Scope of Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">✅ Always Include</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Fixture schedule:</strong> Exact fixtures—toilets, lavs, showers, water heaters with model numbers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Piping materials:</strong> PEX vs copper vs PVC/ABS, sizes, and connection types</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Tie-in points:</strong> Where new work connects to existing supply and drain lines</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Testing:</strong> Pressure test specs, DWV testing, leak checks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Code compliance:</strong> IPC/UPC, local amendments, permit requirements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Water shutoff:</strong> When water will be off and for how long</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">⚠️ Common Exclusions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Wall/floor access:</strong> Opening drywall, tile removal, concrete cutting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Finish work:</strong> Patching, painting, tile repair after plumbing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Pre-existing damage:</strong> Water damage, mold, rotted subfloor</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Sewer issues:</strong> Main line problems, root intrusion, bellied pipes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Other trades:</strong> Electrical, HVAC, carpentry</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Fixture supply:</strong> If customer is providing fixtures</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-background border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">💡 Pro Tips for Plumbing Scopes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2"><strong>Always address wall repairs:</strong></p>
                <p className="text-sm">"Contractor will make necessary access holes in drywall. Patching and painting by others." This is the #1 source of disputes in plumbing work.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Specify fixture responsibility:</strong></p>
                <p className="text-sm">State clearly: "Owner to provide all fixtures" or "Contractor to furnish [specific models]." Don't leave it ambiguous.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Document water damage liability:</strong></p>
                <p className="text-sm">"Contractor not responsible for pre-existing water damage, mold, or structural issues discovered during work." Inspect before you quote.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Include testing language:</strong></p>
                <p className="text-sm">"All supply lines pressure tested at 80 PSI for minimum 30 minutes. DWV system tested per local code." Shows professionalism.</p>
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
                What should be included in a plumbing scope of work?
              </h3>
              <p className="text-muted-foreground">
                A complete plumbing scope should include: fixture schedule with quantities and locations, piping materials 
                and sizes, connection points to existing systems, testing requirements, permit and inspection responsibilities, 
                and clear exclusions for wall repairs and pre-existing conditions. Specify who provides fixtures and who 
                handles water shutoff coordination.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Who is responsible for fixing walls after plumbing work?
              </h3>
              <p className="text-muted-foreground">
                This depends entirely on your scope of work—which is why it must be clearly stated. Most plumbers exclude 
                drywall repair and painting. Your scope should say something like: "Contractor will make necessary access 
                openings. Drywall patching, mudding, and painting by owner or others." Never assume the customer knows 
                this isn't included.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How detailed should a plumbing estimate be?
              </h3>
              <p className="text-muted-foreground">
                Detailed enough to avoid "that should be included" conversations. Specify exact fixture counts, pipe materials, 
                valve types, and testing procedures. For a bathroom remodel, list every fixture, every shutoff valve, 
                every drain connection. The 10 minutes you spend writing a detailed scope saves hours of arguing later.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Should I include permit costs in my plumbing scope?
              </h3>
              <p className="text-muted-foreground">
                Best practice is to list permits as "passed through at cost" or include actual permit fees as a line item. 
                Don't eat permit costs—they vary widely and can be substantial for large projects. Your scope should also 
                clarify who pulls the permit and who schedules inspections.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I protect myself from hidden plumbing problems?
              </h3>
              <p className="text-muted-foreground">
                Include a concealed conditions clause: "Price based on visible conditions. Hidden defects including 
                corroded pipes, improper venting, code violations, or water damage discovered during work will be 
                documented and priced as a change order before proceeding." Take photos during demo and communicate 
                immediately when you find issues.
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

