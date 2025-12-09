'use client'

import { useState } from 'react'

const trades = ['Electrician', 'Plumber', 'HVAC', 'Handyman'] as const
type Trade = typeof trades[number]

const examples: Record<Trade, { title: string; scope: string }> = {
  Electrician: {
    title: 'Install 200-Amp Electrical Panel Upgrade',
    scope: `SCOPE OF WORK
================

1. PROJECT OVERVIEW
-------------------
This Scope of Work covers the installation of a 200-amp electrical panel upgrade at the main service location. All work shall be executed in a workmanlike manner consistent with prevailing industry standards and all applicable codes and regulations.

2. SCOPE OF WORK
----------------
• Remove existing 100-amp electrical panel and associated wiring
• Furnish and install new 200-amp main breaker panel per manufacturer specifications
• Install new breakers and redistribute existing circuits
• Upgrade grounding system to meet current code requirements
• Install proper bonding for all metal systems
• Label all new and existing circuits at panel
• Coordinate inspections with local authority having jurisdiction
• Test all circuits for proper operation and safety

3. MATERIALS & RESPONSIBILITIES
-------------------------------
Contractor shall furnish all materials, equipment, labor, and supervision necessary to complete the work as specified herein. All materials shall be new and of good quality.

4. EXCLUSIONS & NOT INCLUDED
----------------------------
• Main service line work (utility company responsibility)
• Trenching or underground conduit work
• Low voltage systems (data, security, audio)
• Drywall repair or painting
• Permit fees (passed through at cost)
• Concealed or unforeseen conditions

5. CHANGES & EXTRAS
-------------------
Any modifications, additions, or work required due to concealed or unforeseen conditions discovered during execution shall be documented, priced, and approved as a separate Change Order prior to commencement of such additional work.

---
Generated with scopeofwork.app`,
  },
  Plumber: {
    title: 'Replace 50-Gallon Gas Water Heater',
    scope: `SCOPE OF WORK
================

1. PROJECT OVERVIEW
-------------------
This Scope of Work covers the replacement of an existing gas water heater with a new 50-gallon unit located in the garage. All work will be performed in a professional manner consistent with industry standards.

2. SCOPE OF WORK
----------------
• Disconnect and remove existing gas water heater
• Properly dispose of old unit at certified recycling facility
• Install new 50-gallon gas water heater per manufacturer specifications
• Connect to existing gas supply line with new flexible connector
• Connect to existing water supply and discharge lines
• Install new T&P relief valve and discharge line per code
• Install earthquake strapping (if required by local code)
• Test for gas leaks and proper operation
• Verify proper venting and draft
• Clean work area upon completion

3. MATERIALS & RESPONSIBILITIES
-------------------------------
Contractor to furnish all materials unless otherwise specified. Customer to provide the water heater unit if desired, otherwise contractor will furnish standard efficiency unit.

4. EXCLUSIONS & NOT INCLUDED
----------------------------
• Gas line extensions or modifications
• Venting modifications or new vent installation
• Water line relocation
• Electrical work
• Expansion tank installation
• Drywall or flooring repair

5. CHANGES & EXTRAS
-------------------
Any work outside this scope or due to unforeseen conditions will be priced and approved as a separate change order before work begins.

---
Generated with scopeofwork.app`,
  },
  HVAC: {
    title: 'Install 3-Ton Central Air Conditioning System',
    scope: `SCOPE OF WORK
================

1. PROJECT OVERVIEW
-------------------
This Scope of Work defines the services to be performed for the installation of a new 3-ton central air conditioning system. Work includes outdoor condensing unit and indoor evaporator coil. All work shall be executed in accordance with manufacturer specifications and applicable codes.

2. SCOPE OF WORK
----------------
• Remove and dispose of existing outdoor condensing unit
• Install new 3-ton outdoor condensing unit on existing pad
• Install new matching indoor evaporator coil
• Connect refrigerant lines and charge system
• Install new disconnect box (if required)
• Connect to existing thermostat wiring
• Test system for proper operation and temperature differential
• Verify proper drainage from evaporator coil
• Program thermostat settings
• Provide homeowner orientation on system operation
• Clean work area and remove all packaging

3. MATERIALS & RESPONSIBILITIES
-------------------------------
Contractor shall furnish all materials, equipment, labor, and supervision necessary to complete the work. System includes manufacturer warranty registration.

4. EXCLUSIONS & NOT INCLUDED
----------------------------
• New ductwork or duct modifications
• Electrical panel upgrades
• Thermostat replacement (using existing)
• Roof penetrations or flashing
• Attic insulation
• Permit fees (passed through at cost)

5. CHANGES & EXTRAS
-------------------
Any modifications, additions, or work required due to concealed or unforeseen conditions discovered during execution shall be documented, priced, and approved as a separate Change Order prior to commencement.

---
Generated with scopeofwork.app`,
  },
  Handyman: {
    title: 'Kitchen Faucet and Garbage Disposal Replacement',
    scope: `SCOPE OF WORK
================

1. PROJECT OVERVIEW
-------------------
This scope covers the replacement of a kitchen faucet and garbage disposal unit at the main kitchen sink. Work includes removal of old fixtures and installation of new units.

2. SCOPE OF WORK
----------------
• Remove existing kitchen faucet and supply lines
• Remove existing garbage disposal unit
• Install new customer-provided kitchen faucet
• Install new customer-provided garbage disposal
• Connect all supply lines and drain connections
• Test for leaks and proper operation
• Test disposal operation and drainage
• Clean work area upon completion

3. MATERIALS & RESPONSIBILITIES
-------------------------------
Owner to furnish faucet and garbage disposal units. Contractor to provide all supply lines, fittings, and installation materials.

4. EXCLUSIONS & NOT INCLUDED
----------------------------
• Electrical work or new outlet installation
• Drain line modifications
• Cabinet repair or modification
• Countertop work
• Fixtures (provided by customer)

5. CHANGES & EXTRAS
-------------------
Extra work will be quoted separately before starting. Any unexpected conditions will be discussed with homeowner before proceeding.

---
Generated with scopeofwork.app`,
  },
}

