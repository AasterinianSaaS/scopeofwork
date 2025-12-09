import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Free Scope of Work Generator for Contractors | scopeofwork.app',
  description: 'Generate professional, customer-ready scopes of work in seconds. Free tool for electricians, plumbers, HVAC techs, and contractors. No signup required.',
  keywords: 'scope of work, contractor, generator, template, electrician, plumber, HVAC, construction',
  authors: [{ name: 'scopeofwork.app' }],
  openGraph: {
    title: 'Free Scope of Work Generator for Contractors',
    description: 'Generate professional, customer-ready scopes of work in seconds. Free tool for electricians, plumbers, HVAC techs, and contractors.',
    url: 'https://scopeofwork.app',
    siteName: 'scopeofwork.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Scope of Work Generator for Contractors',
    description: 'Generate professional, customer-ready scopes of work in seconds.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9105450705971414"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <GoogleAnalytics measurementId="G-G9LYRMD60T" />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

