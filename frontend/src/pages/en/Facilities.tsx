import { Card } from '@components/Card'
import Section from '@components/Section'

const instruments = [
  {
    name: 'Fluorescence Microscope',
    details: 'Objectives, camera, filters; compatible with on‑chip imaging.',
  },
  {
    name: 'Pyrolysis Furnace',
    details: 'For C‑MEMS conversion; temperature profile and safety notes.',
  },
  { name: 'Microfabrication Tools', details: 'Spin coater, mask aligner, profilometer, etc.' },
]

export default function FacilitiesEN() {
  return (
    <Section
      title="Facilities"
      subtitle="Key instruments; booking policy and collaboration information."
      actions={
        <a
          href="/en/contact"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Collaboration inquiry
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {instruments.map((i) => (
          <Card key={i.name} title={i.name}>
            <p>{i.details}</p>
          </Card>
        ))}
      </div>
      <Card title="Booking Policy" eyebrow="Internal">
        <p>Describe how to request time, training requirements, and any costs.</p>
      </Card>
    </Section>
  )
}
