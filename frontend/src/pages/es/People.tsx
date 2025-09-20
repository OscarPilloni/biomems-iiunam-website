import { PersonCard } from '@components/PersonCard'
import Section from '@components/Section'

export default function PersonasES() {
  return (
    <Section title="Personas" subtitle="Investigador/a responsable, estudiantes y egresados/as.">
      <h2 className="text-xl font-semibold">Responsable (PI)</h2>
      <div className="grid gap-4">
        <PersonCard
          name="Tu Nombre"
          role="PI"
          email="nombre@ii.unam.mx"
          orcid="https://orcid.org/"
          scholar="https://scholar.google.com/"
        />
      </div>

      <h2 className="mt-8 text-xl font-semibold">Estudiantes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Mapea estudiantes aquí */}
        <PersonCard name="Estudiante A" role="Maestría" />
        <PersonCard name="Estudiante B" role="Licenciatura" />
      </div>

      <h2 className="mt-8 text-xl font-semibold">Egresados/as</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PersonCard name="Egresado X" role="Egreso — 2024" />
      </div>
    </Section>
  )
}
