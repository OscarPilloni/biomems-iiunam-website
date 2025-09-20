import { Card } from '@components/Card'
import Section from '@components/Section'

export default function PublicationsEN() {
  return (
    <Section
      title="Publications"
      subtitle="Auto‑generated from BibTeX → JSON. Include DOI and full‑text links where possible."
      actions={
        <a
          href="/en/open"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Open data/code
        </a>
      }
    >
      <Card eyebrow="How this page will work" title="Pipeline">
        <ol className="list-decimal space-y-2 pl-5 text-sm">
          <li>
            Place a <code>publications.bib</code> file in <code>/data</code>.
          </li>
          <li>Convert to JSON (small script) and render here.</li>
          <li>Each entry shows authors, title, venue, year, and links.</li>
        </ol>
      </Card>
      <div className="grid gap-4">
        {/* Render publication items here */}
        <Card
          title="Example Paper Title"
          footer={
            <a className="underline" href="https://doi.org/">
              DOI
            </a>
          }
        >
          <p>
            <strong>Authors</strong> — Venue (Year).
          </p>
        </Card>
      </div>
    </Section>
  )
}
