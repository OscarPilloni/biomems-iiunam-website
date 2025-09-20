import { Card } from '@components/Card'
import Section from '@components/Section'

export default function OpenEN() {
  return (
    <Section title="Open data & code" subtitle="Links to GitHub, Zenodo, OSF.">
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="GitHub">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">
                Organization / repos
              </a>
            </li>
          </ul>
        </Card>
        <Card title="Zenodo">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <a className="underline" href="https://zenodo.org/" target="_blank" rel="noreferrer">
                Data records
              </a>
            </li>
          </ul>
        </Card>
        <Card title="OSF">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <a className="underline" href="https://osf.io/" target="_blank" rel="noreferrer">
                Project pages
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}
