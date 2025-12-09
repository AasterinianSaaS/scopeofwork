import type { Metadata } from 'next'
import { GeneratorCard } from '@/components/generator/GeneratorCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Scope of Work Generator for Electricians | scopeofwork.app',
  description: 'Create professional electrical scopes of work in seconds. Free template for panel upgrades, EV chargers, rewiring, and more. No signup required.',
  keywords: 'electrician scope of work, electrical scope of work template, panel upgrade scope, electrical contractor template',
  openGraph: {
    title: 'Free Scope of Work Generator for Electricians',
    description: 'Create professional electrical scopes of work in seconds. Panel upgrades, EV chargers, rewiring, and more.',
    url: 'https://scopeofwork.app/electrician',
    siteName: 'scopeofwork.app',
    type: 'website',
  },
}

export default function ElectricianPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Generator */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Electrician Scope of Work Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop losing money to scope creep. Create clear, professional scopes for panel upgrades, 
              rewiring, EV chargers, and any electrical job—in under 60 seconds.
            </p>
          </div>
          
          <GeneratorCard defaultTrade="Electrician" />
        </div>
      </section>

      {/* Example Scopes Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Electrical Scope of Work Examples
          </h2>
          
          <div className="space-y-8">
            {/* Example 1: Panel Upgrade */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 200-Amp Panel Upgrade</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Remove and dispose of existing 100-amp electrical panel</li>
                  <li>Furnish and install new 200-amp main breaker panel (Square D or equivalent)</li>
                  <li>Install new 200-amp meter base as required by utility</li>
                  <li>Re-terminate all existing branch circuits to new panel</li>
                  <li>Install whole-house surge protector</li>
                  <li>Label all circuits per NEC requirements</li>
                  <li>Coordinate utility disconnect and reconnection</li>
                  <li>Obtain permit and schedule inspections with local AHJ</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Aluminum wiring remediation (quoted separately if discovered)</li>
                  <li>Drywall patching or painting</li>
                  <li>Running new circuits beyond panel capacity</li>
                  <li>Repair of existing wiring deficiencies</li>
                </ul>
              </div>
            </div>

            {/* Example 2: EV Charger Installation */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Level 2 EV Charger Installation</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Install customer-provided Level 2 EV charger (48-amp)</li>
                  <li>Run new 6/3 NM-B cable from main panel to garage location (up to 50 ft)</li>
                  <li>Install new 60-amp double-pole breaker in existing panel</li>
                  <li>Mount NEMA 14-50 outlet or hardwire unit per manufacturer specs</li>
                  <li>Test charging station for proper operation</li>
                  <li>Obtain electrical permit and final inspection</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>EV charger unit (owner-furnished)</li>
                  <li>Panel upgrade if insufficient capacity</li>
                  <li>Trenching for underground runs</li>
                  <li>Drywall or concrete penetration repair</li>
                </ul>
              </div>
            </div>

            {/* Example 3: Kitchen Circuit Addition */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Kitchen Electrical Upgrade</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Install (2) new 20-amp small appliance circuits for countertop receptacles</li>
                  <li>Install dedicated 20-amp circuit for dishwasher</li>
                  <li>Install dedicated 50-amp circuit for electric range</li>
                  <li>Install GFCI protection at all countertop and sink locations per NEC</li>
                  <li>Install AFCI breakers for all new kitchen circuits</li>
                  <li>Replace existing ungrounded outlets with grounded receptacles</li>
                  <li>Install under-cabinet lighting on dedicated switch</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Cabinet removal or reinstallation</li>
                  <li>Drywall repair, patching, or painting</li>
                  <li>Appliance hookup (range, dishwasher)</li>
                  <li>Hidden junction box remediation</li>
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
            What to Include in an Electrical Scope of Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">✅ Always Include</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Panel details:</strong> Amperage (100A/200A), brand, location</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Circuit specs:</strong> Number of circuits, amperage, dedicated vs shared</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Safety devices:</strong> GFCI locations, AFCI requirements, surge protection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Code compliance:</strong> NEC version, local amendments, permit requirements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Wire specs:</strong> Gauge, type (NM-B, MC, conduit)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Fixtures/devices:</strong> Exact count of outlets, switches, fixtures</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">⚠️ Common Exclusions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Drywall work:</strong> Patching, mudding, painting after wire runs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Aluminum wiring:</strong> Remediation if discovered during work</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Hidden conditions:</strong> Buried junction boxes, knob-and-tube</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Structural work:</strong> Moving walls, beams, or load-bearing elements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Other trades:</strong> Plumbing, HVAC, low-voltage/data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Code upgrades:</strong> Bringing entire house up to current code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-background border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">💡 Pro Tips for Electrical Scopes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2"><strong>Be specific about wire runs:</strong></p>
                <p className="text-sm">Instead of "run new wire," say "run 12/2 NM-B from panel to garage, approximately 75 linear feet, surface-mounted in finished spaces."</p>
              </div>
              <div>
                <p className="mb-2"><strong>Call out inspection responsibility:</strong></p>
                <p className="text-sm">Specify who schedules inspections and what happens if corrections are needed. "Contractor to obtain permit and schedule rough/final inspections."</p>
              </div>
              <div>
                <p className="mb-2"><strong>Address panel space:</strong></p>
                <p className="text-sm">"If existing panel lacks space for new breakers, panel upgrade will be quoted as change order." This prevents surprise costs.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Document existing conditions:</strong></p>
                <p className="text-sm">Note any known issues upfront: "Existing panel is Federal Pacific—recommend replacement for safety (separate quote)."</p>
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
                What should be included in an electrical scope of work?
              </h3>
              <p className="text-muted-foreground">
                A complete electrical scope should include: specific work to be performed (panel size, circuit count, 
                device quantities), materials and equipment specifications, code compliance requirements (NEC, local codes), 
                permit and inspection responsibilities, and clear exclusions. Always specify amperage, wire gauge, 
                and safety device requirements (GFCI/AFCI locations).
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How detailed should an electrician's scope of work be?
              </h3>
              <p className="text-muted-foreground">
                Detailed enough that another licensed electrician could complete the job from your description alone. 
                Include specific quantities (not "some outlets" but "6 duplex receptacles"), locations, circuit assignments, 
                and any conditions that would trigger a change order. The more specific you are upfront, the fewer 
                disputes you'll have later.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Do I need a scope of work for small electrical jobs?
              </h3>
              <p className="text-muted-foreground">
                Yes—especially for small jobs. A quick outlet addition can turn into a panel upgrade if you discover 
                aluminum wiring or a full panel. Even a simple scope that says "install one 20-amp GFCI outlet in garage; 
                excludes panel upgrades, drywall repair, or hidden condition remediation" protects you from scope creep.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                What's the difference between a scope of work and an estimate?
              </h3>
              <p className="text-muted-foreground">
                An estimate shows pricing. A scope of work defines exactly what's included (and excluded) for that price. 
                The best practice is to attach your scope to every estimate. When a customer asks "can you also add an 
                outlet in the bathroom?" you can point to the scope and say "that's not included, but I can add it for $X."
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I handle unknown conditions in electrical work?
              </h3>
              <p className="text-muted-foreground">
                Always include a "concealed conditions" clause. Something like: "This scope is based on visible conditions 
                only. Hidden defects including but not limited to aluminum wiring, buried junction boxes, damaged conductors, 
                or code violations discovered during work will be documented and priced as a change order before proceeding." 
                This protects you legally and sets customer expectations.
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
              href="/plumber" 
              className="bg-background border border-border rounded-xl p-4 hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">Plumber Scopes →</h3>
              <p className="text-sm text-muted-foreground">Scope generator for plumbers</p>
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

