import { Card } from '@components/Card'
import Section from '@components/Section'
import { Stat } from '@components/Stat'
import { getContactEmail, getFeatured, getRecentNews, getSocial, getTagline } from '@lib/site'

export default function HomeES() {
  const tagline = getTagline('es')
  const news = getRecentNews('es', 3)
  const featured = getFeatured('es')
  const social = getSocial()

  return (
    <Section
      title="BioMEMS @ IIUNAM"
      subtitle={tagline}
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
        <Stat label="Artículos" value="—" />
        <Stat label="Proyectos activos" value="—" />
        <Stat label="Estudiantes" value="—" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="Noticias recientes"
          eyebrow="Actualizaciones"
          footer={
            <a className="underline" href="/es/noticias">
              Ver todas
            </a>
          }
        >
          <ul className="list-disc space-y-2 pl-5">
            {news.map((n) => (
              <li key={n.id}>
                <a className="underline" href={n.href || '/es/noticias'}>
                  {n.title}
                </a>{' '}
                <span className="text-muted-foreground text-xs">({n.date})</span>
              </li>
            ))}
            {news.length === 0 && <li>No hay noticias aún.</li>}
          </ul>
        </Card>

        <Card
          title="Proyecto destacado"
          eyebrow={featured?.timeline || 'Destacado'}
          footer={
            <div className="flex gap-3 text-sm">
              {featured?.funder && <span>{featured.funder}</span>}
              {social.github && (
                <a className="underline" href={social.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          }
          href="/es/proyectos"
        >
          <p>{featured?.blurb || 'Próximamente…'}</p>
        </Card>
      </div>

      <div className="text-muted-foreground text-sm">
        Correo:{' '}
        <a className="underline" href={`mailto:${getContactEmail()}`}>
          {getContactEmail()}
        </a>
      </div>
    </Section>
  )
}
