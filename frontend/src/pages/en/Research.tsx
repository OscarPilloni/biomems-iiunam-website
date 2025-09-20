import { Badge } from '@components/Badge'
import { Card } from '@components/Card'
import Section from '@components/Section'

const areas = [
  {
    key: 'dep',
    title: 'Dielectrophoresis (DEP)',
    summary:
      'Traveling‑wave DEP for label‑free manipulation and sorting of microplastics and cells.',
  },
  {
    key: 'microfluidics',
    title: 'Microfluidics',
    summary: 'Droplet‑based assays, organ‑on‑chip, and on‑chip diagnostics.',
  },
  {
    key: 'cmems',
    title: 'C‑MEMS',
    summary: 'Photo‑patterned polymers pyrolyzed into conductive carbon microstructures.',
  },
]

export default function ResearchEN() {
  return (
    <Section title="Research" subtitle="Areas and short summaries.">
      <div className="grid gap-6 md:grid-cols-3">
        {areas.map((a) => (
          <Card
            key={a.key}
            title={a.title}
            footer={
              <div className="flex gap-2">
                <Badge>Methods</Badge>
                <Badge>Apps</Badge>
              </div>
            }
          >
            {a.summary}
          </Card>
        ))}
      </div>
    </Section>
  )
}
