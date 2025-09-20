import { Card } from '@components/Card'
import Section from '@components/Section'

export default function PublicacionesES() {
  return (
    <Section
      title="Publicaciones"
      subtitle="Generadas automáticamente desde BibTeX → JSON. Incluye DOI y vínculos a texto completo cuando sea posible."
      actions={
        <a
          href="/es/datos"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Datos/Código abierto
        </a>
      }
    >
      <Card eyebrow="Cómo funcionará" title="Flujo">
        <ol className="list-decimal space-y-2 pl-5 text-sm">
          <li>
            Coloca un archivo <code>publications.bib</code> en <code>/data</code>.
          </li>
          <li>Convierte a JSON (script breve) y renderiza aquí.</li>
          <li>Cada entrada muestra autores, título, venue, año y enlaces.</li>
        </ol>
      </Card>
      <div className="grid gap-4">
        {/* Renderiza elementos reales aquí */}
        <Card
          title="Título de ejemplo"
          footer={
            <a className="underline" href="https://doi.org/">
              DOI
            </a>
          }
        >
          <p>
            <strong>Autores</strong> — Sede (Año).
          </p>
        </Card>
      </div>
    </Section>
  )
}
