import { ScopeInput } from '@/types'

const STORAGE_KEY = 'scopeofwork_form_data'

export function saveFormData(data: ScopeInput): void {
  if (typeof window === 'undefined') return
  
  try {
    // Don't save sensitive data
    const dataToSave = {
      ...data,
      customerName: '', // Don't persist customer name
      quoteNumber: '',  // Don't persist quote number
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
  } catch (error) {
    console.warn('Failed to save form data to localStorage:', error)
  }
}

export function loadFormData(): Partial<ScopeInput> | null {
  if (typeof window === 'undefined') return null
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return null
    
    const data = JSON.parse(saved)
    
    // Always use current date, not saved date
    data.date = new Date().toISOString().split('T')[0]
    
    return data
  } catch (error) {
    console.warn('Failed to load form data from localStorage:', error)
    return null
  }
}

export function clearFormData(): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.warn('Failed to clear form data from localStorage:', error)
  }
}

