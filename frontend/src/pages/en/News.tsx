import { Card } from '@components/Card'
import Section from '@components/Section'
import { getNews } from '@lib/data'

export default function NewsEN() {
  const items = getNews('en')
  return (
    <Section title="News & Events" subtitle="Talks, awards, calls for students.">
      <div className="grid gap-4">
        {items.map((n) => (
          <Card key={n.id} eyebrow={n.date} title={n.title} href={n.href}>
            {n.summary && <p>{n.summary}</p>}
          </Card>
        ))}
      </div>
    </Section>
  )
}
