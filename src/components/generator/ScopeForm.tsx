'use client'

import { ScopeInput } from '@/types'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
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
      {/* Document Info */}
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

      {/* Job Details */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Job Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TradeAutocomplete
            value={data.trade}
            onChange={(value) => updateField('trade', value)}
          />
          <Input
            label="Job Title"
            placeholder="e.g., Water heater replacement"
            value={data.jobTitle}
            onChange={(e) => updateField('jobTitle', e.target.value)}
            required
          />
          <Input
            label="Location / Area"
            placeholder="e.g., Garage, Back yard"
            value={data.jobLocation}
            onChange={(e) => updateField('jobLocation', e.target.value)}
          />
          <Input
            label="Key Quantities"
            placeholder="e.g., 2 fixtures, 3 acres"
            value={data.quantities}
            onChange={(e) => updateField('quantities', e.target.value)}
          />
        </div>
      </div>

      {/* Work Items */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Scope of Work
        </h3>
        <Textarea
          label="Work Items (one per line)"
          placeholder="List each task on its own line"
          value={data.workItems}
          onChange={(e) => updateField('workItems', e.target.value)}
          rows={5}
        />
        <Textarea
          label="Also Included (one per line)"
          placeholder="e.g., Debris removal, Final cleanup, Haul-away"
          value={data.inclusions}
          onChange={(e) => updateField('inclusions', e.target.value)}
          rows={3}
        />
        <Textarea
          label="Not Included / Exclusions (one per line)"
          placeholder="e.g., Permits, Structural work, Repairs to existing damage"
          value={data.exclusions}
          onChange={(e) => updateField('exclusions', e.target.value)}
          rows={3}
        />
      </div>

      {/* Materials & Notes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Materials & Notes
        </h3>
        <Select
          label="Materials Responsibility"
          value={data.materialsResponsibility}
          onChange={(e) => updateField('materialsResponsibility', e.target.value as ScopeInput['materialsResponsibility'])}
          options={[
            { value: 'contractor', label: 'Contractor provides all materials' },
            { value: 'customer', label: 'Customer provides materials' },
            { value: 'mixed', label: 'Mixed (specify in notes)' },
          ]}
        />
        <Textarea
          label="Special Notes"
          placeholder="Access instructions, scheduling notes, special requirements..."
          value={data.specialNotes}
          onChange={(e) => updateField('specialNotes', e.target.value)}
          rows={2}
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
