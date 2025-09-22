import { Card } from '@components/Card'
import Section from '@components/Section'
import { getNews } from '@lib/data'

export default function NoticiasES() {
  const items = getNews('es')
  return (
    <Section title="Noticias y Eventos" subtitle="Charlas, premios y convocatorias.">
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
