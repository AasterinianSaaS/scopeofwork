import { ScopeInput, ScopeOutput, Tone, ScopeLength } from '@/types'
import { findTradeByInput } from './trades'

// Tone-specific templates
const toneTemplates = {
  simple: {
    projectOverview: (job: string, location?: string) =>
      `This covers ${job}${location ? ` in the ${location}` : ''}.`,
    taskPrefix: '',
    taskSuffix: '',
    materialsContractor: 'We provide all materials needed for this job.',
    materialsCustomer: 'Customer provides all materials. We provide labor only.',
    materialsMixed: 'Some materials provided by contractor, some by customer (see notes).',
    changeOrder: 'Extra work will be quoted separately before starting.',
  },
  standard: {
    projectOverview: (job: string, location?: string) =>
      `This Scope of Work covers ${job}${location ? ` located at/in ${location}` : ''}. All work will be performed in a professional manner consistent with industry standards.`,
    taskPrefix: '',
    taskSuffix: '',
    materialsContractor: 'Contractor to furnish all materials unless otherwise specified.',
    materialsCustomer: 'Owner to furnish all materials. Contractor to provide labor only.',
    materialsMixed: 'Materials responsibility is split between contractor and owner as detailed in the notes section.',
    changeOrder: 'Any work outside this scope or due to unforeseen conditions will be priced and approved as a separate change order before work begins.',
  },
  professional: {
    projectOverview: (job: string, location?: string) =>
      `This Scope of Work ("SOW") defines the services to be performed for ${job}${location ? `, located at/in ${location}` : ''}. All work shall be executed in a workmanlike manner consistent with prevailing industry standards and all applicable codes and regulations.`,
    taskPrefix: 'Furnish and install ',
    taskSuffix: ' per manufacturer specifications and applicable codes',
    materialsContractor: 'Contractor shall furnish all materials, equipment, labor, and supervision necessary to complete the work as specified herein. All materials shall be new and of good quality unless otherwise specified.',
    materialsCustomer: 'Owner shall furnish all materials specified for this project. Contractor shall provide all labor, equipment, and supervision necessary to install Owner-furnished materials.',
    materialsMixed: 'Materials responsibility is divided between Contractor and Owner as specifically detailed in the project notes. Contractor-furnished materials shall be new and of good quality.',
    changeOrder: 'Any modifications, additions, or work required due to concealed or unforeseen conditions discovered during execution shall be documented, priced, and approved as a separate Change Order prior to commencement of such additional work.',
  },
}

// Task count by length
const taskCounts: Record<ScopeLength, number> = {
  brief: 4,
  standard: 7,
  detailed: 12,
}

// Exclusion count by length
const exclusionCounts: Record<ScopeLength, number> = {
  brief: 3,
  standard: 5,
  detailed: 7,
}

// Base exclusions that apply to most jobs
const baseExclusions = [
  'Structural modifications or repairs',
  'Relocation of existing systems or utilities',
  'Drywall repair or painting unless specifically included',
  'Flooring work unless specifically included',
  'Concealed or unforeseen conditions',
  'Permit fees unless specifically included',
  'Work not explicitly listed in this scope',
  'Hazardous material abatement (asbestos, lead, mold)',
]

export function generateScope(input: ScopeInput): ScopeOutput {
  const tone = toneTemplates[input.tone]
  const trade = findTradeByInput(input.trade || input.jobTitle)

  // Build sections
  const projectOverview = buildProjectOverview(input, tone)
  const scopeOfWork = buildScopeOfWork(input, trade, tone)
  const materialsResponsibilities = buildMaterials(input, tone)
  const exclusions = buildExclusions(input, trade)
  const changesClause = tone.changeOrder

  // Build plain text version
  const plainText = buildPlainText({
    header: {
      companyName: input.companyName || undefined,
      customerName: input.customerName || undefined,
      date: input.date,
      quoteNumber: input.quoteNumber || undefined,
    },
    sections: {
      projectOverview,
      scopeOfWork,
      materialsResponsibilities,
      exclusions,
      changesClause,
    },
  })

  return {
    header: {
      companyName: input.companyName || undefined,
      customerName: input.customerName || undefined,
      date: input.date,
      quoteNumber: input.quoteNumber || undefined,
    },
    sections: {
      projectOverview,
      scopeOfWork,
      materialsResponsibilities,
      exclusions,
      changesClause,
    },
    plainText,
  }
}

function buildProjectOverview(
  input: ScopeInput,
  tone: typeof toneTemplates.standard
): string {
  return tone.projectOverview(input.jobTitle, input.jobLocation || undefined)
}

