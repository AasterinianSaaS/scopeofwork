import Link from 'next/link'

export function HomepageContent() {
  return (
    <article className="prose prose-neutral max-w-none">
      <h2 className="text-2xl font-bold mb-6">
        What Is a Scope of Work?
      </h2>
      
      <p className="text-muted-foreground mb-4">
        A scope of work (SOW) is a detailed description of the tasks, deliverables, and responsibilities 
        for a project. For contractors, it&apos;s the document that tells your customer exactly what 
        you&apos;re going to do—and just as importantly, what you&apos;re <em>not</em> going to do.
      </p>

      <p className="text-muted-foreground mb-6">
        A well-written scope protects both you and your customer. It sets clear expectations, 
        prevents misunderstandings, and gives you something to point to when someone asks for 
        &ldquo;just one more thing.&rdquo;
      </p>

      <h3 className="text-xl font-bold mb-4">
        Why Every Contractor Needs Clear Scopes
      </h3>

      <p className="text-muted-foreground mb-4">
        If you&apos;ve ever had a customer expect free extras, argue about what was &ldquo;included,&rdquo; 
        or leave a bad review because of a misunderstanding—you know the pain of a vague scope.
      </p>

      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
        <li><strong>Prevents scope creep</strong> — The #1 profit killer for small contractors</li>
        <li><strong>Builds trust</strong> — Customers appreciate knowing exactly what they&apos;re paying for</li>
        <li><strong>Looks professional</strong> — Stand out from competitors who just text quotes</li>
        <li><strong>Protects you legally</strong> — A written scope is your first line of defense in disputes</li>
        <li><strong>Saves time</strong> — Stop explaining the same things over and over</li>
      </ul>

      <h3 className="text-xl font-bold mb-4">
        The 5-Part Scope Framework
      </h3>

      <p className="text-muted-foreground mb-4">
        Our generator uses a proven 5-part structure that covers everything a professional 
        scope needs:
      </p>

      <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
        <li>
          <strong>Project Overview</strong> — What the job is and where it&apos;s happening
        </li>
        <li>
          <strong>Scope of Work</strong> — The actual tasks you&apos;ll perform, in clear bullet points
        </li>
        <li>
          <strong>Materials & Responsibilities</strong> — Who&apos;s providing what
        </li>
        <li>
          <strong>Exclusions</strong> — What&apos;s NOT included (critical for preventing scope creep)
        </li>
        <li>
          <strong>Changes & Extras Clause</strong> — How you&apos;ll handle additional work requests
        </li>
      </ol>

      <h3 className="text-xl font-bold mb-4">
        Who This Tool Is For
      </h3>

      <p className="text-muted-foreground mb-4">
        We built this for the trades—the electricians, plumbers, HVAC techs, handymen, 
        roofers, painters, and general contractors who quote jobs every day but don&apos;t have 
        time to write formal documents.
      </p>

      <p className="text-muted-foreground mb-6">
        Whether you&apos;re a one-person operation or running a small crew, you can create 
        professional scopes in seconds and paste them into Jobber, QuickBooks, an email, 
        or even a text message.
      </p>

      <h3 className="text-xl font-bold mb-4">
        Good Scope vs. Bad Scope
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 border border-border rounded-lg">
          <p className="font-bold text-red-600 mb-2">❌ Bad Scope</p>
          <p className="text-sm text-muted-foreground italic">
            &ldquo;Install new water heater - $1,500&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Vague. Leaves room for arguments about permits, disposal, who buys the unit, etc.
          </p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <p className="font-bold text-green-600 mb-2">✓ Good Scope</p>
          <p className="text-sm text-muted-foreground italic">
            &ldquo;Remove and dispose of existing 40-gal gas water heater. 
            Install customer-provided 50-gal unit. Connect to existing gas and water lines. 
            Test for proper operation. Does not include permits, venting modifications, 
            or gas line extensions.&rdquo;
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4">
        How to Avoid Scope Creep
      </h3>

      <p className="text-muted-foreground mb-4">
        Scope creep happens when small requests pile up: &ldquo;While you&apos;re here, can you also...&rdquo; 
        Each one seems minor, but together they eat your profit margin.
      </p>

      <p className="text-muted-foreground mb-6">
        The solution is simple: <strong>document everything upfront</strong>. When the scope is clear, 
        you can respond to extra requests with: &ldquo;That&apos;s not in our agreement, but I can add it 
        as a change order for $X.&rdquo;
      </p>

      <p className="text-muted-foreground mb-6">
        That&apos;s why every scope from this tool includes a Changes & Extras clause. 
        It&apos;s your protection.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link 
          href="/examples" 
          className="text-sm font-medium text-foreground hover:underline"
        >
          View example scopes →
        </Link>
        <Link 
          href="/how-to-write-a-scope-of-work" 
          className="text-sm font-medium text-foreground hover:underline"
        >
          Learn more about writing scopes →
        </Link>
      </div>
    </article>
  )
}

