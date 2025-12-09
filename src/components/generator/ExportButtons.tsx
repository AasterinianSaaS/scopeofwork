'use client'

import { useState } from 'react'
import { ScopeOutput } from '@/types'
import { Button } from '@/components/ui/Button'
import { downloadTxt } from '@/lib/exportTxt'
import { downloadPdf } from '@/lib/exportPdf'

interface ExportButtonsProps {
  output: ScopeOutput
}

export function ExportButtons({ output }: ExportButtonsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output.plainText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleDownloadTxt = () => {
    const filename = output.header.quoteNumber 
      ? `scope-${output.header.quoteNumber}` 
      : 'scope-of-work'
    downloadTxt(output.plainText, filename)
  }

  const handleDownloadPdf = () => {
    const filename = output.header.quoteNumber 
      ? `scope-${output.header.quoteNumber}` 
      : 'scope-of-work'
    downloadPdf(output, filename)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button 
        onClick={handleCopy}
        variant="primary"
        className="flex items-center gap-2"
      >
        {copied ? (
          <>
            <CheckIcon />
            Copied!
          </>
        ) : (
          <>
            <CopyIcon />
            Copy to Clipboard
          </>
        )}
      </Button>
      
      <Button 
        onClick={handleDownloadTxt}
        variant="secondary"
        className="flex items-center gap-2"
      >
        <DownloadIcon />
        Download TXT
      </Button>
      
      <Button 
        onClick={handleDownloadPdf}
        variant="secondary"
        className="flex items-center gap-2"
      >
        <DownloadIcon />
        Download PDF
      </Button>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

