import { Card } from '@components/Card'
import Section from '@components/Section'
import { Stat } from '@components/Stat'
import { getContactEmail, getFeatured, getRecentNews, getSocial, getTagline } from '@lib/site'

export default function HomeEN() {
  const tagline = getTagline('en')
  const news = getRecentNews('en', 3)
  const featured = getFeatured('en')
  const social = getSocial()

  return (
    <Section
      title="BioMEMS @ IIUNAM"
      subtitle={tagline}
      actions={
        <a
          href="/en/contact"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Get in touch
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Papers" value="—" />
        <Stat label="Active projects" value="—" />
        <Stat label="Students" value="—" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="Recent News"
          eyebrow="Updates"
          footer={
            <a className="underline" href="/en/news">
              View all news
            </a>
          }
        >
          <ul className="list-disc space-y-2 pl-5">
            {news.map((n) => (
              <li key={n.id}>
                <a className="underline" href={n.href || '/en/news'}>
                  {n.title}
                </a>{' '}
                <span className="text-muted-foreground text-xs">({n.date})</span>
              </li>
            ))}
            {news.length === 0 && <li>No news yet.</li>}
          </ul>
        </Card>

        <Card
          title="Featured Project"
          eyebrow={featured?.timeline || 'Highlight'}
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
          href="/en/projects"
        >
          <p>{featured?.blurb || 'Coming soon…'}</p>
        </Card>
      </div>

      <div className="text-muted-foreground text-sm">
        Contact:{' '}
        <a className="underline" href={`mailto:${getContactEmail()}`}>
          {getContactEmail()}
        </a>
      </div>
    </Section>
  )
}
