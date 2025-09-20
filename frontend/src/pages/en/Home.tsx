import { Card } from '@components/Card'
import Section from '@components/Section'
import { Stat } from '@components/Stat'

export default function HomeEN() {
  return (
    <Section
      title="BioMEMS @ IIUNAM"
      subtitle="We design microfluidic and C‑MEMS systems to sense, separate, and understand complex biological and environmental phenomena."
      actions={
        <a
          href="/en/contact"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Get in touch
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Papers" value={'—'} />
        <Stat label="Active projects" value={'—'} />
        <Stat label="Students" value={'—'} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Recent News" eyebrow="Updates">
          <ul className="list-disc space-y-2 pl-5">
            <li>Post your latest talk, award, or call for students.</li>
            <li>Keep 2–4 items; link to /en/news for archive.</li>
          </ul>
        </Card>
        <Card
          title="Featured Paper/Project"
          eyebrow="Highlight"
          footer={
            <a className="underline" href="/en/projects">
              See all projects
            </a>
          }
        >
          <p>Short teaser (2–3 lines) about the key result or ongoing prototype.</p>
        </Card>
      </div>
    </Section>
  )
}
