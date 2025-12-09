'use client'

import { createContext, useContext, forwardRef, InputHTMLAttributes } from 'react'

interface RadioGroupContextValue {
  name: string
  value: string
  onChange: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

interface RadioGroupProps {
  name: string
  value: string
  onChange: (value: string) => void
  label?: string
  children: React.ReactNode
  className?: string
  layout?: 'horizontal' | 'vertical'
}

export function RadioGroup({ 
  name, 
  value, 
  onChange, 
  label, 
  children, 
  className = '',
  layout = 'horizontal'
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <div className={`w-full ${className}`}>
        {label && (
          <span className="block text-sm font-medium mb-3">
            {label}
          </span>
        )}
        <div className={`
          flex gap-2
          ${layout === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'}
        `}>
          {children}
        </div>
      </div>
    </RadioGroupContext.Provider>
  )
}

interface RadioOptionProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value: string
  label: string
}

export const RadioOption = forwardRef<HTMLInputElement, RadioOptionProps>(
  ({ value, label, className = '', ...props }, ref) => {
    const context = useContext(RadioGroupContext)
    
    if (!context) {
      throw new Error('RadioOption must be used within a RadioGroup')
    }

    const { name, value: groupValue, onChange } = context
    const isChecked = groupValue === value

    return (
      <label className={`
        inline-flex items-center justify-center
        px-4 py-2 rounded-lg
        border border-border
        text-sm font-medium
        cursor-pointer
        transition-all duration-200
        ${isChecked 
          ? 'bg-foreground text-background border-foreground' 
          : 'bg-background text-foreground hover:bg-muted'
        }
        ${className}
      `}>
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={() => onChange(value)}
          className="sr-only"
          {...props}
        />
        {label}
      </label>
    )
  }
)

RadioOption.displayName = 'RadioOption'

