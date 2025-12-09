import Link from 'next/link'

export function HowToContent() {
  return (
    <article className="prose prose-neutral max-w-none">
      {/* Table of Contents */}
      <nav className="bg-muted rounded-xl p-6 mb-12 not-prose">
        <h2 className="font-bold mb-4">In This Guide</h2>
        <ol className="space-y-2 text-sm">
          <li><a href="#what-is-a-scope-of-work" className="text-muted-foreground hover:text-foreground">1. What Is a Scope of Work?</a></li>
          <li><a href="#why-contractors-need-scopes" className="text-muted-foreground hover:text-foreground">2. Why Contractors Need Clear Scopes</a></li>
          <li><a href="#the-5-part-framework" className="text-muted-foreground hover:text-foreground">3. The 5-Part Scope Framework</a></li>
          <li><a href="#writing-effective-scopes" className="text-muted-foreground hover:text-foreground">4. How to Write Effective Scopes</a></li>
          <li><a href="#common-mistakes" className="text-muted-foreground hover:text-foreground">5. Common Mistakes to Avoid</a></li>
          <li><a href="#preventing-scope-creep" className="text-muted-foreground hover:text-foreground">6. Preventing Scope Creep</a></li>
          <li><a href="#templates-and-tools" className="text-muted-foreground hover:text-foreground">7. Templates and Tools</a></li>
        </ol>
      </nav>

      {/* Section 1 */}
      <section id="what-is-a-scope-of-work" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Is a Scope of Work?</h2>
        <p className="text-muted-foreground mb-4">
          A scope of work (SOW) is a written document that defines exactly what work will be 
          performed on a project. For contractors, it&apos;s the agreement between you and your 
          customer about what&apos;s included in the job—and equally important, what&apos;s not included.
        </p>
        <p className="text-muted-foreground mb-4">
          Think of it as a roadmap for the project. It answers the fundamental questions: 
          What work will be done? Where will it happen? Who provides materials? 
          What happens if something unexpected comes up?
        </p>
        <p className="text-muted-foreground">
          A good scope of work isn&apos;t a novel—it&apos;s clear, concise, and specific. 
          It should be detailed enough that anyone reading it understands the job, 
          but not so long that nobody actually reads it.
        </p>
      </section>

      {/* Section 2 */}
      <section id="why-contractors-need-scopes" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Contractors Need Clear Scopes</h2>
        <p className="text-muted-foreground mb-4">
          If you&apos;ve been in the trades for any length of time, you&apos;ve probably experienced 
          the pain of a vague agreement. The customer expects free extras. They argue about 
          what was &ldquo;supposed to be included.&rdquo; Small requests pile up until you&apos;re working 
          for free.
        </p>
        <p className="text-muted-foreground mb-4">
          A clear scope of work solves these problems before they start:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li>
            <strong>Prevents scope creep</strong> — This is the #1 profit killer for small contractors. 
            When the scope is clear, &ldquo;while you&apos;re here, can you also...&rdquo; becomes 
            &ldquo;that&apos;s a change order.&rdquo;
          </li>
          <li>
            <strong>Builds customer trust</strong> — Customers appreciate knowing exactly what 
            they&apos;re paying for. No surprises means happier customers and better reviews.
          </li>
          <li>
            <strong>Makes you look professional</strong> — A detailed scope sets you apart from 
            competitors who just text a price. It shows you take your work seriously.
          </li>
          <li>
            <strong>Protects you legally</strong> — If there&apos;s ever a dispute, a written scope 
            is your first line of defense. It&apos;s what you agreed to do—nothing more, nothing less.
          </li>
          <li>
            <strong>Saves time</strong> — You stop explaining the same things over and over. 
            The scope answers questions before they&apos;re asked.
          </li>
        </ul>
        <p className="text-muted-foreground">
          The contractors who complain about &ldquo;difficult customers&rdquo; often don&apos;t have clear 
          scopes. The contractors who run profitable, low-drama businesses almost always do.
        </p>
      </section>

      {/* Section 3 */}
      <section id="the-5-part-framework" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The 5-Part Scope Framework</h2>
        <p className="text-muted-foreground mb-6">
          Every professional scope of work should include these five sections. 
          This framework works for any trade—electrical, plumbing, HVAC, carpentry, 
          general contracting, and more.
        </p>

        <h3 className="text-xl font-bold mb-3">1. Project Overview</h3>
        <p className="text-muted-foreground mb-4">
          Start with a brief summary of what the project is and where it&apos;s happening. 
          This sets the context and ensures everyone&apos;s on the same page from the start.
        </p>
        <div className="bg-muted rounded-lg p-4 mb-6">
          <p className="text-sm font-mono">
            &ldquo;This Scope of Work covers the replacement of the existing 50-gallon gas 
            water heater located in the garage.&rdquo;
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">2. Scope of Work (Detailed Tasks)</h3>
        <p className="text-muted-foreground mb-4">
          This is the meat of the document. List out every task you&apos;ll perform in clear, 
          specific bullet points. Include quantities where relevant.
        </p>
        <div className="bg-muted rounded-lg p-4 mb-6">
          <ul className="text-sm font-mono space-y-1">
            <li>• Remove and dispose of existing water heater</li>
            <li>• Install new 50-gallon gas water heater</li>
            <li>• Connect to existing gas and water lines</li>
            <li>• Test for leaks and proper operation</li>
            <li>• Coordinate required inspections</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mb-3">3. Materials & Responsibilities</h3>
        <p className="text-muted-foreground mb-4">
          Clarify who&apos;s providing what. Is the contractor furnishing all materials? 
          Is the customer buying the fixture? Is it a mix? This prevents the 
          &ldquo;I thought that was included&rdquo; conversation.
        </p>

        <h3 className="text-xl font-bold mb-3">4. Exclusions (What&apos;s NOT Included)</h3>
        <p className="text-muted-foreground mb-4">
          This section is crucial. List everything that someone might assume is included 
          but isn&apos;t. Common exclusions include:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
          <li>Structural modifications</li>
          <li>Relocation of existing systems</li>
          <li>Drywall or painting (unless specified)</li>
          <li>Permit fees</li>
          <li>Concealed or unforeseen conditions</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">5. Changes & Extras Clause</h3>
        <p className="text-muted-foreground mb-4">
          Every scope needs this line—it&apos;s your protection against scope creep:
        </p>
        <div className="bg-muted rounded-lg p-4 mb-4 border-l-4 border-foreground">
          <p className="text-sm font-mono italic">
            &ldquo;Any work outside this scope or due to unforeseen conditions will be 
            priced and approved as a separate change order before work begins.&rdquo;
          </p>
        </div>
        <p className="text-muted-foreground">
          This single sentence has saved countless contractors from working for free.
        </p>
      </section>

      {/* Section 4 */}
      <section id="writing-effective-scopes" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Write Effective Scopes</h2>
        
        <h3 className="text-lg font-bold mb-3">Be Specific, Not Vague</h3>
        <p className="text-muted-foreground mb-4">
          &ldquo;Install plumbing&rdquo; is vague. &ldquo;Install two new bathroom fixtures including 
          toilet and vanity, connect to existing supply and waste lines&rdquo; is specific. 
          The more specific you are, the less room there is for misunderstanding.
        </p>

        <h3 className="text-lg font-bold mb-3">Use Industry Language (When Appropriate)</h3>
        <p className="text-muted-foreground mb-4">
          Phrases like &ldquo;furnish and install,&rdquo; &ldquo;per manufacturer specifications,&rdquo; 
          and &ldquo;in accordance with applicable codes&rdquo; aren&apos;t just professional—they&apos;re 
          precise. They communicate exactly what you mean to other professionals.
        </p>

        <h3 className="text-lg font-bold mb-3">Include Quantities</h3>
        <p className="text-muted-foreground mb-4">
          When applicable, include numbers: &ldquo;Install 4 new 20-amp circuits&rdquo; or 
          &ldquo;Replace 3 light fixtures.&rdquo; This prevents disputes about what &ldquo;some&rdquo; 
          or &ldquo;several&rdquo; means.
        </p>

        <h3 className="text-lg font-bold mb-3">Keep It Readable</h3>
        <p className="text-muted-foreground mb-4">
          Use bullet points. Keep sentences short. Break things into clear sections. 
          If your scope is a wall of text, nobody will read it—including the customer 
          who signed it.
        </p>
      </section>

      {/* Section 5 */}
      <section id="common-mistakes" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
        
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <p className="font-bold text-red-600 mb-2">❌ Being Too Vague</p>
            <p className="text-sm text-muted-foreground">
              &ldquo;Fix electrical issues&rdquo; — What issues? Where? This invites scope creep.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-4">
            <p className="font-bold text-red-600 mb-2">❌ Forgetting Exclusions</p>
            <p className="text-sm text-muted-foreground">
              If you don&apos;t say what&apos;s NOT included, customers will assume it is.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-4">
            <p className="font-bold text-red-600 mb-2">❌ No Change Order Clause</p>
            <p className="text-sm text-muted-foreground">
              Without this, you have no contractual basis to charge for extras.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-4">
            <p className="font-bold text-red-600 mb-2">❌ Verbal Agreements</p>
            <p className="text-sm text-muted-foreground">
              &ldquo;We talked about it&rdquo; doesn&apos;t hold up. Get it in writing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="preventing-scope-creep" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Preventing Scope Creep</h2>
        <p className="text-muted-foreground mb-4">
          Scope creep is the gradual expansion of work beyond the original agreement. 
          It usually happens through small requests: &ldquo;While you&apos;re here, can you also...&rdquo; 
          Each one seems minor, but together they eat your profit margin.
        </p>
        
        <h3 className="text-lg font-bold mb-3">How to Stop It</h3>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
          <li>
            <strong>Document everything upfront.</strong> A detailed scope is your first defense.
          </li>
          <li>
            <strong>Include a change order clause.</strong> Make it clear that extras cost extra.
          </li>
          <li>
            <strong>Respond professionally to extra requests.</strong> &ldquo;That&apos;s not in our 
            current scope, but I can add it as a change order for $X.&rdquo;
          </li>
          <li>
            <strong>Get change orders in writing.</strong> Before starting additional work, 
            document it and get approval.
          </li>
          <li>
            <strong>Don&apos;t feel guilty.</strong> You&apos;re running a business, not a charity. 
            Additional work deserves additional compensation.
          </li>
        </ol>
        
        <p className="text-muted-foreground">
          The best part? Most customers respect boundaries. They actually prefer working 
          with contractors who are professional and organized. The ones who don&apos;t respect 
          your scope? Those are customers you&apos;re better off without.
        </p>
      </section>

      {/* Section 7 */}
      <section id="templates-and-tools" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Templates and Tools</h2>
        <p className="text-muted-foreground mb-4">
          Writing scopes from scratch every time is tedious. That&apos;s why we built a 
          free scope of work generator specifically for contractors.
        </p>
        <p className="text-muted-foreground mb-6">
          Our tool uses the 5-part framework described in this guide and generates 
          professional scopes in seconds. You can customize the tone (simple, standard, 
          or professional), adjust the detail level, and export to PDF or text.
        </p>
        
        <div className="not-prose flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
          >
            Try the Free Generator
          </Link>
          <Link
            href="/examples"
            className="inline-flex items-center justify-center h-12 px-6 font-medium border border-border rounded-lg hover:bg-muted transition-colors"
          >
            View Example Scopes
          </Link>
        </div>
      </section>

      {/* Conclusion */}
      <section className="border-t border-border pt-8">
        <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
        <p className="text-muted-foreground mb-4">
          A clear scope of work is one of the simplest things you can do to run a 
          more profitable, less stressful contracting business. It takes a few extra 
          minutes upfront but saves hours of frustration later.
        </p>
        <p className="text-muted-foreground">
          The contractors who thrive aren&apos;t necessarily the best at their trade—they&apos;re 
          the best at running a business. And that starts with clear communication, 
          documented agreements, and professional practices. A good scope of work is 
          where it all begins.
        </p>
      </section>
    </article>
  )
}

