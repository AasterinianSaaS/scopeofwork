'use client'

import { forwardRef, InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, id, checked, ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-')

    return (
      <label 
        htmlFor={checkboxId}
        className={`flex items-center gap-3 cursor-pointer group ${className}`}
      >
        <div className="relative flex-shrink-0">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            className="sr-only peer"
            {...props}
          />
          <div className={`
            w-5 h-5 rounded border-2
            transition-all duration-200
            ${checked 
              ? 'bg-foreground border-foreground' 
              : 'bg-background border-border group-hover:border-muted-foreground'
            }
          `}>
            {/* Checkmark */}
            <svg
              className={`
                w-full h-full text-background p-0.5
                transition-opacity duration-200
                ${checked ? 'opacity-100' : 'opacity-0'}
              `}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <span className="text-sm select-none">{label}</span>
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
