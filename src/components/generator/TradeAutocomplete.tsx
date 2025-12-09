'use client'

import { useState, useRef, useEffect } from 'react'
import { trades } from '@/lib/trades'

interface TradeAutocompleteProps {
  value: string
  onChange: (value: string) => void
}

export function TradeAutocomplete({ value, onChange }: TradeAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter trades based on input
  const filteredTrades = trades.filter(trade => 
    trade.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    trade.keywords.some(keyword => 
      keyword.toLowerCase().includes(inputValue.toLowerCase())
    )
  )

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Sync external value changes
  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange(newValue)
    setIsOpen(true)
  }

  const handleSelect = (tradeName: string) => {
    setInputValue(tradeName)
    onChange(tradeName)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="block text-sm font-medium mb-2">
        Trade Type
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        placeholder="Start typing... (e.g., Electrician, Plumber)"
        className="
          w-full h-10 px-3 rounded-lg
          bg-background text-foreground
          border border-border
          placeholder:text-muted-foreground
          focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
          transition-shadow duration-200
        "
      />
      
      {/* Dropdown */}
      {isOpen && filteredTrades.length > 0 && (
        <div className="
          absolute z-50 w-full mt-1
          bg-background border border-border rounded-lg
          shadow-lg max-h-60 overflow-auto
        ">
          {filteredTrades.map((trade) => (
            <button
              key={trade.name}
              type="button"
              onClick={() => handleSelect(trade.name)}
              className="
                w-full px-3 py-2 text-left text-sm
                hover:bg-muted transition-colors
                first:rounded-t-lg last:rounded-b-lg
              "
            >
              {trade.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

