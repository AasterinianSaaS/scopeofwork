import type { Metadata } from 'next'
import { GeneratorCard } from '@/components/generator/GeneratorCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Scope of Work Generator for General Contractors | scopeofwork.app',
  description: 'Create professional scopes of work for remodels, additions, and construction projects. Free template for general contractors. No signup required.',
  keywords: 'general contractor scope of work, construction scope of work template, remodel scope, contractor estimate template, home renovation scope',
  openGraph: {
    title: 'Free Scope of Work Generator for General Contractors',
    description: 'Create professional scopes of work for remodels, additions, and construction projects.',
    url: 'https://scopeofwork.app/general-contractor',
    siteName: 'scopeofwork.app',
    type: 'website',
  },
}

export default function GeneralContractorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Generator */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              General Contractor Scope of Work Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-trade projects need bulletproof scopes. Coordinate subs, manage phases, 
              and protect your margins with professional documentation—in under 60 seconds.
            </p>
          </div>
          
          <GeneratorCard defaultTrade="General Contractor" />
        </div>
      </section>

      {/* Example Scopes Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            General Contractor Scope of Work Examples
          </h2>
          
          <div className="space-y-8">
            {/* Example 1: Bathroom Remodel */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Full Bathroom Remodel</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Demolition: Remove existing vanity, toilet, tub/shower, flooring, and wall tile</li>
                  <li>Dispose of all demolition debris in contractor-provided dumpster</li>
                  <li>Rough plumbing: Relocate drain for new vanity, new shower valve rough-in</li>
                  <li>Electrical: Add dedicated 20-amp GFCI circuit, relocate lighting to new layout</li>
                  <li>Framing: Build new shower curb, blocking for grab bars and accessories</li>
                  <li>Install cement board on shower walls and floor</li>
                  <li>Waterproof shower pan and walls with Kerdi or equivalent</li>
                  <li>Install owner-selected tile on shower walls, floor, and niche</li>
                  <li>Install new LVP flooring throughout bathroom</li>
                  <li>Install owner-selected vanity, countertop, and faucet</li>
                  <li>Install new toilet (Toto Drake or equivalent)</li>
                  <li>Install shower door (semi-frameless, clear glass)</li>
                  <li>Paint walls and ceiling (2 coats, owner-selected color)</li>
                  <li>Install all accessories: towel bars, toilet paper holder, mirror</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Structural modifications beyond shower curb</li>
                  <li>HVAC modifications or vent fan ducting changes</li>
                  <li>Mold remediation if discovered</li>
                  <li>Plumbing repairs beyond project scope (main line, water heater)</li>
                  <li>Fixture supply (owner-provided unless noted)</li>
                </ul>
              </div>
            </div>

            {/* Example 2: Kitchen Remodel */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Kitchen Remodel (Partial)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Protect all adjacent flooring and areas during construction</li>
                  <li>Remove existing cabinets, countertops, and backsplash</li>
                  <li>Remove flooring in kitchen area only</li>
                  <li>Electrical: Add under-cabinet lighting, upgrade to 20-amp kitchen circuits</li>
                  <li>Plumbing: Install new sink and garbage disposal, dishwasher hookup</li>
                  <li>Repair drywall as needed after demo</li>
                  <li>Install new cabinets per approved layout (KraftMaid or equivalent)</li>
                  <li>Install quartz countertops with undermount sink cutout</li>
                  <li>Install tile backsplash (subway tile, owner-selected)</li>
                  <li>Install new LVP flooring</li>
                  <li>Connect all appliances (owner-provided)</li>
                  <li>Paint walls and ceiling (2 coats)</li>
                  <li>Install cabinet hardware (owner-provided)</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Appliance purchase</li>
                  <li>Wall removal or structural changes</li>
                  <li>Gas line work (if converting to gas range)</li>
                  <li>Flooring outside kitchen footprint</li>
                  <li>Ceiling texture repair if needed</li>
                </ul>
              </div>
            </div>

            {/* Example 3: Room Addition */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Bedroom Addition (12' x 14')</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Obtain all required permits (building, electrical, mechanical)</li>
                  <li>Excavation and concrete foundation per engineered plans</li>
                  <li>Frame walls, ceiling, and roof structure per approved plans</li>
                  <li>Install exterior sheathing, house wrap, and siding to match existing</li>
                  <li>Install roofing to match existing (tie into main roof)</li>
                  <li>Install windows (2) and exterior door per plan</li>
                  <li>Rough electrical: 4 outlets, 2 switches, 2 light fixtures, smoke detector</li>
                  <li>HVAC: Extend existing system with new supply and return</li>
                  <li>Insulation: R-21 walls, R-38 ceiling</li>
                  <li>Drywall: Hang, tape, texture to match existing</li>
                  <li>Interior trim: Baseboards, door casing, window trim</li>
                  <li>Paint: Prime and 2 coats on all surfaces</li>
                  <li>Flooring: LVP to match or complement existing</li>
                  <li>Schedule and pass all required inspections</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Landscaping restoration</li>
                  <li>Fence modification or replacement</li>
                  <li>Closet systems or built-ins</li>
                  <li>Furniture or window treatments</li>
                  <li>Unforeseen soil conditions requiring engineering</li>
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
            What to Include in a General Contractor Scope of Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">✅ Always Include</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Project phases:</strong> Demo, rough, finish—break it down</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Trade breakdown:</strong> What each sub will do</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Material specs:</strong> Brands, grades, allowances</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Permits:</strong> Who pulls them, who pays, who schedules inspections</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Owner responsibilities:</strong> Selections, access, decisions by date</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Change order process:</strong> How extras are handled</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">⚠️ Common Exclusions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Concealed conditions:</strong> Rot, mold, asbestos, bad wiring</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Code upgrades:</strong> Bringing existing work up to current code</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Structural issues:</strong> Foundation, framing beyond scope</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Landscaping:</strong> Usually separate scope</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Appliances/fixtures:</strong> Unless specifically included</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Work in other areas:</strong> "While you're here" requests</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-background border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">💡 Pro Tips for GC Scopes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2"><strong>Use allowances strategically:</strong></p>
                <p className="text-sm">"Tile allowance: $8/sq ft installed. Selections exceeding allowance will be reconciled at project end." This keeps budgets flexible but accountable.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Define selection deadlines:</strong></p>
                <p className="text-sm">"All tile selections due by [date]. Delays in selections may impact project schedule." This prevents bottlenecks from indecisive clients.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Document existing conditions:</strong></p>
                <p className="text-sm">Take photos before demo. "Scope based on visible conditions. Hidden issues discovered during demo will be documented and priced as change orders."</p>
              </div>
              <div>
                <p className="mb-2"><strong>Clarify "match existing":</strong></p>
                <p className="text-sm">"New siding to match existing as closely as possible. Exact match not guaranteed due to weathering and product availability." Manage expectations.</p>
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
                How detailed should a general contractor's scope of work be?
              </h3>
              <p className="text-muted-foreground">
                Extremely detailed for remodels and additions. Break down work by trade (demo, framing, electrical, 
                plumbing, HVAC, drywall, paint, flooring, trim). Specify material grades and brands where applicable. 
                Include what's NOT included. A good test: could another GC complete this job from your scope alone? 
                If not, add more detail.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I handle material allowances in my scope?
              </h3>
              <p className="text-muted-foreground">
                Set clear allowances: "Tile: $X per square foot installed" or "Light fixture allowance: $500 total." 
                State that selections exceeding the allowance will be reconciled—either as an add to the contract 
                or at final billing. This gives clients flexibility while protecting your budget.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                What's the best way to handle concealed conditions?
              </h3>
              <p className="text-muted-foreground">
                Include explicit language: "Price based on visible conditions. Concealed conditions including but not 
                limited to water damage, mold, rot, improper framing, outdated wiring, or code violations discovered 
                during construction will be documented, priced, and approved as change orders before proceeding." 
                Document everything with photos.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Should my scope include a project schedule?
              </h3>
              <p className="text-muted-foreground">
                Yes, but with caveats. Include estimated duration and major milestones, but add: "Schedule subject to 
                weather, material availability, permit timing, and timely owner decisions. Delays caused by owner 
                selection changes or access issues may extend timeline." This protects you from delay claims.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I protect against "while you're here" scope creep?
              </h3>
              <p className="text-muted-foreground">
                Your scope should end with: "Work not specifically listed above is excluded. Additional work requested 
                during construction will be documented and priced as a change order before work begins." When clients 
                ask for extras, point to this clause and provide a written change order. No verbal agreements.
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

