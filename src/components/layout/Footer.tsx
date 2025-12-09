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
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/electrician" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Electricians
                </Link>
              </li>
              <li>
                <Link 
                  href="/plumber" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Plumbers
                </Link>
              </li>
              <li>
                <Link 
                  href="/hvac" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  HVAC Technicians
                </Link>
              </li>
              <li>
                <Link 
                  href="/painter" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Painters
                </Link>
              </li>
              <li>
                <Link 
                  href="/roofer" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Roofers
                </Link>
              </li>
              <li>
                <Link 
                  href="/general-contractor" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  General Contractors
                </Link>
              </li>
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

