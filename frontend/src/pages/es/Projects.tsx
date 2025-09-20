import { Badge } from '@components/Badge'
import { Card } from '@components/Card'
import Section from '@components/Section'

const projects = [
  {
    title: 'Clasificación de microplásticos con DEP',
    status: 'Activo',
    funder: 'UNAM / CONAHCyT',
    partners: ['Socio A'],
    timeline: '2025–2026',
  },
  {
    title: 'Electrodos C‑MEMS para biosensado',
    status: 'Pasado',
    funder: 'PAPIIT',
    partners: ['Socio B'],
    timeline: '2023–2024',
  },
]

export default function ProyectosES() {
  return (
    <Section
      title="Proyectos"
      subtitle="Proyectos actuales y pasados con financiamiento, socios, cronogramas y resultados."
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
            <p>Resumen corto (2–3 líneas). Enlace a repo/datos si es público.</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
