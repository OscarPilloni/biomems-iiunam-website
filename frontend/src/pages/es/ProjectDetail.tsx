import { Badge } from '@components/Badge'
import Section from '@components/Section'
import { getProjectBySlug } from '@lib/data'
import { Link,useParams } from 'react-router-dom'

export default function ProjectDetailES() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectBySlug('es', id) : null

  if (!project) {
    return (
      <Section title="Proyecto no encontrado">
        <p className="text-sm">
          Ve la{' '}
          <Link className="underline" to="/es/proyectos">
            lista de proyectos
          </Link>
          .
        </p>
      </Section>
    )
  }

  return (
    <Section
      title={project.title}
      subtitle={project.blurb || ''}
      actions={
        <Link
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
          to="/es/proyectos"
        >
          Todos los proyectos
        </Link>
      }
    >
      {project.heroUrl ? (
        <img src={project.heroUrl} alt={project.title} className="w-full rounded-2xl border" />
      ) : null}

      <div className="mt-4 grid gap-3 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {project.status && <Badge>{project.status}</Badge>}
          {project.funder && <Badge>{project.funder}</Badge>}
          {(project.partners || []).map((p) => (
            <Badge key={p}>{p}</Badge>
          ))}
        </div>
        {project.timeline && (
          <div>
            <span className="font-medium">Cronograma:</span> {project.timeline}
          </div>
        )}
        {project.links?.length ? (
          <div className="flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a key={l.href} className="underline" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  )
}