function buildScopeOfWork(
  input: ScopeInput,
  trade: ReturnType<typeof findTradeByInput>,
  tone: typeof toneTemplates.standard
): string[] {
  const tasks: string[] = []
  const targetCount = taskCounts[input.scopeLength]

  // Add trade-specific tasks if we have a matching trade
  if (trade) {
    const tradeTasks = trade.commonTasks.slice(0, targetCount - 2)
    tasks.push(...tradeTasks.map(task => formatTask(task, tone, input.tone)))
  }

  // Add job-specific task based on title
  const mainTask = formatTask(input.jobTitle, tone, input.tone)
  if (!tasks.some(t => t.toLowerCase().includes(input.jobTitle.toLowerCase()))) {
    tasks.unshift(mainTask)
  }

  // Add quantity-based tasks if provided
  if (input.quantities) {
    tasks.push(`Work includes: ${input.quantities}`)
  }

  // Add inclusion-based tasks
  if (input.includePermits) {
    const permitTask = input.tone === 'professional'
      ? 'Obtain all required permits and coordinate necessary inspections with local authority having jurisdiction'
      : input.tone === 'standard'
        ? 'Obtain required permits and coordinate inspections'
        : 'Get permits and schedule inspections'
    tasks.push(permitTask)
  }

  if (input.includeDisposal) {
    const disposalTask = input.tone === 'professional'
      ? 'Remove and properly dispose of all debris and replaced materials from the job site'
      : input.tone === 'standard'
        ? 'Remove and dispose of all old materials and debris'
        : 'Haul away old materials and clean up'
    tasks.push(disposalTask)
  }

  if (input.includePatchPaint) {
    const patchTask = input.tone === 'professional'
      ? 'Patch and paint affected surfaces to match existing finish as closely as practicable'
      : input.tone === 'standard'
        ? 'Patch and paint affected areas to match existing'
        : 'Patch and paint where needed'
    tasks.push(patchTask)
  }

  // Add standard completion tasks
  const completionTasks = getCompletionTasks(input.tone)
  tasks.push(...completionTasks.slice(0, Math.max(0, targetCount - tasks.length)))

  return tasks.slice(0, targetCount)
}

function formatTask(task: string, tone: typeof toneTemplates.standard, toneLevel: Tone): string {
  // Don't double-format if already starts with prefix
  if (task.toLowerCase().startsWith('furnish') || task.toLowerCase().startsWith('install')) {
    return task
  }

  // Only apply prefix/suffix for professional tone
  if (toneLevel === 'professional' && tone.taskPrefix) {
    // Make sure task doesn't already have similar phrasing
    const cleanTask = task.charAt(0).toLowerCase() + task.slice(1)
    return `${tone.taskPrefix}${cleanTask}${tone.taskSuffix}`
  }

  return task
}

function getCompletionTasks(tone: Tone): string[] {
  if (tone === 'professional') {
    return [
      'Test and verify all work for proper operation and code compliance',
      'Restore work area to clean and orderly condition',
      'Provide manufacturer warranties and documentation as applicable',
    ]
  } else if (tone === 'standard') {
    return [
      'Test all work for proper operation',
      'Clean up work area',
      'Provide any applicable warranties',
    ]
  } else {
    return [
      'Test everything works',
      'Clean up when done',
    ]
  }
}

function buildMaterials(
  input: ScopeInput,
  tone: typeof toneTemplates.standard
): string {
  let text = ''

  switch (input.materialsResponsibility) {
    case 'contractor':
      text = tone.materialsContractor
      break
    case 'customer':
      text = tone.materialsCustomer
      break
    case 'mixed':
      text = tone.materialsMixed
      break
  }

  if (input.specialNotes) {
    text += `\n\nAdditional Notes: ${input.specialNotes}`
  }

  return text
}

function buildExclusions(
  input: ScopeInput,
  trade: ReturnType<typeof findTradeByInput>
): string[] {
  const exclusions: string[] = []
  const targetCount = exclusionCounts[input.scopeLength]

  // Add base exclusions
  exclusions.push(...baseExclusions.slice(0, targetCount - 2))

  // Add trade-specific exclusions
  if (trade) {
    const tradeExclusions = trade.commonExclusions.slice(0, 3)
    tradeExclusions.forEach(ex => {
      if (!exclusions.some(e => e.toLowerCase().includes(ex.toLowerCase()))) {
        exclusions.push(ex)
      }
    })
  }

  // If patch/paint not included, make sure it's excluded
  if (!input.includePatchPaint) {
    const paintExclusion = 'Drywall repair or painting unless specifically included'
    if (!exclusions.includes(paintExclusion)) {
      exclusions.push(paintExclusion)
    }
  }

  return exclusions.slice(0, targetCount)
}

function buildPlainText(output: Omit<ScopeOutput, 'plainText'>): string {
  const lines: string[] = []

  // Header
  if (output.header.companyName) {
    lines.push(output.header.companyName)
  }
  if (output.header.customerName) {
    lines.push(`Customer: ${output.header.customerName}`)
  }
  lines.push(`Date: ${new Date(output.header.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`)
  if (output.header.quoteNumber) {
    lines.push(`Quote #: ${output.header.quoteNumber}`)
  }

  lines.push('')
  lines.push('SCOPE OF WORK')
  lines.push('='.repeat(40))
  lines.push('')

  // Section 1
  lines.push('1. PROJECT OVERVIEW')
  lines.push('-'.repeat(20))
  lines.push(output.sections.projectOverview)
  lines.push('')

  // Section 2
  lines.push('2. SCOPE OF WORK')
  lines.push('-'.repeat(20))
  output.sections.scopeOfWork.forEach(task => {
    lines.push(`• ${task}`)
  })
  lines.push('')

  // Section 3
  lines.push('3. MATERIALS & RESPONSIBILITIES')
  lines.push('-'.repeat(20))
  lines.push(output.sections.materialsResponsibilities)
  lines.push('')

  // Section 4
  lines.push('4. EXCLUSIONS & NOT INCLUDED')
  lines.push('-'.repeat(20))
  output.sections.exclusions.forEach(ex => {
    lines.push(`• ${ex}`)
  })
  lines.push('')

  // Section 5
  lines.push('5. CHANGES & EXTRAS')
  lines.push('-'.repeat(20))
  lines.push(output.sections.changesClause)
  lines.push('')

  // Footer
  lines.push('-'.repeat(40))
  lines.push('Generated with scopeofwork.app')

  return lines.join('\n')
}