export function ExamplesContent() {
  const [activeTrade, setActiveTrade] = useState<Trade>('Electrician')

  return (
    <div className="space-y-8">
      {/* Trade Tabs */}
      <div className="flex flex-wrap gap-2">
        {trades.map((trade) => (
          <button
            key={trade}
            onClick={() => setActiveTrade(trade)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${activeTrade === trade
                ? 'bg-foreground text-background'
                : 'bg-muted text-foreground hover:bg-border'
              }
            `}
          >
            {trade}
          </button>
        ))}
      </div>

      {/* Example Content */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-2">
            {activeTrade}: {examples[activeTrade].title}
          </h2>
          <p className="text-sm text-muted-foreground">
            A complete scope of work example for a typical {activeTrade.toLowerCase()} job.
          </p>
        </div>

        <div className="bg-muted rounded-xl p-6 overflow-x-auto">
          <pre className="font-mono text-sm whitespace-pre-wrap">
            {examples[activeTrade].scope}
          </pre>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigator.clipboard.writeText(examples[activeTrade].scope)}
            className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Copy Example
          </button>
        </div>
      </div>

      {/* SEO Text */}
      <div className="pt-8 border-t border-border space-y-6">
        <h3 className="text-lg font-bold">About These Examples</h3>
        <p className="text-muted-foreground">
          These scope of work examples follow industry best practices and include all five 
          essential sections: project overview, detailed scope, materials responsibilities, 
          exclusions, and a change order clause. Each example is designed to be clear, 
          professional, and protective against scope creep.
        </p>
        <p className="text-muted-foreground">
          While these templates cover common jobs, every project is unique. Use our 
          free generator to create a custom scope tailored to your specific job requirements, 
          quantities, and customer needs.
        </p>
      </div>
    </div>
  )
}

