import { ScopeInput, ScopeOutput, Tone } from '@/types'

// Tone-specific templates
const toneTemplates = {
  simple: {
    projectOverview: (job: string, location?: string) =>
      `This covers ${job}${location ? ` in the ${location}` : ''}.`,
    materialsContractor: 'We provide all materials needed for this job.',
    materialsCustomer: 'Customer provides all materials. We provide labor only.',
    materialsMixed: 'Some materials provided by contractor, some by customer (see notes).',
    changeOrder: 'Extra work will be quoted separately before starting.',
  },
  standard: {
    projectOverview: (job: string, location?: string) =>
      `This Scope of Work covers ${job}${location ? ` located at/in ${location}` : ''}. All work will be performed in a professional manner consistent with industry standards.`,
    materialsContractor: 'Contractor to furnish all materials unless otherwise specified.',
    materialsCustomer: 'Owner to furnish all materials. Contractor to provide labor only.',
    materialsMixed: 'Materials responsibility is split between contractor and owner as detailed in the notes section.',
    changeOrder: 'Any work outside this scope or due to unforeseen conditions will be priced and approved as a separate change order before work begins.',
  },
  professional: {
    projectOverview: (job: string, location?: string) =>
      `This Scope of Work ("SOW") defines the services to be performed for ${job}${location ? `, located at/in ${location}` : ''}. All work shall be executed in a workmanlike manner consistent with prevailing industry standards and all applicable codes and regulations.`,
    materialsContractor: 'Contractor shall furnish all materials, equipment, labor, and supervision necessary to complete the work as specified herein. All materials shall be new and of good quality unless otherwise specified.',
    materialsCustomer: 'Owner shall furnish all materials specified for this project. Contractor shall provide all labor, equipment, and supervision necessary to install Owner-furnished materials.',
    materialsMixed: 'Materials responsibility is divided between Contractor and Owner as specifically detailed in the project notes. Contractor-furnished materials shall be new and of good quality.',
    changeOrder: 'Any modifications, additions, or work required due to concealed or unforeseen conditions discovered during execution shall be documented, priced, and approved as a separate Change Order prior to commencement of such additional work.',
  },
}


export function generateScope(input: ScopeInput): ScopeOutput {
  const tone = toneTemplates[input.tone]

  // Build sections
  const projectOverview = buildProjectOverview(input, tone)
  const scopeOfWork = buildScopeOfWork(input)
  const materialsResponsibilities = buildMaterials(input, tone)
  const exclusions = buildExclusions(input)
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

function buildScopeOfWork(input: ScopeInput): string[] {
  const tasks: string[] = []

  // Parse user-provided work items (one per line)
  if (input.workItems && input.workItems.trim()) {
    const userTasks = input.workItems
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
    
    // Format each task based on tone
    userTasks.forEach(task => {
      tasks.push(formatTaskByType(task, input.tone))
    })
  }

  // Add quantity info if provided
  if (input.quantities && input.quantities.trim()) {
    tasks.push(`Work includes: ${input.quantities}`)
  }

  // Parse user-provided inclusions (one per line)
  if (input.inclusions && input.inclusions.trim()) {
    const userInclusions = input.inclusions
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
    
    userInclusions.forEach(item => {
      tasks.push(formatTaskByType(item, input.tone))
    })
  }

  return tasks
}

// Smart task formatting based on task type detection
function formatTaskByType(task: string, tone: Tone): string {
  const lowerTask = task.toLowerCase()
  
  // Simple tone: return as-is with capitalized first letter
  if (tone === 'simple') {
    return task.charAt(0).toUpperCase() + task.slice(1)
  }
  
  // Check if task already has professional formatting
  if (lowerTask.startsWith('furnish') || 
      lowerTask.startsWith('install') || 
      lowerTask.startsWith('remove') ||
      lowerTask.startsWith('repair') ||
      lowerTask.startsWith('replace') ||
      lowerTask.startsWith('connect') ||
      lowerTask.startsWith('test') ||
      lowerTask.startsWith('obtain') ||
      lowerTask.startsWith('coordinate')) {
    // Already formatted, just capitalize
    return task.charAt(0).toUpperCase() + task.slice(1)
  }
  
  // Standard tone: capitalize and clean up
  if (tone === 'standard') {
    return task.charAt(0).toUpperCase() + task.slice(1)
  }
  
  // Professional tone: apply smart prefixes based on task type
  // Only apply "Furnish and install" to installation-type tasks
  const installKeywords = ['new', 'unit', 'fixture', 'system', 'equipment', 'device', 'panel', 'heater', 'outlet', 'switch']
  const isInstallTask = installKeywords.some(kw => lowerTask.includes(kw))
  
  const removeKeywords = ['remove', 'tear out', 'demo', 'demolish', 'dispose', 'haul']
  const isRemoveTask = removeKeywords.some(kw => lowerTask.includes(kw))
  
  const repairKeywords = ['repair', 'fix', 'patch', 'seal', 'caulk']
  const isRepairTask = repairKeywords.some(kw => lowerTask.includes(kw))
  
  const cleanTask = task.charAt(0).toLowerCase() + task.slice(1)
  
  if (isRemoveTask) {
    return task.charAt(0).toUpperCase() + task.slice(1)
  } else if (isRepairTask) {
    return task.charAt(0).toUpperCase() + task.slice(1)
  } else if (isInstallTask) {
    return `Furnish and install ${cleanTask}`
  }
  
  // Default: just capitalize
  return task.charAt(0).toUpperCase() + task.slice(1)
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

function buildExclusions(input: ScopeInput): string[] {
  const exclusions: string[] = []

  // Parse user-provided exclusions (one per line)
  if (input.exclusions && input.exclusions.trim()) {
    const userExclusions = input.exclusions
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
    
    exclusions.push(...userExclusions)
  }

  // Add standard exclusion for unforeseen conditions if not already mentioned
  const hasUnforeseen = exclusions.some(e => 
    e.toLowerCase().includes('unforeseen') || e.toLowerCase().includes('concealed')
  )
  if (!hasUnforeseen) {
    exclusions.push('Unforeseen conditions discovered during work')
  }

  return exclusions
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

