import { Card } from '@components/Card'
import Section from '@components/Section'
import { distinctYears,getPublications } from '@lib/publications'
import { useMemo, useState } from 'react'

export default function PublicacionesES() {
  const all = getPublications('es')
  const years = distinctYears('es')
  const [q, setQ] = useState('')
  const [year, setYear] = useState<number | 'all'>('all')

  const items = useMemo(() => {
    const qn = q.trim().toLowerCase()
    return all.filter((p) => {
      const okYear = year === 'all' ? true : p.year === year
      const okQ =
        !qn ||
        p.title.toLowerCase().includes(qn) ||
        p.authors.some((a) => a.toLowerCase().includes(qn)) ||
        (p.venue || '').toLowerCase().includes(qn)
      return okYear && okQ
    })
  }, [all, q, year])

  return (
    <Section
      title="Publicaciones"
      subtitle="Generadas automáticamente desde BibTeX."
      actions={
        <a
          href="/es/datos"
          className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Datos/Código abierto
        </a>
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar título, autor, sede…"
          className="h-9 rounded-lg border px-3 text-sm"
        />
        <select
          className="h-9 rounded-lg border px-2 text-sm"
          value={year}
          onChange={(e) => setYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
        >
          <option value="all">Todos los años</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 grid gap-4">
        {items.map((p) => (
          <Card
            key={p.id}
            eyebrow={String(p.year ?? '')}
            title={p.title}
            footer={<span>{p.venue}</span>}
            href={p.url}
          >
            <p className="text-sm">{p.authors.join(', ')}</p>
          </Card>
        ))}
        {items.length === 0 && <p className="text-muted-foreground text-sm">Sin resultados.</p>}
      </div>
    </Section>
  )
}
