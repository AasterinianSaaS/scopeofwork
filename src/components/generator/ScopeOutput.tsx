'use client'

import { ScopeOutput as ScopeOutputType } from '@/types'
import { ExportButtons } from './ExportButtons'

interface ScopeOutputProps {
  output: ScopeOutputType
  onReset: () => void
}

export function ScopeOutput({ output, onReset }: ScopeOutputProps) {
  const { header, sections } = output

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Your Scope of Work</h2>
        <button
          onClick={onReset}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Start Over
        </button>
      </div>

      {/* Scope Content */}
      <div className="bg-muted rounded-xl p-6 space-y-6 font-mono text-sm">
        {/* Document Header */}
        {(header.companyName || header.customerName || header.quoteNumber) && (
          <div className="pb-4 border-b border-border space-y-1">
            {header.companyName && (
              <p className="font-bold text-base">{header.companyName}</p>
            )}
            {header.customerName && (
              <p>Customer: {header.customerName}</p>
            )}
            <p>Date: {new Date(header.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            {header.quoteNumber && (
              <p>Quote #: {header.quoteNumber}</p>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-center uppercase tracking-wider">
          Scope of Work
        </h3>

        {/* Section 1: Project Overview */}
        <div>
          <h4 className="font-bold mb-2">1. Project Overview</h4>
          <p className="whitespace-pre-wrap">{sections.projectOverview}</p>
        </div>

        {/* Section 2: Scope of Work */}
        <div>
          <h4 className="font-bold mb-2">2. Scope of Work</h4>
          <ul className="list-disc list-inside space-y-1">
            {sections.scopeOfWork.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Section 3: Materials & Responsibilities */}
        <div>
          <h4 className="font-bold mb-2">3. Materials & Responsibilities</h4>
          <p className="whitespace-pre-wrap">{sections.materialsResponsibilities}</p>
        </div>

        {/* Section 4: Exclusions */}
        <div>
          <h4 className="font-bold mb-2">4. Exclusions & Not Included</h4>
          <ul className="list-disc list-inside space-y-1">
            {sections.exclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Section 5: Changes Clause */}
        <div>
          <h4 className="font-bold mb-2">5. Changes & Extras</h4>
          <p className="whitespace-pre-wrap">{sections.changesClause}</p>
        </div>
      </div>

      {/* Export Buttons */}
      <ExportButtons output={output} />
    </div>
  )
}

