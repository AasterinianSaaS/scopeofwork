import type { Metadata } from 'next'
import { GeneratorCard } from '@/components/generator/GeneratorCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Scope of Work Generator for HVAC Contractors | scopeofwork.app',
  description: 'Create professional HVAC scopes of work in seconds. Free template for system changeouts, ductwork, mini-splits, and maintenance contracts. No signup required.',
  keywords: 'hvac scope of work, hvac scope of work template, ac installation scope, hvac contractor template, hvac maintenance scope',
  openGraph: {
    title: 'Free Scope of Work Generator for HVAC Contractors',
    description: 'Create professional HVAC scopes of work in seconds. System changeouts, ductwork, mini-splits, and more.',
    url: 'https://scopeofwork.app/hvac',
    siteName: 'scopeofwork.app',
    type: 'website',
  },
}

export default function HVACPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Generator */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              HVAC Scope of Work Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              System changeouts, ductwork modifications, and maintenance agreements—all require 
              clear documentation. Create professional HVAC scopes in under 60 seconds.
            </p>
          </div>
          
          <GeneratorCard defaultTrade="HVAC" />
        </div>
      </section>

      {/* Example Scopes Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            HVAC Scope of Work Examples
          </h2>
          
          <div className="space-y-8">
            {/* Example 1: Full System Changeout */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Complete HVAC System Replacement (3-Ton)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Remove and dispose of existing gas furnace and AC condenser</li>
                  <li>Furnish and install new 3-ton 16 SEER2 air conditioning system</li>
                  <li>Furnish and install new 80,000 BTU 80% AFUE gas furnace</li>
                  <li>Install new refrigerant line set (up to 30 linear feet)</li>
                  <li>Install new condensate drain line with safety float switch</li>
                  <li>Install new programmable thermostat (Honeywell or equivalent)</li>
                  <li>Seal all duct connections at furnace plenum</li>
                  <li>Perform system startup and commissioning per manufacturer specs</li>
                  <li>Verify airflow, refrigerant charge, and combustion analysis</li>
                  <li>Register equipment warranty with manufacturer</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Ductwork modifications or replacement</li>
                  <li>Electrical upgrades (if panel lacks capacity)</li>
                  <li>Gas line upgrades or extensions</li>
                  <li>Asbestos or mold remediation</li>
                  <li>Drywall repair or painting</li>
                </ul>
              </div>
            </div>

            {/* Example 2: Mini-Split Installation */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Ductless Mini-Split Installation (Single Zone)</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Furnish and install 12,000 BTU ductless mini-split system (Mitsubishi/Fujitsu or equivalent)</li>
                  <li>Mount indoor wall unit at agreed location</li>
                  <li>Install outdoor condenser on ground-level pad or wall bracket</li>
                  <li>Run refrigerant lines through wall (up to 25 linear feet)</li>
                  <li>Install line set cover for exterior runs</li>
                  <li>Run condensate drain to exterior or approved drain point</li>
                  <li>Install dedicated 240V circuit from panel to outdoor unit</li>
                  <li>Vacuum and charge system with R-410A refrigerant</li>
                  <li>Test heating and cooling operation, program remote</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Panel upgrade if no space for new breaker</li>
                  <li>Structural modifications or fire blocking</li>
                  <li>Interior patching or painting</li>
                  <li>Additional zones (quoted separately)</li>
                </ul>
              </div>
            </div>

            {/* Example 3: Ductwork Replacement */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📋 Attic Ductwork Replacement</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="font-medium text-foreground mb-3">Scope of Work:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Remove and dispose of existing flex ductwork in attic</li>
                  <li>Install new R-8 insulated flex duct to all supply registers (12 runs)</li>
                  <li>Install new insulated main trunk line from furnace plenum</li>
                  <li>Seal all connections with mastic and mechanical fasteners</li>
                  <li>Install new return air drop from hallway ceiling</li>
                  <li>Balance airflow to all rooms within 10% of design CFM</li>
                  <li>Perform duct leakage test (target <6% leakage)</li>
                  <li>Clean up all debris from attic work area</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-2">Exclusions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Register or grille replacement (reuse existing)</li>
                  <li>Insulation repair or replacement around ducts</li>
                  <li>Equipment replacement (furnace/AC)</li>
                  <li>Ceiling repairs if access holes required</li>
                  <li>Pest or rodent remediation</li>
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
            What to Include in an HVAC Scope of Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">✅ Always Include</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>System specs:</strong> Tonnage, BTU, SEER/SEER2, AFUE ratings</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Equipment brand:</strong> Carrier, Trane, Lennox, or "equivalent"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Ductwork details:</strong> New vs existing, modifications, sealing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Thermostat:</strong> Type, smart features, location</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Commissioning:</strong> Startup, testing, airflow balancing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span><strong>Warranty registration:</strong> Confirm equipment warranty enrollment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">⚠️ Common Exclusions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Electrical upgrades:</strong> Panel capacity, dedicated circuits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Gas line work:</strong> Upsizing, extensions, meter upgrades</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Structural work:</strong> Platform building, stand construction</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Ductwork:</strong> Unless specifically included in scope</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Hazmat:</strong> Asbestos, mold, or contamination</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Code upgrades:</strong> Bringing non-conforming work up to code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-background border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">💡 Pro Tips for HVAC Scopes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2"><strong>Include load calculation language:</strong></p>
                <p className="text-sm">"System sized per Manual J load calculation" or "Equipment sized to match existing system capacity." This protects you from undersizing claims.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Specify refrigerant line limitations:</strong></p>
                <p className="text-sm">"Line set included up to 30 linear feet. Additional length at $X per foot." Long runs add significant cost and time.</p>
              </div>
              <div>
                <p className="mb-2"><strong>Address old refrigerant:</strong></p>
                <p className="text-sm">If replacing R-22 equipment: "Existing R-22 refrigerant will be recovered per EPA regulations. New system uses R-410A."</p>
              </div>
              <div>
                <p className="mb-2"><strong>Document warranty clearly:</strong></p>
                <p className="text-sm">"10-year parts warranty, 1-year labor warranty from contractor. Owner must register equipment within 60 days to activate full warranty."</p>
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
                What should be included in an HVAC installation scope of work?
              </h3>
              <p className="text-muted-foreground">
                A complete HVAC installation scope should include: equipment specifications (tonnage, efficiency ratings, 
                brand), what's being removed, line set details, thermostat type, ductwork modifications if any, 
                commissioning procedures, permit responsibilities, and warranty information. Always specify what 
                electrical and gas work is included or excluded.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Does an HVAC scope include ductwork?
              </h3>
              <p className="text-muted-foreground">
                Not automatically—this must be explicitly stated. Many changeouts reuse existing ductwork. Your scope 
                should clearly say either "utilizing existing ductwork" or list specific duct modifications. If ductwork 
                is in poor condition, note it: "Existing ductwork in serviceable condition. Replacement quoted separately 
                if deterioration discovered during installation."
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                Are permits and load calculations part of the HVAC scope?
              </h3>
              <p className="text-muted-foreground">
                They should be addressed one way or another. Best practice: "Contractor to obtain mechanical permit. 
                Equipment sized per Manual J/S calculations or to match existing system capacity." Some contractors 
                include permit fees in the price; others pass them through. Either way, make it clear.
              </p>
            </div>
            
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I handle warranty language in HVAC scopes?
              </h3>
              <p className="text-muted-foreground">
                Be specific about manufacturer warranty vs labor warranty. Example: "Equipment includes 10-year parts 
                warranty from manufacturer (registration required within 60 days). Contractor provides 1-year labor 
                warranty on installation. Extended labor warranties available." This prevents warranty confusion later.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="font-semibold text-lg mb-2">
                What about maintenance agreements—should those have scopes too?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. A maintenance agreement scope should list exactly what's included per visit: filter replacement, 
                coil cleaning, refrigerant check, electrical inspection, etc. Also specify what's NOT included (repairs, 
                refrigerant top-offs, emergency calls). Clear maintenance scopes prevent "I thought tune-ups included repairs" 
                conversations.
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

