'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight">
          scopeofwork<span className="text-muted-foreground">.app</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/examples" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Examples
          </Link>
          <Link 
            href="/how-to-write-a-scope-of-work" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How to Write a SOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/examples"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Examples
            </Link>
            <Link
              href="/how-to-write-a-scope-of-work"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How to Write a SOW
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

