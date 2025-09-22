import { Badge } from '@components/Badge'
import { Card } from '@components/Card'
import Section from '@components/Section'
import { getProjects } from '@lib/data'

export default function ProjectsEN() {
  const projects = getProjects('en')
  return (
    <Section
      title="Projects"
      subtitle="Current and past projects with funding, partners, timelines, and outcomes."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            eyebrow={p.timeline}
            href={`/en/projects/${p.slug || p.id}`}
            footer={
              <div className="flex flex-wrap items-center gap-2">
                {p.status && <Badge>{p.status}</Badge>}
                {p.funder && <Badge>{p.funder}</Badge>}
                {(p.partners || []).map((x) => (
                  <Badge key={x}>{x}</Badge>
                ))}
              </div>
            }
          >
            {p.blurb ? <p>{p.blurb}</p> : null}
          </Card>
        ))}
      </div>
    </Section>
  )
}
