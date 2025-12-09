import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-lg tracking-tight">
              scopeofwork<span className="text-muted-foreground">.app</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Free scope of work generator for contractors. 
              Create professional job descriptions in seconds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/examples" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Scope Examples
                </Link>
              </li>
              <li>
                <Link 
                  href="/how-to-write-a-scope-of-work" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How to Write a SOW
                </Link>
              </li>
            </ul>
          </div>

          {/* Trades */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              For Contractors
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Electricians</li>
              <li>Plumbers</li>
              <li>HVAC Technicians</li>
              <li>General Contractors</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} scopeofwork.app. Free to use.
          </p>
          <p className="text-sm text-muted-foreground">
            No signup required. No data stored.
          </p>
        </div>
      </div>
    </footer>
  )
}

