import { Card } from '@components/Card'
import Section from '@components/Section'

const instrumentos = [
  {
    name: 'Microscopio de fluorescencia',
    details: 'Objetivos, cámara, filtros; compatible con experimentos en chip.',
  },
  {
    name: 'Horno de pirolisis',
    details: 'Para conversión C‑MEMS; perfil de temperatura y seguridad.',
  },
  {
    name: 'Herramientas de microfabricación',
    details: 'Spin coater, mask aligner, perfilómetro, etc.',
  },
]

export default function InfraestructuraES() {
  return (
    <Section
      title="Infraestructura"
      subtitle="Instrumentos clave; política de uso y colaboración."
      actions={
        <a
          href="/es/contacto"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Colabora con nosotros
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {instrumentos.map((i) => (
          <Card key={i.name} title={i.name}>
            <p>{i.details}</p>
          </Card>
        ))}
      </div>
      <Card title="Política de uso" eyebrow="Interno">
        <p>Describe cómo solicitar tiempo, requisitos de capacitación y costos (si aplica).</p>
      </Card>
    </Section>
  )
}
