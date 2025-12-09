'use client'

import { useState, useEffect } from 'react'
import { ScopeForm } from './ScopeForm'
import { ScopeOutput } from './ScopeOutput'
import { ScopeInput, ScopeOutput as ScopeOutputType } from '@/types'
import { generateScope } from '@/lib/generateScope'
import { saveFormData, loadFormData } from '@/lib/storage'

const defaultFormData: ScopeInput = {
  companyName: '',
  customerName: '',
  date: new Date().toISOString().split('T')[0],
  quoteNumber: '',
  trade: '',
  jobTitle: '',
  jobLocation: '',
  quantities: '',
  workItems: '',
  materialsResponsibility: 'contractor',
  inclusions: '',
  exclusions: '',
  specialNotes: '',
  scopeLength: 'standard',
  tone: 'standard',
}

interface GeneratorCardProps {
  defaultTrade?: string
}

export function GeneratorCard({ defaultTrade }: GeneratorCardProps = {}) {
  const [formData, setFormData] = useState<ScopeInput>(defaultFormData)
  const [output, setOutput] = useState<ScopeOutputType | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // Load saved form data on mount, but use defaultTrade if provided
  useEffect(() => {
    const saved = loadFormData()
    if (saved) {
      setFormData(prev => ({ 
        ...prev, 
        ...saved,
        // Override with defaultTrade if provided (for trade-specific pages)
        trade: defaultTrade || saved.trade || ''
      }))
    } else if (defaultTrade) {
      setFormData(prev => ({ ...prev, trade: defaultTrade }))
    }
  }, [defaultTrade])

  const handleFormChange = (newData: ScopeInput) => {
    setFormData(newData)
    saveFormData(newData)
  }

  const handleGenerate = () => {
    if (!formData.jobTitle.trim()) {
      return
    }

    setIsGenerating(true)
    
    // Small delay for UX feedback
    setTimeout(() => {
      const result = generateScope(formData)
      setOutput(result)
      setIsGenerating(false)
    }, 300)
  }

  const handleReset = () => {
    setFormData(defaultFormData)
    setOutput(null)
  }

  return (
    <div className="space-y-8">
      {/* Form Section */}
      <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
        <ScopeForm 
          data={formData}
          onChange={handleFormChange}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />
      </div>

      {/* Output Section */}
      {output && (
        <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
          <ScopeOutput 
            output={output}
            onReset={handleReset}
          />
        </div>
      )}
    </div>
  )
}

