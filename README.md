# scopeofwork.app

Free scope of work generator for contractors. Create professional job descriptions in seconds.

## Features

- **Instant Generation**: Create professional scopes in seconds
- **5-Part Framework**: Industry-standard structure (Overview, Scope, Materials, Exclusions, Changes)
- **Customizable Output**: Brief/Standard/Detailed length + Simple/Standard/Professional tone
- **Export Options**: Copy to clipboard, download as TXT or PDF
- **Trade-Specific**: Optimized for electricians, plumbers, HVAC techs, handymen, and more
- **No Signup Required**: Works instantly, no account needed
- **LocalStorage**: Remembers your company name and preferences

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist
- **PDF Generation**: jsPDF
- **Hosting**: Vercel

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file for optional configuration:

```
# Google Analytics Measurement ID (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (generator)
│   ├── examples/          # Example scopes page
│   └── how-to.../         # SEO article page
├── components/
│   ├── generator/         # Scope generator components
│   ├── layout/            # Header, Footer
│   ├── seo/               # SEO content components
│   └── ui/                # Base UI components
├── lib/
│   ├── generateScope.ts   # Core generation logic
│   ├── trades.ts          # Trade data & tasks
│   ├── exportPdf.ts       # PDF generation
│   └── storage.ts         # LocalStorage helpers
└── types/                 # TypeScript interfaces
```

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

MIT

