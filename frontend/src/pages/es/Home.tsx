import { Card } from '@components/Card'
import Section from '@components/Section'
import { Stat } from '@components/Stat'

export default function HomeES() {
  return (
    <Section
      title="BioMEMS @ IIUNAM"
      subtitle="Diseñamos sistemas microfluídicos y C‑MEMS para detectar, separar y entender fenómenos biológicos y ambientales complejos."
      actions={
        <a
          href="/es/contacto"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Contacto
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Artículos" value={'—'} />
        <Stat label="Proyectos activos" value={'—'} />
        <Stat label="Estudiantes" value={'—'} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Noticias recientes" eyebrow="Actualizaciones">
          <ul className="list-disc space-y-2 pl-5">
            <li>Publica aquí tu charla más reciente, premio o convocatoria.</li>
            <li>Mantén 2–4 entradas; enlaza al archivo en /es/noticias.</li>
          </ul>
        </Card>
        <Card
          title="Artículo/Proyecto destacado"
          eyebrow="Destacado"
          footer={
            <a className="underline" href="/es/proyectos">
              Ver todos los proyectos
            </a>
          }
        >
          <p>Breve resumen (2–3 líneas) del resultado clave o prototipo en curso.</p>
        </Card>
      </div>
    </Section>
  )
}
