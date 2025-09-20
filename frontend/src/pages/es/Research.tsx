import { Badge } from '@components/Badge'
import { Card } from '@components/Card'
import Section from '@components/Section'

const areas = [
  {
    key: 'dep',
    title: 'Dielectroforesis (DEP)',
    summary: 'twDEP para manipulación y separación sin etiquetas de microplásticos y células.',
  },
  {
    key: 'microfluidics',
    title: 'Microfluídica',
    summary: 'Ensayos basados en gotas, organ‑on‑chip y diagnósticos en chip.',
  },
  {
    key: 'cmems',
    title: 'C‑MEMS',
    summary:
      'Polímeros fotopatterned pirolizados para obtener microestructuras de carbono conductoras.',
  },
]

export default function InvestigacionES() {
  return (
    <Section title="Investigación" subtitle="Áreas y resúmenes cortos.">
      <div className="grid gap-6 md:grid-cols-3">
        {areas.map((a) => (
          <Card
            key={a.key}
            title={a.title}
            footer={
              <div className="flex gap-2">
                <Badge>Métodos</Badge>
                <Badge>Aplicaciones</Badge>
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
