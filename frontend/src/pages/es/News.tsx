import { Card } from '@components/Card'
import Section from '@components/Section'

export default function NoticiasES() {
  return (
    <Section title="Noticias y Eventos" subtitle="Charlas, premios y convocatorias.">
      <div className="grid gap-4">
        {/* Ordena por fecha; archiva las antiguas */}
        <Card eyebrow="2025‑09‑01" title="Charla de ejemplo en el Congreso X">
          <p>Enlace a diapositivas y resumen.</p>
        </Card>
        <Card eyebrow="2025‑08‑15" title="Buscamos estudiante de Maestría para proyecto DEP">
          <p>Requisitos y cómo postular.</p>
        </Card>
      </div>
    </Section>
  )
}
