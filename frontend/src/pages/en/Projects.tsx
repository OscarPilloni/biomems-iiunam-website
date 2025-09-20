import { Badge } from '@components/Badge'
import { Card } from '@components/Card'
import Section from '@components/Section'

const projects = [
  {
    title: 'DEP‑based microplastics sorting',
    status: 'Active',
    funder: 'UNAM / CONAHCyT',
    partners: ['Partner A'],
    timeline: '2025–2026',
  },
  {
    title: 'C‑MEMS electrodes for biosensing',
    status: 'Past',
    funder: 'PAPIIT',
    partners: ['Partner B'],
    timeline: '2023–2024',
  },
]

export default function ProjectsEN() {
  return (
    <Section
      title="Projects"
      subtitle="Current and past projects with funding, partners, timelines, and outcomes."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            eyebrow={p.timeline}
            footer={
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{p.status}</Badge>
                <Badge>{p.funder}</Badge>
                {p.partners.map((x) => (
                  <Badge key={x}>{x}</Badge>
                ))}
              </div>
            }
          >
            <p>Short 2–3 line abstract. Link to repo/data if public.</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
