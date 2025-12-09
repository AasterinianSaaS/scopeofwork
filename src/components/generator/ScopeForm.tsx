'use client'

import { ScopeInput } from '@/types'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import { RadioGroup, RadioOption } from '@/components/ui/RadioGroup'
import { Button } from '@/components/ui/Button'
import { TradeAutocomplete } from './TradeAutocomplete'

interface ScopeFormProps {
  data: ScopeInput
  onChange: (data: ScopeInput) => void
  onGenerate: () => void
  isGenerating: boolean
}

export function ScopeForm({ data, onChange, onGenerate, isGenerating }: ScopeFormProps) {
  const updateField = <K extends keyof ScopeInput>(field: K, value: ScopeInput[K]) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <form 
      onSubmit={(e) => { e.preventDefault(); onGenerate(); }}
      className="space-y-8"
    >
      {/* Optional Header Fields */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Document Info (Optional)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Company Name"
            placeholder="Your Company LLC"
            value={data.companyName}
            onChange={(e) => updateField('companyName', e.target.value)}
          />
          <Input
            label="Customer Name"
            placeholder="John Smith"
            value={data.customerName}
            onChange={(e) => updateField('customerName', e.target.value)}
          />
          <Input
            label="Date"
            type="date"
            value={data.date}
            onChange={(e) => updateField('date', e.target.value)}
          />
          <Input
            label="Quote / Job Number"
            placeholder="Q-2024-001"
            value={data.quoteNumber}
            onChange={(e) => updateField('quoteNumber', e.target.value)}
          />
        </div>
      </div>

      {/* Core Job Details */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Job Details
        </h3>
        <div className="space-y-4">
          <TradeAutocomplete
            value={data.trade}
            onChange={(value) => updateField('trade', value)}
          />
          <Input
            label="Job Title / Description"
            placeholder="e.g., Replace 50-gallon gas water heater"
            value={data.jobTitle}
            onChange={(e) => updateField('jobTitle', e.target.value)}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Location / Area"
              placeholder="e.g., Garage, Main bathroom"
              value={data.jobLocation}
              onChange={(e) => updateField('jobLocation', e.target.value)}
            />
            <Input
              label="Key Quantities"
              placeholder="e.g., 2 fixtures, 3 outlets, 3 acres"
              value={data.quantities}
              onChange={(e) => updateField('quantities', e.target.value)}
            />
          </div>
          <Textarea
            label="Work Items (one per line)"
            placeholder="Enter each task on a new line, e.g.:
Remove existing water heater
Install new 50-gallon gas water heater
Connect to existing gas and water lines
Test for leaks and proper operation"
            value={data.workItems}
            onChange={(e) => updateField('workItems', e.target.value)}
            rows={5}
          />
        </div>
      </div>

      {/* Responsibilities */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Materials & Inclusions
        </h3>
        <Select
          label="Materials Responsibility"
          value={data.materialsResponsibility}
          onChange={(e) => updateField('materialsResponsibility', e.target.value as ScopeInput['materialsResponsibility'])}
          options={[
            { value: 'contractor', label: 'Contractor provides all materials' },
            { value: 'customer', label: 'Customer provides materials' },
            { value: 'mixed', label: 'Mixed / Specify in notes' },
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Checkbox
            label="Permits included"
            checked={data.includePermits}
            onChange={(e) => updateField('includePermits', e.target.checked)}
          />
          <Checkbox
            label="Disposal / Haul-away"
            checked={data.includeDisposal}
            onChange={(e) => updateField('includeDisposal', e.target.checked)}
          />
          <Checkbox
            label="Patch & Paint"
            checked={data.includePatchPaint}
            onChange={(e) => updateField('includePatchPaint', e.target.checked)}
          />
        </div>
      </div>

      {/* Notes & Exclusions */}
      <div className="space-y-4">
        <Textarea
          label="Special Notes / Additional Details"
          placeholder="Any specific requirements, access notes, or additional information..."
          value={data.specialNotes}
          onChange={(e) => updateField('specialNotes', e.target.value)}
          rows={3}
        />
        <Textarea
          label="Exclusions / Not Included (one per line)"
          placeholder="Enter what's NOT included, e.g.:
Tree removal over 6 inches diameter
Stump grinding
Irrigation system repairs
Fence repairs"
          value={data.exclusions}
          onChange={(e) => updateField('exclusions', e.target.value)}
          rows={4}
        />
      </div>

      {/* Output Settings */}
      <div className="space-y-6">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Output Settings
        </h3>
        <RadioGroup
          name="scopeLength"
          label="Scope Length"
          value={data.scopeLength}
          onChange={(value) => updateField('scopeLength', value as ScopeInput['scopeLength'])}
        >
          <RadioOption value="brief" label="Brief" />
          <RadioOption value="standard" label="Standard" />
          <RadioOption value="detailed" label="Detailed" />
        </RadioGroup>
        <RadioGroup
          name="tone"
          label="Tone"
          value={data.tone}
          onChange={(value) => updateField('tone', value as ScopeInput['tone'])}
        >
          <RadioOption value="simple" label="Simple" />
          <RadioOption value="standard" label="Standard" />
          <RadioOption value="professional" label="Professional" />
        </RadioGroup>
      </div>

      {/* Generate Button */}
      <div className="pt-4">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full"
          disabled={isGenerating || !data.jobTitle.trim()}
        >
          {isGenerating ? 'Generating...' : 'Generate Scope of Work'}
        </Button>
      </div>
    </form>
  )
}

