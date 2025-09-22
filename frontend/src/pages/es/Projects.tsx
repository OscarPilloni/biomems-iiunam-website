import { Badge } from '@components/Badge'
import { Card } from '@components/Card'
import Section from '@components/Section'
// ...
import { getProjects } from '@lib/data'

export default function ProyectosES() {
  const projects = getProjects('es')
  return (
    <Section
      title="Proyectos"
      subtitle="Proyectos actuales y pasados con financiamiento, socios, cronogramas y resultados."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            eyebrow={p.timeline}
            href={`/es/proyectos/${p.slug || p.id}`}
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
