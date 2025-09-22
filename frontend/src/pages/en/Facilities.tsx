import { Card } from '@components/Card'
import Section from '@components/Section'
import { getFacilityText,getInstruments } from '@lib/facilities'

export default function FacilitiesEN() {
  const items = getInstruments('en')
  const policy = getFacilityText('en')

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
        {items.map((i) => (
          <Card key={i.id} title={i.name}>
            {i.imageUrl ? (
              <img src={i.imageUrl} alt={i.name} className="mb-2 w-full rounded-xl border" />
            ) : null}
            {i.summary && <p className="mb-2">{i.summary}</p>}
            {i.specs?.length ? (
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {i.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ) : null}
            {i.booking && <p className="text-muted-foreground mt-2 text-sm">{i.booking}</p>}
          </Card>
        ))}
      </div>

      <Card title="Booking Policy" eyebrow="Internal">
        <p>{policy.bookingPolicy}</p>
      </Card>
      <Card title="Collaboration" eyebrow="External">
        <p>{policy.collaboration}</p>
      </Card>
    </Section>
  )
}
