export interface ScopeInput {
  // Header fields (optional)
  companyName: string
  customerName: string
  date: string
  quoteNumber: string

  // Core fields
  trade: string
  jobTitle: string
  jobLocation: string
  quantities: string
  workItems: string  // User-specified tasks, one per line

  // Responsibilities
  materialsResponsibility: 'contractor' | 'customer' | 'mixed'

  // Inclusions (checkboxes)
  includePermits: boolean
  includeDisposal: boolean
  includePatchPaint: boolean

  // Notes
  specialNotes: string

  // Output controls
  scopeLength: 'brief' | 'standard' | 'detailed'
  tone: 'simple' | 'standard' | 'professional'
}

export interface ScopeOutput {
  header: {
    companyName?: string
    customerName?: string
    date: string
    quoteNumber?: string
  }
  sections: {
    projectOverview: string
    scopeOfWork: string[]
    materialsResponsibilities: string
    exclusions: string[]
    changesClause: string
  }
  plainText: string
}

export interface TradeData {
  name: string
  commonTasks: string[]
  commonExclusions: string[]
  keywords: string[]
}

export type MaterialsResponsibility = 'contractor' | 'customer' | 'mixed'
export type ScopeLength = 'brief' | 'standard' | 'detailed'
export type Tone = 'simple' | 'standard' | 'professional'

