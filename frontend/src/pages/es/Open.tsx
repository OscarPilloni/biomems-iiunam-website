import { Card } from '@components/Card'
import Section from '@components/Section'

export default function DatosES() {
  return (
    <Section title="Datos y código abiertos" subtitle="Enlaces a GitHub, Zenodo y OSF.">
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="GitHub">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">
                Organización / repos
              </a>
            </li>
          </ul>
        </Card>
        <Card title="Zenodo">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <a className="underline" href="https://zenodo.org/" target="_blank" rel="noreferrer">
                Registros de datos
              </a>
            </li>
          </ul>
        </Card>
        <Card title="OSF">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <a className="underline" href="https://osf.io/" target="_blank" rel="noreferrer">
                Páginas de proyecto
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}
