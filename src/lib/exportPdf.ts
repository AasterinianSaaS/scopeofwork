import { jsPDF } from 'jspdf'
import { ScopeOutput } from '@/types'

export function downloadPdf(output: ScopeOutput, filename: string): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter',
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = margin

  // Helper to add text with word wrap
  const addText = (text: string, fontSize: number, isBold = false, lineHeight = 1.4) => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', isBold ? 'bold' : 'normal')
    
    const lines = doc.splitTextToSize(text, contentWidth)
    const textHeight = lines.length * fontSize * 0.352778 * lineHeight
    
    // Check if we need a new page
    if (y + textHeight > pageHeight - margin) {
      doc.addPage()
      y = margin
    }
    
    doc.text(lines, margin, y)
    y += textHeight + 2
  }

  // Helper for bullet points
  const addBullet = (text: string, fontSize: number) => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', 'normal')
    
    const bulletIndent = 5
    const textIndent = 10
    const wrappedText = doc.splitTextToSize(text, contentWidth - textIndent)
    const textHeight = wrappedText.length * fontSize * 0.352778 * 1.4
    
    // Check if we need a new page
    if (y + textHeight > pageHeight - margin) {
      doc.addPage()
      y = margin
    }
    
    // Draw bullet
    doc.text('•', margin + bulletIndent, y)
    // Draw text
    doc.text(wrappedText, margin + textIndent, y)
    y += textHeight + 1
  }

  // Header
  if (output.header.companyName) {
    addText(output.header.companyName, 14, true)
  }
  
  if (output.header.customerName) {
    addText(`Customer: ${output.header.customerName}`, 10)
  }
  
  const dateStr = new Date(output.header.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  addText(`Date: ${dateStr}`, 10)
  
  if (output.header.quoteNumber) {
    addText(`Quote #: ${output.header.quoteNumber}`, 10)
  }

  y += 5

  // Title
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  const titleWidth = doc.getTextWidth('SCOPE OF WORK')
  doc.text('SCOPE OF WORK', (pageWidth - titleWidth) / 2, y)
  y += 10

  // Draw a line under title
  doc.setLineWidth(0.5)
  doc.line(margin, y, pageWidth - margin, y)
  y += 8

  // Section 1: Project Overview
  addText('1. Project Overview', 12, true)
  addText(output.sections.projectOverview, 10)
  y += 4

  // Section 2: Scope of Work
  addText('2. Scope of Work', 12, true)
  output.sections.scopeOfWork.forEach(task => {
    addBullet(task, 10)
  })
  y += 4

  // Section 3: Materials
  addText('3. Materials & Responsibilities', 12, true)
  addText(output.sections.materialsResponsibilities, 10)
  y += 4

  // Section 4: Exclusions
  addText('4. Exclusions & Not Included', 12, true)
  output.sections.exclusions.forEach(ex => {
    addBullet(ex, 10)
  })
  y += 4

  // Section 5: Changes
  addText('5. Changes & Extras', 12, true)
  addText(output.sections.changesClause, 10)

  // Footer
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(128, 128, 128)
  doc.text('Generated with scopeofwork.app', margin, pageHeight - 10)

  // Save
  doc.save(`${filename}.pdf`)
}

